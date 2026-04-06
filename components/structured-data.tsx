export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trackfellow",
    "url": "https://trackfellow.com",
    "logo": "https://trackfellow.com/logo.png",
    "description": "Enhance your dog tracking experience with Trackfellow, the innovative app designed to make tracking and mantrailing training fun and easy.",
    "sameAs": [
      "https://instagram.com/trackfellow",
      "https://twitter.com/trackfellow",
      "https://facebook.com/trackfellow"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@trackfellow.com",
      "contactType": "customer service"
    }
  }

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Trackfellow",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "10000"
    },
    "description": "GPS dog tracking app for mantrailing and tracking training with real-time mapping, session feedback, and performance analytics."
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Trackfellow",
    "url": "https://trackfellow.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://trackfellow.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need to buy a subscription to use Trackfellow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you do not need to buy a subscription to use the basic features. You can create and take tracks, and send and receive tracks without a subscription."
        }
      },
      {
        "@type": "Question",
        "name": "Can I sync tracks between iOS and Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if you log in with the same account on both devices, the tracks will be synced between them. This requires a Trackfellow subscription for both devices."
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve the GPS accuracy on my device?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Update the app to the latest version, set the correct time zone, activate GPS with High accuracy mode, allow Trackfellow location access, and disable power saving mode. You can also restart your smartphone and open Google Maps briefly before using Trackfellow."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Freemium and Premium plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Freemium Plan includes laying one track at a time, following one track, receiving one shared track, and saving up to 3 tracks per dog. Premium Plan offers full feature access with unlimited tracks, detailed statistics, report generation, and unlimited track storage."
        }
      },
      {
        "@type": "Question",
        "name": "How do I delete my Trackfellow account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is a function under the settings in the app to delete your account. Please note that all your data will be permanently deleted."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
