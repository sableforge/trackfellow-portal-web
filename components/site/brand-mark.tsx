import { cn } from "@/lib/utils"

export function BrandMark({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-2", className)}
      aria-label="TrackFellow"
    >
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 place-items-center rounded-xl bg-forest text-forest-foreground"
      >
        {/* Pawprint glyph */}
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
          role="img"
          aria-hidden="true"
        >
          <ellipse cx="6" cy="9" rx="2" ry="2.6" />
          <ellipse cx="12" cy="6.5" rx="2" ry="2.6" />
          <ellipse cx="18" cy="9" rx="2" ry="2.6" />
          <ellipse cx="9" cy="13.5" rx="1.6" ry="2" />
          <path d="M12 13c3.3 0 6 2.4 6 5.2 0 1.7-1.4 2.8-3.2 2.8-1.1 0-1.9-.4-2.8-.4s-1.7.4-2.8.4C7.4 21 6 19.9 6 18.2 6 15.4 8.7 13 12 13z" />
        </svg>
        <span
          aria-hidden="true"
          className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background"
        />
      </span>
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">
          Track<span className="text-primary">Fellow</span>
        </span>
      )}
    </span>
  )
}
