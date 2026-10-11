---
title: Staff profiles
description: "Add, edit, archive and delete staff, with every profile field explained."
sidebar_position: 11
category: Core features
---

# Staff profiles

Add each person once. The profile is used for attendance, work, payments and reports.

## Add a staff member

Open **Staff** and add a staff member.

| Field | Notes |
|---|---|
| **Staff Photo** | Optional |
| **Full Name** | Required |
| **Staff ID / Code** | For example STF-1001 |
| **Primary Phone / Alternate Phone** | Optional |
| **Role / Designation** | Free text. Suggestions such as Mistri, Helper, Driver, Electrician |
| **Payment Type** | Daily Wage, Monthly Fixed Salary, Hourly Rate, or Per Piece / Per Unit. See [Payment types and rates](12-payment-types-and-rates.md) |
| **Rate** | Amount for the chosen payment type |
| **Unit Name** | For per piece workers, for example sq ft, point, bag, trip, kg |
| **Overtime Rate (Optional)** | Amount per overtime hour |
| **Standard Hours / Day** | Defaults to 8 |
| **Default Assigned Site** | Optional |
| **Weekly off days** | Choose days from Sun to Sat |
| **Joining Date** | Optional |
| **Current Status** | Active (Currently Employed), Inactive (Temporary Pause), or Left Employment |
| **Address / Hometown** | Optional |
| **Emergency Contact (Name & Phone)** | Optional |
| **Payment Note / UPI ID (Optional)** | Free text. Do not store card numbers or confidential bank passwords |
| **Custom fields** | Your own fields. See [Custom fields](13-custom-fields.md) |
| **Internal Notes / Identification Note** | Free text. Do not type government ID numbers |

## Staff list

- Search by name, phone, designation or staff ID.
- Filter by status (Active Only, Archived / Inactive, Left Work, All Statuses), role and site.
- Sort by name, highest rate or joining date.
- Select several staff to **assign them to a site** or **archive** them together.
- **Import CSV** adds many staff at once. See [Import data](46-import-data.md).
- **Custom Fields** opens the custom field manager.

Open a staff member to see their details, rate revision history, work and payment history, salary slip and ledger.

## Edit

Open the staff member and choose edit. When the rate or payment type changes, the app adds an entry to the **Rate Revision History**. Read the note in [Payment types and rates](12-payment-types-and-rates.md) before changing a rate.

## Archive or delete

Choose delete on a staff member to see two options:

- **Archive (Recommended):** the staff member stops appearing in daily lists, and all history stays.
- **Move to Trash:** the profile and its records move to Trash. If the staff member has attendance or payment history, you must type their name to confirm. You can restore from Trash.

## Who can do what

| Role | Staff |
|---|---|
| Owner, Manager | Add, edit, archive, delete, import |
| Supervisor, Accountant, Viewer | View. Pay rates are hidden from Supervisors |

See [Roles and permissions](41-roles-and-permissions.md).
