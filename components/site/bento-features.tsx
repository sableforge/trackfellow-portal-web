import {
  MapPinned,
  Bookmark,
  ClipboardList,
  LineChart,
  SlidersHorizontal,
  Users,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function BentoFeatures() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-1 ring-border">
            <Sparkles size={14} aria-hidden="true" />
            Everything in one tracker
          </p>
          <h2
            id="features-title"
            className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            A field-book that thinks like
            <span className="text-primary"> a trainer.</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 text-pretty">
            From the first article you drop to the post-session debrief —
            TrackFellow keeps the workflow simple and the data rich.
          </p>
        </header>

        <div className="mt-14 grid auto-rows-[minmax(180px,_auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {/* GPS Tracking — large */}
          <Card
            className="bg-primary text-primary-foreground sm:col-span-2 lg:col-span-3 lg:row-span-2"
            icon={<MapPinned size={20} />}
            tone="dark"
            eyebrow="GPS tracking"
            title="Lay the trail. We'll remember every step."
            body="Walk the path, drop articles in a tap and watch a live map render the route, distance and elapsed time — even offline."
          >
            <div className="mt-6 grid grid-cols-3 gap-3 text-primary-foreground">
              {[
                { k: "Length", v: "1.42 km" },
                { k: "Articles", v: "3 / 3" },
                { k: "Time", v: "12:04" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl bg-primary-foreground/10 p-3 ring-1 ring-primary-foreground/15"
                >
                  <p className="text-[10px] uppercase tracking-wide opacity-80">
                    {s.k}
                  </p>
                  <p className="font-display text-lg font-semibold">{s.v}</p>
                </div>
              ))}
            </div>
            {/* mini sparkline */}
            <svg
              viewBox="0 0 280 80"
              className="mt-6 h-20 w-full"
              aria-hidden="true"
            >
              <path
                d="M0 60 C 30 30, 60 70, 90 50 S 150 10, 180 35 S 240 70, 280 25"
                fill="none"
                stroke="#E0B841"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M0 60 C 30 30, 60 70, 90 50 S 150 10, 180 35 S 240 70, 280 25"
                fill="none"
                stroke="#E4D8CE"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="2 8"
                strokeOpacity="0.6"
              />
            </svg>
          </Card>

          {/* Article Marking */}
          <Card
            className="bg-accent text-accent-foreground sm:col-span-2 lg:col-span-3"
            icon={<Bookmark size={20} />}
            eyebrow="Article marking"
            title="One thumb. One tap."
            body="Drop scent articles right where you stand. Add notes, photos or wind direction without ever leaving the map."
          >
            <div className="mt-4 flex items-center gap-2">
              {["Glove", "Key", "Sock"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent-foreground/10 px-3 py-1 text-xs font-medium"
                >
                  · {t}
                </span>
              ))}
            </div>
          </Card>

          {/* Performance Analytics */}
          <Card
            className="bg-forest text-forest-foreground sm:col-span-2 lg:col-span-3"
            icon={<LineChart size={20} />}
            tone="dark"
            eyebrow="Performance analytics"
            title="Numbers your nose can trust."
            body="Track success rate, distance, weather, and time-on-track. Spot patterns and tailor your training to them."
          >
            <Bars />
          </Card>

          {/* Session Feedback */}
          <Card
            className="bg-card sm:col-span-1 lg:col-span-2"
            icon={<ClipboardList size={20} />}
            eyebrow="Session feedback"
            title="A debrief in 15 seconds."
            body="Quick scoring, free-text notes and tags that build a long-term picture of every team."
          />

          {/* Smart Settings */}
          <Card
            className="bg-secondary text-secondary-foreground sm:col-span-1 lg:col-span-2"
            icon={<SlidersHorizontal size={20} />}
            tone="dark"
            eyebrow="Your settings"
            title="Make it yours."
            body="Metric or imperial. Solo trainer or club. Custom article sets, breeds and goals — TrackFellow adapts."
          />

          {/* Community */}
          <Card
            className="bg-card sm:col-span-2 lg:col-span-2"
            icon={<Users size={20} />}
            eyebrow="Community"
            title="Share trails. Trade tips."
            body="Compare notes with trainers worldwide and follow @trackfellow for fresh inspiration each week."
          />
        </div>
      </div>
    </section>
  )
}

function Card({
  className,
  icon,
  eyebrow,
  title,
  body,
  children,
  tone = "light",
}: {
  className?: string
  icon: React.ReactNode
  eyebrow: string
  title: string
  body: string
  children?: React.ReactNode
  tone?: "dark" | "light"
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl p-6 ring-1 transition-transform sm:p-7",
        tone === "dark" ? "ring-white/10" : "ring-border",
        "hover:-translate-y-0.5",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-2xl",
          tone === "dark"
            ? "bg-white/10 text-current"
            : "bg-primary/10 text-primary",
        )}
        aria-hidden="true"
      >
        {icon}
      </div>
      <p
        className={cn(
          "mt-5 text-[11px] font-semibold uppercase tracking-[0.18em]",
          tone === "dark" ? "opacity-80" : "text-primary",
        )}
      >
        {eyebrow}
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-balance sm:text-[1.6rem]">
        {title}
      </h3>
      <p
        className={cn(
          "mt-2 max-w-prose text-sm leading-relaxed text-pretty sm:text-base",
          tone === "dark" ? "text-current/80" : "text-foreground/75",
        )}
      >
        {body}
      </p>
      {children}
    </article>
  )
}

function Bars() {
  const data = [40, 55, 38, 70, 60, 82, 76, 90, 84, 96]
  return (
    <div
      className="mt-5 grid h-24 grid-cols-10 items-end gap-1.5"
      role="img"
      aria-label="Improvement chart trending upward over ten sessions."
    >
      {data.map((v, i) => (
        <span
          key={i}
          className="block rounded-t-md bg-accent"
          style={{ height: `${v}%`, opacity: 0.4 + (i / data.length) * 0.6 }}
        />
      ))}
    </div>
  )
}
