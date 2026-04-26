import { cn } from "@/lib/utils"

type Variant = "dark" | "light"

export function StoreButtons({
  className,
  variant = "dark",
}: {
  className?: string
  variant?: Variant
}) {
  const base =
    variant === "dark"
      ? "bg-forest text-forest-foreground hover:bg-forest/90"
      : "bg-background text-foreground hover:bg-muted border border-border"
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href="#download"
        aria-label="Download TrackFellow on the App Store"
        className={cn(
          "group inline-flex min-w-[170px] items-center gap-3 rounded-2xl px-4 py-3 transition-transform hover:-translate-y-0.5 active:translate-y-0",
          base,
        )}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 shrink-0"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.36 12.86c0-2.4 1.96-3.55 2.05-3.61-1.12-1.63-2.86-1.86-3.48-1.88-1.48-.15-2.89.87-3.64.87-.76 0-1.92-.85-3.16-.83-1.62.02-3.12.95-3.95 2.4-1.69 2.93-.43 7.26 1.21 9.64.81 1.16 1.78 2.46 3.04 2.41 1.22-.05 1.69-.79 3.16-.79 1.48 0 1.9.79 3.18.77 1.31-.02 2.14-1.18 2.94-2.34.93-1.34 1.31-2.65 1.33-2.72-.03-.02-2.55-.98-2.58-3.92zM14.18 5.65c.66-.81 1.11-1.92 1-3.05-.95.04-2.13.65-2.81 1.45-.61.71-1.15 1.86-1 2.95 1.07.08 2.15-.55 2.81-1.35z" />
        </svg>
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wide opacity-80">
            Download on the
          </span>
          <span className="font-display text-lg font-semibold">App Store</span>
        </span>
      </a>
      <a
        href="#download"
        aria-label="Get TrackFellow on Google Play"
        className={cn(
          "group inline-flex min-w-[170px] items-center gap-3 rounded-2xl px-4 py-3 transition-transform hover:-translate-y-0.5 active:translate-y-0",
          base,
        )}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 shrink-0"
          aria-hidden="true"
        >
          <path
            d="M3.6 1.8c-.36.4-.6.97-.6 1.71v17c0 .74.24 1.31.6 1.71L13 12l-9.4-10.2z"
            fill="#6D7935"
          />
          <path d="M16.4 8.6L13 12l3.4 3.4 4.05-2.32c1.13-.65 1.13-2.16 0-2.81L16.4 8.6z" fill="#E0B841" />
          <path d="M3.6 22.2c.55.6 1.43.7 2.06.34l11.74-6.74L13 12 3.6 22.2z" fill="#745947" />
          <path d="M5.66 1.46C5.03 1.1 4.15 1.2 3.6 1.8L13 12l3.4-3.4L5.66 1.46z" fill="#384420" />
        </svg>
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wide opacity-80">
            Get it on
          </span>
          <span className="font-display text-lg font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  )
}
