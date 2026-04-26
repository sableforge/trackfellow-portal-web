import Image from "next/image"
import { Star, MapPin, Compass } from "lucide-react"
import { Parallax } from "./parallax"
import { PhoneFrame } from "./phone-frame"
import { TrackMapScreen } from "./track-map-screen"
import { StoreButtons } from "./store-buttons"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32"
    >
      {/* parallax background art */}
      <Parallax
        speed={0.18}
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[120%]"
      >
        <div className="absolute -left-24 top-32 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[-120px] top-10 h-[520px] w-[520px] rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-[280px] w-[280px] rounded-full bg-secondary/20 blur-3xl" />
      </Parallax>

      {/* subtle grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-40 grain"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-70 animate-scent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              New · Mantrailing 2.0 update is live
            </div>

            <h1
              id="hero-title"
              className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              Train like a pro.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Track</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-md bg-accent"
                />
              </span>{" "}
              like a <span className="text-primary">fellow.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 text-pretty">
              TrackFellow is the pocket field-book for mantrailing and tracking
              dog teams. Lay tracks with GPS, mark articles in a tap, score
              every session, and watch your dog&apos;s nose-work get sharper
              week after week.
            </p>

            <div className="mt-8">
              <StoreButtons />
            </div>

            <dl className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <div className="flex" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <dt className="sr-only">App rating</dt>
                <dd className="text-sm font-medium text-foreground">
                  <span className="font-semibold">4.9</span>
                  <span className="text-foreground/60"> · 1,200+ trainers</span>
                </dd>
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div>
                <dt className="sr-only">Stat</dt>
                <dd className="text-sm font-medium text-foreground">
                  <span className="font-semibold">120k+</span>
                  <span className="text-foreground/60"> tracks logged</span>
                </dd>
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div>
                <dt className="sr-only">Stat</dt>
                <dd className="text-sm font-medium text-foreground">
                  <span className="font-semibold">14</span>
                  <span className="text-foreground/60"> countries</span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Visual */}
          <div className="relative lg:col-span-5">
            {/* photo card with parallax */}
            <Parallax
              speed={-0.08}
              className="absolute -left-4 -top-6 hidden w-44 sm:block lg:-left-6 lg:w-56"
            >
              <figure className="overflow-hidden rounded-3xl ring-1 ring-border ring-soft rotate-[-6deg]">
                <Image
                  src="/images/hero-dog-tracking.jpg"
                  alt="A focused tracking dog following a scent trail through tall grass."
                  width={400}
                  height={500}
                  className="h-56 w-full object-cover lg:h-64"
                  priority
                />
              </figure>
            </Parallax>

            <Parallax
              speed={-0.16}
              className="absolute -right-2 bottom-2 hidden w-40 sm:block lg:-right-6 lg:w-52"
            >
              <figure className="overflow-hidden rounded-3xl ring-1 ring-border ring-soft rotate-[5deg]">
                <Image
                  src="/images/training-action.jpg"
                  alt="Aerial view of a winding scent trail through a meadow with markers."
                  width={400}
                  height={500}
                  className="h-48 w-full object-cover lg:h-56"
                />
              </figure>
            </Parallax>

            {/* phone */}
            <Parallax speed={0.06} className="relative">
              <PhoneFrame label="TrackFellow live track screen showing the route, articles and score.">
                <TrackMapScreen />
              </PhoneFrame>
            </Parallax>

            {/* floating chips */}
            <Parallax
              speed={-0.22}
              className="absolute -left-2 top-32 hidden md:block"
            >
              <div className="flex items-center gap-2 rounded-2xl bg-card px-3 py-2 text-xs font-medium ring-1 ring-border ring-soft animate-float">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Compass size={14} />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold leading-none">
                    1.42 km
                  </p>
                  <p className="text-[10px] text-foreground/60">Track length</p>
                </div>
              </div>
            </Parallax>

            <Parallax
              speed={-0.28}
              className="absolute -right-3 top-10 hidden md:block"
            >
              <div className="flex items-center gap-2 rounded-2xl bg-accent px-3 py-2 text-xs font-medium text-accent-foreground ring-soft animate-float">
                <MapPin size={14} aria-hidden="true" />
                <span>3 / 3 articles</span>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}
