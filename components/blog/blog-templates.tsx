import type { Blog } from "@/lib/firestore-service"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"

interface BlogTemplateProps {
  blog: Blog
}

/** Template 1 – Standard: image on top, content below */
export function BlogTemplateStandard({ blog }: BlogTemplateProps) {
  return (
    <article className="max-w-3xl mx-auto">
      {blog.imageURL && (
        <img
          src={blog.imageURL}
          alt={blog.title}
          className="w-full aspect-[16/9] object-cover rounded-xl mb-8"
        />
      )}
      <Badge variant="secondary" className="mb-4">{blog.category}</Badge>
      <h1 className="text-3xl sm:text-4xl font-outfit font-bold tracking-tight mb-4">
        {blog.title}
      </h1>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
        <span className="flex items-center gap-1">
          <User className="h-4 w-4" />
          {blog.author}
        </span>
        {blog.createdAt && (
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
          </span>
        )}
      </div>
      <div
        className="prose prose-sm sm:prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  )
}

/** Template 2 – Hero: full-width hero image with overlay title */
export function BlogTemplateHero({ blog }: BlogTemplateProps) {
  return (
    <article>
      <div className="relative w-full aspect-[21/9] mb-8 rounded-xl overflow-hidden">
        {blog.imageURL ? (
          <img
            src={blog.imageURL}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-secondary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <Badge variant="secondary" className="mb-3">{blog.category}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-white tracking-tight mb-3">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {blog.author}
            </span>
            {blog.createdAt && (
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div
          className="prose prose-sm sm:prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </article>
  )
}

/** Template 3 – Minimal: no image, clean typography */
export function BlogTemplateMinimal({ blog }: BlogTemplateProps) {
  return (
    <article className="max-w-2xl mx-auto">
      <Badge variant="outline" className="mb-4">{blog.category}</Badge>
      <h1 className="text-3xl sm:text-4xl font-outfit font-bold tracking-tight mb-2">
        {blog.title}
      </h1>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
        <span>{blog.author}</span>
        {blog.createdAt && (
          <span>{new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}</span>
        )}
      </div>
      <div
        className="prose prose-sm sm:prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  )
}

/** Selects the appropriate template based on templateID */
export function BlogTemplate({ blog }: BlogTemplateProps) {
  switch (blog.templateID) {
    case 2:
      return <BlogTemplateHero blog={blog} />
    case 3:
      return <BlogTemplateMinimal blog={blog} />
    default:
      return <BlogTemplateStandard blog={blog} />
  }
}
