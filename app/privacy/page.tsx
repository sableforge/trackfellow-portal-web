import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Trackfellow Privacy Policy - How we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: April 18, 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-outfit font-semibold text-foreground">1. Introduction</h2>
            <p>
              Trackfellow (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Personal Information:</strong> Name, email address, and account credentials when you register.</li>
              <li><strong className="text-foreground">Location Data:</strong> GPS coordinates during tracking sessions to provide our core tracking functionality.</li>
              <li><strong className="text-foreground">Usage Data:</strong> App usage statistics, session data, and performance metrics.</li>
              <li><strong className="text-foreground">Device Information:</strong> Device type, operating system, and app version.</li>
            </ul>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Record and display tracking sessions and training analytics</li>
              <li>Send you updates, notifications, and support messages</li>
              <li>Analyze usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">4. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share data with trusted service providers who assist in operating our app, subject to confidentiality agreements.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. You may also request data portability or restrict processing. Contact us at{" "}
              <a href="mailto:privacy@trackfellow.com" className="text-primary hover:underline">privacy@trackfellow.com</a> to exercise your rights.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a href="mailto:privacy@trackfellow.com" className="text-primary hover:underline">privacy@trackfellow.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
