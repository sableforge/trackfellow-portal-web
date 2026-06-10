import type { Metadata } from "next"
import { LEADERBOARD, ACHIEVEMENTS, MOCK_DOGS } from "@/lib/mock-dashboard"
import { LeaderboardTable } from "@/components/dashboard/leaderboard-table"
import { AchievementBadge } from "@/components/dashboard/achievement-badge"

export const metadata: Metadata = { title: "Leaderboard" }

export default function LeaderboardPage() {
  const bestRank = Math.min(...MOCK_DOGS.map((d) => d.rank))
  const goldCount = ACHIEVEMENTS.filter((a) => a.tier === "gold").length

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      <header>
        <p className="text-sm text-foreground/50">Member Dashboard</p>
        <h1 className="font-display text-3xl font-bold text-foreground">Leaderboard</h1>
        <p className="mt-1 text-sm text-foreground/60">
          See how your dogs rank against the global TrackFellow community.
          Your entries are highlighted.
        </p>
      </header>

      {/* Rank highlight */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[180px] rounded-2xl border border-border bg-forest p-5 text-forest-foreground">
          <p className="text-xs text-forest-foreground/60">Your best global rank</p>
          <p className="font-display text-4xl font-bold text-accent mt-1">#{bestRank}</p>
        </div>
        <div className="flex-1 min-w-[180px] rounded-2xl border border-border bg-card p-5">
          <p className="text-xs text-foreground/60">Gold achievements</p>
          <p className="font-display text-4xl font-bold text-foreground mt-1">{goldCount}</p>
        </div>
        <div className="flex-1 min-w-[180px] rounded-2xl border border-border bg-card p-5">
          <p className="text-xs text-foreground/60">Dogs on leaderboard</p>
          <p className="font-display text-4xl font-bold text-foreground mt-1">{MOCK_DOGS.length}</p>
        </div>
      </div>

      <LeaderboardTable entries={LEADERBOARD} />

      {/* Achievements */}
      <section aria-labelledby="achievements-heading">
        <h2 id="achievements-heading" className="mb-4 font-display text-xl font-bold text-foreground">
          Your Achievements
        </h2>
        <div className="grid gap-3 sm:grid-cols-2" role="list">
          {ACHIEVEMENTS.map((a) => (
            <AchievementBadge key={a.id} achievement={a} />
          ))}
        </div>
      </section>
    </div>
  )
}
