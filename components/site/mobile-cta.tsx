"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"

/**
 * Sticky bottom CTA on mobile — only appears after user scrolls past hero.
 */
export function MobileCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 transform transition-transform md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-3 mb-3 rounded-2xl border border-border/80 bg-background/95 p-3 backdrop-blur-md shadow-[0_-4px_24px_-4px_rgba(56,68,32,0.15)]">
        <a
          href="#download"
          className="flex items-center justify-center gap-2 rounded-xl bg-forest px-4 py-3 text-sm font-semibold text-forest-foreground transition-transform active:scale-95"
          aria-label="Get the TrackFellow app"
        >
          <Download size={18} aria-hidden="true" />
          Get the app
        </a>
      </div>
    </div>
  )
}
