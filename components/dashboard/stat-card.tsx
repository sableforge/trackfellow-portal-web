import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  label: string
  value: string | number
  sub?: string
  icon: LucideIcon
  accent?: boolean
}

export function StatCard({ label, value, sub, icon: Icon, accent }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-2xl border border-border p-5 shadow-sm",
        accent ? "bg-forest text-forest-foreground" : "bg-card text-foreground",
      )}
    >
      <div
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-xl",
          accent ? "bg-accent/20" : "bg-primary/10",
        )}
      >
        <Icon
          size={20}
          className={accent ? "text-accent" : "text-primary"}
          aria-hidden="true"
        />
      </div>
      <div className="min-w-0">
        <p className={cn("text-xs font-medium", accent ? "text-forest-foreground/60" : "text-foreground/60")}>
          {label}
        </p>
        <p className="mt-0.5 font-display text-2xl font-bold">{value}</p>
        {sub && (
          <p className={cn("mt-0.5 text-xs", accent ? "text-forest-foreground/50" : "text-foreground/50")}>
            {sub}
          </p>
        )}
      </div>
    </div>
  )
}
