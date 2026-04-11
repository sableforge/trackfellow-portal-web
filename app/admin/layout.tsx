"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AuthProvider, useAuth } from "@/contexts/auth-context"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  MapPin,
  LayoutDashboard,
  FileText,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

const sidebarItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Blogs", href: "/admin/blogs", icon: FileText },
  { label: "FAQs", href: "/admin/faqs", icon: HelpCircle },
]

function AdminSidebar() {
  const pathname = usePathname()
  const { appUser, signOut } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navContent = (
    <>
      <div className="flex items-center gap-2 px-4 py-5 border-b border-border">
        <MapPin className="h-6 w-6 text-primary" />
        <span className="font-outfit font-bold text-lg">Trackfellow</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              pathname.startsWith(item.href)
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="border-t border-border px-3 py-4">
        <div className="flex items-center gap-3 px-3 mb-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
            {appUser?.displayName?.charAt(0) ?? "A"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{appUser?.displayName}</p>
            <p className="text-xs text-muted-foreground truncate">{appUser?.email}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start text-muted-foreground"
          onClick={signOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center gap-3 border-b border-border bg-background px-4 py-3">
        <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <span className="font-outfit font-bold">Trackfellow Admin</span>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-30 h-screen w-64 bg-card border-r border-border flex flex-col transition-transform lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {navContent}
      </aside>
    </>
  )
}

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Admin login page handles its own auth — skip protection
  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="min-h-screen bg-background">
        <AdminSidebar />
        <main className="lg:ml-64 pt-14 lg:pt-0">
          <div className="p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AuthProvider>
  )
}
