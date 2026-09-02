# TrackFellow Design System — Modern v2

This document is the canonical visual and verbal specification for the TrackFellow website. The modern v2 system evolves the original brand without discarding its recognizable palette, outdoor character, or practical field-tool identity.

## Brand principles

1. **Capable, not clinical.** TrackFellow is a serious training tool expressed with warmth.
2. **Field-ready clarity.** Interfaces must remain readable outdoors, usable with gloves, and understandable under time pressure.
3. **Progress without hype.** Prefer concrete product capabilities to unsupported popularity or performance claims.
4. **A knowledgeable fellow.** The voice is direct, encouraging, and grounded in real tracking terminology.

The brand name is written **TrackFellow** in prose and interface labels. The legal entity is **Trackfellow AB**.

## Color

| Role | Token | Value | Usage |
|---|---|---:|---|
| Canvas | `--background` | `#E4D8CE` | Page background; evolved from legacy sand `#E3D8CD` |
| Ink | `--foreground` | `#2A3318` | Primary text |
| Surface | `--card` | `#F2EBE3` | Cards and alternating sections |
| Primary | `--primary` | `#6D7935` | Actions, labels, brand emphasis; legacy olive continuity |
| Deep | `--forest` | `#384420` | High-contrast sections and primary dark actions |
| Accent | `--accent` | `#E0B841` | Highlights, focus, restrained moments of energy |
| Secondary | `--secondary` | `#745947` | Supporting actions and warm contrast |
| Muted | `--muted` | `#D4C5B5` | Quiet surfaces |
| Border | `--border` | `#BFAE9B` | Dividers and outlines |

Use semantic utilities (`bg-primary`, `text-foreground`, `border-border`) rather than raw hex values in components. Accent gold is not a body-text color on cream. Dark sections must pair `bg-forest` with `text-forest-foreground`.

## Typography

| Role | Family | Rules |
|---|---|---|
| Display | Bricolage Grotesque | Headlines, short numeric emphasis, store names; weight 600–800; tight tracking |
| Body | Plus Jakarta Sans | Navigation, prose, controls, labels; regular 400 and emphasis 600 |
| Data | System monospace | Step numbers, measurements, compact technical labels only |

Use one `h1` per page. Page titles are 40–72 px responsively; section titles 36–48 px; card titles 20–26 px. Body copy is 16–20 px with relaxed leading and a readable maximum line length. Do not introduce additional typefaces.

## Shape and elevation

| Element | Radius |
|---|---:|
| Form controls and compact UI | `--radius-control` / 16 px |
| Standard cards and imagery | `--radius-card` / 24 px |
| Hero or feature frames | `--radius-feature` / 32 px |
| Buttons, tags, badges | `--radius-pill` |

Surfaces use a 1 px semantic border. Use `ring-soft` for standard elevation and `ring-pop` only for a focal element. Avoid arbitrary shadows and radii.

## Layout and spacing

- Public content is constrained to `max-w-7xl` with `px-4 sm:px-6 lg:px-8`.
- Major sections use `py-20 sm:py-28` or `py-24 sm:py-32` when a more cinematic pause is justified.
- Default grid gap is 16–24 px; major two-column compositions use 48–56 px.
- All anchored sections use `scroll-mt-24` beneath the fixed header.
- Tap targets are at least 44 by 44 px on coarse pointers.

## Components

- **Primary action:** forest pill with forest foreground; gold is reserved for the strongest action on forest.
- **Secondary action:** card/background surface with semantic border.
- **Cards:** card or background surface, 24 px radius, semantic border, optional `ring-soft`.
- **Feature cards:** may use primary, forest, accent, or secondary backgrounds, but always use the paired semantic foreground token.
- **Images:** use `next/image`, an accurate intrinsic aspect ratio, and a `sizes` value. Only the page LCP image may use `priority`.
- **Navigation:** transparent over the hero, then cream with a subtle border and backdrop blur after scrolling.

## Motion and accessibility

- Motion supports hierarchy; it never carries essential meaning.
- Honor `prefers-reduced-motion` globally.
- Keyboard focus uses the gold 3 px outline and must not be suppressed.
- Decorative images use empty alt text. Informative images describe the scene or UI, not “image of.”
- Body copy and controls must meet WCAG 2.2 AA contrast.

## Content and search integrity

- Use verifiable capabilities and official company/store data.
- Do not publish ratings, user counts, geographic reach, or outcomes without an owned source and review date.
- Each public page has a unique title, description, canonical URL, and one descriptive `h1`.
- Articles include visible author/date information and matching `BlogPosting` structured data.
- Product terminology should consistently connect TrackFellow with mantrailing, dog tracking, GPS tracks, articles, session feedback, statistics, reports, and track sharing.
