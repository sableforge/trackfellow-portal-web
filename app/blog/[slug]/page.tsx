"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { getBlogBySlug, type Blog } from "@/lib/firestore-service"
import { BlogTemplate } from "@/components/blog/blog-templates"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Spinner } from "@/components/ui/spinner"

export default function BlogDetailPage() {
  const params = useParams()
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlog() {
      const data = await getBlogBySlug(params.slug as string)
      setBlog(data)
      setLoading(false)
    }
    fetchBlog()
  }, [params.slug])

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {loading ? (
          <div className="flex justify-center py-12">
            <Spinner className="h-8 w-8" />
          </div>
        ) : !blog ? (
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-2">Post Not Found</h1>
            <p className="text-muted-foreground">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        ) : (
          <BlogTemplate blog={blog} />
        )}
      </main>
      <Footer />
    </>
  )
}
