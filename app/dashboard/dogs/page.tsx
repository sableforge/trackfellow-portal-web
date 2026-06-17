import type { Metadata } from "next"
import { MOCK_DOGS } from "@/lib/mock-dashboard"
import { DogCard } from "@/components/dashboard/dog-card"

export const metadata: Metadata = { title: "My Dogs" }

export default function DogsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <header>
        <p className="text-sm text-foreground/50">Member Dashboard</p>
        <h1 className="font-display text-3xl font-bold text-foreground">My Dogs</h1>
        <p className="mt-1 text-sm text-foreground/60">
          Select a dog to view their individual session history and performance analytics.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2">
        {MOCK_DOGS.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    </div>
  )
}
