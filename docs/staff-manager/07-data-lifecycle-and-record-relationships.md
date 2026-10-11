---
title: Data lifecycle and record relationships
description: "How staff, attendance, work, payments and settings relate to each other, and what happens when you edit or delete them."
sidebar_position: 7
category: Getting started
---

# Data lifecycle and record relationships

## How records relate

A **business** contains staff, sites, work types and custom fields.
A **staff member** has attendance entries, work entries and payments.
**Reports, ledgers and salary slips** are calculated from those records and do not store separate copies.
A **period closing** (month lock) protects the attendance and payments in a month.

Pay rates and pay notes are stored separately from the staff profile so that roles without payment access never receive them.

Attendance does not create work entries or payments automatically. Each is recorded on its own.

## Create

Each record is saved on your device immediately and queued for sync if you are signed in.

## Edit

Edits replace the stored values. The activity log records changes to synced records. Closed months cannot be edited.

## Delete

Deleting moves a record to **Trash**. Staff are better **archived** if they have left. See [Trash and recovery](44-trash-and-recovery.md).

## Restore

Restoring puts the record back. Totals and reports include it again.

## Reports follow the records

Dashboard totals, ledgers, slips and exports change when the underlying records change. If a number looks wrong, check the attendance, work and payment records for that staff member and period. See [Reconcile a staff balance](21-data-integrity-and-calculation-review.md).

## Backups

A backup file contains your business records so you can restore them later. See [Backup, restore and export](45-backup-restore-and-export.md).
