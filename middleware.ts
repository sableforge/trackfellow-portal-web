import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { pathname } = req.nextUrl

  // Protect all /dashboard routes
  if (pathname.startsWith("/dashboard") && !req.auth) {
    const loginUrl = new URL("/login", req.url)
    loginUrl.searchParams.set("callbackUrl", req.url)
    return NextResponse.redirect(loginUrl)
  }

  // If already signed in and visiting /login, redirect to dashboard
  if (pathname === "/login" && req.auth) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }
})

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
}
