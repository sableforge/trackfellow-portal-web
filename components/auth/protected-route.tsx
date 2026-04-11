"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import type { UserRole } from "@/lib/auth-service"
import { Spinner } from "@/components/ui/spinner"

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles: UserRole[]
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, role, loading } = useAuth()
  const router = useRouter()

  const requiresAdmin = allowedRoles.includes("admin") && !allowedRoles.includes("user")

  useEffect(() => {
    if (loading) return

    if (!user) {
      router.replace(requiresAdmin ? "/admin/login" : "/login")
      return
    }

    if (role && !allowedRoles.includes(role)) {
      if (role === "admin") {
        router.replace("/admin/dashboard")
      } else {
        router.replace("/user/dashboard")
      }
    }
  }, [user, role, loading, allowedRoles, requiresAdmin, router])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner className="h-8 w-8" />
      </div>
    )
  }

  if (!user || !role || !allowedRoles.includes(role)) {
    return null
  }

  return <>{children}</>
}
