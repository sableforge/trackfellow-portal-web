import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Trackfellow team and help shape the future of dog tracking training.",
}

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground mb-8">
            Careers
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              Join us in building the future of dog tracking and training technology. We&apos;re always looking for talented, passionate people to join our team.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">Why Work at Trackfellow?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Remote-first:</strong> Work from anywhere in the world.</li>
              <li><strong className="text-foreground">Impactful work:</strong> Help thousands of trainers and their dogs succeed.</li>
              <li><strong className="text-foreground">Growth:</strong> Learn and grow with a team that values continuous improvement.</li>
              <li><strong className="text-foreground">Dog-friendly:</strong> We love dogs — and we encourage you to bring yours to work (even virtually!).</li>
            </ul>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">Open Positions</h2>
            <p>
              We don&apos;t have any open positions at the moment, but we&apos;re always interested in hearing from talented people. If you think you&apos;d be a great fit, send us your resume and a brief note about yourself.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">Get in Touch</h2>
            <p>
              Interested in joining our team? Send your application to{" "}
              <a href="mailto:careers@trackfellow.com" className="text-primary hover:underline">careers@trackfellow.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
