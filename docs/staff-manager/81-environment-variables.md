---
title: Environment variables
description: "Configuration settings for Staff Manager."
sidebar_position: 81
category: Administrators and developers
---

# Environment variables

Set these in your hosting provider (Vercel) and, for local work, in a `.env` file based on `.env.example`. Do not commit real values.

| Variable | Purpose | Example |
|---|---|---|
| `VITE_SUPABASE_URL` | Project URL, without a trailing slash or `/rest/v1` | `https://xxxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Publishable (anon) key | `sb_publishable_...` |
| `VITE_APP_NAME` | App name shown in the app | `Staff Manager` |
| `VITE_APP_URL` | Public address. Listed for reference. Version 1.0.0 does not read it | `https://staff.rozfiber.com` |
| `VITE_DAILY_KHATA_URL` | Link to Daily Khata Pro | `https://www.rozfiber.com` |
| `VITE_ADVANCED_CALCULATOR_URL` | Daily Khata Pro calculator link. If empty, the button is hidden | `https://www.rozfiber.com/calculator` |
| `VITE_SUPPORT_EMAIL` | Support email shown in the app | `support@rozfiber.com` |
| `VITE_ENABLE_GOOGLE_LOGIN` | Show Google sign-in. `true` or `false` | `false` |
| `VITE_ENABLE_LOCAL_MODE` | Allow use without an account. `true` or `false` | `true` |

## Keys

- The publishable (anon) key is designed to be public. The database rules protect the data.
- The secret / service_role key must never be used in the app or committed.

## After changing a variable

Redeploy so the new value is built into the app.
