"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Do I need to buy a subscription to use Trackfellow?",
    answer: "No, you do not need to buy a subscription to use the basic features. You can create and take tracks, and send and receive tracks without a subscription."
  },
  {
    question: "Can I sync tracks between iOS and Android?",
    answer: "Yes, if you log in with the same account on both devices, the tracks will be synced between them. This requires a Trackfellow subscription for both devices."
  },
  {
    question: "Can I have multiple Trackfellow accounts on one phone?",
    answer: "No, your Trackfellow account is linked to your Apple ID or Google Play ID, and each phone can only have one such ID."
  },
  {
    question: "How can I improve the GPS accuracy on my device for better tracking?",
    answer: "Improving GPS accuracy can enhance your tracking experience. Update the app to the latest version, set the correct time zone, activate GPS with 'High accuracy' mode, allow Trackfellow location access, and disable power saving mode. You can also restart your smartphone and open Google Maps briefly before using Trackfellow."
  },
  {
    question: "Why does GPS signal accuracy vary even when starting from the same location?",
    answer: "GPS accuracy varies due to satellite geometry, signal blockage from buildings or trees, atmospheric conditions, receiver quality, multipath effects from signal reflections, radio interference, and occasional solar storms or satellite maintenance."
  },
  {
    question: "Freemium vs Premium Plans - What's the difference?",
    answer: "Freemium Plan includes laying one track at a time, following one track, receiving one shared track, and saving up to 3 tracks per dog. Premium Plan offers full feature access with unlimited tracks, detailed statistics, report generation, and unlimited track storage. Premium is perfect for those wanting comprehensive tracking and training management."
  },
  {
    question: "How can I restore purchase after installation?",
    answer: "For iOS: Open the app, go to Settings or Premium section, tap 'Restore Purchases', and enter your Apple ID if prompted. For Android: Navigate to Settings or Premium section and tap 'Restore Purchase'. Make sure you're signed in with the same account used for the original purchase."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "To unsubscribe, visit the Apple support pages or the Google support pages for detailed instructions on managing your subscriptions."
  },
  {
    question: "How do I delete my account?",
    answer: "There is a function under the settings in the app to delete your account. Please note that all your data will be permanently deleted."
  },
  {
    question: "Why does my content disappear when I log in and out again on the iPhone?",
    answer: "If you log in with 'Anonymous Email' on an iPhone, a whole new account is created every time you log in. To maintain your content, log in with the same email address and password each time, or use an existing account via Google or Apple login."
  }
]

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 bg-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <HelpCircle className="w-4 h-4 mr-2" aria-hidden="true" />
            Support
          </Badge>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-foreground text-balance"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Find answers to common questions about Trackfellow. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="mailto:support@trackfellow.com"
              className="text-primary font-medium hover:underline underline-offset-4"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
