import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Trackfellow and our mission to revolutionize dog tracking training.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground mb-8">
            About Us
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              Trackfellow is a passionate team of dog enthusiasts and tech innovators dedicated to transforming the way dog tracking and mantrailing training is done.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">Our Mission</h2>
            <p>
              We believe that every dog deserves the best training experience possible. Our mission is to provide trainers — from beginners to professionals — with the tools they need to track, analyze, and improve their training sessions. By combining cutting-edge GPS technology with intuitive design, we make dog tracking training fun, efficient, and rewarding.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">Our Story</h2>
            <p>
              Founded in Sweden, Trackfellow was born out of a shared love for dogs and the outdoors. Our founders, experienced mantrailing trainers themselves, recognized the need for a modern tool that could help trainers log their tracks, monitor progress, and share experiences with a growing community. What started as a simple idea has grown into a trusted app used by thousands of trainers worldwide.
            </p>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Innovation:</strong> We continuously improve our technology to deliver the best training experience.</li>
              <li><strong className="text-foreground">Community:</strong> We foster a supportive community of trainers who learn and grow together.</li>
              <li><strong className="text-foreground">Simplicity:</strong> We design our app to be intuitive and easy to use for everyone.</li>
              <li><strong className="text-foreground">Transparency:</strong> We operate with openness and honesty in everything we do.</li>
            </ul>

            <h2 className="text-2xl font-outfit font-semibold text-foreground mt-12">Get in Touch</h2>
            <p>
              We&apos;d love to hear from you. Whether you have a question, feedback, or just want to say hello, reach out to us at{" "}
              <a href="mailto:hello@trackfellow.com" className="text-primary hover:underline">hello@trackfellow.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
