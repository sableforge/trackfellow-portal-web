"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Star, Download, MapPin, Activity, BarChart3 } from "lucide-react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="download"
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-80px)] flex items-start pt-8 md:pt-12 pb-16 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 -z-20"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="/5.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      </div>

      {/* Background blur elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Rottweiler image - left side, bounce-in from bottom */}
      <div
        className={`absolute bottom-0 left-0 w-[280px] md:w-[380px] lg:w-[440px] -z-10 transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-24"
        }`}
        style={{ animation: isVisible ? "heroSlideUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" : "none" }}
      >
        <Image
          src="/Rotweiler-01.png"
          alt=""
          width={440}
          height={600}
          className="object-contain object-bottom pointer-events-none select-none"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-160px)]">
          {/* Content - centered vertically on left */}
          <div className="text-center lg:text-left flex flex-col justify-center">
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

            {/* App Store Download Buttons - using images */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link href="https://apps.apple.com/app/trackfellow" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <Image
                  src="/appstore.png"
                  alt="Download on the App Store"
                  width={180}
                  height={54}
                  className="h-[54px] w-auto"
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.trackfellow" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <Image
                  src="/playstore.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={54}
                  className="h-[54px] w-auto"
                />
              </Link>
            </div>

            {/* Watch Demo Button */}
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

          {/* App Preview - scaled down 25% */}
          <div className="relative lg:pl-8" aria-hidden="true">
            <div className="relative mx-auto max-w-sm lg:max-w-none scale-75 origin-top">
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
