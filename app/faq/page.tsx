import type { Metadata } from "next"
import { TopNav } from "@/components/site/top-nav"
import { SiteFooter } from "@/components/site/site-footer"
import { MobileCta } from "@/components/site/mobile-cta"
import { SITE, absoluteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Dog Tracking & Mantrailing App FAQ",
  description:
    "Answers about TrackFellow for mantrailing, dog tracking, GPS tracks, article markers, training feedback, sharing, pricing, iOS, and Android.",
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    title: "TrackFellow FAQ",
    description: "Answers for mantrailing and dog-tracking teams considering TrackFellow.",
    url: "/faq",
  },
}

const FAQS = [
  {
    question: "What is TrackFellow?",
    answer:
      "TrackFellow is a mobile field book for mantrailing and dog-tracking teams. It combines GPS track recording, article markers, session feedback, notes, statistics, reports, and track sharing in one app.",
  },
  {
    question: "Can I use TrackFellow for mantrailing?",
    answer:
      "Yes. TrackFellow supports mantrailing as well as competitive, recreational, and other dog-tracking training. Handlers can record routes, mark points, add feedback, and review each dog's history.",
  },
  {
    question: "How does a TrackFellow session work?",
    answer:
      "Lay a track by walking the route and marking articles or other points on the map. Then follow the track with your dog, record feedback and notes, and use the saved session data to review progress and plan future training.",
  },
  {
    question: "Is TrackFellow suitable for beginners?",
    answer:
      "Yes. TrackFellow is designed for new handlers as well as experienced trackers, instructors, competitive teams, and recreational dog owners.",
  },
  {
    question: "Can I share tracks with other handlers?",
    answer:
      "Yes. TrackFellow lets users send and receive tracks, helping training partners and clubs share routes and learn together.",
  },
  {
    question: "Where can I download TrackFellow?",
    answer:
      "TrackFellow is available for iOS from Apple's App Store and for Android from Google Play. It is free to download and offers optional in-app subscriptions.",
  },
] as const

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${absoluteUrl("/faq")}#faq`,
  mainEntity: FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
}

export default function FaqPage() {
  return (
    <>
      <TopNav />
      <main id="main" className="relative pt-24 pb-16 sm:pt-28 sm:pb-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section aria-labelledby="faq-title" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Questions, answered</p>
            <h1 id="faq-title" className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-6xl">
              TrackFellow FAQ
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75 text-pretty">
              Straightforward answers for dog-tracking and mantrailing teams.
            </p>
          </header>

          <div className="mt-12 space-y-4">
            {FAQS.map(({ question, answer }) => (
              <article key={question} className="rounded-3xl bg-card p-6 ring-1 ring-border ring-soft sm:p-8">
                <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{question}</h2>
                <p className="mt-3 leading-relaxed text-foreground/75 text-pretty">{answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-forest p-8 text-forest-foreground sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h2 className="font-display text-2xl font-semibold">Still have a question?</h2>
              <p className="mt-2 text-forest-foreground/75">The TrackFellow team is happy to help.</p>
            </div>
            <a href={`mailto:${SITE.email}`} className="mt-5 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground sm:mt-0">
              Contact TrackFellow
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}
