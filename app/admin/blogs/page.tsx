"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getAllBlogs, toggleBlog, deleteBlog, type Blog } from "@/lib/firestore-service"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"

const TEMPLATE_LABELS: Record<number, string> = { 1: "Standard", 2: "Hero", 3: "Minimal" }

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  const fetchBlogs = async () => {
    setLoading(true)
    const data = await getAllBlogs()
    setBlogs(data)
    setLoading(false)
  }

  useEffect(() => { fetchBlogs() }, [])

  const handleToggle = async (id: string, currentEnabled: boolean) => {
    await toggleBlog(id, !currentEnabled)
    toast.success(currentEnabled ? "Blog disabled" : "Blog enabled")
    fetchBlogs()
  }

  const handleDelete = async (id: string) => {
    await deleteBlog(id)
    toast.success("Blog deleted")
    fetchBlogs()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-outfit font-bold">Blogs</h1>
        <Button asChild>
          <Link href="/admin/blogs/new">
            <Plus className="mr-2 h-4 w-4" />
            New Blog
          </Link>
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Spinner className="h-8 w-8" />
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No blog posts yet.</p>
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Template</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell className="font-medium max-w-[250px] truncate">
                    {blog.title}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{blog.category}</Badge>
                  </TableCell>
                  <TableCell>{TEMPLATE_LABELS[blog.templateID] ?? "Standard"}</TableCell>
                  <TableCell>
                    <Badge variant={blog.enabled ? "default" : "outline"}>
                      {blog.enabled ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleToggle(blog.id, blog.enabled)}
                        title={blog.enabled ? "Disable" : "Enable"}
                      >
                        {blog.enabled ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/admin/blogs/${blog.id}/edit`}>
                          <Pencil className="h-4 w-4" />
                        </Link>
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete blog?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently delete &quot;{blog.title}&quot;. This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(blog.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
