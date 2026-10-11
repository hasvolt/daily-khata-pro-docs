---
title: Testing checklist
description: "What to check before each release."
sidebar_position: 84
category: Administrators and developers
---

# Testing checklist

## Build

- `build`, `lint` and `test` complete without errors.

## Accounts

- Sign up, confirm the email, sign in and sign out
- Forgot password and magic link
- Profile name and phone save and show again after reopening
- Delete a test account

## Records

- Create a business, add staff, mark attendance, log work and record a payment
- Edit and delete, then restore from Trash
- Lock a month: attendance and payments are blocked. Only the Owner can unlock

## Calculations

Check each pay type with a worked example: daily with half day and overtime, monthly (fixed 30 and actual days), hourly, per piece, advance and repayment, bonus, deduction, partial payment. Confirm the settlement screen and the slip use the same month mode.

## Offline and sync

- Work offline, reconnect, data syncs
- A second browser shows the data
- Two people edit different records, then the same record (a conflict appears)

## Roles

For each role (Owner, Manager, Supervisor, Accountant, Viewer) check what they can see and change. Supervisors must not receive pay rates or payments. Test both the screen and the database.

## Security

- A user of business A cannot see business B
- Every table has row level security
- No service key in the app or repository

## Output

- Print works on the first attempt on a phone and a computer
- CSV opens correctly in Excel, including Hindi text
- PDF shows Latin text correctly (non-Latin scripts are a known limit)

## Look and feel

- All 12 themes are readable
- At least five languages including one right-to-left
- Small phone and desktop

## Performance

- A business with many staff and long attendance history stays fast
