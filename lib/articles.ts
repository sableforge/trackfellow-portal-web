export type Article = {
  slug: string
  title: string
  excerpt: string
  date: string
  cover: string
  alt: string
  author: string
  readingTime: string
  content: string[]
}

export const ARTICLES: Article[] = [
  {
    slug: "meet-jenna",
    title: "Meet Jenna — the Founder of TrackFellow",
    excerpt:
      "Discover the vision behind TrackFellow, a user-friendly app revolutionizing dog tracking.",
    date: "2026-03-10",
    cover: "/images/founder-jenna.jpg",
    alt: "Jenna, founder of TrackFellow, standing with her tracking dog in a forest.",
    author: "TrackFellow Team",
    readingTime: "5 min read",
    content: [
      "TrackFellow was born on a cold morning in the woods, after Jenna spent yet another session scribbling notes on a damp paper field-book. As a long-time mantrailer and instructor, she knew that the data trainers collect during a session is gold — but only if it can be reviewed, compared and shared without friction.",
      "Jenna started sketching what would become TrackFellow in 2023: a simple, beautiful pocket field-book that records every track in GPS, tags articles with a single tap, and turns those raw inputs into clear progress over time.",
      "Today, TrackFellow is used by trainers, search-and-rescue handlers and hobbyists in 14 countries. The mission stays the same: give working teams the tools to learn faster, together.",
      "We sat down with Jenna to talk about the early days, the design choices behind the app, and where TrackFellow is going next. Stay tuned for the full interview, dropping later this month.",
    ],
  },
  {
    slug: "can-any-dog-track",
    title: "Can any dog be a tracking dog?",
    excerpt:
      "All dogs have a natural ability to follow scents and can be trained to track. Some breeds excel naturally.",
    date: "2026-02-18",
    cover: "/images/community-dog.jpg",
    alt: "A working dog focused and alert in a natural setting.",
    author: "TrackFellow Team",
    readingTime: "6 min read",
    content: [
      "The short answer is yes — every dog has a nose, and every nose can be trained. The longer answer is more nuanced: some breeds are wired for nose-work, while others need a different motivation profile to stay engaged in long, methodical work.",
      "Working line German Shepherds, Belgian Malinois, Bloodhounds and Labradors are the usual suspects. But we've seen Cocker Spaniels lay down beautiful trails, and a friend's Chihuahua-mix that out-tracks dogs three times her size. The dog in front of you is always the right starting point.",
      "What matters more than breed is consistency: short, frequent, well-designed sessions beat long, occasional ones every time. That's exactly the loop TrackFellow is designed for — quick to start, easy to log, and detailed enough to spot patterns over weeks and months.",
      "If you're just getting started, lay an aged 50m track in a familiar field, drop two articles, and score the session honestly. Repeat twice a week. You'll be surprised how fast both of you improve.",
    ],
  },
  {
    slug: "basics-of-dog-tracking",
    title: "The Basics of dog tracking — A guide for beginners",
    excerpt:
      "Dog tracking is the process of a dog following a trail based on scent. It's a natural ability that can be trained.",
    date: "2026-01-29",
    cover: "/images/training-action.jpg",
    alt: "Aerial view of a track path winding through a meadow with small markers.",
    author: "TrackFellow Team",
    readingTime: "7 min read",
    content: [
      "Dog tracking is the discipline of teaching a dog to follow a specific scent trail from a known starting point to an end article or person. It builds on something dogs already do every day — they just learn to do it on cue, with focus, and over longer distances.",
      "A typical beginner session has four ingredients: a clean start, a trail of an appropriate length and age, articles placed at known points, and a clear end. As you progress, you'll add cross-tracks, terrain changes, weather variation, and longer ageing.",
      "Tools matter less than people think. A flat collar or harness, a 5–10m line, a few articles your dog finds rewarding, and a way to log each track is all you need. TrackFellow gives you the last piece — GPS recording, article tagging, scoring and notes — so you can stop scribbling and start training.",
      "The most common beginner mistake is skipping the log. Without a record, a tough session becomes 'a bad day' instead of useful data. Track everything, even the bad runs. Patterns emerge faster than you expect, and your training plan writes itself.",
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
