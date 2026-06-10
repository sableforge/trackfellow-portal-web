import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Medal } from "lucide-react"
import type { Dog } from "@/lib/mock-dashboard"

export function DogCard({ dog }: { dog: Dog }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      {/* Rank badge */}
      <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground shadow">
        <Medal size={12} aria-hidden="true" />
        #{dog.rank} Global
      </div>

      {/* Photo */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={dog.photoUrl}
          alt={`${dog.name} the ${dog.breed}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">{dog.name}</h3>
            <p className="text-sm text-foreground/60">{dog.breed} · {dog.age} yrs</p>
          </div>
        </div>

        {/* Stats row */}
        <dl className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-background px-3 py-2 text-center">
            <dt className="text-xs text-foreground/50">Sessions</dt>
            <dd className="font-display text-lg font-bold text-foreground">{dog.totalSessions}</dd>
          </div>
          <div className="rounded-xl bg-background px-3 py-2 text-center">
            <dt className="text-xs text-foreground/50">Distance</dt>
            <dd className="font-display text-lg font-bold text-foreground">{dog.totalDistanceKm}<span className="text-xs font-normal"> km</span></dd>
          </div>
          <div className="rounded-xl bg-background px-3 py-2 text-center">
            <dt className="text-xs text-foreground/50">Avg Score</dt>
            <dd className="font-display text-lg font-bold text-primary">{dog.avgScorePercent}%</dd>
          </div>
        </dl>

        <Link
          href={`/dashboard/dogs/${dog.id}`}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-forest px-4 py-2.5 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
        >
          View details
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
