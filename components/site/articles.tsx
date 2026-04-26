import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

const ARTICLES = [
  {
    slug: "meet-jenna",
    title: "Meet Jenna — the Founder of TrackFellow",
    excerpt:
      "Discover the vision behind TrackFellow, a user-friendly app revolutionizing dog tracking.",
    date: "2026-03-10",
    cover: "/images/founder-jenna.jpg",
    alt: "Jenna, founder of TrackFellow, standing with her tracking dog in a forest.",
  },
  {
    slug: "can-any-dog-track",
    title: "Can any dog be a tracking dog?",
    excerpt:
      "All dogs have a natural ability to follow scents and can be trained to track. Some breeds excel naturally.",
    date: "2026-02-18",
    cover: "/images/community-dog.jpg",
    alt: "A working dog focused and alert in a natural setting.",
  },
  {
    slug: "basics-of-dog-tracking",
    title: "The Basics of dog tracking — A guide for beginners",
    excerpt:
      "Dog tracking is the process of a dog following a trail based on scent. It's a natural ability that can be trained.",
    date: "2026-01-29",
    cover: "/images/training-action.jpg",
    alt: "Aerial view of a track path winding through a meadow with small markers.",
  },
]

export function Articles() {
  return (
    <section
      id="articles"
      aria-labelledby="articles-title"
      className="relative scroll-mt-24 bg-card py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="grid items-end gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              News & Articles
            </p>
            <h2
              id="articles-title"
              className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            >
              Fresh guides <span className="text-primary">every week.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-foreground/70 text-pretty sm:justify-self-end">
            Tips, techniques and stories from trainers around the world — all in
            bite-sized reads you can finish on the trail.
          </p>
        </header>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <li key={a.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-background ring-1 ring-border transition-transform hover:-translate-y-1 ring-soft">
                <figure className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={a.cover}
                    alt={a.alt}
                    width={600}
                    height={375}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </figure>
                <div className="flex flex-1 flex-col p-6">
                  <time
                    dateTime={a.date}
                    className="flex items-center gap-2 text-xs text-foreground/60"
                  >
                    <Calendar size={14} aria-hidden="true" />
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(a.date))}
                  </time>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight text-balance">
                    <a
                      href={`#${a.slug}`}
                      className="after:absolute after:inset-0"
                    >
                      {a.title}
                    </a>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70 text-pretty">
                    {a.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                    Read more
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
