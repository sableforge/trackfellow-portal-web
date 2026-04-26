import { cn } from "@/lib/utils"

/**
 * Stylized in-app "track" screen used inside the PhoneFrame mockup.
 */
export function TrackMapScreen({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-[#EDE3D5] text-foreground",
        className,
      )}
    >
      {/* status bar */}
      <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-semibold tracking-wide text-foreground/70">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-3 rounded-sm bg-foreground/60" />
          <span className="h-2 w-2 rounded-full bg-foreground/60" />
          <span className="h-2 w-4 rounded-sm bg-foreground/60" />
        </span>
      </div>

      {/* header */}
      <div className="px-5 pt-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-primary">
          Live track · 04:12
        </p>
        <h3 className="font-display text-xl font-semibold">Forest Loop · Bera</h3>
      </div>

      {/* map */}
      <div className="relative mx-3 mt-3 h-[58%] overflow-hidden rounded-2xl bg-[#D8CDB8] ring-1 ring-border/60">
        {/* faux topo lines */}
        <svg
          viewBox="0 0 300 360"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <pattern id="topo" width="22" height="22" patternUnits="userSpaceOnUse">
              <path
                d="M0 11 Q 5.5 5 11 11 T 22 11"
                fill="none"
                stroke="#A8997F"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="300" height="360" fill="url(#topo)" />
          {/* fields */}
          <path
            d="M-20 240 Q 80 200 180 240 T 340 240 L 340 360 L -20 360 Z"
            fill="#C7BF9F"
            opacity="0.7"
          />
          <path
            d="M-20 80 Q 60 40 140 80 T 320 80 L 320 0 L -20 0 Z"
            fill="#C2C089"
            opacity="0.5"
          />
          {/* track path */}
          <path
            d="M40 320 C 80 280, 60 220, 110 200 S 200 220, 190 160 S 100 120, 140 70 S 240 90, 260 50"
            fill="none"
            stroke="#6D7935"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="2 10"
          />
          <path
            d="M40 320 C 80 280, 60 220, 110 200 S 200 220, 190 160 S 100 120, 140 70 S 240 90, 260 50"
            fill="none"
            stroke="#6D7935"
            strokeWidth="2"
            strokeOpacity="0.4"
          />
          {/* article markers */}
          {[
            { cx: 110, cy: 200 },
            { cx: 190, cy: 160 },
            { cx: 140, cy: 70 },
          ].map((m, i) => (
            <g key={i}>
              <circle cx={m.cx} cy={m.cy} r="10" fill="#E0B841" />
              <circle cx={m.cx} cy={m.cy} r="4" fill="#384420" />
            </g>
          ))}
          {/* dog/start */}
          <circle cx="40" cy="320" r="9" fill="#384420" />
          <circle cx="40" cy="320" r="4" fill="#E0B841" />
          {/* end flag */}
          <g transform="translate(254 44)">
            <circle r="9" fill="#745947" />
            <circle r="3" fill="#E4D8CE" />
          </g>
        </svg>

        {/* scent ping */}
        <span
          aria-hidden="true"
          className="absolute left-[33%] top-[42%] block h-6 w-6 rounded-full bg-primary/40 animate-scent"
        />
      </div>

      {/* metric chips */}
      <div className="grid grid-cols-3 gap-2 px-5 pt-4">
        <div className="rounded-xl bg-card p-2 ring-1 ring-border/60">
          <p className="text-[9px] uppercase tracking-wide text-muted-foreground">Length</p>
          <p className="font-display text-sm font-semibold">1.42 km</p>
        </div>
        <div className="rounded-xl bg-card p-2 ring-1 ring-border/60">
          <p className="text-[9px] uppercase tracking-wide text-muted-foreground">Articles</p>
          <p className="font-display text-sm font-semibold">3 / 3</p>
        </div>
        <div className="rounded-xl bg-accent p-2 text-accent-foreground">
          <p className="text-[9px] uppercase tracking-wide">Score</p>
          <p className="font-display text-sm font-semibold">96%</p>
        </div>
      </div>

      {/* bottom action bar */}
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl bg-forest p-2 pl-4 text-forest-foreground">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-foreground">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <p className="text-[11px] font-medium">Run trail</p>
        </div>
        <span className="rounded-full bg-forest-foreground/15 px-3 py-1 text-[10px] font-medium">
          Lay · Run · Review
        </span>
      </div>
    </div>
  )
}
