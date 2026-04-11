"use client"

import { AuthProvider, useAuth } from "@/contexts/auth-context"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { Button } from "@/components/ui/button"
import { MapPin, LogOut } from "lucide-react"
import Link from "next/link"

function UserLayoutInner({ children }: { children: React.ReactNode }) {
  const { appUser, signOut } = useAuth()

  return (
    <ProtectedRoute allowedRoles={["user"]}>
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
            <Link href="/user/dashboard" className="flex items-center gap-2 font-outfit font-bold">
              <MapPin className="h-5 w-5 text-primary" />
              Trackfellow
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{appUser?.displayName}</span>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  )
}

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <UserLayoutInner>{children}</UserLayoutInner>
    </AuthProvider>
  )
}
