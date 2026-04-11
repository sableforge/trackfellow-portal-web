"use client"

import { useEffect, useState } from "react"
import { collection, getCountFromServer } from "firebase/firestore"
import { getFirebaseDb } from "@/lib/firebase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, HelpCircle, Users } from "lucide-react"

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ blogs: 0, faqs: 0, users: 0 })

  useEffect(() => {
    async function fetchCounts() {
      const fireDb = getFirebaseDb()
      const [blogSnap, faqSnap, userSnap] = await Promise.all([
        getCountFromServer(collection(fireDb, "blogs")),
        getCountFromServer(collection(fireDb, "faqs")),
        getCountFromServer(collection(fireDb, "users")),
      ])
      setCounts({
        blogs: blogSnap.data().count,
        faqs: faqSnap.data().count,
        users: userSnap.data().count,
      })
    }
    fetchCounts()
  }, [])

  const stats = [
    { label: "Blog Posts", value: counts.blogs, icon: FileText },
    { label: "FAQs", value: counts.faqs, icon: HelpCircle },
    { label: "Users", value: counts.users, icon: Users },
  ]

  return (
    <div>
      <h1 className="text-3xl font-outfit font-bold mb-8">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
