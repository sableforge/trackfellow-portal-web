"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getEnabledBlogs, type Blog } from "@/lib/firestore-service"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Clock, User, ArrowRight } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

export default function BlogIndexPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getEnabledBlogs()
      setBlogs(data)
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tips, guides, and stories from the Trackfellow community.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Spinner className="h-8 w-8" />
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No blog posts yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  {blog.imageURL && (
                    <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
                      <img
                        src={blog.imageURL}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit mb-2">{blog.category}</Badge>
                    <h2 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {blog.author}
                        </span>
                        {blog.createdAt && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
