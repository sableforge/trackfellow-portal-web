import { cn } from "@/lib/utils"
import type { Session } from "@/lib/mock-dashboard"
import { MOCK_DOGS } from "@/lib/mock-dashboard"

function ScoreBadge({ score }: { score: number }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-2 py-0.5 text-xs font-bold",
        score >= 90
          ? "bg-primary/15 text-primary"
          : score >= 75
          ? "bg-accent/20 text-accent-foreground"
          : "bg-destructive/10 text-destructive",
      )}
    >
      {score}%
    </span>
  )
}

export function SessionTable({
  sessions,
  limit,
}: {
  sessions: Session[]
  limit?: number
}) {
  const rows = limit ? sessions.slice(0, limit) : sessions

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="border-b border-border px-5 py-4">
        <h2 className="font-display text-lg font-bold text-foreground">Recent Sessions</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground/60">Date</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground/60">Dog</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground/60">Terrain</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground/60">Conditions</th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-foreground/60">Duration</th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-foreground/60">Distance</th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-foreground/60">Articles</th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-foreground/60">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((s) => {
              const dog = MOCK_DOGS.find((d) => d.id === s.dogId)
              const date = new Date(s.date).toLocaleDateString("en-AU", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
              return (
                <tr key={s.id} className="transition-colors hover:bg-muted/30">
                  <td className="whitespace-nowrap px-5 py-3.5 font-medium text-foreground">{date}</td>
                  <td className="px-5 py-3.5 text-foreground/80">{dog?.name ?? s.dogId}</td>
                  <td className="px-5 py-3.5 text-foreground/70">{s.terrain}</td>
                  <td className="px-5 py-3.5 text-foreground/70">{s.conditions}</td>
                  <td className="px-5 py-3.5 text-right text-foreground/70">{s.durationMin} min</td>
                  <td className="px-5 py-3.5 text-right text-foreground/70">{s.distanceKm} km</td>
                  <td className="px-5 py-3.5 text-right text-foreground/70">{s.articlesFound}/{s.articlesTotal}</td>
                  <td className="px-5 py-3.5 text-right">
                    <ScoreBadge score={s.scorePercent} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
