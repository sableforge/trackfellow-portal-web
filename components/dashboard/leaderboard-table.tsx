import { cn } from "@/lib/utils"
import type { LeaderboardEntry } from "@/lib/mock-dashboard"
import { Crown } from "lucide-react"

function RankMedal({ rank }: { rank: number }) {
  if (rank === 1) return <Crown size={14} className="text-accent" aria-label="1st place" />
  if (rank === 2) return <span className="text-xs font-bold text-foreground/60" aria-label="2nd place">#2</span>
  if (rank === 3) return <span className="text-xs font-bold text-foreground/60" aria-label="3rd place">#3</span>
  return <span className="text-xs text-foreground/50">#{rank}</span>
}

export function LeaderboardTable({ entries }: { entries: LeaderboardEntry[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="border-b border-border px-5 py-4">
        <h2 className="font-display text-lg font-bold text-foreground">Global Leaderboard</h2>
        <p className="mt-0.5 text-xs text-foreground/50">Top handlers by average session score</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground/60">Rank</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground/60">Handler</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground/60">Dog</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground/60">Country</th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-foreground/60">Sessions</th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-foreground/60">Avg Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {entries.map((e) => (
              <tr
                key={`${e.rank}-${e.dogName}`}
                className={cn(
                  "transition-colors",
                  e.isCurrentUser
                    ? "bg-primary/8 font-semibold"
                    : "hover:bg-muted/30",
                )}
              >
                <td className="w-14 px-5 py-3.5">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-muted">
                    <RankMedal rank={e.rank} />
                  </div>
                </td>
                <td className="px-5 py-3.5 text-foreground">
                  <span className={e.isCurrentUser ? "text-primary font-bold" : ""}>
                    {e.handlerName}
                    {e.isCurrentUser && (
                      <span className="ml-2 rounded-full bg-accent/30 px-1.5 py-0.5 text-[10px] font-bold text-accent-foreground">
                        You
                      </span>
                    )}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-foreground/80">{e.dogName}</td>
                <td className="px-5 py-3.5 text-foreground/60">{e.country}</td>
                <td className="px-5 py-3.5 text-right text-foreground/70">{e.totalSessions}</td>
                <td className="px-5 py-3.5 text-right font-bold text-primary">{e.avgScore}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
