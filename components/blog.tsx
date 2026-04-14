"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"
import { BookOpen, ArrowRight, Clock, User } from "lucide-react"
import Link from "next/link"
import { getEnabledBlogs, type Blog as BlogType } from "@/lib/firestore-service"

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Company: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    Training: "bg-primary/10 text-primary",
    Guide: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    SAR: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    Hunting: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
  }
  return colors[category] || "bg-secondary text-secondary-foreground"
}

export function Blog() {
  const [blogs, setBlogs] = useState<BlogType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await getEnabledBlogs()
        setBlogs(data)
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  const featuredPost = blogs.length > 0 ? blogs[0] : null
  const regularPosts = blogs.slice(1)

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <BookOpen className="w-4 h-4 mr-2" aria-hidden="true" />
            Blog
          </Badge>
          <h2
            id="blog-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-foreground text-balance"
          >
            Latest News & Articles
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Explore tips, guides, and stories from the world of dog tracking and training.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Spinner className="h-8 w-8" />
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No blog posts yet.</p>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <Card className="mb-8 overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video md:aspect-auto bg-secondary relative overflow-hidden">
                    {featuredPost.imageURL ? (
                      <img
                        src={featuredPost.imageURL}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center p-6">
                            <User className="w-16 h-16 mx-auto text-primary/60 mb-4" />
                            <span className="text-sm text-muted-foreground">Featured Story</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <CardContent className="flex flex-col justify-center p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={getCategoryColor(featuredPost.category)}>
                        {featuredPost.category}
                      </Badge>
                      {featuredPost.createdAt && (
                        <span className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                          {new Date(featuredPost.createdAt.seconds * 1000).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-outfit font-bold text-foreground mb-3">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Button className="w-fit group" asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Full Story
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* Blog Grid */}
            {regularPosts.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30 overflow-hidden"
                  >
                    <CardHeader className="p-0">
                      <div className="aspect-video bg-secondary relative overflow-hidden">
                        {post.imageURL ? (
                          <img
                            src={post.imageURL}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:opacity-80 transition-opacity" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                              <BookOpen className="w-12 h-12 text-primary/40" />
                            </div>
                          </>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className={`text-xs ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </Badge>
                        {post.createdAt && (
                          <span className="flex items-center text-xs text-muted-foreground">
                            <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                            {new Date(post.createdAt.seconds * 1000).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        Read Article
                        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
