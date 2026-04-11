import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  where,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore"
import { getFirebaseDb } from "./firebase"

// ── Blog types ──

export interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  imageURL: string
  category: string
  templateID: number // 1 = Standard, 2 = Hero, 3 = Minimal
  author: string
  authorId: string
  enabled: boolean
  createdAt: Timestamp | null
  updatedAt: Timestamp | null
}

export type BlogInput = Omit<Blog, "id" | "createdAt" | "updatedAt">

// ── FAQ types ──

export interface FAQ {
  id: string
  question: string
  answer: string
  order: number
  enabled: boolean
  createdAt: Timestamp | null
  updatedAt: Timestamp | null
}

export type FAQInput = Omit<FAQ, "id" | "createdAt" | "updatedAt">

// ── Blog CRUD ──

function blogsRef() {
  return collection(getFirebaseDb(), "blogs")
}

export async function createBlog(data: BlogInput): Promise<string> {
  const docRef = await addDoc(blogsRef(), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return docRef.id
}

export async function updateBlog(id: string, data: Partial<BlogInput>): Promise<void> {
  await updateDoc(doc(getFirebaseDb(), "blogs", id), {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

export async function deleteBlog(id: string): Promise<void> {
  await deleteDoc(doc(getFirebaseDb(), "blogs", id))
}

export async function toggleBlog(id: string, enabled: boolean): Promise<void> {
  await updateDoc(doc(getFirebaseDb(), "blogs", id), { enabled, updatedAt: serverTimestamp() })
}

export async function getBlog(id: string): Promise<Blog | null> {
  const snap = await getDoc(doc(getFirebaseDb(), "blogs", id))
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() } as Blog
}

export async function getAllBlogs(): Promise<Blog[]> {
  const q = query(blogsRef(), orderBy("createdAt", "desc"))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Blog)
}

export async function getEnabledBlogs(): Promise<Blog[]> {
  const q = query(blogsRef(), where("enabled", "==", true), orderBy("createdAt", "desc"))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Blog)
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const q = query(blogsRef(), where("slug", "==", slug), where("enabled", "==", true))
  const snap = await getDocs(q)
  if (snap.empty) return null
  const d = snap.docs[0]
  return { id: d.id, ...d.data() } as Blog
}

// ── FAQ CRUD ──

function faqsRef() {
  return collection(getFirebaseDb(), "faqs")
}

export async function createFAQ(data: FAQInput): Promise<string> {
  const docRef = await addDoc(faqsRef(), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return docRef.id
}

export async function updateFAQ(id: string, data: Partial<FAQInput>): Promise<void> {
  await updateDoc(doc(getFirebaseDb(), "faqs", id), {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

export async function deleteFAQ(id: string): Promise<void> {
  await deleteDoc(doc(getFirebaseDb(), "faqs", id))
}

export async function toggleFAQ(id: string, enabled: boolean): Promise<void> {
  await updateDoc(doc(getFirebaseDb(), "faqs", id), { enabled, updatedAt: serverTimestamp() })
}

export async function getAllFAQs(): Promise<FAQ[]> {
  const q = query(faqsRef(), orderBy("order", "asc"))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as FAQ)
}

export async function getEnabledFAQs(): Promise<FAQ[]> {
  const q = query(faqsRef(), where("enabled", "==", true), orderBy("order", "asc"))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as FAQ)
}
