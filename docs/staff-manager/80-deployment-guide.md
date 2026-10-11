---
title: Deployment guide
description: Host Staff Manager with Supabase, Vercel and a subdomain such as staff.rozfiber.com.
sidebar_position: 80
category: Administrators and developers
---

# Deployment guide

For administrators who host Staff Manager. The repository also contains `docs/DEPLOY.md` and `supabase/README.md`.

## What you need

- A **Supabase** project (database, sign-in, realtime)
- A **Vercel** project (hosting)
- The app's GitHub repository
- A domain whose DNS you can edit

## 1. Create the Supabase project

1. Create a project in a region near your users.
2. Save the database password safely.
3. In **Project Settings > API Keys**, copy the **Project URL** and the **publishable (anon) key**.
4. Never copy the **secret / service_role** key into the app, the repository or a chat.

## 2. Apply the database migrations

Open the Supabase **SQL Editor** and run the files in `supabase/migrations/` **in this order, each file once**:

1. `20261008000000_initial_schema.sql`
2. `20261009000000_phase1_hardening.sql`
3. `20261010000000_phase3_period_lock.sql`
4. `20261011000000_phase5_multiuser_realtime.sql`

Notes:

- Supabase may warn about "destructive operations" because the files drop and recreate policies. This is expected on a new project.
- Do not run an earlier migration again after a later one.
- Migration 3 enforces month locks in the database. Migration 4 adds invite role rules, owner protection, ownership transfer and realtime for team tables. Without them, those protections exist in the app only.

Check that every table has row level security:

```sql
select tablename, rowsecurity from pg_tables where schemaname = 'public' order by 1;
```

All rows should show `true`.

## 3. Configure sign-in

In **Authentication > URL Configuration**:

- **Site URL:** `https://staff.rozfiber.com`
- **Redirect URLs:** `https://staff.rozfiber.com/**` and any preview addresses

Set up a real email (SMTP) service for production. The built-in email service is limited.

## 4. Deploy on Vercel

1. Import the GitHub repository as a new project.
2. Add the variables from [Environment variables](81-environment-variables.md).
3. Deploy. `vercel.json` provides single-page routing and security headers.

## 5. Connect the subdomain

1. In the Vercel project open **Settings > Domains** and add `staff.rozfiber.com`.
2. Create the DNS record Vercel shows (usually a CNAME named `staff`).
3. Wait for HTTPS to become active.

## 6. Test

- Sign up, confirm the email, sign in
- Create a business and check it in the database
- Open the app in a second browser
- Work offline, reconnect and check sync
- Test each role (see [Testing checklist](84-testing-checklist.md))

## 7. Operate

- Turn on daily database backups for production.
- Check the current limits and terms of your Vercel and Supabase plans before you store real customer data.
- Keep migrations in the repository and add new files for every database change.
