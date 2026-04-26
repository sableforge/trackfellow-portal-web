import { Footprints, PawPrint, BarChart3 } from "lucide-react"
import { Parallax } from "./parallax"

const STEPS = [
  {
    n: "01",
    icon: Footprints,
    title: "Lay the track",
    body: "Walk the path yourself, drop articles on the map and TrackFellow records every meter — even when you lose signal.",
    accent: "bg-primary text-primary-foreground",
  },
  {
    n: "02",
    icon: PawPrint,
    title: "Run the trail",
    body: "Bring out your dog, hit start and watch the live map. Your phone stays in your pocket while you focus on your team.",
    accent: "bg-accent text-accent-foreground",
  },
  {
    n: "03",
    icon: BarChart3,
    title: "Log & learn",
    body: "Score the run, add notes and weather. Each session feeds clear analytics so the next track is a smarter one.",
    accent: "bg-secondary text-secondary-foreground",
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="relative scroll-mt-24 overflow-hidden bg-card py-20 sm:py-28"
    >
      {/* parallax decorations */}
      <Parallax
        speed={0.18}
        className="pointer-events-none absolute -left-10 top-10 hidden lg:block"
      >
        <Pawprints className="h-40 w-40 text-primary/15" />
      </Parallax>
      <Parallax
        speed={-0.12}
        className="pointer-events-none absolute right-0 top-1/3 hidden lg:block"
      >
        <Pawprints className="h-56 w-56 -rotate-12 text-accent/30" />
      </Parallax>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="grid items-end gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              How it works
            </p>
            <h2
              id="how-title"
              className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            >
              Three steps from{" "}
              <span className="text-primary">walk to wow.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-foreground/70 text-pretty sm:justify-self-end">
            TrackFellow guides each session in the order trainers actually
            think: lay the track, run the trail, review the run.
          </p>
        </header>

        <ol className="mt-14 grid gap-5 lg:grid-cols-3">
          {STEPS.map(({ n, title, body, icon: Icon, accent }, i) => (
            <li
              key={n}
              className="group relative flex flex-col rounded-3xl bg-background p-6 ring-1 ring-border ring-soft sm:p-8"
            >
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}
                aria-hidden="true"
              >
                <Icon size={22} />
              </span>
              <p className="mt-6 font-mono text-xs tracking-wider text-foreground/50">
                STEP {n}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-3 text-foreground/70 text-pretty">{body}</p>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-border lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Pawprints({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <g>
        <ellipse cx="40" cy="50" rx="6" ry="8" />
        <ellipse cx="60" cy="40" rx="6" ry="8" />
        <ellipse cx="80" cy="50" rx="6" ry="8" />
        <ellipse cx="50" cy="65" rx="5" ry="6" />
        <path d="M60 70 c 12 0 20 8 20 18 c 0 6 -5 10 -11 10 c -4 0 -7 -2 -10 -2 c -3 0 -6 2 -10 2 c -6 0 -11 -4 -11 -10 c 0 -10 8 -18 22 -18 z" />
      </g>
      <g transform="translate(80 90)">
        <ellipse cx="40" cy="50" rx="6" ry="8" />
        <ellipse cx="60" cy="40" rx="6" ry="8" />
        <ellipse cx="80" cy="50" rx="6" ry="8" />
        <ellipse cx="50" cy="65" rx="5" ry="6" />
        <path d="M60 70 c 12 0 20 8 20 18 c 0 6 -5 10 -11 10 c -4 0 -7 -2 -10 -2 c -3 0 -6 2 -10 2 c -6 0 -11 -4 -11 -10 c 0 -10 8 -18 22 -18 z" />
      </g>
    </svg>
  )
}
