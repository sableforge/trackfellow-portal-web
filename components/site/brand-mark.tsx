import Image from "next/image"
import { cn } from "@/lib/utils"

export function BrandMark({
  className,
}: {
  className?: string
  /** @deprecated – logo-only mark; kept for API compatibility */
  showWordmark?: boolean
}) {
  return (
    <span
      className={cn("inline-flex items-center", className)}
      aria-label="TrackFellow"
    >
      <Image
        src="/trackfellow-logo.png"
        alt="TrackFellow"
        width={140}
        height={36}
        className="h-9 w-auto object-contain"
        priority
      />
    </span>
  )
}
