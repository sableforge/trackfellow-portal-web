import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Trackfellow Terms of Service - Rules and guidelines for using our platform.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: April 18, 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-outfit font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Trackfellow application and website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">2. Description of Service</h2>
            <p>
              Trackfellow provides a mobile and web application for GPS-based dog tracking and mantrailing training. Our services include track recording, performance analytics, session feedback, and community features.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating an account.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the service for any illegal purpose</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Attempt to gain unauthorized access to any part of the service</li>
              <li>Upload malicious content or spam</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of Trackfellow are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">6. Limitation of Liability</h2>
            <p>
              Trackfellow is provided &quot;as is&quot; without warranty of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of significant changes via email or in-app notification.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">8. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href="mailto:legal@trackfellow.com" className="text-primary hover:underline">legal@trackfellow.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
