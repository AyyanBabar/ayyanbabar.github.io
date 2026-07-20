# Ayyan Babar Portfolio (Next.js)

Production-style developer portfolio built with Next.js App Router and TypeScript.

The site presents real data systems engineering work with an operations-console narrative, incident simulations, security-focused messaging, and evidence-led case studies.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- CSS (custom, no UI framework)

## Features

- Structured single-page portfolio flow (hero, runbook, evidence, security, stack, contact)
- Interactive runbook console with scenario switching
- Incident-based telemetry and health visualization
- Reusable reveal animation wrapper for staged section entry
- Profile-driven content model via a single data file

## Project structure

- `app/page.tsx` main page composition and section layout
- `app/globals.css` global styles and visual system
- `components/OpsConsole.tsx` interactive incident/runbook console
- `components/Reveal.tsx` reveal-on-scroll animation wrapper
- `lib/profile.ts` profile, case studies, incidents, stack, and content data

## Getting started

### Prerequisites

- Node.js 20+
- npm 10+

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open http://localhost:3000

## Available scripts

```bash
npm run dev    # start local dev server
npm run build  # create production build
npm run start  # run production server
npm run lint   # run lint checks
```

## Customize content

Update these fields in `lib/profile.ts`:

- identity and contact details (`name`, `email`, `linkedin`)
- summary and headline
- case studies and incidents
- capability and stack sections

## Deployment notes

This repository is currently configured as a regular Next.js app (server-capable hosting).

Recommended platforms:

- Vercel
- Azure App Service
- Netlify (Next.js runtime)

If you want GitHub Pages static hosting, add static export config first (`output: "export"`) and verify all page behavior remains compatible with static generation.

## Windows troubleshooting

If `npm install` fails with registry or `EPERM` issues, see `WINDOWS_INSTALL_FIX.md`.
