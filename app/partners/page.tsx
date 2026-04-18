import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partners",
  description: "Explore partnership opportunities with Trackfellow.",
}

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground mb-8">
            Partners
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              At Trackfellow, we believe that collaboration drives innovation. We partner with organizations that share our passion for dogs and training excellence.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">Partnership Opportunities</h2>
            <p>
              Whether you&apos;re a dog training club, equipment manufacturer, veterinary practice, or canine organization, we&apos;d love to explore how we can work together.
            </p>

            <h3 className="text-xl font-outfit font-semibold text-foreground mt-8">Training Clubs & Organizations</h3>
            <p>
              We offer special group plans and features for training clubs and organizations. Get your members set up with Trackfellow and enjoy shared training sessions, team analytics, and more.
            </p>

            <h3 className="text-xl font-outfit font-semibold text-foreground mt-8">Technology Partners</h3>
            <p>
              Interested in integrating with Trackfellow? We&apos;re open to API partnerships and technology integrations that enhance the training experience.
            </p>

            <h3 className="text-xl font-outfit font-semibold text-foreground mt-8">Brand Ambassadors</h3>
            <p>
              Are you a professional trainer or influencer in the dog training space? Join our ambassador program and help spread the word about Trackfellow.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">Become a Partner</h2>
            <p>
              Ready to partner with us? Reach out at{" "}
              <a href="mailto:partners@trackfellow.com" className="text-primary hover:underline">partners@trackfellow.com</a> and let&apos;s start the conversation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
