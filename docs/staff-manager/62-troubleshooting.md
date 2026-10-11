---
title: Troubleshooting
description: "Fix common problems with sign in, email, sync, printing and data."
sidebar_position: 62
category: Help
---

# Troubleshooting

## "Email not confirmed" when signing in

Open the confirmation email and use the link. Check Spam. Wait a few minutes. Avoid creating several accounts in a row because email sending is limited.

## The confirmation link shows "This site can't be reached" (localhost)

Your account is probably confirmed already. Close the page and sign in. Administrators: set the **Site URL** and **Redirect URLs** in the authentication settings. See [Deployment guide](80-deployment-guide.md).

## I did not receive any email

Check Spam and wait. Use **Forgot password?** or **Magic link** to request another email. Administrators should set up a proper email (SMTP) service for production.

## Sync shows "Sync Issue"

Tap the badge to see the error. Check your internet and tap **Sync Now**. If it keeps failing, download a backup and contact support.

## Data from another device is missing

Check that both devices use the same account and the same business, and show **Synced**.

## I cannot see payments

Supervisors do not have access to payments. Viewers can be blocked by the Owner's **Hide payment amounts from Viewers** setting.

## I cannot change an old date

The month is locked. The Owner must unlock it. See [Month settlement and period locking](18-month-settlement-and-period-locking.md).

## A balance looks wrong

See [Reconcile a staff balance](21-data-integrity-and-calculation-review.md). Check that the settlement and Settings use the same month mode.

## Print is blank

Wait a moment and try again, or download the PDF. Allow pop-ups for the site if your browser asks.

## Hindi, Urdu or Tamil text is broken in the PDF

Use **Print** and save as PDF from the browser. See [Print, PDF, Excel and share](33-print-pdf-excel-and-share.md).

## The app looks outdated

Close the app completely and open it again.

## Still stuck

Use **Contact Support** in the menu. Describe what you did and what happened. Do not send passwords.
