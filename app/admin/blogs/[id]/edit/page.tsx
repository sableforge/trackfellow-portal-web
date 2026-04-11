"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { getBlog, type Blog } from "@/lib/firestore-service"
import { BlogEditor } from "@/components/admin/blog-editor"
import { Spinner } from "@/components/ui/spinner"

export default function EditBlogPage() {
  const params = useParams()
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlog() {
      const data = await getBlog(params.id as string)
      setBlog(data)
      setLoading(false)
    }
    fetchBlog()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Spinner className="h-8 w-8" />
      </div>
    )
  }

  if (!blog) {
    return <p className="text-center py-12 text-muted-foreground">Blog not found.</p>
  }

  return <BlogEditor blog={blog} />
}
