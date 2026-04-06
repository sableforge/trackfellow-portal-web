"use client"

import Link from "next/link"
import { MapPin, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPinned } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#" },
      { label: "Download", href: "#download" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "#articles" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#community" },
      { label: "Contact", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  },
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/trackfellow", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="bg-foreground text-background"
      aria-label="Site footer"
    >
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-outfit font-bold text-balance">
                Stay updated with Trackfellow
              </h2>
              <p className="mt-2 text-background/70 text-pretty">
                Get the latest training tips, app updates, and community stories delivered to your inbox.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription"
            >
              <label htmlFor="email-input" className="sr-only">
                Email address
              </label>
              <input
                id="email-input"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold"
              aria-label="Trackfellow home"
            >
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="font-outfit">Trackfellow</span>
            </Link>
            <p className="mt-4 text-background/70 max-w-xs text-pretty leading-relaxed">
              Enhance your dog tracking experience with the innovative app designed to make tracking and mantrailing training fun and easy.
            </p>

            {/* Contact Info */}
            <address className="mt-6 space-y-2 not-italic">
              <a
                href="mailto:hello@trackfellow.com"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                hello@trackfellow.com
              </a>
              <span className="flex items-center gap-2 text-sm text-background/70">
                <MapPinned className="w-4 h-4" aria-hidden="true" />
                Sweden
              </span>
            </address>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`Follow us on ${social.label} (opens in new tab)`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <nav key={section.title} aria-label={`${section.title} links`}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-background/10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>&copy; {currentYear} Trackfellow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
