import Image from "next/image"
import { Quote } from "lucide-react"
import { Parallax } from "./parallax"

export function Founder() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* image collage */}
          <div className="relative lg:col-span-6">
            <Parallax speed={0.06}>
              <figure className="relative overflow-hidden rounded-[2rem] ring-1 ring-border ring-soft">
                <Image
                  src="/images/founder-jenna.jpg"
                  alt="Jenna, founder of TrackFellow, crouched next to her working dog in a forest clearing."
                  width={900}
                  height={1100}
                  className="h-[480px] w-full object-cover sm:h-[560px]"
                />
                <figcaption className="sr-only">
                  Jenna, founder of TrackFellow, with her tracking dog.
                </figcaption>
              </figure>
            </Parallax>

            <Parallax
              speed={-0.18}
              className="absolute -right-4 -bottom-6 hidden w-56 rotate-3 sm:block"
            >
              <div className="rounded-3xl bg-accent p-5 text-accent-foreground ring-soft">
                <Quote size={20} aria-hidden="true" />
                <p className="mt-3 font-display text-lg font-semibold leading-snug text-balance">
                  &ldquo;I built TrackFellow because notebooks always lied about
                  the weather.&rdquo;
                </p>
                <p className="mt-2 text-xs">— Jenna, Founder</p>
              </div>
            </Parallax>

            <Parallax
              speed={0.16}
              className="absolute -left-4 top-6 hidden w-40 -rotate-3 lg:block"
            >
              <div className="rounded-2xl bg-card p-4 ring-1 ring-border ring-soft">
                <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/60">
                  Est.
                </p>
                <p className="font-display text-2xl font-semibold">2023</p>
                <p className="text-xs text-foreground/60">
                  Started in Helsinki
                </p>
              </div>
            </Parallax>
          </div>

          {/* copy */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our story
            </p>
            <h2
              id="story-title"
              className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            >
              Meet Jenna — the trainer behind{" "}
              <span className="text-primary">TrackFellow.</span>
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80 text-pretty">
              <p>
                Jenna spent a decade running mantrailing clinics across
                Scandinavia and watching trainers wrestle with paper logs,
                phone notes and three different stopwatches per session.
              </p>
              <p>
                TrackFellow is the tool she always wanted: one app, one screen,
                quietly recording every detail so trainers can keep their
                hands on the leash and their eyes on the dog.
              </p>
            </div>

            <a
              href="#articles"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              Read the full story
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
