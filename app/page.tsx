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
