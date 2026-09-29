# Chapter 13: Custom Settings & Rules Engine

## Overview

Daily Khata Pro includes configuration and customization options
intended to help users adapt the application to their personal or
professional record-keeping needs. Depending on the installed version,
available options may include appearance preferences, language
selection, custom income sources, expense categories, fund-allocation
percentages, and other application preferences.

This chapter explains the purpose of these settings, how to approach
changes carefully, and what to verify afterward. The exact names,
locations, and availability of controls may vary by application version.

> **Important:** Use only controls that are actually available in your
> installed version. Examples in this chapter explain general workflows;
> they do not guarantee that every option is implemented in every
> release.

## 13.1 Purpose of Custom Settings

Custom settings allow users to configure supported parts of the
application without changing its source code. A suitable configuration
can make records easier to understand and help the application fit a
user's workflow.

Depending on implemented functionality, settings may include:

-   Appearance preferences and accent colours
-   Display language
-   Custom income sources
-   Custom expense categories
-   Fund-allocation percentages
-   Other application preferences
-   Local backup or data-management options, where supported

Settings may change how the application looks, organizes information, or
calculates supported values. They do not automatically verify that
financial records are complete or accurate. Users remain responsible for
entering and reviewing their data.

### Configuration versus financial records

A setting is not necessarily a transaction. For example, changing an
accent colour normally affects the interface's appearance. Adding a
category may change the choices available when recording a transaction.
Adjusting a fund-allocation percentage may affect a supported
calculation.

The exact relationship between settings and existing records depends on
the application's implementation. Do not assume a configuration change
will rewrite past transactions unless the application explicitly
confirms that behavior.

## 13.2 Opening the Settings Area

A general workflow is:

1.  Open Daily Khata Pro.
2.  Locate the settings, preferences, or customization control in the
    interface.
3.  Open the relevant section.
4.  Read the labels and descriptions before changing anything.
5.  Change only the settings you intend to update.
6.  Save or apply the change if the interface provides that action.
7.  Return to the relevant screen and verify the result.

Some preferences may apply immediately, while others may require
confirmation or reopening a screen. Follow the behavior shown by your
installed version.

### Before making a significant change

-   Make sure you understand what the setting controls.
-   Check whether it affects only the display or may influence data
    entry and calculations.
-   Review any confirmation message.
-   If the change could affect important records, create a backup first
    if a supported backup method is available.
-   Avoid changing several unrelated settings at once; this makes it
    easier to identify the cause if something behaves unexpectedly.

## 13.3 Appearance and Accent Colours

If theme or accent-colour settings are available, they allow users to
choose a visual style for the interface.

Depending on the implementation, a theme may affect buttons, highlights,
icons, borders, selected navigation items, or other visual elements. It
should not be assumed that every screen will use the setting in exactly
the same way.

### General workflow

1.  Open the appearance or theme settings, if available.
2.  Review the available themes or accent colours.
3.  Select a scheme that keeps text, icons, and controls easy to read.
4.  Review important screens such as Home, Records, Add, Goals,
    Calculator, and Reports, where those screens are present.
5.  Check that selected items, warnings, and important actions remain
    distinguishable.

### Readability and accessibility

Choose colours with sufficient contrast between text and its background.
Do not rely on colour alone to identify an important status or action.
If text or controls become difficult to see, choose another available
theme.

Changing an appearance setting should not be assumed to change
transaction amounts, balances, or financial records.

## 13.4 Language Preferences

If the application supports multiple interface languages, the language
setting may change navigation labels, buttons, messages, and other
interface text.

### General workflow

1.  Open the language or localization setting, if available.
2.  Select a supported language.
3.  Save or apply the selection if required.
4.  Review the interface to confirm that labels and messages display
    correctly.

### Important considerations

-   Supported languages may vary by version.
-   User-entered content may remain in the language in which it was
    originally written.
-   Currency formatting, dates, and number separators may be controlled
    by separate locale settings or by the application's implementation.
-   A language change should not be assumed to convert existing amounts
    or alter transaction values.

If text appears incomplete or incorrectly formatted, return to a
supported language if possible and consult version-specific guidance.

## 13.5 Custom Income Sources

If custom income sources are supported, users can organize incoming
money according to how they receive it.

Examples may include:

-   Salary
-   Freelance or contract payments
-   Business income
-   Service payments
-   Rental income
-   Other income

These are examples, not a claim that each source is preconfigured in
every version.

### Adding or editing an income source

1.  Open the relevant source, category, or customization settings.
2.  Choose the add or edit option, if available.
3.  Enter a short, clear name.
4.  Check spelling and look for duplicate or nearly identical names.
5.  Save the change if the interface provides a save action.
6.  Open the relevant income-entry workflow and confirm whether the
    source is available.

### Naming recommendations

Use names that help you understand the source later. For example, if you
receive different kinds of work payments, choose labels that distinguish
them clearly without creating unnecessary duplicates.

Before renaming or removing a source, check how the application handles
existing transactions associated with it. Do not assume that removing a
source deletes, preserves, or reassigns historical records unless the
application explains that behavior.

## 13.6 Custom Expense Categories

Custom expense categories can help organize spending according to
household routines, personal needs, or work activities.

Possible examples include:

-   Groceries
-   Transport
-   Utilities
-   Equipment
-   Maintenance
-   Professional services
-   Other expenses

These are suggestions only. The available default categories and
customization options depend on the installed version.

### Adding or editing a category

1.  Open the category customization area, if available.
2.  Select the add or edit option.
3.  Enter a clear category name.
4.  Check whether a similar category already exists.
5.  Save the change if required.
6.  Confirm whether the category appears in the relevant expense-entry
    screen.

### Good category practices

-   Keep names short and specific.
-   Avoid multiple categories with nearly identical meanings.
-   Use consistent spelling and naming style.
-   Review categories periodically as your record-keeping needs change.
-   Check how existing records are handled before deleting or renaming a
    category.

A category is an organizational label. It does not, by itself, determine
whether an expense is tax-deductible or how it should be treated in
formal accounts.

### Example of consistent categorization

Suppose you record electricity bills under "Household Bills" one month
and "Utilities" the next month. A report may then split similar spending
across two categories. Choose a consistent category approach so reports
remain easier to interpret.

If you decide to reorganize categories, review existing records and the
application's documented behavior before making changes.

## 13.7 Smart Fund Allocation Percentages

If the Smart Fund Allocation feature is available, it may help users
divide an income amount among configured financial purposes. Allocation
percentages are planning settings and should reflect the user's own
circumstances.

The application may use configured percentages to calculate suggested
amounts when an income entry is recorded. Confirm the behavior in your
installed version before relying on the result.

### Reviewing allocation percentages

1.  Open the fund-allocation or related settings section, if available.
2.  Review each configured fund and its percentage.
3.  Decide which percentages you want to use.
4.  Enter the intended values.
5.  Check the displayed total.
6.  Save or apply the changes if required.
7.  If the application provides a safe preview or test calculation, use
    it to check the result.

### Check the total

When the allocation system expects a complete distribution of income,
the configured percentages should total **100%**.

Illustrative example:

  Fund                Example percentage
  ----------------- --------------------
  Personal Fund                      25%
  Family Fund                        30%
  Buffer Fund                        10%
  Emergency Fund                     10%
  Savings Fund                       10%
  Investment Fund                    10%
  Growth Fund                         5%
  **Total**                     **100%**

This table demonstrates arithmetic only. It is not a recommended
financial plan. Choose percentages according to your income,
obligations, priorities, and circumstances.

### Example calculation

If a hypothetical income entry is ₹10,000 and one fund is configured to
receive 25%, the calculated allocation for that fund would be:

`₹10,000 × 25 ÷ 100 = ₹2,500`

The calculation explains the percentage. The actual application workflow
and resulting records depend on the implemented feature.

### What if the total is not 100%?

If the system expects a complete distribution, a total below 100% may
leave some of the amount unallocated, while a total above 100% may
allocate more than the original amount. The application's actual
handling may differ, so check its labels, validation messages, and
documentation.

For example, if the percentages total 90%, a ₹10,000 amount would have
only ₹9,000 accounted for by those percentages. If they total 110%, the
calculated portions would add up to ₹11,000. These are arithmetic
examples, not a statement about how the application will accept or
process the values.

### Important allocation notes

-   Allocation percentages are a planning method, not a guarantee of
    savings or investment performance.
-   Confirm whether the application uses gross income, net income, or
    another amount as the calculation base.
-   Check rounding when dividing amounts among multiple funds.
-   Review the effect of percentage changes on future entries and
    existing records.
-   Do not assume that changing a percentage retroactively changes
    previously recorded allocations unless the application explicitly
    says so.
-   A calculated allocation should not automatically be treated as a
    completed bank transfer or actual movement of money.

## 13.8 Understanding the Rules Engine

The term "rules engine" broadly describes application logic that applies
configured settings or conditions. In Daily Khata Pro, the exact
behavior depends on the implemented version.

For example, a supported rule may use a configured percentage to
calculate an allocation. Other automated behavior should be described
only when it is confirmed in the application.

Do not assume that the application automatically:

-   Categorizes every transaction correctly
-   Detects every financial error
-   Enforces every budget limit
-   Transfers money between accounts
-   Updates historical transactions after a setting changes
-   Applies a rule to every record type

unless those capabilities are visibly implemented and documented.

### How to check a rule's effect

1.  Read the setting label and any explanatory text.
2.  Identify which amount or record the rule is intended to affect.
3.  Check whether the rule applies to new entries, existing records, or
    both.
4.  Use a small example or preview if the application supports it.
5.  Compare the result with a manual calculation.
6.  Review the resulting record before relying on it.

If the application does not explain a rule's scope, avoid assuming how
it behaves.

## 13.9 Reviewing Changes Before Applying Them

Before saving important settings changes, review:

-   The label and description of each setting
-   Percentage values and their total
-   Category and income-source names
-   The selected theme or language
-   Whether the setting affects data entry, calculations, or only
    appearance
-   Whether the change could affect reports or future entries
-   Any confirmation message shown by the application

If the change could affect important data, make a backup first where a
supported backup method is available.

After applying the change, revisit the relevant screen and verify the
result. If the change does not behave as expected, avoid making further
changes until you understand what happened.

## 13.10 Settings and Existing Records

Settings and financial records are not necessarily the same thing.

A display preference generally affects presentation. A category or
fund-allocation setting may affect available choices or supported
calculations. The exact relationship depends on the application's
implementation.

Before changing or deleting a category, source, or fund:

1.  Check the application's confirmation messages.
2.  Review the relevant documentation.
3.  Consider whether existing records refer to that item.
4.  Create a backup first if supported and appropriate.
5.  Avoid irreversible changes until you understand the consequences.

Do not assume that renaming or deleting a setting will automatically
update historical records, preserve old labels, or remove associated
transactions.

## 13.11 Troubleshooting

### A setting does not appear to change

-   Check whether the interface requires saving or applying the change.
-   Reopen the relevant settings section.
-   Navigate away from the affected screen and return.
-   Confirm that your installed version supports the setting.
-   Review any message shown after saving.

### A custom category is not available during entry

-   Confirm that the category was saved successfully.
-   Check that it was created in the correct category or source section.
-   Reopen the entry form if the list has not refreshed.
-   Confirm that custom categories are supported in your version.

### Allocation percentages do not total 100%

-   Review every percentage field.
-   Check for omitted values, duplicate entries, or typing mistakes.
-   Recalculate the total independently.
-   Save only when the total meets the allocation system's stated
    requirements.

### A calculation differs from expectations

-   Verify the income amount.
-   Recheck each percentage.
-   Confirm the calculation base, if documented.
-   Consider rounding when amounts are divided among several funds.
-   Compare the result with a manual calculation.
-   Confirm whether the displayed figure is a planned allocation or a
    recorded transaction.

### Theme or language appears inconsistent

-   Review the available settings and reapply the intended choice if
    needed.
-   Check more than one screen to understand where the preference is
    applied.
-   Confirm that the selected option is supported by the installed
    version.
-   Consult version-specific documentation if the issue continues.

### Existing records appear different after a change

Do not immediately assume that data has been lost or rewritten. Review
the relevant record, report filters, and application messages. If the
behavior is unclear, stop making further changes and consult the
documented backup or recovery process before attempting any reset.

## 13.12 Recommended Settings Review Routine

A short review can help keep configuration organized:

1.  Review fund percentages when your income or obligations change.
2.  Check category names for duplicates and inconsistent spelling.
3.  Rename or remove categories only after considering existing records.
4.  Confirm that the selected theme and language remain readable and
    useful.
5.  Review the effect of settings changes on entry forms and reports.
6.  Maintain a current backup when supported and appropriate.

There is no need to change settings frequently if your current
configuration works for you. Frequent unnecessary changes can make
records harder to compare and can introduce avoidable confusion.

## 13.13 Data Protection Reminder

Settings and records may be stored differently depending on the
application's architecture. Do not assume that a preference or financial
record is synchronized to another device unless the application
explicitly supports and confirms that behavior.

Before clearing browser or application storage, uninstalling the
application, changing devices, or resetting data, review **Chapter 14:
Backup, Restore & Data Sovereignty**.

Keep backup files in a safe location and verify that a backup is usable
before relying on it. A report export should not be treated as a
complete backup unless the application explicitly documents that
capability.

## 13.14 Practical Example

Suppose a user wants to organize freelance income and household
expenses.

1.  The user selects a readable interface theme, if theme settings are
    available.
2.  The user adds an income source named "Freelance Payments," if custom
    sources are supported.
3.  The user creates expense categories that match actual spending, if
    category customization is available.
4.  The user reviews fund-allocation percentages and checks that they
    total 100% if the allocation system requires a complete
    distribution.
5.  The user checks a supported preview or calculates a small example
    manually.
6.  The user confirms that the expected source, category, or allocation
    appears in the relevant screen.
7.  The user verifies a backup if a supported backup method is
    available.

This example illustrates a possible workflow. Individual controls and
exact steps depend on the installed version.

## 13.15 Chapter Summary

Custom settings can help users tailor Daily Khata Pro to their
record-keeping preferences. Where supported, users may be able to adjust
appearance, language, income sources, expense categories, and
fund-allocation percentages.

For reliable results:

-   Change settings deliberately.
-   Use clear and consistent names.
-   Check allocation totals and calculation results.
-   Verify the effect of changes.
-   Do not assume that settings automatically modify historical records.
-   Maintain backups before changes that could affect important data.
-   Use only features available in the installed version.

Daily Khata Pro is a financial organization and record-keeping tool.
Users remain responsible for the accuracy of their entries and should
verify important calculations before relying on them for formal
business, accounting, tax, or financial purposes.

------------------------------------------------------------------------

**Daily Khata Pro --- Personal Finance & Expense Tracking**\
**Official Documentation**
