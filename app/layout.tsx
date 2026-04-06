import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#22c55e' },
    { media: '(prefers-color-scheme: dark)', color: '#16a34a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Trackfellow - Train Like a Pro with GPS Dog Tracking',
    template: '%s | Trackfellow',
  },
  description: 'Enhance your dog tracking experience with Trackfellow, the innovative app designed to make tracking and mantrailing training fun and easy. Real-time GPS tracking, performance analytics, and session feedback.',
  keywords: ['dog tracking', 'GPS tracking', 'mantrailing', 'dog training', 'tracking app', 'pet training', 'performance analytics'],
  authors: [{ name: 'Trackfellow' }],
  creator: 'Trackfellow',
  publisher: 'Trackfellow',
  metadataBase: new URL('https://trackfellow.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trackfellow.com',
    title: 'Trackfellow - Train Like a Pro with GPS Dog Tracking',
    description: 'Enhance your dog tracking experience with Trackfellow, the innovative app designed to make tracking and mantrailing training fun and easy.',
    siteName: 'Trackfellow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trackfellow - Train Like a Pro with GPS Dog Tracking',
    description: 'Enhance your dog tracking experience with Trackfellow, the innovative app designed to make tracking and mantrailing training fun and easy.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
