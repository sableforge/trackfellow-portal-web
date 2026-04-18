import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Trackfellow Cookie Policy - How we use cookies and similar technologies.",
}

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: April 18, 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-outfit font-semibold text-foreground">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help us provide a better experience by remembering your preferences and understanding how you use our service.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly, including authentication and security.</li>
              <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website to improve our services.</li>
              <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences for a personalized experience.</li>
            </ul>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">3. Third-Party Cookies</h2>
            <p>
              We may use third-party services such as analytics providers that set their own cookies. These cookies are governed by the respective third party&apos;s privacy policy.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">4. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">5. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, contact us at{" "}
              <a href="mailto:privacy@trackfellow.com" className="text-primary hover:underline">privacy@trackfellow.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
