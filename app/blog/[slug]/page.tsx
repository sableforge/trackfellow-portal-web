import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
import type { Metadata } from "next"
import { TopNav } from "@/components/site/top-nav"
import { SiteFooter } from "@/components/site/site-footer"
import { MobileCta } from "@/components/site/mobile-cta"
import { ARTICLES, getArticleBySlug } from "@/lib/articles"

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) {
    return { title: "Article not found" }
  }
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/blog/${article.slug}`,
      images: [{ url: article.cover, alt: article.alt }],
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.cover],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(article.date))

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <>
      <TopNav />
      <main id="main" className="relative pt-24 pb-16 sm:pt-28 sm:pb-24">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to articles
          </Link>

          <header className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              News &amp; Articles
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75 text-pretty">
              {article.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60">
              <span className="flex items-center gap-2">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime={article.date}>{formattedDate}</time>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} aria-hidden="true" />
                {article.readingTime}
              </span>
              <span className="text-foreground/70">By {article.author}</span>
            </div>
          </header>

          <figure className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-3xl ring-1 ring-border ring-soft">
            <Image
              src={article.cover}
              alt={article.alt}
              fill
              priority
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
          </figure>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {related.length > 0 && (
          <section
            aria-labelledby="related-title"
            className="mx-auto mt-20 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:px-8"
          >
            <header className="flex flex-wrap items-end justify-between gap-4">
              <h2
                id="related-title"
                className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
              >
                Keep reading
              </h2>
              <Link
                href="/#articles"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform hover:translate-x-0.5"
              >
                All articles
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </header>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {related.map((a) => (
                <li key={a.slug}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-transform hover:-translate-y-1 ring-soft">
                    <figure className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={a.cover}
                        alt={a.alt}
                        width={600}
                        height={375}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </figure>
                    <div className="flex flex-1 flex-col p-6">
                      <time
                        dateTime={a.date}
                        className="flex items-center gap-2 text-xs text-foreground/60"
                      >
                        <Calendar size={14} aria-hidden="true" />
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(a.date))}
                      </time>
                      <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight text-balance">
                        <Link
                          href={`/blog/${a.slug}`}
                          className="after:absolute after:inset-0"
                        >
                          {a.title}
                        </Link>
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70 text-pretty">
                        {a.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                        Read more
                        <ArrowRight
                          size={16}
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}
