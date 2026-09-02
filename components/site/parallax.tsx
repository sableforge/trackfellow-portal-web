"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Subscriber = () => void

const subscribers = new Set<Subscriber>()
let frame = 0

function flush() {
  frame = 0
  subscribers.forEach((subscriber) => subscriber())
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(flush)
}

function subscribe(subscriber: Subscriber) {
  subscribers.add(subscriber)
  if (subscribers.size === 1) {
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
  }
  return () => {
    subscribers.delete(subscriber)
    if (subscribers.size === 0) {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      cancelAnimationFrame(frame)
      frame = 0
    }
  }
}

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

    let visible = false
    const update = () => {
      if (!visible) return
      const rect = el.getBoundingClientRect()
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2
      const amount = -offset * speed
      el.style.transform =
        axis === "y"
          ? `translate3d(0, ${amount.toFixed(2)}px, 0)`
          : `translate3d(${amount.toFixed(2)}px, 0, 0)`
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) update()
      },
      { rootMargin: "25% 0px" },
    )
    observer.observe(el)
    const unsubscribe = subscribe(update)
    return () => {
      observer.disconnect()
      unsubscribe()
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
