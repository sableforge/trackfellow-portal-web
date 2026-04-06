import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Play, Star, Download, MapPin, Activity, BarChart3 } from "lucide-react"

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-2.11 1.24-2.5-2.5 2.5-2.5 2.11 1.38zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="download"
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-80px)] flex items-start pt-8 md:pt-12 pb-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium"
            >
              <Star className="w-4 h-4 mr-2 text-amber-500" aria-hidden="true" />
              Trusted by 10,000+ dog trainers
            </Badge>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight text-foreground text-balance leading-tight"
            >
              Train like a pro
              <span className="text-primary block mt-2">with Trackfellow</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              Enhance your dog tracking experience with Trackfellow, the innovative app designed to make tracking and mantrailing training fun and easy.
            </p>

            {/* App Store Download Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="group text-base px-6 h-14" asChild>
                <Link href="https://apps.apple.com/app/trackfellow" target="_blank" rel="noopener noreferrer">
                  <AppleIcon className="w-6 h-6 mr-3" aria-hidden="true" />
                  <div className="text-left">
                    <span className="block text-xs opacity-80">Download on the</span>
                    <span className="block font-semibold">App Store</span>
                  </div>
                </Link>
              </Button>
              <Button size="lg" className="group text-base px-6 h-14" asChild>
                <Link href="https://play.google.com/store/apps/details?id=com.trackfellow" target="_blank" rel="noopener noreferrer">
                  <PlayStoreIcon className="w-6 h-6 mr-3" aria-hidden="true" />
                  <div className="text-left">
                    <span className="block text-xs opacity-80">Get it on</span>
                    <span className="block font-semibold">Google Play</span>
                  </div>
                </Link>
              </Button>
            </div>

            {/* Watch Demo Button - Isolated */}
            <div className="mt-4 flex justify-center lg:justify-start">
              <Button variant="ghost" size="lg" className="text-base px-6 text-muted-foreground hover:text-foreground" asChild>
                <Link href="#features">
                  <Play className="mr-2 w-5 h-5" aria-hidden="true" />
                  Watch Demo
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2" aria-hidden="true">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">4.9</strong> rating
                </span>
              </div>
              <div className="flex items-center gap-1" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>50K+ downloads</span>
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative lg:pl-8" aria-hidden="true">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Phone Frame */}
              <div className="relative bg-card rounded-[3rem] p-3 shadow-2xl border border-border">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-b-2xl" />
                <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* App Screen Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between text-xs text-muted-foreground mb-6">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <span>5G</span>
                        <span>100%</span>
                      </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="flex-1 bg-secondary rounded-2xl relative overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:20px_20px]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                      </div>
                      {/* Track Path */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 300">
                        <path
                          d="M40 250 Q60 200 80 180 T120 120 T160 80"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="8 4"
                          className="text-primary"
                        />
                        <circle cx="40" cy="250" r="6" className="fill-primary" />
                        <circle cx="80" cy="180" r="4" className="fill-accent" />
                        <circle cx="120" cy="120" r="4" className="fill-accent" />
                        <circle cx="160" cy="80" r="6" className="fill-primary" />
                      </svg>
                    </div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-secondary rounded-xl p-3 text-center">
                        <MapPin className="w-4 h-4 mx-auto text-primary mb-1" />
                        <p className="text-xs text-muted-foreground">Distance</p>
                        <p className="text-sm font-semibold">1.2km</p>
                      </div>
                      <div className="bg-secondary rounded-xl p-3 text-center">
                        <Activity className="w-4 h-4 mx-auto text-primary mb-1" />
                        <p className="text-xs text-muted-foreground">Time</p>
                        <p className="text-sm font-semibold">24:30</p>
                      </div>
                      <div className="bg-secondary rounded-xl p-3 text-center">
                        <BarChart3 className="w-4 h-4 mx-auto text-primary mb-1" />
                        <p className="text-xs text-muted-foreground">Articles</p>
                        <p className="text-sm font-semibold">5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 top-1/4 bg-card rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Track Started</p>
                    <p className="text-xs text-muted-foreground">GPS Active</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/3 bg-card rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Session Complete</p>
                    <p className="text-xs text-muted-foreground">Great work!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
