import { NextResponse } from "next/server"

export interface InstagramPost {
  id: string
  caption?: string
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  mediaUrl: string
  thumbnailUrl?: string
  permalink: string
  timestamp: string
  likeCount?: number
  commentsCount?: number
}

const INSTAGRAM_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN ?? ""
const GRAPH_API = "https://graph.instagram.com"

export async function GET() {
  if (!INSTAGRAM_TOKEN) {
    return NextResponse.json(
      { posts: [], error: "Instagram access token not configured" },
      { status: 200 }
    )
  }

  try {
    const fields = [
      "id",
      "caption",
      "media_type",
      "media_url",
      "thumbnail_url",
      "permalink",
      "timestamp",
      "like_count",
      "comments_count",
    ].join(",")

    const res = await fetch(
      `${GRAPH_API}/me/media?fields=${fields}&limit=6&access_token=${INSTAGRAM_TOKEN}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    )

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error("Instagram API error:", err)
      return NextResponse.json({ posts: [], error: "Failed to fetch Instagram posts" }, { status: 200 })
    }

    const data = await res.json()

    const posts: InstagramPost[] = (data.data ?? []).map(
      (item: Record<string, unknown>) => ({
        id: item.id as string,
        caption: (item.caption as string) ?? "",
        mediaType: item.media_type as InstagramPost["mediaType"],
        mediaUrl: item.media_url as string,
        thumbnailUrl: (item.thumbnail_url as string) ?? undefined,
        permalink: item.permalink as string,
        timestamp: item.timestamp as string,
        likeCount: (item.like_count as number) ?? undefined,
        commentsCount: (item.comments_count as number) ?? undefined,
      })
    )

    return NextResponse.json({ posts })
  } catch (error) {
    console.error("Instagram fetch error:", error)
    return NextResponse.json({ posts: [], error: "Failed to fetch Instagram posts" }, { status: 200 })
  }
}
