import { Button } from "@/components/ui/button"
import { Instagram, Heart, MessageCircle, Share2 } from "lucide-react"
import Link from "next/link"

const instagramPosts = [
  { id: 1, likes: 234, comments: 18 },
  { id: 2, likes: 456, comments: 32 },
  { id: 3, likes: 189, comments: 14 },
  { id: 4, likes: 367, comments: 28 },
  { id: 5, likes: 521, comments: 41 },
  { id: 6, likes: 298, comments: 22 },
]

export function Social() {
  return (
    <section
      id="community"
      aria-labelledby="social-heading"
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Community
          </p>
          <h2
            id="social-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-foreground text-balance"
          >
            Join the Trackfellow family, share and connect with others
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Share your Trackfellow moments with us on Instagram!{" "}
            <span className="text-primary font-medium">#trackfellow</span>
          </p>
        </header>

        {/* Instagram Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          role="list"
          aria-label="Instagram posts from the Trackfellow community"
        >
          {instagramPosts.map((post) => (
            <article
              key={post.id}
              className="group relative aspect-square bg-secondary rounded-xl overflow-hidden cursor-pointer"
              role="listitem"
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-primary/40" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-4 text-background">
                  <span className="flex items-center gap-1 text-sm font-medium">
                    <Heart className="w-4 h-4" aria-hidden="true" />
                    <span aria-label={`${post.likes} likes`}>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium">
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span aria-label={`${post.comments} comments`}>{post.comments}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link
              href="https://instagram.com/trackfellow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Trackfellow on Instagram (opens in new tab)"
            >
              <Instagram className="mr-2 w-5 h-5" aria-hidden="true" />
              Follow us on Instagram @trackfellow
              <Share2
                className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
