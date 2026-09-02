export const SITE = {
  name: "TrackFellow",
  legalName: "Trackfellow AB",
  url: "https://trackfellow.com",
  description:
    "TrackFellow is the mobile field book for mantrailing and dog-tracking teams. Lay and follow GPS tracks, mark articles, record feedback, and review training progress.",
  email: "info@trackfellow.com",
  organizationNumber: "559473-2785",
  social: {
    instagram: "https://www.instagram.com/trackfellow",
    facebook: "https://www.facebook.com/trackfellow",
  },
  stores: {
    apple: "https://apps.apple.com/app/trackfellow/id6504476314",
    google: "https://play.google.com/store/apps/details?id=com.trackfellow.bi",
  },
  legal: {
    privacy: "https://trackfellow.com/privacy-policy",
    terms: "https://trackfellow.com/terms-of-service",
  },
} as const

export function absoluteUrl(path = "/") {
  return new URL(path, SITE.url).toString()
}
