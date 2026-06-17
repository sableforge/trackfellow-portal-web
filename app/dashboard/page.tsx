import type { Metadata } from "next"
import { auth } from "@/auth"
import {
  MOCK_DOGS,
  MOCK_SESSIONS,
  PERFORMANCE_DATA,
  LEADERBOARD,
  ACHIEVEMENTS,
} from "@/lib/mock-dashboard"
import { StatCard } from "@/components/dashboard/stat-card"
import { DogCard } from "@/components/dashboard/dog-card"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { SessionTable } from "@/components/dashboard/session-table"
import { LeaderboardTable } from "@/components/dashboard/leaderboard-table"
import { AchievementBadge } from "@/components/dashboard/achievement-badge"
import {
  Activity,
  MapPin,
  PawPrint,
  Star,
} from "lucide-react"

export const metadata: Metadata = { title: "Overview" }

export default async function DashboardPage() {
  const session = await auth()
  const firstName = session?.user?.name?.split(" ")[0] ?? "there"

  // Aggregate stats across all dogs
  const totalSessions = MOCK_DOGS.reduce((s, d) => s + d.totalSessions, 0)
  const totalDistance = MOCK_DOGS.reduce((s, d) => s + d.totalDistanceKm, 0).toFixed(1)
  const avgScore = Math.round(
    MOCK_DOGS.reduce((s, d) => s + d.avgScorePercent, 0) / MOCK_DOGS.length,
  )
  const bestRank = Math.min(...MOCK_DOGS.map((d) => d.rank))

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Page header */}
      <header>
        <p className="text-sm text-foreground/50">Member Dashboard</p>
        <h1 className="font-display text-3xl font-bold text-foreground">
          Welcome back, {firstName}
        </h1>
      </header>

      {/* Stat cards */}
      <section aria-label="Summary statistics">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard
            label="Total Sessions"
            value={totalSessions}
            sub="all dogs combined"
            icon={Activity}
            accent
          />
          <StatCard
            label="Total Distance"
            value={`${totalDistance} km`}
            sub="all dogs combined"
            icon={MapPin}
          />
          <StatCard
            label="Average Score"
            value={`${avgScore}%`}
            sub="across all sessions"
            icon={Star}
          />
          <StatCard
            label="Best Rank"
            value={`#${bestRank}`}
            sub="global leaderboard"
            icon={PawPrint}
          />
        </div>
      </section>

      {/* Dog cards */}
      <section aria-labelledby="dogs-heading">
        <h2 id="dogs-heading" className="mb-4 font-display text-xl font-bold text-foreground">
          My Dogs
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {MOCK_DOGS.map((dog) => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div>
      </section>

      {/* Performance chart */}
      <section aria-labelledby="perf-heading">
        <h2 id="perf-heading" className="sr-only">Performance chart</h2>
        <PerformanceChart data={PERFORMANCE_DATA} />
      </section>

      {/* Recent sessions */}
      <section aria-labelledby="sessions-heading">
        <h2 id="sessions-heading" className="sr-only">Recent sessions</h2>
        <SessionTable sessions={MOCK_SESSIONS} limit={6} />
      </section>

      {/* Leaderboard */}
      <section aria-labelledby="leaderboard-heading">
        <h2 id="leaderboard-heading" className="sr-only">Leaderboard</h2>
        <LeaderboardTable entries={LEADERBOARD} />
      </section>

      {/* Achievements */}
      <section aria-labelledby="achievements-heading">
        <h2 id="achievements-heading" className="mb-4 font-display text-xl font-bold text-foreground">
          Achievements
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {ACHIEVEMENTS.map((a) => (
            <AchievementBadge key={a.id} achievement={a} />
          ))}
        </div>
      </section>
    </div>
  )
}
