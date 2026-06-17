"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BrandMark } from "./brand-mark"

export function LoginForm({ callbackUrl }: { callbackUrl: string }) {
  const [loadingGoogle, setLoadingGoogle] = useState(false)
  const [loadingApple, setLoadingApple] = useState(false)

  const handleGoogle = async () => {
    setLoadingGoogle(true)
    await signIn("google", { callbackUrl })
  }

  const handleApple = async () => {
    setLoadingApple(true)
    await signIn("apple", { callbackUrl })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background lg:flex-row">
      {/* ── Left panel: branding ──────────────────────────────── */}
      <div className="relative hidden flex-col justify-between bg-forest p-10 lg:flex lg:w-1/2">
        {/* Background texture */}
        <div className="absolute inset-0 grain opacity-40" aria-hidden="true" />

        <div className="relative z-10">
          <BrandMark />
        </div>

        {/* Hero quote */}
        <div className="relative z-10 space-y-6">
          <blockquote className="font-display text-3xl font-bold leading-snug text-forest-foreground text-balance">
            &ldquo;Every great track starts with a single step.&rdquo;
          </blockquote>
          <p className="text-forest-foreground/70 text-sm leading-relaxed max-w-xs">
            Sign in to view your dogs&apos; training history, performance analytics, and leaderboard rankings — synced directly from the TrackFellow app.
          </p>
        </div>

        {/* Dog image */}
        <div className="relative z-10 mt-8">
          <div className="relative h-56 overflow-hidden rounded-2xl ring-soft">
            <Image
              src="/images/dog-rex.png"
              alt="German Shepherd on a tracking trail"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-accent">
              <Image
                src="/images/user-avatar.png"
                alt="TrackFellow member"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-forest-foreground">Sarah K.</p>
              <p className="text-xs text-forest-foreground/60">Handler · Rex & Luna</p>
            </div>
            <div className="ml-auto rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
              Rank #7
            </div>
          </div>
        </div>
      </div>

      {/* ── Right panel: sign-in card ─────────────────────────── */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 lg:px-16">
        {/* Mobile logo */}
        <div className="mb-8 lg:hidden">
          <BrandMark />
        </div>

        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <h1 className="font-display text-3xl font-bold text-foreground">
              Member Dashboard
            </h1>
            <p className="mt-2 text-sm text-foreground/60">
              Use the same account you registered in the TrackFellow app.
            </p>
          </div>

          {/* Auth buttons */}
          <div className="space-y-3">
            {/* Google */}
            <button
              type="button"
              onClick={handleGoogle}
              disabled={loadingGoogle || loadingApple}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-muted hover:shadow-md disabled:opacity-60"
              aria-label="Continue with Google"
            >
              {loadingGoogle ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-foreground/30 border-t-foreground" aria-hidden="true" />
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              )}
              Continue with Google
            </button>

            {/* Apple */}
            <button
              type="button"
              onClick={handleApple}
              disabled={loadingGoogle || loadingApple}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-foreground px-4 py-3.5 text-sm font-semibold text-background shadow-sm transition-all hover:bg-foreground/90 hover:shadow-md disabled:opacity-60"
              aria-label="Continue with Apple"
            >
              {loadingApple ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-background/30 border-t-background" aria-hidden="true" />
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.2.05 2.05.65 2.77.69 1.06-.21 2.07-.82 3.21-.74 1.37.12 2.39.67 3.04 1.68-2.78 1.67-2.13 5.33.72 6.37-.57 1.53-1.34 3.05-1.74 4.88zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              )}
              Continue with Apple
            </button>
          </div>

          <div className="mt-8 space-y-2 text-center">
            <p className="text-xs text-foreground/50 leading-relaxed">
              By signing in you agree to our{" "}
              <a href="#" className="underline hover:text-foreground">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="underline hover:text-foreground">Privacy Policy</a>.
            </p>
            <p className="text-xs text-foreground/50">
              Don&apos;t have the app yet?{" "}
              <Link href="/#download" className="underline hover:text-foreground">
                Download TrackFellow
              </Link>
            </p>
          </div>
        </div>

        {/* Back to site */}
        <Link
          href="/"
          className="mt-10 text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
        >
          ← Back to trackfellow.com
        </Link>
      </div>
    </div>
  )
}
