"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RichTextEditor } from "@/components/admin/rich-text-editor"
import { createBlog, updateBlog, type Blog, type BlogInput } from "@/lib/firestore-service"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "sonner"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

const TEMPLATES = [
  { id: 1, label: "Standard" },
  { id: 2, label: "Hero" },
  { id: 3, label: "Minimal" },
]

const CATEGORIES = ["Company", "Training", "Guide", "SAR", "Hunting", "News", "Tips"]

interface BlogEditorProps {
  blog?: Blog
}

export function BlogEditor({ blog }: BlogEditorProps) {
  const router = useRouter()
  const { appUser } = useAuth()
  const isEditing = !!blog

  const [title, setTitle] = useState(blog?.title ?? "")
  const [slug, setSlug] = useState(blog?.slug ?? "")
  const [excerpt, setExcerpt] = useState(blog?.excerpt ?? "")
  const [imageURL, setImageURL] = useState(blog?.imageURL ?? "")
  const [content, setContent] = useState(blog?.content ?? "")
  const [category, setCategory] = useState(blog?.category ?? "")
  const [templateID, setTemplateID] = useState(blog?.templateID ?? 1)
  const [enabled, setEnabled] = useState(blog?.enabled ?? true)
  const [saving, setSaving] = useState(false)

  const handleTitleChange = (value: string) => {
    setTitle(value)
    if (!isEditing) {
      setSlug(slugify(value))
    }
  }

  const handleSave = async () => {
    if (!title || !slug || !content) {
      toast.error("Title, slug, and content are required.")
      return
    }

    setSaving(true)
    try {
      const data: BlogInput = {
        title,
        slug,
        excerpt,
        imageURL,
        content,
        category,
        templateID,
        enabled,
        author: appUser?.displayName ?? "",
        authorId: appUser?.uid ?? "",
      }

      if (isEditing && blog) {
        await updateBlog(blog.id, data)
        toast.success("Blog updated successfully.")
      } else {
        await createBlog(data)
        toast.success("Blog created successfully.")
      }
      router.push("/admin/blogs")
    } catch (error) {
      toast.error("Failed to save blog.")
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/blogs">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-outfit font-bold">
          {isEditing ? "Edit Blog" : "New Blog"}
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Blog post title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="blog-post-slug"
            />
          </div>

          <div className="space-y-2">
            <Label>Content</Label>
            <RichTextEditor content={content} onChange={setContent} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short description..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageURL">Image URL</Label>
            <Input
              id="imageURL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              placeholder="https://..."
            />
            {imageURL && (
              <img
                src={imageURL}
                alt="Preview"
                className="mt-2 rounded-lg border border-border max-h-40 object-cover w-full"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Template</Label>
            <Select value={String(templateID)} onValueChange={(v) => setTemplateID(Number(v))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TEMPLATES.map((t) => (
                  <SelectItem key={t.id} value={String(t.id)}>{t.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="enabled"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
              className="rounded"
            />
            <Label htmlFor="enabled">Published</Label>
          </div>

          <Button onClick={handleSave} disabled={saving} className="w-full">
            <Save className="mr-2 h-4 w-4" />
            {saving ? "Saving..." : isEditing ? "Update Blog" : "Create Blog"}
          </Button>
        </div>
      </div>
    </div>
  )
}
