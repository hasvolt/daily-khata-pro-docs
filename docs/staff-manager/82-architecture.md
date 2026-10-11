---
title: Architecture
description: "How Staff Manager is built: local-first storage, sync, backend and security."
sidebar_position: 82
category: Administrators and developers
---

# Architecture

## Stack

React 19, Vite, TypeScript, Tailwind CSS v4, React Router, Dexie (IndexedDB), Supabase (database, authentication, realtime), `vite-plugin-pwa`, `jsPDF` with `jspdf-autotable`, and Vitest. Hosted on Vercel.

## Main folders

| Folder | Content |
|---|---|
| `src/app` | App shell, routes, error boundary |
| `src/features` | Screens by area: auth, org, staff, attendance, work, payments, reports, history, trash, members, sync, settings, calculator, home |
| `src/lib` | Calculations, database, sync, backup, import, export, print, permissions, theme, i18n |
| `src/locales` | The 16 language files |
| `supabase/migrations` | Database migrations |
| `docs` | Technical notes in the repository |

## Local first

Data is written to IndexedDB (Dexie) first. Each synced record has an id, business id, timestamps, a revision number and a deleted-at marker for Trash.

## Sync

- Local changes are queued in an outbox with a base revision.
- Changes are pushed to Supabase, and new changes are pulled using an updated-at cursor.
- Sync runs at start, when the connection returns, when the window gets focus and every 3 minutes.
- A realtime channel per business refreshes data when another member changes it.
- If the server version differs from the base revision, a conflict is stored for review.

## Permissions

The permission rules are in `src/lib/permissions`. The same rules are enforced in the database with row level security. See [Database and security rules](83-database-and-security-rules.md).

## Calculations

All wage and balance calculations are in `src/lib/calculations/salaryCalculations.ts`. Ledgers, settlement, slips, history and reports use them. See [Calculations with examples](17-calculations-with-examples.md).

## PWA

The service worker caches the app files for offline use and updates automatically.

## Security headers

`vercel.json` sets a content security policy, `X-Content-Type-Options` and `Referrer-Policy`. The policy allows the Google Translate scripts used by the online translator.

## Tests

Test files are in `src/__tests__`. Run `npm run test` (or the equivalent for your package manager). Run `npm run lint` for the type check and `npm run build` before each release.
