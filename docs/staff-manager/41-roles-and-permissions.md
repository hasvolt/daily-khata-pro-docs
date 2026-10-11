---
title: Roles and permissions
description: "What the Owner, Manager, Supervisor, Accountant and Viewer roles can do."
sidebar_position: 41
category: Team, safety and data
---

# Roles and permissions

Each member of a business has one role. Roles control what they can see and change. Payment and pay rate data is protected by the database, not only hidden on screen.

## Roles at a glance

| Role | Purpose |
|---|---|
| **Owner** | Full control of the business |
| **Manager** | Runs daily work: staff, attendance, work, payments, reports, invites |
| **Supervisor** | Marks attendance and logs work. Sees no payment data |
| **Accountant** | Handles payments and reports. Cannot mark attendance |
| **Viewer** | Read only |

## Permission table

| Action | Owner | Manager | Supervisor | Accountant | Viewer |
|---|:-:|:-:|:-:|:-:|:-:|
| View staff profiles | Yes | Yes | Yes | Yes | Yes |
| See pay rates and pay notes | Yes | Yes | No | Yes | See note |
| Add, edit, archive, delete staff | Yes | Yes | No | No | No |
| Import staff | Yes | Yes | No | No | No |
| Manage sites, work types, custom fields | Yes | Yes | No | No | No |
| Mark attendance | Yes | Yes | Yes | No | No |
| Log work entries | Yes | Yes | Yes | No | No |
| View payments and ledger | Yes | Yes | No | Yes | See note |
| Record and edit payments | Yes | Yes | No | Yes | No |
| Lock a month | Yes | Yes | No | No | No |
| Unlock a month | Yes | No | No | No | No |
| Export reports | Yes | Yes | No | Yes | No |
| Invite members | Yes (any role) | Supervisor, Accountant, Viewer | No | No | No |
| Change roles | Yes | No | No | No | No |
| Remove members | Yes | Supervisor, Accountant, Viewer | No | No | No |
| Transfer ownership | Yes | No | No | No | No |
| Change business settings | Yes | No | No | No | No |
| Delete forever from Trash | Yes | No | No | No | No |

**Note for Viewers:** the Owner can turn on **Hide payment amounts from Viewers** in [Business settings](50-business-settings.md).

## What Supervisors see

Supervisors do not receive pay rates, payments or month closings, so payment screens appear empty or unavailable to them.

## Protected by the database

The database applies these rules to every request. A person from another business can never see your data. See [Database and security rules](83-database-and-security-rules.md).

## Related

[Team members and invites](40-team-members-and-invites.md)
