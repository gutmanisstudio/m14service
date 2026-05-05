# M14service — demo

Next.js 16 (App Router) + Tailwind v4 + Lenis smooth scroll.

## Run

```bash
npm run dev
```

Open http://localhost:3000 (the Claude Preview launch config uses port 3005).

## Drop your own images in

All paths below are relative to `public/`. The placeholder SVGs currently in
these folders are auto-generated — just overwrite them with real photos using
the same filename (or use a different extension and update `lib/content.ts`).

### Logo & partners — `public/images/`
- `logo.svg` — M14service wordmark (already in place)
- `viessmann.png`
- `junkers.png`
- `evopipes.png`
- `evasat.png`

### Product catalog tiles — `public/images/products/`
Used by the `Produkti` section **and** the hero marquee. Recommended ~900×600:
- `heatpump.jpg` — Siltumsūkņi
- `boiler.jpg` — Apkures katli
- `stove.jpg` — Kamīni
- `venti.jpg` — Ventilācija / rekuperatori
- `ac.jpg` — Kondicionieri
- `water.jpg` — Ūdensapgāde

### Hero marquee — `public/images/projects/` (empty)
The marquee currently reuses the product photos above. When you get real
M14service work photos (installation shots, boiler rooms, ventilation
being installed, etc.), drop them into `public/images/projects/` with any
filenames and update the `projects` array in `lib/content.ts` to point at
them. Recommended ~440×296, architecture-neutral (close-ups of equipment,
pipes, tools, or work-in-progress) so nothing clashes with Latvian
small-town buildings.

### Case-study carousel (large rotating cards) — `public/images/cases/`
Recommended ~900×760:
- `case-1.svg` — Privātmāja Jelgavā (siltumsūknis)
- `case-2.svg` — Biroju centrs Rīgā (ventilācija)
- `case-3.svg` — Ražošanas komplekss Liepājā (katlu māja)

### Swap copy / stats / reviews / FAQ
All Latvian text lives in `lib/content.ts`. Edit that single file to change
any wording, prices, reviews, partners, or FAQ.

## Regenerate placeholders

```bash
node scripts/gen-placeholders.mjs
```

## Tech

- **Next.js 16** App Router, Server Components by default
- **Tailwind v4** with a `@theme` block in `app/globals.css` defining the
  BELL brand palette (`bg-brand`, `text-brand`, `text-ink`, `bg-off`, etc.)
- **Lenis** smooth scroll mounted globally via `app/lenis-provider.tsx`
- **Inter** self-hosted through `next/font/google` (Latvian diacritics via
  the `latin-ext` subset)
