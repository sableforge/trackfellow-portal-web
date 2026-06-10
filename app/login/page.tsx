import type { Metadata } from "next"
import { Suspense } from "react"
import { LoginForm } from "@/components/site/login-form"

export const metadata: Metadata = {
  title: "Member Sign In",
  description: "Sign in to your TrackFellow member dashboard with Google or Apple.",
  robots: { index: false },
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>
}) {
  const { callbackUrl } = await searchParams
  const destination = callbackUrl ?? "/dashboard"

  return (
    <Suspense>
      <LoginForm callbackUrl={destination} />
    </Suspense>
  )
}
