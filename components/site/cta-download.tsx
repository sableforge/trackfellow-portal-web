import { QrCode, Sparkles } from "lucide-react"
import { StoreButtons } from "./store-buttons"

export function CtaDownload() {
  return (
    <section
      id="download"
      aria-labelledby="cta-title"
      className="relative scroll-mt-24 overflow-hidden bg-forest py-24 text-forest-foreground sm:py-32"
    >
      {/* subtle patterns */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5 grain"
      />
      <svg
        viewBox="0 0 400 400"
        className="absolute -left-20 -top-20 h-80 w-80 opacity-10"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg
        viewBox="0 0 400 400"
        className="absolute -bottom-20 -right-20 h-96 w-96 opacity-10"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
          <Sparkles size={14} aria-hidden="true" />
          Free to download
        </div>

        <h2
          id="cta-title"
          className="mt-6 font-display text-5xl font-semibold leading-[1.04] tracking-tight text-balance sm:text-6xl"
        >
          Ready to track smarter?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-forest-foreground/85 text-pretty">
          Join thousands of trainers who have traded their field notebooks for
          the single app that does it all.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <StoreButtons variant="light" />
          <div className="hidden flex-col items-center gap-2 rounded-2xl bg-background/10 p-4 backdrop-blur-sm ring-1 ring-white/10 lg:flex">
            <span className="grid h-20 w-20 place-items-center rounded-xl bg-background text-foreground ring-1 ring-border">
              <QrCode size={44} />
            </span>
            <p className="text-[10px] uppercase tracking-wider opacity-80">
              Scan to download
            </p>
          </div>
        </div>

        <ul className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          {["No credit card needed", "iOS & Android", "14k+ users"].map((t) => (
            <li key={t} className="flex items-center gap-2 text-forest-foreground/80">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
              />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
