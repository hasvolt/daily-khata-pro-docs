---
title: Payment types and rates
description: Daily, monthly, hourly and per piece pay, overtime, and how rate changes are recorded.
sidebar_position: 12
category: Core features
---

# Payment types and rates

Each staff member has one payment type at a time.

| Payment type | Earnings are based on |
|---|---|
| **Daily Wage** | Present days at the daily rate, half days at half, paid leave and holidays at the full rate, plus overtime |
| **Monthly Fixed Salary** | The monthly rate divided by 30 or by the calendar days of the month, multiplied by payable days, plus overtime |
| **Hourly Rate** | Hours worked multiplied by the hourly rate |
| **Per Piece / Per Unit** | Quantity from work entries multiplied by the rate per unit, plus overtime |

Exact formulas and worked examples are in [Calculations with examples](17-calculations-with-examples.md).

## Other pay settings

- **Overtime Rate:** optional. If you leave it empty, the app uses a default derived from the rate and the standard hours per day.
- **Standard Hours / Day:** defaults to 8.
- **Unit Name:** for per piece workers.
- **Month calculation mode:** a business setting. See [Business settings](50-business-settings.md).

## Rate Revision History

When you change a staff member's rate or payment type, the app adds an entry (date and new rate) to the **Rate Revision History** shown on the staff details.

> **Important (version 1.0.0):** the revision history is a record of changes. Calculations, salary slips, settlements and reports currently use the staff member's **current rate for every period**. Changing a rate therefore also changes the calculated amount for past months. Before you change a rate, settle the month, and download or print the salary slips you need to keep. Check [Limitations and roadmap](64-limitations-and-roadmap.md) for updates.

## Who can see rates

Rates are stored separately from the staff profile. The Owner, Manager and Accountant can see them. Viewers can see them unless the Owner turned on **Hide payment amounts from Viewers**. Supervisors never see them. See [Roles and permissions](41-roles-and-permissions.md).
