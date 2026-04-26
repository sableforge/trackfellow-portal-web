import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function PhoneFrame({
  children,
  className,
  label = "TrackFellow app preview",
}: {
  children: ReactNode
  className?: string
  label?: string
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative mx-auto aspect-[9/19] w-[280px] sm:w-[320px] md:w-[340px]",
        className,
      )}
    >
      {/* outer frame */}
      <div className="absolute inset-0 rounded-[44px] bg-forest p-[6px] shadow-[0_30px_60px_-20px_rgba(56,68,32,0.5)] ring-1 ring-black/10">
        {/* inner bezel */}
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-background">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 -translate-x-1/2">
            <div className="flex h-6 w-28 items-center justify-center gap-1.5 rounded-full bg-forest/95">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
              <span className="h-2 w-2 rounded-full bg-foreground/30" />
            </div>
          </div>
          {/* screen */}
          <div className="absolute inset-0">{children}</div>
        </div>
      </div>
      {/* side buttons */}
      <span
        aria-hidden="true"
        className="absolute -left-[3px] top-24 h-12 w-1 rounded-r bg-forest/80"
      />
      <span
        aria-hidden="true"
        className="absolute -left-[3px] top-40 h-16 w-1 rounded-r bg-forest/80"
      />
      <span
        aria-hidden="true"
        className="absolute -right-[3px] top-32 h-20 w-1 rounded-l bg-forest/80"
      />
    </div>
  )
}
