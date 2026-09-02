import type { Metadata } from "next"
import { TopNav } from "@/components/site/top-nav"
import { Hero } from "@/components/site/hero"
import { StatsMarquee } from "@/components/site/stats-marquee"
import { BentoFeatures } from "@/components/site/bento-features"
import { HowItWorks } from "@/components/site/how-it-works"
import { AppShowcase } from "@/components/site/app-showcase"
import { Founder } from "@/components/site/founder"
import { Articles } from "@/components/site/articles"
import { Community } from "@/components/site/community"
import { CtaDownload } from "@/components/site/cta-download"
import { SiteFooter } from "@/components/site/site-footer"
import { MobileCta } from "@/components/site/mobile-cta"

export const metadata: Metadata = {
  title: "Mantrailing & Dog Tracking App",
  description:
    "Lay and follow GPS tracks, mark articles, record session feedback, and analyze your dog's training progress with TrackFellow for iOS and Android.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "TrackFellow — Mantrailing & Dog Tracking App",
    description:
      "The mobile field book for mantrailing and dog-tracking teams. Lay tracks, mark articles, and learn from every session.",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "TrackFellow mantrailing and dog tracking app" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackFellow — Mantrailing & Dog Tracking App",
    description: "Lay tracks, mark articles, and learn from every training session.",
    images: ["/opengraph-image"],
  },
}

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main id="main" className="relative">
        <Hero />
        <StatsMarquee />
        <BentoFeatures />
        <HowItWorks />
        <AppShowcase />
        <Founder />
        <Articles />
        <Community />
        <CtaDownload />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}
