"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { type User } from "firebase/auth"
import {
  onAuthChange,
  getRoleFromClaims,
  signInWithGoogle,
  signInWithApple,
  signInAdmin,
  signOut,
  type AppUser,
  type UserRole,
} from "@/lib/auth-service"

interface AuthContextType {
  user: User | null
  appUser: AppUser | null
  role: UserRole | null
  loading: boolean
  signInWithGoogle: () => Promise<AppUser>
  signInWithApple: () => Promise<AppUser>
  signInAdmin: (email: string, password: string) => Promise<AppUser>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [appUser, setAppUser] = useState<AppUser | null>(null)
  const [role, setRole] = useState<UserRole | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthChange(async (firebaseUser) => {
      setUser(firebaseUser)
      if (firebaseUser) {
        const userRole = await getRoleFromClaims(firebaseUser)
        setRole(userRole)
        setAppUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? "",
          displayName: firebaseUser.displayName ?? "",
          photoURL: firebaseUser.photoURL,
          role: userRole,
          createdAt: null,
          updatedAt: null,
        })
      } else {
        setRole(null)
        setAppUser(null)
      }
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const handleSignInWithGoogle = async () => {
    const result = await signInWithGoogle()
    setAppUser(result)
    setRole(result.role)
    return result
  }

  const handleSignInWithApple = async () => {
    const result = await signInWithApple()
    setAppUser(result)
    setRole(result.role)
    return result
  }

  const handleSignInAdmin = async (email: string, password: string) => {
    const result = await signInAdmin(email, password)
    setAppUser(result)
    setRole(result.role)
    return result
  }

  const handleSignOut = async () => {
    await signOut()
    setAppUser(null)
    setRole(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        appUser,
        role,
        loading,
        signInWithGoogle: handleSignInWithGoogle,
        signInWithApple: handleSignInWithApple,
        signInAdmin: handleSignInAdmin,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
