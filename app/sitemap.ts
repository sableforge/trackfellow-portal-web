import type { MetadataRoute } from "next"
import { ARTICLES } from "@/lib/articles"
import { absoluteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl(), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/faq"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/sponsorship"), changeFrequency: "monthly", priority: 0.6 },
    ...ARTICLES.map((article) => ({
      url: absoluteUrl(`/blog/${article.slug}`),
      lastModified: new Date(article.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ]
}
