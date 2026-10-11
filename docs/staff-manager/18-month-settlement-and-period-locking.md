---
title: Month settlement and period locking
description: "Review what is due for a month, pay staff, and lock the month to protect your records."
sidebar_position: 18
category: Core features
---

# Month settlement and period locking

## Open settlement

On **Payments**, choose **Settle Month**. The **Month Settlement & Period Closing** screen opens.

## Review the month

1. Choose the **month** and **year**.
2. Choose the **calculation mode**: Fixed 30 days or Calendar days. This selector starts at *Fixed 30 days*. Make sure it matches your business setting. See [Business settings](50-business-settings.md).
3. Review the totals: **Total Earned**, **Total Paid**, **Advances** and **Net Payable Now**.
4. Review each staff member's due amount and advance.

## Pay from settlement

Choose **Pay** next to a staff member. The payment form opens with the staff member, the month's dates and the amount filled in. You can change the amount to pay part of what is due. Each payment is a normal payment record. See [Payments, advances and ledger](16-payments-advances-and-ledger.md).

## Lock the month

Choose **Lock Period** to close the month. A lock applies to the whole business for that month.

While a month is locked:

- Attendance for dates in the month cannot be added, changed or deleted.
- Payments dated in the month cannot be recorded or edited.
- The attendance and payment screens show a message that the month is locked.

Only the **Owner** or a **Manager** can lock a month.

## Unlock

Only the **Owner** can unlock a month, using **Unlock Month**. The app asks for confirmation first.

## Closed periods list

The settlement screen lists closed periods so you can see which months are locked.

## Database enforcement

The app blocks edits to locked months. For protection that also applies if someone bypasses the app, the administrator must apply the period lock database migration. See [Deployment guide](80-deployment-guide.md).

## Tips

- Settle and lock each month after paying everyone.
- Print or download salary slips before you lock the month. See [Salary slips and statements](31-salary-slips-and-statements.md).
