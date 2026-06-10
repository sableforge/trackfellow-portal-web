import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Medal, Activity, MapPin, Star, Target } from "lucide-react"
import {
  MOCK_DOGS,
  MOCK_SESSIONS,
  PERFORMANCE_DATA,
} from "@/lib/mock-dashboard"
import { StatCard } from "@/components/dashboard/stat-card"
import { SessionTable } from "@/components/dashboard/session-table"
import { PerformanceChart } from "@/components/dashboard/performance-chart"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dogId: string }>
}): Promise<Metadata> {
  const { dogId } = await params
  const dog = MOCK_DOGS.find((d) => d.id === dogId)
  return { title: dog ? `${dog.name}'s Profile` : "Dog Not Found" }
}

export async function generateStaticParams() {
  return MOCK_DOGS.map((d) => ({ dogId: d.id }))
}

export default async function DogDetailPage({
  params,
}: {
  params: Promise<{ dogId: string }>
}) {
  const { dogId } = await params
  const dog = MOCK_DOGS.find((d) => d.id === dogId)

  if (!dog) notFound()

  const sessions = MOCK_SESSIONS.filter((s) => s.dogId === dogId)
  const perfData = { [dogId]: PERFORMANCE_DATA[dogId] ?? [] }

  // Last session date
  const lastSession = sessions[0]
    ? new Date(sessions[0].date).toLocaleDateString("en-AU", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "—"

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/dashboard/dogs"
        className="inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
      >
        <ArrowLeft size={14} aria-hidden="true" />
        Back to My Dogs
      </Link>

      {/* Hero card */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="relative h-52 w-full sm:h-64">
          <Image
            src={dog.photoUrl}
            alt={`${dog.name} the ${dog.breed}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />

          {/* Rank badge */}
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-sm font-bold text-accent-foreground shadow">
            <Medal size={14} aria-hidden="true" />
            #{dog.rank} Global
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="-mt-8 flex items-end gap-4">
            {/* Avatar */}
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-4 border-card shadow">
              <Image src={dog.photoUrl} alt={dog.name} fill className="object-cover" />
            </div>
            <div className="pb-1">
              <h1 className="font-display text-3xl font-bold text-foreground">{dog.name}</h1>
              <p className="text-sm text-foreground/60">{dog.breed} &bull; {dog.age} years old</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-foreground/60">
            Last session: <span className="font-medium text-foreground">{lastSession}</span>
          </p>
        </div>
      </div>

      {/* Stats */}
      <section aria-label={`${dog.name} statistics`}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard
            label="Sessions"
            value={dog.totalSessions}
            icon={Activity}
            accent
          />
          <StatCard
            label="Distance"
            value={`${dog.totalDistanceKm} km`}
            icon={MapPin}
          />
          <StatCard
            label="Avg Score"
            value={`${dog.avgScorePercent}%`}
            icon={Star}
          />
          <StatCard
            label="Global Rank"
            value={`#${dog.rank}`}
            icon={Target}
          />
        </div>
      </section>

      {/* Performance chart */}
      <section aria-labelledby={`${dogId}-perf`}>
        <h2 id={`${dogId}-perf`} className="sr-only">{dog.name} performance chart</h2>
        <PerformanceChart data={perfData} />
      </section>

      {/* Session history */}
      <section aria-labelledby={`${dogId}-sessions`}>
        <h2 id={`${dogId}-sessions`} className="mb-4 font-display text-xl font-bold text-foreground">
          Session History
        </h2>
        {sessions.length > 0 ? (
          <SessionTable sessions={sessions} />
        ) : (
          <p className="rounded-2xl border border-border bg-card p-6 text-sm text-foreground/60">
            No sessions recorded for {dog.name} yet.
          </p>
        )}
      </section>

      {/* Session notes */}
      <section aria-labelledby={`${dogId}-notes`}>
        <h2 id={`${dogId}-notes`} className="mb-4 font-display text-xl font-bold text-foreground">
          Handler Notes
        </h2>
        <div className="space-y-3">
          {sessions.slice(0, 4).map((s) => {
            const date = new Date(s.date).toLocaleDateString("en-AU", {
              day: "2-digit",
              month: "short",
            })
            return (
              <div
                key={s.id}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <div className="flex items-center gap-2 text-xs text-foreground/50">
                  <span className="font-medium text-foreground/70">{date}</span>
                  <span>&bull;</span>
                  <span>{s.terrain}</span>
                  <span>&bull;</span>
                  <span>{s.conditions}</span>
                </div>
                <p className="mt-2 text-sm text-foreground leading-relaxed">{s.notes}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
