# Chapter 23: Frequently Asked Questions (FAQ)

**Product:** Daily Khata Pro  
**Section:** User Manual & Comprehensive Guide  
**Purpose:** Help users understand common workflows, offline operation, local data storage, PIN recovery, financial tools, invoice generation, and data transfer.

> **Documentation note:** This chapter expands the FAQ items described in the Daily Khata Pro user manual. Some behaviour—especially storage implementation, Google Drive sync, PIN recovery, and invoice-to-ledger posting—should be verified against the current application source code before treating this document as a technical guarantee.

## 1. Can I Generate Professional Invoices for My Clients and Log Payments Directly into Khata?

**Answer:** The Invoice Generator tool is described as supporting GST and non-GST invoices, itemized rows, tax calculations, and printable PDF invoices. The interface also describes a **Record to Khata** action for recording invoice revenue in the app's ledger with the configured 6-fund split.

The exact result of **Record to Khata** should be checked in the current app version. It may record invoice revenue or another transaction type, and it should not automatically be treated as proof that the customer has paid.

### How to create an invoice

1. Open the **Add** area or the Invoice Generator tool, depending on your app navigation.
2. Enter the business or sender details.
3. Enter the client or buyer details.
4. Add the invoice number, invoice date, payment terms, and due date where applicable.
5. Add each product or service as a separate item.
6. Enter the quantity, unit, rate, discount, and applicable tax for each item.
7. Review the subtotal, taxes, discounts, additional charges, and grand total.
8. Open **Preview & Print** to check the invoice layout and details.
9. Save the invoice or export/print the PDF using the available controls.
10. If the current version provides **Record to Khata**, use it only after checking the invoice total and understanding what kind of record it creates.

### What to verify before issuing an invoice

- Business name and contact details are correct.
- Client name and billing details are correct.
- Invoice number and date are appropriate and not accidentally duplicated.
- Item descriptions, quantities, units, and rates are correct.
- Discounts, taxes, and extra charges are calculated as intended.
- Payment terms and due date are clear.
- The preview matches the intended invoice.
- You have retained a copy of the issued invoice and supporting documents where required.

### Important notes

- Confirm the applicable tax treatment before issuing a GST invoice.
- A generated invoice is not, by itself, proof that payment has been received.
- Check whether **Record to Khata** records invoice revenue, payment received, or another transaction type in the current version.
- Avoid recording the same income manually and through **Record to Khata** unless the app's workflow requires it; duplicate entries can distort summaries.
- Keep copies of issued invoices and supporting records where required for your business.

## 2. Where Can I Find Financial Planning Calculators Like Inflation, SIP, and Loan EMI?

**Answer:** The manual lists these tools under **Calculators** or the app menu/footer:

- Inflation / Goal Horizon
- SIP Compounder
- Loan EMI
- Cash Runway Simulator
- Multi-Currency Forex Conversion

The exact navigation and availability may differ by app version.

### General usage

1. Open **Calculator** or the relevant calculator from the menu.
2. Select the calculator that matches the question you want to estimate.
3. Read the field labels and enter the requested values.
4. Check units carefully: monthly versus annual rates, years versus months, and one-time versus recurring amounts can produce very different results.
5. Review the result and any assumptions shown by the calculator.
6. Change one assumption at a time if you want to compare scenarios.
7. Save, print, or record the result only if the current interface offers that option.

### What these tools are for

**Inflation / Goal Horizon:** Estimates how purchasing power or a future goal amount may change over time, based on the inputs and assumptions used.

**SIP Compounder:** Estimates a possible future value based on recurring contributions and an assumed return. The result is hypothetical and does not predict or guarantee market performance.

**Loan EMI:** Estimates periodic loan instalments from principal, interest rate, and tenure. Actual lender calculations may include fees, insurance, different rate conventions, or other terms.

**Cash Runway Simulator:** Estimates how long available cash may last under entered income and expense assumptions. The estimate is sensitive to the accuracy of those assumptions and may not reflect irregular or unexpected costs.

**Multi-Currency Forex Conversion:** Calculates an indicative conversion between selected currencies using the rate entered or supplied by the tool. Do not assume the rate is live or that it includes bank fees, spreads, or transfer charges unless the tool explicitly says so.

### Tips for more reliable estimates

- Confirm whether an interest or return rate is annual or monthly.
- Check the contribution frequency and total time period.
- Use realistic assumptions rather than treating an illustrative scenario as a promise.
- Compare important calculations with an independent calculation or a qualified professional where needed.
- Recheck inputs before relying on a result for a major financial decision.

### Disclaimer

Calculator results are estimates, not guarantees. Actual investment returns, inflation, loan terms, fees, taxes, exchange rates, and lender calculations may differ. Verify important decisions independently with the relevant institution or a qualified professional.

## 3. Is My Financial Data Stored on Any Server?

**Answer shown in the manual:** Daily Khata Pro is described as using a client-side architecture, with balances, transactions, goals, and notes saved in local device storage identified as `daily_khata_pro_v3`.

### What local storage means

- Data entered in the app may remain on the device or browser profile where it was created.
- Local data does not necessarily transfer automatically to another device.
- Clearing browser or app data, uninstalling the app, changing devices, resetting storage, or using a different browser profile may affect access to locally stored records.
- Local storage is not the same as a backup.
- If Google Drive sync or another external service is used, that service introduces its own access and data-handling considerations.

### Privacy and security note

The statement that data is stored locally should be confirmed against the current build and its actual integrations. Do not enter highly sensitive information unless you understand where it is stored and how it is protected.

Device access, browser profiles, malware, shared devices, and insecure backups can create privacy risks even when an app primarily uses local storage. A passcode or app lock may restrict access through the app interface, but do not assume that it encrypts all stored files unless the current implementation confirms that.

### How to reduce the risk of losing records

1. Use the app's supported backup or export feature, if available.
2. Store backup files in a secure location.
3. Keep the device and browser profile protected.
4. Before clearing app/browser data or uninstalling, confirm that a usable backup exists.
5. Periodically verify that important records can be restored.

## 4. What Happens If I Forget My App Lock PIN?

**Answer shown in the manual:** Select **Forgot PIN**. The app will ask the security recovery question chosen during PIN setup. If answered correctly, the user can set a new PIN without losing data.

The exact recovery workflow should be confirmed in the current app version.

### General recovery steps

1. Open the app's PIN or lock screen.
2. Select **Forgot PIN**, if available.
3. Answer the recovery question configured during setup.
4. Follow the on-screen instructions to set a new PIN.
5. Confirm that you can unlock the app with the new PIN.
6. If the app offers confirmation or recovery settings, review them after regaining access.

### Important precautions

- Choose a recovery answer you can remember but that other people cannot easily guess.
- Do not share your PIN or recovery answer.
- Avoid using information that is easily discoverable from public profiles.
- If the recovery option is unavailable or does not work, avoid clearing app data or uninstalling the app until you have checked whether a backup exists.
- Recovery behaviour can vary by app version. Confirm the current implementation before relying on a promise that data will always be preserved.
- Do not assume that forgetting the PIN automatically means the underlying records have been deleted.

## 5. Can I Use Daily Khata Pro on Multiple Devices?

**Answer shown in the manual:** Yes. The manual describes two options:

1. Export a JSON backup from **Settings → Data & Backup → Export JSON**, then import it into Daily Khata Pro on another device.
2. Use the Google Drive client-side sync feature, if available and configured.

The supported method and exact menu names should be checked in the current version.

### Option A: Transfer with a JSON backup

1. Open Daily Khata Pro on the original device.
2. Open **Settings → Data & Backup**.
3. Choose **Export JSON**, if that control is available.
4. Save the backup file in a secure location.
5. Transfer the file to the second device using a method you trust.
6. On the second device, open Daily Khata Pro.
7. Find the import or restore option and select the exported JSON file.
8. Read any confirmation screen carefully before proceeding.
9. Review the imported data and confirm that the expected records are present.

**Before importing:** Make a separate backup of the destination device's existing data if possible. Importing may replace existing data, merge records, duplicate entries, or behave differently depending on the version. Do not import into a device containing important records until you understand the effect.

### Option B: Google Drive client-side sync

1. Open the app's Google Drive or backup/sync section.
2. Review the requested Google permissions.
3. Authorize only if you are comfortable with the access requested.
4. Follow the app's on-screen instructions to back up or restore data.
5. Verify the result on the destination device.

**Important:** A backup/export is not necessarily continuous synchronization. Confirm whether the current version supports manual backup, automatic sync, conflict handling, and restore before relying on it.

### Avoiding device-to-device confusion

- Identify which device currently contains the most recent records.
- Back up the current data on both devices before replacing or restoring records, where possible.
- Do not assume changes made independently on two devices will merge automatically.
- After transfer, check a sample of important transactions, balances, notes, goals, and settings where those items are included in the backup.
- Keep the original backup file unchanged until you have verified the transfer.

## 6. Can I Customize the Smart Fund Percentage Allocation?

**Answer shown in the manual:** Yes. Go to **Settings → Smart Fund Rules** and customize the percentage assigned to each fund, provided that the total allocation equals 100%.

### How to use it

1. Open **Settings**.
2. Select **Smart Fund Rules**, if available.
3. Review the funds and their current percentages.
4. Adjust the percentages according to your chosen budgeting method.
5. Check that the combined allocation is exactly 100%.
6. Save the settings.
7. Review how the app applies the updated allocation to new entries.
8. Check the resulting balances and reports after using the updated rules.

### Example

If a user chooses three funds with allocations of 50%, 30%, and 20%, the total is 100%.

| Fund | Example allocation |
|---|---:|
| Fund A | 50% |
| Fund B | 30% |
| Fund C | 20% |
| **Total** | **100%** |

This is only an arithmetic example—not a recommended personal allocation. The right allocation depends on the user's needs, priorities, and circumstances.

### Important notes

- Fund allocation is a budgeting method, not a guarantee of financial security or investment performance.
- Check whether changing the rules affects only future entries or also recalculates existing records.
- Review the resulting balances after changing settings.
- If the total is not 100%, follow the app's validation message and correct the percentages before relying on the allocation.
- Avoid changing percentages repeatedly without checking how the changes affect your planning and records.

## 7. Does This App Require an Active Internet Connection?

**Answer shown in the manual:** Daily Khata Pro is described as a progressive offline app that can perform its core functions without an active internet connection.

### Offline use

If a relevant feature is implemented locally, users may be able to enter and review records while offline. However, features that depend on external services may require connectivity.

### Features that may require internet

Depending on the current version and configuration, internet access may be needed for:

- Google OAuth sign-in or Google Drive operations
- Live market information, news, or external research links
- Opening external websites
- Any feature that retrieves current information from an online service
- Other integrations that depend on a remote service

### Practical advice

1. Test important workflows in airplane mode before relying on offline access.
2. Export a backup regularly and store it somewhere safe.
3. Reconnect before using any feature that explicitly requires online access.
4. Do not assume live rates, market quotes, news, or cloud backups are current while offline.
5. If a feature fails offline, check whether that feature depends on an external service rather than assuming the entire app is unavailable.

Offline capability can vary by feature and version. Do not treat the app's offline description as a guarantee that every tool will work without internet.

## 8. General Troubleshooting

### I cannot find a tool or menu item

- Check the main navigation, footer, Settings, and search field, where available.
- Confirm that you are using the expected version of the app.
- Refer to the relevant chapter of the User Manual.
- Remember that navigation labels may change between versions.

### A backup will not import

- Confirm that the file is a backup exported by a compatible version of Daily Khata Pro.
- Keep an untouched copy of the backup file.
- Check the error message and available storage.
- Confirm that you selected the intended file.
- Avoid repeatedly importing into the only copy of important data.
- If the import might replace data, protect the destination records before trying again.

### My records are missing after changing devices

- Local records do not automatically move to a new device unless a supported transfer or sync method is used.
- Look for the original device and any exported JSON backup.
- Confirm the behaviour of Google Drive sync in the current version before assuming that all records were synchronized.
- Check that the correct Google account and backup file were selected.
- Avoid clearing or resetting the original device until recovery options have been checked.

### An invoice total or calculator result looks incorrect

- Recheck the values, units, discounts, tax settings, dates, interest assumptions, and rounding.
- Confirm whether rates are monthly or annual and whether amounts are one-time or recurring.
- Compare important calculations with an independent calculation or professional advice.
- Do not issue a final invoice until you have reviewed the preview and total.
- If the result remains unexpected, record the inputs and app version so the issue can be reproduced.

### PIN recovery is not working

- Confirm that you are using the recovery option provided by the current version.
- Check that you are answering the recovery question set during setup.
- Do not clear app data or uninstall the app as a first troubleshooting step.
- Check whether a recent backup exists before attempting any action that could affect stored data.
- Consult the current documentation or project support channel if available.

### Google Drive authorization or backup fails

- Check internet connectivity and confirm the intended Google account.
- Review any permission or error message.
- Check that the backup operation completed rather than assuming it succeeded.
- Confirm whether the current version supports the browser and workflow you are using.
- Protect existing records before trying a restore again.

## 9. Data Safety Checklist

Use this checklist when changing devices, updating the app, or managing sensitive records.

- [ ] Export a backup before major updates, resets, or device changes, where supported.
- [ ] Keep backup files in a secure location and avoid sharing them publicly.
- [ ] Test restore using a safe copy or a separate device when possible.
- [ ] Protect the device with an appropriate screen lock.
- [ ] Do not share the App Lock PIN or recovery answer.
- [ ] Review permissions before connecting Google Drive or other services.
- [ ] Check invoice details, taxes, and totals before sending them to a client.
- [ ] Avoid duplicate transaction entries when using **Record to Khata**.
- [ ] Keep separate business records when required by law or your accounting process.
- [ ] Verify important records after importing or restoring a backup.
- [ ] Do not assume that local storage, an app lock, or a backup automatically guarantees encryption or recovery.

## 10. Understanding the Difference Between App Records and Official Records

Daily Khata Pro can help organize personal and business information, but an entry in the app does not automatically replace external documents or official records.

For example:

- An income entry does not, by itself, prove that a customer has paid.
- A generated invoice is not necessarily a payment receipt.
- A calculator estimate is not a lender's official repayment schedule.
- A locally stored record may not be included in a backup unless the export feature includes it.
- A budget allocation does not guarantee that money has actually been transferred into a separate bank account.
- A backup file is not verified until the backup process completes and the expected data can be checked.

Keep supporting documents such as invoices, receipts, bank records, and tax documents where appropriate for your situation.

## 11. Frequently Asked Questions at a Glance

| Question | Short answer | What to verify |
|---|---|---|
| Can I generate invoices? | The manual describes GST and non-GST invoice generation and PDF output. | Current invoice fields, tax treatment, and PDF controls. |
| Can invoice revenue be recorded in Khata? | The manual describes a **Record to Khata** action. | What transaction type it creates and whether payment is recorded. |
| Are calculators available? | The manual lists Inflation / Goal Horizon, SIP Compounder, Loan EMI, Cash Runway, and Multi-Currency Forex Conversion. | Current navigation, input assumptions, and available export options. |
| Is data stored locally? | The manual describes local storage identified as `daily_khata_pro_v3`. | Current storage implementation and external integrations. |
| What if I forget my PIN? | The manual describes **Forgot PIN** and a recovery question. | Current recovery flow and data-preservation behaviour. |
| Can I use multiple devices? | The manual describes JSON export/import and Google Drive backup/sync options. | Whether restore replaces, merges, or duplicates records; whether sync is automatic. |
| Can I customize fund percentages? | The manual describes **Settings → Smart Fund Rules**, with allocations totaling 100%. | How rule changes affect existing versus future entries. |
| Does the app work offline? | The manual describes core functionality as offline-capable. | Which specific features work offline in the current version. |

## 12. Disclaimer

This guide is for general product-use information. It is not legal, tax, accounting, investment, lending, or foreign-exchange advice. Users are responsible for checking the accuracy of their entries, invoices, tax treatment, backup files, and financial decisions.

Application features and workflows may change between versions. Statements about local storage, PIN recovery, data preservation, automatic synchronization, and transaction posting should be verified against the current release and source code. Do not treat this documentation as a guarantee of data recovery or uninterrupted service.

## 13. Chapter Summary

This FAQ explains the main user questions presented in Chapter 23 of the Daily Khata Pro manual: invoice creation and Khata recording, financial calculators, data storage and privacy, App Lock PIN recovery, multi-device data transfer, Smart Fund percentage settings, and offline use.

For sensitive records, users should maintain secure backups, review permissions, check transaction and invoice details, and verify the current behaviour of the app before relying on any particular recovery or synchronization feature.

---

**Chapter:** 23 of 23  
**Section:** Frequently Asked Questions (FAQ)  
**Application:** Daily Khata Pro

**Documentation note:** This chapter is based on the uploaded Chapter 23 source file. Where implementation details are not established by that source, this guide recommends checking the current app version and source code rather than assuming a specific technical behaviour.
