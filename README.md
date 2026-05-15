# Car Impound — Mobile Web App

Smart towing management & owner notification system (mobile-first demo).

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and use Chrome DevTools device mode (e.g. iPhone 14) for the best mobile experience.

## User flows

### Officer / Agent

1. **Scan plate** — `/officer` — camera viewfinder UI (tap to continue)
2. **New impound** — `/officer/new-impound` — plate, violation & status
3. **Document & assign** — `/officer/document-assign` — photos, garage selection, confirm

### Vehicle owner

1. **My vehicle** — `/owner` — tow alert, evidence, violation details
2. **Pay & retrieve** — `/owner/pay-retrieve` — map, fees, simulated payment & release code

## Project context

Built from the SupMTI *Projet Interdisciplinaire* brief: license plate capture, GPS-tagged photos, real-time owner notification, garage locator, and online payment (UI prototype).
