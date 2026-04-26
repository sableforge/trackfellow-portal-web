"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type ParallaxProps = {
  speed?: number
  className?: string
  children: ReactNode
  axis?: "y" | "x"
}

/**
 * Lightweight scroll parallax. Translates the element on scroll based on its
 * distance from the viewport center. Honors prefers-reduced-motion.
 */
export function Parallax({
  speed = 0.15,
  axis = "y",
  className,
  children,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    let raf = 0
    const update = () => {
      const rect = el.getBoundingClientRect()
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2
      const amount = -offset * speed
      el.style.transform =
        axis === "y"
          ? `translate3d(0, ${amount.toFixed(2)}px, 0)`
          : `translate3d(${amount.toFixed(2)}px, 0, 0)`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [speed, axis])

  return (
    <div
      ref={ref}
      data-parallax=""
      className={cn("will-change-transform", className)}
    >
      {children}
    </div>
  )
}
