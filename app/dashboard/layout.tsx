import type { Metadata } from "next"
import { auth } from "@/auth"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { SessionProvider } from "@/components/dashboard/session-provider"

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s · TrackFellow Dashboard",
  },
  description: "Your TrackFellow member dashboard — dogs, sessions, and performance analytics.",
  robots: { index: false },
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <div className="flex h-screen flex-col overflow-hidden bg-background lg:flex-row">
        <DashboardNav session={session} />
        <main
          id="main"
          className="flex-1 overflow-y-auto"
        >
          {children}
        </main>
      </div>
    </SessionProvider>
  )
}
