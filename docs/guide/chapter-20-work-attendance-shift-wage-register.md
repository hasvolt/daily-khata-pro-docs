# Chapter 20 — Work Attendance & Shift Wage Register

**App:** Daily Khata Pro  
**Chapter:** 20 of 23  
**Feature category:** Work attendance, shift records, wage calculations, overtime estimates, and attendance summaries

> **Documentation status:** This chapter expands the supplied Chapter 20 source. Verify the actual screen, calculation rules, storage behaviour, export options, and supported attendance statuses in the current app before treating every item as a confirmed implementation.

---

## 1. Overview

The **Work Attendance & Shift Wage Register** is intended to help users maintain an organised record of attendance and work-related wages. Depending on the installed version and the user's workflow, it may be useful for personal work records, employees, contractors, small businesses, and household staff.

The source chapter describes these main capabilities:

- Recording daily attendance.
- Marking Present (Full Day), Half-Day, Absent, and Paid Leave.
- Defining a standard daily wage.
- Configuring regular working hours and overtime multipliers.
- Calculating overtime pay.
- Reviewing monthly attendance and wage summaries.
- Downloading or printing salary slips, if supported by the installed version.

The purpose of an attendance register is to keep dates, attendance status, hours, and wage-related calculations organised. A reliable record can make it easier to review a work period, identify missing entries, and compare calculated amounts with payment records.

**Important:** An attendance record and a payment record are not necessarily the same thing. A wage calculation may estimate how much is due, while a payment record documents money actually paid or received. Keep these concepts separate unless the app explicitly links them and you have verified the result.

## 2. Intended Users and Common Uses

This feature may be useful for:

- **Daily-wage workers:** keep a personal record of workdays and estimated wages.
- **Contractors and technicians:** organise work attendance across dates or projects, where supported.
- **Small businesses:** maintain a simple attendance register for workers.
- **Household employers:** record agreed attendance and wage information for household staff.
- **Personal work tracking:** record working days, hours, and overtime for later review.
- **Record reconciliation:** compare an attendance summary with agreed wage terms and actual payments.

The app should not be assumed to replace a formal payroll system, statutory register, employment contract, accounting system, or legally required record. Whether it is suitable for a particular workplace depends on the actual feature set and applicable requirements.

---

## 3. Main Features

### 3.1 Worker and Contractor Shift Ledger

**Purpose:** Keep an organised record of attendance and work-related payments or wage calculations.

Depending on the implementation, records may be organised by worker, date, shift, or wage period. Verify which fields are available in the actual app before relying on a particular workflow.

Possible information to record, where supported:

- Worker or contractor name.
- Work date.
- Attendance status.
- Standard daily wage or pay rate.
- Scheduled or standard working hours.
- Actual working hours.
- Overtime hours.
- Calculated wage.
- Notes about a shift or attendance correction.

Do not assume all these fields are present simply because they are listed as possible record details. Use only the fields visible in the installed app.

#### Keeping entries consistent

If the register allows worker names or notes, use a consistent naming style. For example, avoid entering the same person as “Rahul,” “Rahul Kumar,” and “R. Kumar” in different records unless the app has a reliable way to associate those entries.

For work notes, short descriptions such as “shop duty,” “site work,” or “maintenance visit” can make a record easier to understand later. Avoid placing passwords, banking PINs, OTPs, or unnecessary sensitive details in attendance notes.

### 3.2 Daily Attendance Status

The source chapter describes these attendance statuses:

- **Present (Full Day):** The worker attended a normal full workday.
- **Half-Day:** The worker is recorded for a half-day according to the employer's or user's agreed rules.
- **Absent:** The worker did not attend the scheduled workday.
- **Paid Leave:** The day is treated as paid leave according to the applicable agreement or policy.

The meaning of each status should be applied consistently. For example, if a person worked part of a day, decide whether the applicable arrangement treats that as Half-Day, a partial-hour entry, or another supported status. Use the actual app fields and agreed work rules.

**Important:** The amount paid for Half-Day, Absent, or Paid Leave depends on the wage rules and employment agreement. Do not assume that the app applies a particular legal or company policy unless the calculation has been checked.

#### Attendance versus leave policy

An attendance status records how a day is categorised in the register. It does not, by itself, establish whether a leave arrangement is legally compliant or whether a particular amount must be paid. Check the applicable contract, policy, and local requirements.

### 3.3 Shift Wage Rate

The source chapter says the user can define a standard daily wage, regular working hours, and overtime-rate multipliers.

The wage rate is the base used to estimate pay for the relevant attendance period. Check whether the app supports a per-worker rate, a shared default rate, or both.

Before saving wage settings, confirm:

- The currency used.
- Whether the rate is daily, hourly, or based on another unit.
- The standard working hours associated with a normal day, if applicable.
- Whether the setting applies to one worker, all records, or future entries.
- Whether changing the setting affects existing records or only future calculations.

These details may vary by implementation. Do not assume that changing a default rate will or will not recalculate older records until you have tested it.

### 3.4 Overtime Calculation

Overtime pay is described as being calculated using overtime hours and a configured multiplier.

A common illustrative formula is:

**Hourly Rate = Standard Daily Wage ÷ Standard Daily Hours**

**Overtime Pay = Overtime Hours × Hourly Rate × Overtime Multiplier**

**Total Pay = Base Attendance Pay + Overtime Pay + Other Applicable Adjustments**

This is a general example, not a guarantee of the app's exact formula. Confirm whether the app uses this formula, how it handles half-days, breaks, overtime thresholds, rounding, and other adjustments.

#### Example of the formula

If a standard daily wage is ₹800 for an 8-hour workday:

`Hourly Rate = ₹800 ÷ 8 = ₹100 per hour`

If 2 overtime hours are entered and the illustrative multiplier is 1.5:

`Overtime Pay = 2 × ₹100 × 1.5 = ₹300`

This example demonstrates the arithmetic only. It does not determine the legally required overtime rate or establish that the app uses a 1.5× multiplier.

### 3.5 Monthly Wage Summary

The source chapter describes a monthly wage summary that can include:

- Total working days.
- Overtime hours.
- Total gross pay.
- Printable salary slips, if the export feature is available.

Confirm the exact summary fields and whether the period follows a calendar month, a custom date range, or a payroll cycle.

A summary is only as reliable as the underlying entries and the calculation rules. Before relying on a total, review attendance statuses, rates, hours, overtime, and any supported adjustments.

### 3.6 Salary Slip or Printable Summary

If the installed version supports a print, PDF, or export function, it may allow the user to produce a summary for a selected worker and period.

Before saving or sharing an output, check the fields actually included. A useful review may include:

- Worker name or identifier.
- Date range or wage period.
- Attendance totals.
- Working and overtime hours, if supported.
- Wage rate and calculation breakdown.
- Adjustments, if supported.
- Final calculated amount.
- Any notes or identifying information.

Do not assume salary-slip PDF export exists unless it is visible and tested in the current build. A generated summary may be a personal record or estimate rather than a statutory payroll document.

---

## 4. How to Use the Attendance Register

The exact controls depend on the installed version. Use the following general steps only where the corresponding controls exist.

### Step 1 — Open the Attendance Register

1. Open Daily Khata Pro.
2. Open the User Manual.
3. Navigate to **Chapter 20 — Work Attendance & Shift Wage Register**.
4. Select **Open Attendance Register**, if this button is available.
5. Confirm that the register opens and displays the expected worker/date controls.

If the feature is not available in the installed version, do not assume that the manual entry activates or installs it.

### Step 2 — Select the Worker and Date

1. Choose the relevant worker or contractor if the app supports multiple people.
2. Select the date or attendance period.
3. Confirm the selected date before saving a record.
4. Check the worker or profile selection before entering hours or wage information.

If the app only maintains a personal attendance record, do not assume that it supports multiple worker profiles.

### Step 3 — Mark Attendance

1. Select the available attendance status, such as Present, Half-Day, Absent, or Paid Leave.
2. Enter any required hours or notes if the form provides those fields.
3. Review the selected date and status.
4. Save the record using the actual save control in the app.
5. Reopen the date or summary to confirm that the record was stored correctly.

If no status matches the situation, do not select an inaccurate status merely to complete the form. Check whether another supported method exists or record the limitation for later review.

### Step 4 — Set the Wage Rate

1. Open the wage or shift settings if available.
2. Enter the agreed daily wage or applicable pay rate.
3. Enter standard working hours if requested.
4. Configure an overtime multiplier only if the app provides that setting.
5. Review the displayed values and save the settings.
6. Test the calculation using a simple example before using it for actual payroll or payment decisions.

If the app supports only one general rate, do not assume that different workers can have individual wage rates.

### Step 5 — Record Overtime

1. Enter actual work hours or overtime hours if the feature supports them.
2. Check the regular-hours threshold used by the app.
3. Review the overtime rate or multiplier.
4. Check the resulting overtime amount against a manual calculation.
5. Correct input errors before finalising the wage period.

If overtime is based on actual hours, make sure the entered hours and standard-hours threshold use the same unit. For example, do not mix decimal hours with hours-and-minutes notation without converting them correctly.

### Step 6 — Review the Monthly Summary

1. Select the desired month or payroll period if a period selector is available.
2. Review attendance totals and recorded hours.
3. Check the wage total and overtime total.
4. Compare the summary with attendance notes and payment records.
5. Correct errors using the app's supported editing process.
6. Review the summary again after making corrections.

Confirm whether the summary includes paid leave, unpaid leave, absent days, deductions, advances, bonuses, or other payroll components. Do not assume a component is included unless it is shown or documented.

### Step 7 — Print or Export a Salary Slip

If a print, PDF, or export control exists:

1. Select the worker and relevant pay period.
2. Preview the salary slip or summary.
3. Check the worker name, period, attendance, hours, wage rate, overtime, adjustments, and final amount.
4. Confirm that no unrelated worker or private information is included.
5. Export or print only after checking the details.
6. Store or share the file securely.

Do not assume salary-slip PDF export exists unless it is visible and tested in the current build.

---

## 5. Worked Examples

The following examples are **illustrative only**. They demonstrate common calculations and do not establish the app's exact calculation rules or the legally required wage.

### Example A — Full-Day Pay

Assume:

- Daily wage: ₹800.
- Attendance: 1 full day.
- Overtime: 0 hours.
- Other adjustments: ₹0.

If a full day is paid at the standard daily rate:

`Base Pay = 1 × ₹800 = ₹800`

Illustrative total: **₹800**.

### Example B — Half-Day Pay

Assume:

- Daily wage: ₹800.
- Half-day pay rule: 50% of daily wage.
- Overtime: 0 hours.

`Half-Day Pay = ₹800 × 50% = ₹400`

Illustrative total: **₹400**.

The 50% rule is only an example. An actual agreement or configured app rule may differ.

### Example C — Overtime Pay

Assume:

- Daily wage: ₹800.
- Standard workday: 8 hours.
- Overtime: 2 hours.
- Illustrative overtime multiplier: 1.5×.

First calculate the hourly rate:

`Hourly Rate = ₹800 ÷ 8 = ₹100`

Then calculate overtime pay:

`Overtime Pay = 2 × ₹100 × 1.5 = ₹300`

If the full-day base pay is ₹800 and no other adjustments apply:

`Illustrative Total = ₹800 + ₹300 = ₹1,100`

This example does not determine the legally required overtime rate. Applicable employment rules and agreements may require a different calculation.

### Example D — Monthly Summary

Assume a sample period contains:

- 20 full days at ₹800 per day.
- 2 half-days paid at 50%.
- 3 overtime hours at an illustrative rate of ₹150 per hour.
- No other adjustments.

Base pay:

`20 × ₹800 = ₹16,000`

Half-day pay:

`2 × ₹400 = ₹800`

Overtime pay:

`3 × ₹150 = ₹450`

Illustrative gross amount:

`₹16,000 + ₹800 + ₹450 = ₹17,250`

This example shows how separate components may be totalled. The actual app may use different settings, fields, or rules. The example also does not include deductions, advances, statutory contributions, or other adjustments.

### Example E — Comparing Calculated Wages With Payment

Suppose the attendance summary calculates ₹17,250 for a period, but the amount actually paid is ₹17,000.

Do not silently change the attendance entries just to make the figures match. First, review whether there is a valid adjustment, advance, deduction, rounding difference, or data-entry error. If the app has a separate payment record feature, record the actual payment there as supported and keep a clear explanation of the difference.

This is a record-review example, not a recommendation to make a particular payroll deduction.

---

## 6. Editing, Corrections, and Record Accuracy

Before relying on attendance totals:

- Confirm that the date is correct.
- Confirm the worker/person selected.
- Check the attendance status.
- Review daily wage and standard hours.
- Verify overtime hours and multipliers.
- Check whether the app allows edits to earlier records.
- Review whether changing a wage setting affects only future records or also recalculates past periods.
- Confirm that totals update after a correction.
- Compare the summary with available notes and actual payment records.

### Avoiding duplicate entries

If you are unsure whether a record saved, reopen the date or summary before entering it again. A second entry for the same workday may inflate attendance or wage totals.

If a record cannot be edited, follow the app's supported correction process rather than creating duplicate entries without understanding how they affect totals.

### Keeping a simple reconciliation record

For each wage period, it can be useful to compare:

1. Attendance records.
2. Calculated wage summary.
3. Any separately recorded advances or adjustments, if supported.
4. Actual payment amount and date.
5. Any remaining difference that needs explanation.

The app may not support all these items in one place. Keep the workflow aligned with the actual available features.

---

## 7. Privacy and Data Handling

Attendance and wage records may contain personal or employment information. Use appropriate care:

- Enter only the information needed for the record.
- Protect the device with a screen lock.
- Avoid sharing screenshots or salary slips publicly.
- Review the recipient before sending a PDF or printed record.
- Keep backups in a secure location if the app supports backups.
- Check the app's actual storage and backup behaviour before assuming records stay only on the device.
- Avoid including unnecessary personal identifiers in notes or exported documents.
- If a device is shared, consider whether other users can access attendance records or exported files.

The source screenshot alone does not prove whether attendance data is stored locally, synchronised, or transmitted. Do not claim complete offline storage, zero telemetry, or zero network activity for this feature unless verified in the source code and through testing.

### Safe handling of exported files

Before sending an exported record:

1. Confirm the correct worker and date range.
2. Review the file contents.
3. Remove or avoid unnecessary details if the export process permits it.
4. Send it only to the intended recipient.
5. Store the file in a location appropriate for sensitive employment information.

---

## 8. Limitations and Important Considerations

Possible limitations depend on the actual implementation:

- Attendance statuses may be limited to the options provided in the app.
- Wage calculations depend on configured rates and the app's calculation rules.
- Overtime rules vary by employment agreement, jurisdiction, worker category, and applicable law.
- Monthly summaries may not include deductions, advances, bonuses, statutory contributions, or other payroll components unless those fields are explicitly supported.
- A calculated amount may not be the final legally payable salary.
- A PDF or printout may be a record or estimate, not a statutory payroll document.
- Attendance records depend on accurate user input and should be reviewed for mistakes.
- A daily-wage formula may not suit every salary structure, shift pattern, or employment arrangement.
- Rounding, unpaid breaks, night shifts, holidays, and partial hours may require rules that are not available in a simple register.
- The feature may not replace an employer's official payroll, attendance, or compliance system.

Only describe a limitation as confirmed app behaviour after testing the current version.

---

## 9. Troubleshooting

### Attendance status does not save

- Confirm that all required fields are completed.
- Check for a visible validation message.
- Try saving again only after checking whether the first attempt succeeded.
- Reopen the record to confirm its current status.
- Record the app version and visible error if the problem continues.

### Wage total looks incorrect

- Recheck the daily wage or pay rate.
- Confirm the number of full days and half-days.
- Check whether paid leave is included in the total.
- Verify overtime hours, standard hours, and multiplier.
- Check deductions or adjustments, if supported.
- Compare the displayed total with a manual calculation.
- Confirm whether the displayed total is gross pay or a net amount after adjustments.

### Overtime is not included

- Confirm that overtime hours were entered in the correct field.
- Check whether the selected wage settings include an overtime multiplier.
- Confirm the period or worker selected.
- Verify that the summary has refreshed.
- Check whether the app applies a specific threshold before overtime begins.
- Do not assume overtime is included unless it appears in the breakdown or has been verified through a calculation test.

### Monthly summary is incomplete

- Check the selected month or payroll period.
- Verify that each attendance record is saved and dated correctly.
- Look for records associated with another worker or date range.
- Review whether the summary excludes absent days or unpaid leave by design.
- Check whether the summary includes the components you expect.

### A previous record changes after updating a wage setting

Check whether the app recalculates earlier records when settings change. If historical records are affected, compare the current result with any previously saved summary or external record. Do not assume old wage calculations remain fixed unless the implementation confirms that behaviour.

### Salary slip or PDF will not export

- Confirm that the export option exists in the current build.
- Check whether a worker and period have been selected.
- Preview the document if possible.
- Try the supported print/export action again.
- Check whether the device or browser provides a print/save destination.
- Avoid sharing an incomplete or incorrect file.

### Duplicate attendance or wage entries appear

- Review the selected dates and worker.
- Check whether the first save succeeded before adding another record.
- Use the app's supported edit or correction process.
- Verify the summary after making a correction.

---

## 10. Legal and Payroll Disclaimer

**General record-keeping and calculation information only — not legal, tax, accounting, or employment advice.**

This chapter describes the attendance and wage-register concept shown in the User Manual. The actual available fields, calculation rules, export formats, and storage behaviour must be verified in the installed version.

Wage, leave, overtime, minimum-wage, payroll, and record-retention requirements may vary by jurisdiction, worker category, contract, and applicable law. Do not rely on an illustrative calculation as a determination of legally payable wages. Employers and workers should verify relevant rules with official sources or a qualified professional.

The user is responsible for entering accurate records, checking totals, and handling attendance and wage information appropriately.

---

## 11. Developer Verification Checklist

Before publishing this chapter as a definitive description of the app, verify each applicable item against the current code and released UI:

- [ ] The Attendance Register opens successfully.
- [ ] The app supports one personal record or multiple worker profiles as documented.
- [ ] Available attendance statuses are confirmed.
- [ ] Full-day, half-day, absent, and paid-leave handling is tested.
- [ ] Daily wage settings and their scope are understood.
- [ ] Standard working hours can be configured if described as a feature.
- [ ] Overtime entry and calculation rules are verified.
- [ ] Rounding and edge cases are tested.
- [ ] Monthly/date-range summaries match the underlying records.
- [ ] Editing old records behaves as documented.
- [ ] Changes to wage settings do not cause undocumented historical recalculation.
- [ ] Salary-slip preview, PDF export, or printing is verified before being advertised.
- [ ] Storage, backup, and network behaviour are reviewed.
- [ ] Private data is not exposed in shared exports or unrelated screens.
- [ ] The current UI labels and navigation instructions match the installed release.
- [ ] No unsupported legal-compliance, offline, privacy, or payroll-accuracy claims remain.
- [ ] Any deductions, advances, bonuses, or statutory components are documented only if implemented.
- [ ] Input validation and duplicate-record handling are tested.

Only describe features as available if they are implemented and tested in the released version. If a capability is planned but not implemented, label it clearly as planned rather than available.

---

## 12. Related Daily Khata Pro Features

Other features in the User Manual may support related record-keeping tasks:

- Income and expense records.
- Reports and PDF statements.
- Financial goals and milestones.
- Loans, EMIs, and payment records.
- GST and non-GST invoice generation.
- Backup and data restore tools.

These tools have different purposes. An attendance wage estimate should not automatically be treated as a recorded payment or income entry unless the app explicitly performs that action and the user verifies the result.

---

## 13. Practical Checklist for Users

Before finalising an attendance period, review the following:

- [ ] The correct person or worker is selected, if profiles are supported.
- [ ] Dates are correct and no workday is unintentionally duplicated.
- [ ] Attendance statuses match the records you intend to keep.
- [ ] Daily wage and standard working hours are correct.
- [ ] Overtime hours and the multiplier have been checked.
- [ ] Paid leave, absence, and half-day treatment match the applicable agreement or configured rules.
- [ ] The wage total has been checked against a manual calculation or other reliable record.
- [ ] Any separate payment amount is distinguished from the calculated wage.
- [ ] The summary covers the correct period.
- [ ] An exported salary slip has been reviewed before sharing.
- [ ] Private attendance and wage information is stored and shared carefully.

This checklist is a review aid. It does not replace the app's actual functionality, employment agreements, or professional advice.

---

## 14. Summary

Chapter 20 describes an attendance and wage register for tracking workdays, shifts, overtime, and wage summaries. To use it reliably, enter accurate attendance and rate information, verify calculations, review summaries before sharing or paying, and keep personal employment records secure. Confirm all described controls and calculations against the current app version.

**Documentation maintenance:** Update this file whenever attendance statuses, wage settings, overtime calculations, monthly summaries, export options, storage behaviour, or related screens change.
