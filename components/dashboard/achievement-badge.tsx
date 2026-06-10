import {
  Footprints,
  ListChecks,
  Zap,
  Moon,
  Trophy,
  Star,
  CloudRain,
  Map,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Achievement } from "@/lib/mock-dashboard"

const ICON_MAP: Record<string, React.ElementType> = {
  Footprints,
  ListChecks,
  Zap,
  Moon,
  Trophy,
  Star,
  CloudRain,
  Map,
}

const TIER_STYLES = {
  bronze: {
    bg: "bg-[#CD7F32]/10",
    ring: "ring-[#CD7F32]/30",
    icon: "text-[#CD7F32]",
    label: "bg-[#CD7F32]/15 text-[#7a4a1e]",
  },
  silver: {
    bg: "bg-[#A0A0A0]/10",
    ring: "ring-[#A0A0A0]/30",
    icon: "text-[#708090]",
    label: "bg-[#A0A0A0]/15 text-[#4a4a4a]",
  },
  gold: {
    bg: "bg-accent/10",
    ring: "ring-accent/30",
    icon: "text-accent",
    label: "bg-accent/15 text-accent-foreground",
  },
}

export function AchievementBadge({ achievement }: { achievement: Achievement }) {
  const Icon = ICON_MAP[achievement.icon] ?? Star
  const styles = TIER_STYLES[achievement.tier]
  const date = new Date(achievement.earnedOn).toLocaleDateString("en-AU", {
    month: "short",
    year: "numeric",
  })

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-border p-4 ring-1 shadow-sm",
        styles.bg,
        styles.ring,
      )}
      role="listitem"
    >
      <div
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border",
          styles.bg,
        )}
      >
        <Icon size={20} className={styles.icon} aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-bold text-foreground">{achievement.title}</p>
          <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold capitalize", styles.label)}>
            {achievement.tier}
          </span>
        </div>
        <p className="mt-0.5 text-xs text-foreground/60 leading-relaxed">{achievement.description}</p>
        <p className="mt-1 text-[10px] text-foreground/40">Earned {date}</p>
      </div>
    </div>
  )
}
