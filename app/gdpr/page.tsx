import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GDPR",
  description: "Trackfellow GDPR Compliance - How we comply with the General Data Protection Regulation.",
}

export default function GDPRPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground mb-4">
            GDPR Compliance
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: April 18, 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-outfit font-semibold text-foreground">1. Our Commitment</h2>
            <p>
              Trackfellow is committed to protecting the privacy and rights of individuals in accordance with the General Data Protection Regulation (GDPR). As a company based in Sweden, we fully comply with EU data protection laws.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">2. Legal Basis for Processing</h2>
            <p>We process personal data based on the following legal grounds:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Consent:</strong> When you explicitly agree to the processing of your data.</li>
              <li><strong className="text-foreground">Contract:</strong> When processing is necessary for the performance of our services.</li>
              <li><strong className="text-foreground">Legitimate Interest:</strong> When processing is necessary for our legitimate business interests.</li>
              <li><strong className="text-foreground">Legal Obligation:</strong> When processing is required by law.</li>
            </ul>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">3. Your Rights Under GDPR</h2>
            <p>As a data subject, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Right of Access:</strong> Request a copy of your personal data.</li>
              <li><strong className="text-foreground">Right to Rectification:</strong> Request correction of inaccurate data.</li>
              <li><strong className="text-foreground">Right to Erasure:</strong> Request deletion of your personal data.</li>
              <li><strong className="text-foreground">Right to Restrict Processing:</strong> Request limitation of data processing.</li>
              <li><strong className="text-foreground">Right to Data Portability:</strong> Request your data in a portable format.</li>
              <li><strong className="text-foreground">Right to Object:</strong> Object to processing based on legitimate interests.</li>
            </ul>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">4. Data Protection Officer</h2>
            <p>
              For any GDPR-related inquiries, you can contact our Data Protection Officer at{" "}
              <a href="mailto:dpo@trackfellow.com" className="text-primary hover:underline">dpo@trackfellow.com</a>.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. When data is no longer needed, it is securely deleted.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">6. International Transfers</h2>
            <p>
              If we transfer personal data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">7. Supervisory Authority</h2>
            <p>
              If you believe your data protection rights have been violated, you have the right to lodge a complaint with your local data protection supervisory authority.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
