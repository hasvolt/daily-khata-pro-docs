---
title: Database and security rules
description: Tables, functions and access rules in the Staff Manager database.
sidebar_position: 83
category: Administrators and developers
---

# Database and security rules

## Tables

| Table | Purpose |
|---|---|
| `profiles` | User name, phone and language |
| `organizations` | Businesses and their settings |
| `memberships` | Who belongs to which business, with role and site limits |
| `invites` | Invite codes |
| `devices` | Devices that used a business |
| `sites`, `work_types`, `custom_field_defs` | Lists and custom field definitions |
| `staff` | Staff profiles without pay rates |
| `staff_compensation` | Pay rates and pay notes (protected) |
| `attendance_entries` | Daily attendance |
| `work_entries` | Daily work |
| `payments` | Payments and adjustments |
| `period_closings` | Locked months |
| `audit_log` | Change history written by triggers |

Most tables have `org_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `device_id`, `revision` and `deleted_at`.

## Functions

| Function | Purpose |
|---|---|
| `create_organization` | Creates a business and makes the caller the Owner |
| `accept_invite` | Joins a business with an invite code |
| `delete_my_account` | Deletes the account, owned businesses and their audit log |
| `transfer_organization_ownership` | Makes another member the Owner (migration 4) |
| `is_org_member`, `org_role`, `has_org_role` | Membership and role checks |
| `can_view_money` | True for Owner, Manager, Accountant, and for Viewers unless payments are hidden from them |

## Access rules

| Table | Read | Write | Delete forever |
|---|---|---|---|
| staff, sites, work_types, custom_field_defs | All members | Owner, Manager | Owner |
| attendance_entries, work_entries | All members | Owner, Manager, Supervisor | Owner |
| staff_compensation | Those who can view money | Owner, Manager | Owner |
| payments, period_closings | Those who can view money | Owner, Manager, Accountant | Owner |
| audit_log | Owner, Manager, Accountant | Triggers only | None |
| invites | Owner, Manager | Owner (any role), Manager (Supervisor, Accountant, Viewer) | |
| organizations | Members | Owner | |
| memberships | Members | Owner | Owner or the member |

## Extra protections

- The last active Owner cannot be removed or demoted.
- Attendance, work and payments must belong to the same business as their staff member.
- Invite codes are random, expire and can be revoked.
- Migration 3 blocks changes to attendance and payments inside a closed month, and only the Owner can unlock.
- Migration 4 restricts which roles can invite which roles.

## Storage

Photos and receipts are saved with the records in the version 1.0.0 app.

## Changing the database

Add a new migration file for every change. Never edit a migration that has already been applied. Test with a second user in each role before release.
