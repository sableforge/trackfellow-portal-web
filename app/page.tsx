import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Social } from "@/components/social"
import { Blog } from "@/components/blog"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <Features />
        <Social />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
