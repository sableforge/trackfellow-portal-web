"use client"

import { useState } from "react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

type RequestType = "brand-ambassador" | "sponsorship" | ""

interface FormState {
  name: string
  email: string
  phone: string
  requestType: RequestType
  organization: string
  role: string
  socialHandle: string
  followers: string
  message: string
}

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  requestType: "",
  organization: "",
  role: "",
  socialHandle: "",
  followers: "",
  message: "",
}

type Status = "idle" | "submitting" | "success" | "error"

export function SponsorshipForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<Status>("idle")

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")

    // Simulate a network request — replace with a real API call / email service
    await new Promise((res) => setTimeout(res, 1200))

    // In production, POST to an API route that emails the admin
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-3xl bg-card px-8 py-16 text-center ring-1 ring-border ring-soft">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 size={32} />
        </span>
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Request received!
        </h2>
        <p className="max-w-sm text-base leading-relaxed text-foreground/70 text-pretty">
          Thanks for reaching out. We&apos;ll review your request and get back
          to you within a few business days.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(EMPTY)
            setStatus("idle")
          }}
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-card ring-1 ring-border ring-soft"
    >
      {/* Section: Contact details */}
      <fieldset className="border-0 p-6 sm:p-8">
        <legend className="font-display text-lg font-semibold tracking-tight">
          Your details
        </legend>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">
              Full name <span className="text-destructive" aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              Email address <span className="text-destructive" aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone number
              <span className="ml-1 text-xs text-foreground/50">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 555 000 0000"
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="role" className="text-sm font-medium">
              Your role / title
            </label>
            <input
              id="role"
              name="role"
              type="text"
              value={form.role}
              onChange={handleChange}
              placeholder="e.g. K9 trainer, Club president"
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
      </fieldset>

      <hr className="border-border" />

      {/* Section: Request type */}
      <fieldset className="border-0 p-6 sm:p-8">
        <legend className="font-display text-lg font-semibold tracking-tight">
          Request type
        </legend>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {(
            [
              {
                value: "brand-ambassador",
                title: "Brand ambassador",
                desc: "Represent TrackFellow in your community and on social media.",
              },
              {
                value: "sponsorship",
                title: "Sponsorship",
                desc: "Partner with TrackFellow for events, clubs, or competitions.",
              },
            ] as { value: RequestType; title: string; desc: string }[]
          ).map((opt) => {
            const active = form.requestType === opt.value
            return (
              <label
                key={opt.value}
                className={`flex cursor-pointer flex-col gap-1 rounded-2xl border p-5 transition-all ${
                  active
                    ? "border-primary bg-primary/8 ring-2 ring-primary/30"
                    : "border-border bg-background hover:border-primary/50 hover:bg-muted/60"
                }`}
              >
                <input
                  type="radio"
                  name="requestType"
                  value={opt.value}
                  required
                  checked={active}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="font-semibold text-foreground">{opt.title}</span>
                <span className="text-sm leading-relaxed text-foreground/65">
                  {opt.desc}
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <hr className="border-border" />

      {/* Section: Organisation & reach */}
      <fieldset className="border-0 p-6 sm:p-8">
        <legend className="font-display text-lg font-semibold tracking-tight">
          Organisation &amp; reach
        </legend>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="organization" className="text-sm font-medium">
              Club / organisation name
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              value={form.organization}
              onChange={handleChange}
              placeholder="e.g. Nordic Mantrailing Club"
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="socialHandle" className="text-sm font-medium">
              Social media handle
            </label>
            <input
              id="socialHandle"
              name="socialHandle"
              type="text"
              value={form.socialHandle}
              onChange={handleChange}
              placeholder="@yourhandle"
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="followers" className="text-sm font-medium">
              Approximate audience / follower count
            </label>
            <select
              id="followers"
              name="followers"
              value={form.followers}
              onChange={handleChange}
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            >
              <option value="">Select a range</option>
              <option value="under-1k">Under 1,000</option>
              <option value="1k-5k">1,000 – 5,000</option>
              <option value="5k-20k">5,000 – 20,000</option>
              <option value="20k-100k">20,000 – 100,000</option>
              <option value="100k+">100,000+</option>
            </select>
          </div>
        </div>
      </fieldset>

      <hr className="border-border" />

      {/* Section: Message */}
      <fieldset className="border-0 p-6 sm:p-8">
        <legend className="font-display text-lg font-semibold tracking-tight">
          Tell us more
        </legend>
        <div className="mt-5 flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium">
            Message <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Share your background, what you&apos;re hoping to achieve with TrackFellow, and any upcoming events or projects you have in mind."
            className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-foreground/40 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
          <p className="text-xs text-foreground/50">Minimum 40 characters.</p>
        </div>
      </fieldset>

      {/* Footer */}
      <div className="flex flex-col items-start gap-4 border-t border-border px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle size={16} aria-hidden="true" />
            Something went wrong. Please try again.
          </p>
        )}
        <p className="text-xs text-foreground/50 sm:max-w-xs">
          By submitting this form you agree to be contacted by the TrackFellow
          team regarding your request.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-forest-foreground shadow-sm transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <span
                className="h-4 w-4 animate-spin rounded-full border-2 border-forest-foreground border-t-transparent"
                aria-hidden="true"
              />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} aria-hidden="true" />
              Submit request
            </>
          )}
        </button>
      </div>
    </form>
  )
}
