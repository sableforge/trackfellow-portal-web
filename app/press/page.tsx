import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Press",
  description: "Trackfellow press resources, media kit, and latest news.",
}

export default function PressPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground mb-8">
            Press
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              Welcome to the Trackfellow press page. Here you&apos;ll find resources for media coverage, brand assets, and the latest company news.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">About Trackfellow</h2>
            <p>
              Trackfellow is an innovative mobile application designed to enhance the dog tracking and mantrailing training experience. Founded in Sweden, our app provides real-time GPS tracking, performance analytics, and session feedback to trainers of all levels.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">Key Facts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Founded:</strong> Sweden</li>
              <li><strong className="text-foreground">Users:</strong> 10,000+ active trainers worldwide</li>
              <li><strong className="text-foreground">Tracks Logged:</strong> 50,000+</li>
              <li><strong className="text-foreground">App Rating:</strong> 4.9 stars</li>
              <li><strong className="text-foreground">Available on:</strong> iOS and Android</li>
            </ul>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">Media Inquiries</h2>
            <p>
              For press inquiries, interviews, or media requests, please contact us at{" "}
              <a href="mailto:press@trackfellow.com" className="text-primary hover:underline">press@trackfellow.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
