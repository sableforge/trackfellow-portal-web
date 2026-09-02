import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SITE } from "@/lib/site"
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: "%s · TrackFellow",
  },
  description: SITE.description,
  applicationName: SITE.name,
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
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  openGraph: { siteName: SITE.name, locale: "en_US" },
  robots: { index: true, follow: true },
  category: "Sports & Outdoors",
  other: { "apple-itunes-app": "app-id=6504476314" },
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
      "@id": `${SITE.url}/#org`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/icon.svg`,
      email: SITE.email,
      identifier: SITE.organizationNumber,
      sameAs: [
        SITE.social.instagram,
        SITE.social.facebook,
        SITE.stores.apple,
        SITE.stores.google,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
      publisher: { "@id": `${SITE.url}/#org` },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE.url}/#app`,
      name: SITE.name,
      url: SITE.url,
      operatingSystem: "iOS, Android",
      applicationCategory: "SportsApplication",
      description: SITE.description,
      downloadUrl: [SITE.stores.apple, SITE.stores.google],
      publisher: { "@id": `${SITE.url}/#org` },
      featureList: [
        "Lay and follow GPS tracks",
        "Mark articles and points along a track",
        "Record session feedback and notes",
        "Review dog-training statistics and reports",
        "Share tracks with other handlers",
      ],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jakarta.variable} bg-background`}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
