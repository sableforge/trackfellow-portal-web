import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Parallax } from "./parallax"
import { PhoneFrame } from "./phone-frame"
import { TrackMapScreen } from "./track-map-screen"

const POINTS = [
  "Real-time GPS map, even offline",
  "Article markers with photos & notes",
  "One-tap session scoring",
  "Wind, weather and surface tags",
  "Exportable history per dog",
]

export function AppShowcase() {
  return (
    <section
      aria-labelledby="showcase-title"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* parallax photo backdrop */}
      <Parallax
        speed={0.22}
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[140%]"
      >
        <Image
          src="/images/forest-floor.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </Parallax>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              The app
            </p>
            <h2
              id="showcase-title"
              className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            >
              The pocket field-book{" "}
              <span className="text-primary">your dog deserves.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/75 text-pretty">
              Designed by working trainers, TrackFellow strips away the busywork
              so you can stay present with your dog. Big touch targets, calm
              colors, and a layout that works in gloves.
            </p>

            <ul className="mt-8 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary"
                    aria-hidden="true"
                  >
                    <CheckCircle2 size={16} />
                  </span>
                  <span className="text-base text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              <Stat k="120k+" v="Tracks" />
              <Stat k="9k" v="Articles / wk" />
              <Stat k="4.9★" v="App rating" />
            </div>
          </div>

          {/* phone with parallax */}
          <div className="relative order-1 mx-auto lg:order-2">
            <Parallax
              speed={-0.08}
              className="absolute -left-8 -top-10 hidden w-48 rotate-[-7deg] sm:block"
            >
              <figure className="overflow-hidden rounded-3xl ring-1 ring-border ring-soft">
                <Image
                  src="/images/community-dog.jpg"
                  alt="A happy working dog with bright eyes resting in a forest setting."
                  width={400}
                  height={500}
                  className="h-56 w-full object-cover"
                />
              </figure>
            </Parallax>

            <Parallax speed={0.08}>
              <PhoneFrame label="TrackFellow live track screen with route, articles and metrics.">
                <TrackMapScreen />
              </PhoneFrame>
            </Parallax>

            <Parallax
              speed={-0.18}
              className="absolute -right-2 bottom-6 hidden md:block"
            >
              <div className="rounded-2xl bg-card px-4 py-3 ring-1 ring-border ring-soft">
                <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/60">
                  Last session
                </p>
                <p className="font-display text-lg font-semibold">96% score</p>
                <p className="text-xs text-foreground/60">3 of 3 articles</p>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl bg-card p-4 ring-1 ring-border">
      <p className="font-display text-2xl font-semibold tracking-tight">{k}</p>
      <p className="text-xs text-foreground/60">{v}</p>
    </div>
  )
}
