"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { useState } from "react"
import Image from "next/image"
import {
  LayoutDashboard,
  PawPrint,
  Trophy,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react"
import { BrandMark } from "@/components/site/brand-mark"
import { cn } from "@/lib/utils"
import type { Session } from "next-auth"

const NAV_ITEMS = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/dogs", label: "My Dogs", icon: PawPrint, exact: false },
  { href: "/dashboard/leaderboard", label: "Leaderboard", icon: Trophy, exact: true },
]

function NavLink({
  href,
  label,
  icon: Icon,
  exact,
  onClick,
}: {
  href: string
  label: string
  icon: React.ElementType
  exact: boolean
  onClick?: () => void
}) {
  const pathname = usePathname()
  const active = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "text-foreground/70 hover:bg-muted hover:text-foreground",
      )}
      aria-current={active ? "page" : undefined}
    >
      <Icon size={18} aria-hidden="true" />
      {label}
      {active && <ChevronRight size={14} className="ml-auto opacity-60" aria-hidden="true" />}
    </Link>
  )
}

export function DashboardNav({ session }: { session: Session | null }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const userImage = session?.user?.image ?? "/images/user-avatar.png"
  const userName = session?.user?.name ?? "TrackFellow Member"
  const userEmail = session?.user?.email ?? ""

  const navContent = (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="border-b border-border px-4 py-4">
        <Link href="/" aria-label="Back to TrackFellow home">
          <BrandMark />
        </Link>
      </div>

      {/* Nav links */}
      <nav aria-label="Dashboard" className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} {...item} onClick={() => setMobileOpen(false)} />
        ))}
      </nav>

      {/* User profile + sign out */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-accent">
            <Image
              src={userImage}
              alt={userName}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">{userName}</p>
            <p className="truncate text-xs text-foreground/50">{userEmail}</p>
          </div>
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/" })}
            aria-label="Sign out"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-foreground/60 transition-colors hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden h-full w-64 shrink-0 flex-col border-r border-border bg-card lg:flex">
        {navContent}
      </aside>

      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-border bg-card px-4 py-3 lg:hidden">
        <Link href="/" aria-label="Back to TrackFellow home">
          <BrandMark />
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open dashboard menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground"
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-card shadow-xl transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
        aria-label="Dashboard mobile menu"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <BrandMark />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <div className="flex h-[calc(100%-61px)] flex-col">
          <nav aria-label="Dashboard" className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} {...item} onClick={() => setMobileOpen(false)} />
            ))}
          </nav>
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-accent">
                <Image src={userImage} alt={userName} fill className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">{userName}</p>
                <p className="truncate text-xs text-foreground/50">{userEmail}</p>
              </div>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                aria-label="Sign out"
                className="grid h-8 w-8 place-items-center rounded-lg text-foreground/60 hover:bg-destructive/10 hover:text-destructive"
              >
                <LogOut size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
