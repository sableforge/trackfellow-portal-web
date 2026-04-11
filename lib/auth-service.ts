import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  OAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth"
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore"
import { getFirebaseAuth, getFirebaseDb } from "./firebase"

export type UserRole = "admin" | "user"

export interface AppUser {
  uid: string
  email: string
  displayName: string
  photoURL: string | null
  role: UserRole
  createdAt: unknown
  updatedAt: unknown
}

const googleProvider = new GoogleAuthProvider()
const appleProvider = new OAuthProvider("apple.com")
appleProvider.addScope("email")
appleProvider.addScope("name")

async function getOrCreateUserDoc(firebaseUser: User): Promise<AppUser> {
  const db = getFirebaseDb()
  const userRef = doc(db, "users", firebaseUser.uid)
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    const data = userSnap.data() as AppUser
    await setDoc(userRef, { updatedAt: serverTimestamp() }, { merge: true })
    return { ...data, uid: firebaseUser.uid }
  }

  const newUser: Omit<AppUser, "uid"> = {
    email: firebaseUser.email ?? "",
    displayName: firebaseUser.displayName ?? "",
    photoURL: firebaseUser.photoURL,
    role: "user",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  await setDoc(userRef, newUser)
  return { ...newUser, uid: firebaseUser.uid }
}

export async function checkAdminClaim(user: User): Promise<boolean> {
  const tokenResult = await user.getIdTokenResult()
  return tokenResult.claims.admin === true
}

export async function getRoleFromClaims(user: User): Promise<UserRole> {
  const isAdmin = await checkAdminClaim(user)
  return isAdmin ? "admin" : "user"
}

export async function signInWithGoogle(): Promise<AppUser> {
  const result = await signInWithPopup(getFirebaseAuth(), googleProvider)
  return getOrCreateUserDoc(result.user)
}

export async function signInWithApple(): Promise<AppUser> {
  const result = await signInWithPopup(getFirebaseAuth(), appleProvider)
  return getOrCreateUserDoc(result.user)
}

export async function signInAdmin(email: string, password: string): Promise<AppUser> {
  const result = await signInWithEmailAndPassword(getFirebaseAuth(), email, password)
  const isAdmin = await checkAdminClaim(result.user)
  if (!isAdmin) {
    await firebaseSignOut(getFirebaseAuth())
    throw new Error("This account does not have admin privileges.")
  }
  return {
    uid: result.user.uid,
    email: result.user.email ?? "",
    displayName: result.user.displayName ?? email,
    photoURL: result.user.photoURL,
    role: "admin",
    createdAt: null,
    updatedAt: null,
  }
}

export async function signOut(): Promise<void> {
  await firebaseSignOut(getFirebaseAuth())
}

export async function getUserRole(uid: string): Promise<UserRole | null> {
  const db = getFirebaseDb()
  const userRef = doc(db, "users", uid)
  const userSnap = await getDoc(userRef)
  if (!userSnap.exists()) return null
  return (userSnap.data() as AppUser).role
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(getFirebaseAuth(), callback)
}
