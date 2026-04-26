import Image from "next/image"
import { Instagram, ExternalLink } from "lucide-react"

const PHOTOS = [
  {
    src: "/images/hero-dog-tracking.jpg",
    alt: "Tracking dog following a scent trail through tall grass at golden hour.",
  },
  {
    src: "/images/founder-jenna.jpg",
    alt: "Trainer with her tracking dog in a forest clearing.",
  },
  {
    src: "/images/training-action.jpg",
    alt: "Aerial view of a winding track with markers through a meadow.",
  },
  {
    src: "/images/community-dog.jpg",
    alt: "A happy working dog with bright eyes resting in a forest.",
  },
]

export function Community() {
  return (
    <section
      aria-labelledby="community-title"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Instagram size={14} aria-hidden="true" />
            Community
          </p>
          <h2
            id="community-title"
            className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            Join the{" "}
            <span className="text-primary">TrackFellow family.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70 text-pretty">
            Share your best moments, swap training tips, and follow along with
            handlers from around the world. Tag{" "}
            <a
              href="https://instagram.com/trackfellow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-primary underline decoration-primary/30 transition-colors hover:decoration-primary"
            >
              @trackfellow
              <ExternalLink size={14} aria-hidden="true" />
            </a>{" "}
            to be featured.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {PHOTOS.map((p, i) => (
            <a
              key={i}
              href="https://instagram.com/trackfellow"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-3xl ring-1 ring-border transition-transform hover:-translate-y-1 ring-soft"
              aria-label={p.alt}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <span className="absolute bottom-4 left-4 flex items-center gap-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram size={16} />
                <span className="text-sm font-medium">View post</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://instagram.com/trackfellow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            <Instagram size={18} aria-hidden="true" />
            Follow @trackfellow
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
