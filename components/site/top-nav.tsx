"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { BrandMark } from "./brand-mark"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { hash: "features", label: "Features" },
  { hash: "how-it-works", label: "How it works" },
  { hash: "story", label: "Our story" },
  { hash: "articles", label: "Articles" },
]

export function TopNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const hrefFor = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`)
  const downloadHref = isHome ? "#download" : "/#download"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8"
      >
        {/* Left slot — desktop: logo | mobile: invisible spacer (same width as hamburger) */}
        <div className="flex flex-1 items-center">
          <Link
            href="/"
            className="hidden rounded-md py-1 md:flex"
            aria-label="TrackFellow home"
          >
            <BrandMark />
          </Link>
          {/* Mobile spacer matching hamburger size */}
          <div className="h-11 w-11 md:hidden" aria-hidden="true" />
        </div>

        {/* Center slot — desktop: nav links | mobile: logo */}
        <div className="flex flex-2 items-center justify-center">
          {/* Desktop nav links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.hash}>
                <Link
                  href={hrefFor(l.hash)}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile centered logo */}
          <Link
            href="/"
            className="flex items-center rounded-md py-1 md:hidden"
            aria-label="TrackFellow home"
          >
            <BrandMark />
          </Link>
        </div>

        {/* Right slot — desktop: CTA | mobile: hamburger */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <Link
            href={downloadHref}
            className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-forest-foreground shadow-sm transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Get the app
            <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background/80 text-foreground md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-4 mb-4 rounded-3xl border border-border bg-card p-4 shadow-lg md:hidden"
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((l) => (
            <li key={l.hash}>
              <Link
                href={hrefFor(l.hash)}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              href={downloadHref}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-forest px-4 py-3 text-base font-semibold text-forest-foreground"
            >
              Get the app
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
