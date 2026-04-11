"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UserDashboard() {
  const { appUser } = useAuth()

  return (
    <div>
      <h1 className="text-3xl font-outfit font-bold mb-8">
        Welcome, {appUser?.displayName ?? "User"}
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p><strong>Email:</strong> {appUser?.email}</p>
          <p><strong>Role:</strong> {appUser?.role}</p>
        </CardContent>
      </Card>
    </div>
  )
}
