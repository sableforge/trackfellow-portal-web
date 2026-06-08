import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Award, Users, Handshake } from "lucide-react"
import { TopNav } from "@/components/site/top-nav"
import { SiteFooter } from "@/components/site/site-footer"
import { MobileCta } from "@/components/site/mobile-cta"
import { SponsorshipForm } from "@/components/site/sponsorship-form"

export const metadata: Metadata = {
  title: "Sponsorship & Brand Ambassador",
  description:
    "Become a TrackFellow brand ambassador or apply for a sponsorship. Partner with us to grow the mantrailing and dog-tracking community.",
  alternates: { canonical: "/sponsorship" },
  openGraph: {
    type: "website",
    title: "Sponsorship & Brand Ambassador · TrackFellow",
    description:
      "Apply to become a TrackFellow brand ambassador or request a sponsorship for your club, event, or competition.",
    url: "/sponsorship",
  },
}

const BENEFITS = [
  {
    icon: Award,
    title: "Brand ambassador",
    body: "Represent TrackFellow in your training community and on social media. Receive early access to new features, exclusive merchandise, and a dedicated support line.",
  },
  {
    icon: Users,
    title: "Club & event sponsorship",
    body: "Bring TrackFellow to your club, seminar, or competition. We provide in-app shoutouts, promotional materials, and can contribute to event prizes.",
  },
  {
    icon: Handshake,
    title: "Strategic partnership",
    body: "Looking for a deeper collaboration — co-branded content, joint training programs, or integration partnerships? Tell us your vision.",
  },
]

export default function SponsorshipPage() {
  return (
    <>
      <TopNav />

      <main id="main" className="relative pt-24 pb-16 sm:pt-28 sm:pb-24">
        {/* Hero banner */}
        <section
          aria-labelledby="sponsorship-title"
          className="relative overflow-hidden bg-forest py-20 sm:py-28"
        >
          {/* Subtle grain overlay */}
          <div className="grain pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-forest-foreground/70 transition-colors hover:text-forest-foreground"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to home
            </Link>

            <div className="mt-8 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Work with us
              </p>
              <h1
                id="sponsorship-title"
                className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-forest-foreground text-balance sm:text-5xl lg:text-6xl"
              >
                Become a TrackFellow
                <span className="text-accent"> ambassador</span> or sponsor.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-forest-foreground/75 text-pretty">
                We&apos;re passionate about growing the global mantrailing and
                dog-tracking community. If you share that passion, we&apos;d
                love to hear from you — whether you&apos;re an individual
                trainer, a club, or an event organiser.
              </p>
            </div>
          </div>
        </section>

        {/* What we offer */}
        <section
          aria-labelledby="benefits-title"
          className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <h2
            id="benefits-title"
            className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            What we offer
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/70 text-pretty">
            Every partnership is tailored to fit your goals. Here are three ways
            we collaborate with the community.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => {
              const Icon = b.icon
              return (
                <li
                  key={b.title}
                  className="flex flex-col gap-4 rounded-3xl bg-card p-7 ring-1 ring-border ring-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {b.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-foreground/70 text-pretty">
                    {b.body}
                  </p>
                </li>
              )
            })}
          </ul>
        </section>

        {/* Form */}
        <section
          aria-labelledby="form-title"
          className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 lg:px-8"
        >
          <header className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Apply now
            </p>
            <h2
              id="form-title"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              Send us your request
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/70 text-pretty">
              Fill in the form below and the TrackFellow team will get back to
              you within a few business days.
            </p>
          </header>

          <SponsorshipForm />
        </section>
      </main>

      <SiteFooter />
      <MobileCta />
    </>
  )
}
