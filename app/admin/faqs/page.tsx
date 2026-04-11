"use client"

import { useEffect, useState } from "react"
import { getAllFAQs, createFAQ, updateFAQ, deleteFAQ, toggleFAQ, type FAQ } from "@/lib/firestore-service"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Pencil, Trash2, Eye, EyeOff, Save } from "lucide-react"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"

export default function AdminFAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingFAQ, setEditingFAQ] = useState<FAQ | null>(null)
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [order, setOrder] = useState(0)
  const [enabled, setEnabled] = useState(true)
  const [saving, setSaving] = useState(false)

  const fetchFAQs = async () => {
    setLoading(true)
    const data = await getAllFAQs()
    setFaqs(data)
    setLoading(false)
  }

  useEffect(() => { fetchFAQs() }, [])

  const resetForm = () => {
    setQuestion("")
    setAnswer("")
    setOrder(faqs.length)
    setEnabled(true)
    setEditingFAQ(null)
  }

  const openNew = () => {
    resetForm()
    setOrder(faqs.length)
    setDialogOpen(true)
  }

  const openEdit = (faq: FAQ) => {
    setEditingFAQ(faq)
    setQuestion(faq.question)
    setAnswer(faq.answer)
    setOrder(faq.order)
    setEnabled(faq.enabled)
    setDialogOpen(true)
  }

  const handleSave = async () => {
    if (!question || !answer) {
      toast.error("Question and answer are required.")
      return
    }
    setSaving(true)
    try {
      if (editingFAQ) {
        await updateFAQ(editingFAQ.id, { question, answer, order, enabled })
        toast.success("FAQ updated")
      } else {
        await createFAQ({ question, answer, order, enabled })
        toast.success("FAQ created")
      }
      setDialogOpen(false)
      resetForm()
      fetchFAQs()
    } catch (error) {
      toast.error("Failed to save FAQ")
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  const handleToggle = async (id: string, currentEnabled: boolean) => {
    await toggleFAQ(id, !currentEnabled)
    toast.success(currentEnabled ? "FAQ disabled" : "FAQ enabled")
    fetchFAQs()
  }

  const handleDelete = async (id: string) => {
    await deleteFAQ(id)
    toast.success("FAQ deleted")
    fetchFAQs()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-outfit font-bold">FAQs</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNew}>
              <Plus className="mr-2 h-4 w-4" />
              New FAQ
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingFAQ ? "Edit FAQ" : "New FAQ"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="faq-question">Question</Label>
                <Input
                  id="faq-question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Enter the question"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="faq-answer">Answer</Label>
                <Textarea
                  id="faq-answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Enter the answer"
                  rows={5}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="faq-order">Order</Label>
                  <Input
                    id="faq-order"
                    type="number"
                    value={order}
                    onChange={(e) => setOrder(Number(e.target.value))}
                  />
                </div>
                <div className="flex items-end gap-2 pb-1">
                  <input
                    type="checkbox"
                    id="faq-enabled"
                    checked={enabled}
                    onChange={(e) => setEnabled(e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="faq-enabled">Enabled</Label>
                </div>
              </div>
              <Button onClick={handleSave} disabled={saving} className="w-full">
                <Save className="mr-2 h-4 w-4" />
                {saving ? "Saving..." : editingFAQ ? "Update FAQ" : "Create FAQ"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Spinner className="h-8 w-8" />
        </div>
      ) : faqs.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No FAQs yet.</p>
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Question</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {faqs.map((faq) => (
                <TableRow key={faq.id}>
                  <TableCell className="text-muted-foreground">{faq.order}</TableCell>
                  <TableCell className="font-medium max-w-[350px] truncate">
                    {faq.question}
                  </TableCell>
                  <TableCell>
                    <Badge variant={faq.enabled ? "default" : "outline"}>
                      {faq.enabled ? "Enabled" : "Disabled"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleToggle(faq.id, faq.enabled)}
                        title={faq.enabled ? "Disable" : "Enable"}
                      >
                        {faq.enabled ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => openEdit(faq)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete FAQ?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently delete this FAQ. This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(faq.id)}>
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
