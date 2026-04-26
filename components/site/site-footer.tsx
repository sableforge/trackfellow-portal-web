import { BrandMark } from "./brand-mark"

const NAV = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#download" },
      { label: "Download", href: "#download" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "#story" },
      { label: "Blog", href: "#articles" },
      { label: "Community", href: "https://instagram.com/trackfellow" },
      { label: "Contact", href: "mailto:hello@trackfellow.com" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
}

export function SiteFooter() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="border-t border-border bg-card"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* brand */}
          <div className="space-y-5 lg:col-span-5">
            <BrandMark />
            <p className="max-w-xs text-sm leading-relaxed text-foreground/70">
              The pocket field-book for mantrailing and tracking dog teams.
              Available on iOS and Android.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com/trackfellow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8A3.6 3.6 0 007.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6A3.6 3.6 0 0016.4 4H7.6zM17 6a1 1 0 110 2 1 1 0 010-2zm-5 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/trackfellow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* sitemap */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {Object.values(NAV).map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-foreground/70 transition-colors hover:text-foreground hover:underline"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-foreground/60 sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} TrackFellow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
