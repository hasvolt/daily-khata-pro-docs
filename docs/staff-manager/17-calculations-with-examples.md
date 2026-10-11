---
title: Calculations with examples
description: How Staff Manager calculates earnings and net payable, with worked examples.
sidebar_position: 17
category: Core features
---

# Calculations with examples

This chapter explains how Staff Manager calculates earnings and balances. The same logic is used by the staff ledger, month settlement, salary slips, history and reports. Each screen shows a **formula breakdown** so you can check the result. Always compare the result with the attendance, work and payment records for the selected period.

## 1. Inputs that affect a calculation

The calculation uses:
- The staff member's pay type: Daily Wage, Monthly Fixed Salary, Hourly Rate, or Per Piece / Per Unit.
- The pay rate and optional overtime rate.
- Attendance entries whose dates fall inside the selected start/end dates and which are not deleted.
- Work entries in that same date range and which are not deleted.
- For monthly pay, the month mode: Fixed 30 Days or Actual Calendar Days.
- For net dues, non-deleted payment records for the selected staff member.

Money values are rounded to two decimal places.

## 2. Rate and rate history

The calculation uses the staff member's pay rate and optional overtime rate. The app also keeps a **Rate Revision History** on the staff profile when a rate changes.

> **Important (version 1.0.0):** the revision history entries created by the staff form are not yet used to pick a past rate. Calculations use the staff member's **current rate for every period**. If you change a rate, past periods recalculate with the new rate. Settle and print salary slips for past months before changing a rate. See [Limitations and roadmap](64-limitations-and-roadmap.md).

## 3. Attendance categories

Attendance statuses are counted like this:

| Status | How it is counted |
|---|---|
| Present | One full present day |
| Half Day | Half a payable day |
| Absent | Counted as absent; adds no payable day |
| Paid Leave | One full payable day |
| Unpaid Leave | Counted as unpaid leave; adds no payable day |
| Holiday | One full payable day |

The payable-day total is:

```
Payable days = present + (half days × 0.5) + paid leave + holidays
```

Overtime hours are summed from attendance entries in the selected date range.

## 4. Daily-rate earnings

The code calculates:

```
Base pay = (present days × daily rate) + (half days × daily rate ÷ 2)
           + (paid leave × daily rate) + (holidays × daily rate)
```

Overtime is then added to daily earnings.

**Worked example**
- Daily rate: ₹600
- Present: 20 days
- Half days: 2
- Paid leave: 1 day
- Holidays: 0
- Overtime: 5 hours
- Effective overtime rate: ₹75/hour

Base pay = (20 × ₹600) + (2 × ₹300) + (1 × ₹600) = ₹13,200  
Overtime pay = 5 × ₹75 = ₹375  
**Total earned = ₹13,575**

Absences and unpaid leave do not add earnings. The calculation does not automatically subtract a separate penalty for an absence; penalties are separate payment/adjustment records.

## 5. Monthly salary and proration

For monthly staff, the base pay is:

```
Base pay = monthly rate ÷ days in month (30 or actual) × payable days
```

The denominator is:
- Fixed 30 Days: 30 days.
- Actual Calendar Days: the number of days in the month containing the start date.

**Example using fixed 30 days**
- Monthly rate: ₹24,000
- Payable days: 28
- Daily equivalent: ₹24,000 ÷ 30 = ₹800
- Base pay: 28 × ₹800 = **₹22,400**

**Example using February with 28 days**
- Monthly rate: ₹24,000
- Payable days: 26
- Daily equivalent: ₹24,000 ÷ 28 ≈ ₹857.1429
- Base pay: **₹22,285.71**

Paid leave and holidays count as payable days. Absence and unpaid leave do not. Overtime is calculated separately and added for monthly staff.

**Month mode:** you choose the mode in **Settings** (*Actual Calendar Days in Month* or *Fixed 30 Days Month Standard*). Reports, salary slips and history use the business setting, which is *Actual Calendar Days* unless you change it. The **Month Settlement** screen has its own selector that starts at *Fixed 30 days*. Make sure both use the mode you want. If a date range covers more than one month, the denominator is based on the month containing the start date, so use month-by-month periods for monthly salaries.

## 6. Hourly earnings

The app first adds up the positive hours from work entries in the date range.
- If the total is above zero, attendance overtime hours are added to it.
- If no work-entry hours are present, hours are estimated as present days × hours per day + half days × hours per day ÷ 2 + overtime hours.
- Hours per day defaults to 8 when not set.

```
Hourly pay = hours × hourly rate
```

For hourly staff, overtime hours are included in the total hours and paid at the regular hourly rate. A separate overtime rate is not applied to hourly staff.

## 7. Piece-rate earnings

The app adds up the quantities from work entries in the date range:

```
Piece pay = total quantity × rate
```

The unit label uses the staff member's unit name, or "units" if no unit name is set. Overtime pay is added separately for piece-rate staff.

**Example:** 350 units × ₹12 = ₹4,200 piece pay. If 2 overtime hours are recorded at ₹80/hour, total earned becomes ₹4,360.

## 8. Default overtime rate

When no overtime rate is set, or it is zero, the default is:
- Daily staff: daily rate ÷ hours per day
- Hourly staff: hourly rate
- Monthly and piece staff: rate ÷ (30 × hours per day)

Hours per day defaults to 8. These are default calculations, not legal overtime rules. Set overtime rates according to your own policy and the law that applies to you.

## 9. Net dues and payment types

Net dues combine earnings with payment records. The payment types are counted as follows:

| Payment type | Effect on the balance |
|---|---|
| Wage / Salary | Reduces what is still payable (salary already paid) |
| Advance and Loan to Staff | Adds to outstanding advances |
| Loan Repayment | Reduces outstanding advances |
| Bonus / Incentive | Adds to what you owe |
| Reimbursement | Adds to what you owe |
| Deduction | Reduces net payable |
| Penalty / Fine | Reduces net payable |

The formula is:

```
Net payable = earnings + bonuses + reimbursements
              − outstanding advances − deductions − penalties
              − salary already paid
```

where:

```
Outstanding advances = advances and loans taken − loan repayments
```

**Worked example**
- Earnings: ₹13,575
- Bonus: ₹500
- Reimbursements: ₹200
- Advances/loans taken: ₹3,000
- Loan repayments: ₹500
- Outstanding advances: ₹2,500
- Deductions: ₹300
- Penalties: ₹100
- Salary already paid: ₹4,000

Net payable = ₹13,575 + ₹500 + ₹200 − ₹2,500 − ₹300 − ₹100 − ₹4,000 = **₹7,375 owed to the staff member**.

If the result is above zero it is labelled **Owed to Staff**. If it is below zero it is labelled **Owed by Staff (Advance)**. Within a very small amount of zero it is **Settled**.

**Salary paid** counts only Wage / Salary payments. Advances, bonuses and other types are counted in their own lines.

The payment form has a **Calculation Override Reason** field for the case where a paid amount differs from the calculated amount. Use it to keep a note of why.

## 10. Rounding and review checklist

Before approving a settlement:
1. Confirm the staff member, date range and pay type.
2. Check the staff member's current rate (past periods use the current rate).
3. Check attendance statuses and remove duplicate/incorrect entries.
4. Check work-entry hours or quantities.
5. Check overtime hours and configured rates.
6. Review advances, loans, repayments, salary payments, bonuses, reimbursements, deductions and penalties separately.
7. Compare the calculated amount with the visible formula breakdown.
8. Keep a note when an amount differs from the calculation.

These calculations are record-keeping aids. They do not replace an employer's legal payroll obligations, employment agreements, tax advice or statutory wage calculations.
