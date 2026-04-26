const ITEMS = [
  "120k+ tracks logged",
  "14 countries",
  "4.9 ★ on the App Store",
  "Trusted by SAR teams",
  "9k+ articles marked weekly",
  "Built with trainers, for trainers",
]

export function StatsMarquee() {
  // Duplicate the list so the marquee loops seamlessly.
  const sequence = [...ITEMS, ...ITEMS]

  return (
    <section
      aria-label="TrackFellow at a glance"
      className="relative isolate overflow-hidden bg-forest text-forest-foreground"
    >
      <div className="mask-fade-x py-5 sm:py-6">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10 will-change-transform">
          {sequence.map((label, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-4 text-sm font-medium tracking-wide sm:text-base"
            >
              <span className="font-display text-base sm:text-lg">{label}</span>
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
