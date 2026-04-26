import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://trackfellow.com"),
  title: {
    default: "TrackFellow — Mantrailing & Dog Tracking, Logged Beautifully",
    template: "%s · TrackFellow",
  },
  description:
    "TrackFellow is the mobile app for mantrailing and tracking enthusiasts. Lay tracks with GPS, mark articles, log feedback and unlock data-driven insights into your dog's progress.",
  applicationName: "TrackFellow",
  keywords: [
    "mantrailing app",
    "dog tracking app",
    "GPS dog tracker",
    "K9 training",
    "scent work",
    "search and rescue training",
    "dog training analytics",
    "TrackFellow",
  ],
  authors: [{ name: "TrackFellow" }],
  creator: "TrackFellow",
  publisher: "TrackFellow",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "TrackFellow",
    title: "TrackFellow — Mantrailing & Dog Tracking, Logged Beautifully",
    description:
      "Lay tracks, mark articles, score sessions and watch your dog's nose-work improve. Built with trainers, for trainers.",
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-dog-tracking.jpg",
        width: 1200,
        height: 630,
        alt: "A focused tracking dog following a scent trail through a forest path at golden hour.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackFellow — Mantrailing & Dog Tracking, Logged Beautifully",
    description:
      "The smart companion for mantrailing and tracking dog teams. Log tracks, mark articles, learn faster.",
    images: ["/images/hero-dog-tracking.jpg"],
  },
  robots: { index: true, follow: true },
  category: "Sports & Outdoors",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E4D8CE" },
    { media: "(prefers-color-scheme: dark)", color: "#232A14" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://trackfellow.com/#org",
      name: "TrackFellow",
      url: "https://trackfellow.com",
      logo: "https://trackfellow.com/icon.svg",
      sameAs: ["https://www.instagram.com/trackfellow"],
    },
    {
      "@type": "MobileApplication",
      name: "TrackFellow",
      operatingSystem: "iOS, Android",
      applicationCategory: "SportsApplication",
      description:
        "TrackFellow helps mantrailing and tracking dog teams lay tracks via GPS, mark articles, score sessions, and analyze performance over time.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1284",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jakarta.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased text-foreground bg-background">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-forest focus:text-forest-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
