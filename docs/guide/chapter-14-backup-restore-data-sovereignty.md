# Chapter 14: Backup, Restore & Data Sovereignty

## Overview

Financial records can be important for personal planning, household
management, freelance work, and small-business record-keeping. A
reliable backup routine helps reduce the risk of losing information when
changing devices, clearing application data, reinstalling an
application, or encountering a storage problem.

Daily Khata Pro's available backup and restoration methods depend on the
installed version. This chapter explains the general JSON backup and
restore workflows described for the application, along with practical
checks for protecting exported files and verifying restored information.
Exact controls and behavior may differ by version.

> **Important:** A backup is useful only if it contains the expected
> information and can be restored successfully. Do not delete original
> records or clear application storage until you have verified your
> backup and understand the restore process.

## 14.1 What Is a Backup?

A backup is a separate copy of data kept in case the original
information is lost, damaged, or no longer accessible.

For a financial record-keeping application, a backup may include
supported information such as:

-   Income and expense records
-   Categories and sources
-   Fund settings or allocation preferences
-   Financial goals
-   Notes or other supported records
-   Application preferences, where included by the export feature

The exact contents depend on what the application's export function
includes. Do not assume that every setting, attachment, note, or
preference is included. Review the application's export description and
inspect restored information where practical.

### Backup versus original data

Your active application data and an exported backup are two different
copies. A backup file does not automatically update when you add new
transactions. If you make more changes after creating a backup, create a
newer backup when appropriate.

A file existing on your device does not by itself prove that it is
complete, readable, current, or restorable.

## 14.2 Understanding Local Data Storage

Daily Khata Pro is designed to support client-side financial
record-keeping. In a client-side storage model, supported records are
stored within the local browser or device environment rather than
necessarily being sent to a remote financial database.

Local storage can offer practical privacy benefits, but it also has
limitations:

-   Data may become inaccessible if browser or application storage is
    cleared.
-   Device failure, damage, or loss may make local records inaccessible.
-   Private browsing or temporary browser profiles may not retain data
    in the same way as a normal profile.
-   Moving to another browser, device, or profile may not automatically
    move existing records.
-   Local storage is not the same as an independent backup.
-   External synchronization should not be assumed unless the
    application explicitly provides it.

The exact storage behavior depends on the application version and
platform.

### Practical meaning

If your records are stored locally, they may remain available in the
same browser or device profile, but you should not rely on that device
as the only place your information exists. An exported backup stored
separately can help protect against loss of the original local data.

## 14.3 Data Sovereignty and User Control

In this documentation, **data sovereignty** means understanding where
your records are stored, how you can export them, who can access copies,
and which actions could affect your access to the information.

Users should be able to make informed decisions about:

-   Where backup files are stored
-   Who can access the device and exported files
-   Whether an external cloud-storage service is used
-   When to create a new backup
-   How to transfer supported records to another device
-   How to verify a restore before relying on it

An exported file may contain sensitive financial information. Store it
accordingly and share it only when necessary.

### Questions to ask yourself

-   Do I know where the active records are stored?
-   Do I have a separate backup file?
-   Is the backup recent enough for my needs?
-   Can I access the location where the backup is stored?
-   Do I understand what a restore may do to current records?
-   Have I checked the file's contents or tested the restore process
    safely?

## 14.4 Before Creating a Backup

Before exporting your records:

1.  Open Daily Khata Pro and confirm that the expected data is visible.
2.  Review recent income and expense entries for obvious errors.
3.  Check whether the application indicates that an operation is still
    in progress.
4.  Locate the backup or data-management option, if available.
5.  Read any description of what the export includes.
6.  Ensure that your device has enough free storage for the file.
7.  Choose a private, reliable location for the backup.
8.  Avoid closing the application or interrupting the export while it is
    in progress.

If you are about to clear data, uninstall the application, change
devices, or make a major configuration change, create and verify a
backup first whenever the feature is available.

### Choose the right moment

Create a backup after substantial record updates or before a change that
could affect data access. If you have just corrected several
transactions, make sure the changes are visible before creating the new
backup.

## 14.5 Creating a JSON Backup

If your version provides a JSON backup export, use the following general
workflow. Exact menu names may vary.

1.  Open Daily Khata Pro.
2.  Open the settings or data-management area.
3.  Locate the backup, export, or JSON backup option.
4.  Select the export action.
5.  Follow the application's prompts to save or download the file.
6.  Wait for the export to finish.
7.  Locate the downloaded file in your device's Downloads folder or the
    destination you selected.
8.  Confirm that the file exists and has a plausible file size.
9.  Keep the file in a secure location.
10. If practical, test the backup through the supported restore workflow
    using an appropriate test environment or a safe copy of the data.

### After exporting

Check that the file was actually saved, rather than assuming that
selecting Export completed the process. If the browser or operating
system displays a download notification, confirm that the file is
available from the expected location.

Do not edit the JSON file manually unless you understand its structure
and the application explicitly supports such editing. Even a small
change can make the file invalid or alter the information it contains.

### What a successful export does not prove

A completed download does not necessarily prove that every data type was
included or that the file will restore successfully. Follow the
available verification process before relying on it as your only backup.

## 14.6 Naming and Organizing Backup Files

Clear filenames make it easier to identify the most recent backup and
reduce the chance of selecting the wrong file during restoration.

A useful naming pattern is:

`daily-khata-pro-backup-YYYY-MM-DD.json`

Replace `YYYY-MM-DD` with the date on which the backup was created, if
your file manager allows renaming. Keep an unmodified original export as
well.

### Useful practices

-   Use a consistent date format.
-   Keep a small number of clearly labelled historical backups.
-   Avoid filenames that reveal unnecessary private information.
-   Do not overwrite your only known-good backup until a newer one has
    been verified.
-   Keep backups separate from the device that contains the original
    records when possible.
-   If you keep multiple versions, make sure the creation dates are easy
    to distinguish.

A filename alone does not prove that a backup is complete, current, or
valid.

## 14.7 Where to Store Backups

Choose a location that balances accessibility, privacy, and resilience.

Possible locations include:

-   A private folder on your computer
-   A secure external storage device
-   A protected personal cloud-storage folder, if you choose to use one
-   Another trusted storage location that you control

Keeping the only backup on the same device as the original data leaves
it exposed to the same device loss or failure. Consider keeping a second
copy in a separate, secure location.

### Security considerations

-   Protect devices with a screen lock or account password.
-   Restrict access to folders containing financial exports.
-   Avoid uploading backups to public file-sharing locations.
-   Avoid sending financial backup files through public or shared
    devices.
-   If using cloud storage, review the provider's account security and
    sharing settings.
-   Do not share a backup file merely to demonstrate that the export
    function works.

A JSON backup may contain readable personal information. Treat it as
confidential unless you have confirmed otherwise. Do not assume that
JSON format means the file is encrypted.

## 14.8 Restoring a Backup

Restoration may replace, merge, or otherwise affect current data
depending on the application's implementation. Never assume that a
restore is non-destructive.

### Before restoring

1.  Read any warning shown by the application.
2.  Create a backup of the current data, if possible.
3.  Confirm that you selected the intended backup file.
4.  Check the file's date and source.
5.  Understand whether the restore replaces existing records or combines
    them.
6.  Proceed only when you are comfortable with the potential effect.

If the application does not clearly explain whether a restore replaces
or merges data, do not guess. Preserve the current data and consult the
version-specific instructions before proceeding.

### General restore workflow

If JSON restoration is supported in your version:

1.  Open Daily Khata Pro.
2.  Navigate to the backup, restore, or data-management section.
3.  Choose the restore-from-file option.
4.  Select the intended JSON backup.
5.  Review any confirmation or warning displayed.
6.  Confirm the operation only after understanding its effect.
7.  Wait for the process to finish.
8.  Review the resulting records before continuing to use the
    application.

The exact steps and labels depend on the installed version.

### Avoid restoring the wrong file

If you have several backups, check the date and source carefully. A file
with a newer filename is not necessarily the correct backup. Do not
select a file simply because its name looks familiar.

## 14.9 Verifying a Restored Backup

Do not rely solely on a success message after restoration. Check the
information that matters to you.

### Practical verification checklist

-   Confirm that expected income records are present.
-   Confirm that expected expense records are present.
-   Review totals and balance summaries.
-   Check categories and fund settings where applicable.
-   Review goals, notes, or other supported records that should have
    been included.
-   Compare a few known entries with the original records or backup
    date.
-   Confirm that dates and amounts appear correctly.
-   Review reports for obvious discrepancies.
-   Check that the application remains usable after restoration.

### If information is missing or totals differ

Stop before making additional changes. Preserve the backup file and the
current state, then consult the application's version-specific
troubleshooting guidance. Do not immediately overwrite the backup or
repeatedly restore different files without understanding the
consequences.

A restored file can only recover information that was included in the
backup. Records created after that backup date may not be present.

## 14.10 Moving to a New Device or Browser

Local records do not necessarily move automatically when you change
devices, browsers, browser profiles, or application installations.

### Cautious migration workflow

1.  On the original device, create a supported backup.
2.  Confirm that the backup file has been saved.
3.  Keep an extra copy in a secure location.
4.  Open Daily Khata Pro on the destination device or browser.
5.  Review the destination application's instructions.
6.  Restore the backup using the supported workflow.
7.  Verify important records, totals, settings, and dates.
8.  Keep the original device and backup untouched until you are
    satisfied with the migration.

Do not clear the original device's storage or uninstall the original
installation until you have confirmed that the destination contains the
expected data and that the backup is usable.

### Browser and profile changes

Opening the application in another browser or a different browser
profile may show an empty or different set of records if the data is
stored locally. This does not automatically mean that the original
records have been deleted. Return to the original browser or profile if
it is still available, create a backup there, and follow the supported
migration workflow.

## 14.11 Offline Use and External Services

Routine local functions may work without an internet connection when
fully supported by the installed application. Online storage,
synchronization, or other external services require connectivity and may
depend on separate permissions or accounts.

Keep these concepts distinct:

-   **Local data:** Records stored within the supported local
    application environment.
-   **Exported backup:** A separate file created by an export function.
-   **Cloud copy:** A file or data copy stored with an external
    provider.
-   **Synchronization:** A process that keeps data in more than one
    location updated, if the application supports it.

Saving a backup file to a cloud-storage folder is not necessarily the
same as automatic application synchronization. Do not assume that
changes in the app will automatically update an exported file.

## 14.12 Google Drive or Other Cloud Storage

If the installed version provides a Google Drive or other cloud-storage
integration, follow the application's own setup and authorization
instructions.

Before using an external service:

-   Confirm that the integration is part of your installed version.
-   Review the permissions requested by the service.
-   Use the correct account.
-   Check where files will be stored.
-   Review sharing permissions after upload.
-   Confirm that the file is present in the intended account.
-   Understand whether uploads are manual or automatic.
-   Verify how conflicts, replacement, and restoration are handled.

Do not enter account passwords into an unofficial prompt or share
authentication codes with another person. Use only the expected sign-in
and authorization process.

If no cloud integration is available in your version, you may still be
able to export a file and transfer it yourself using a storage method
you trust.

### Manual upload versus automatic synchronization

A manual upload usually requires you to export a file and then place it
in the external storage location. Automatic synchronization, if
supported, may behave differently. Do not assume that uploading a backup
once means later transactions are also backed up.

## 14.13 Common Backup and Restore Problems

### The backup file cannot be found

-   Check the device's Downloads folder.
-   Review the location chosen during export.
-   Check whether the browser or operating system asked for permission
    to save the file.
-   Search using part of the filename if your file manager supports
    search.
-   Repeat the export only after checking whether a previous file
    exists.

### The export appears incomplete

-   Check whether the export operation finished.
-   Confirm that the file size is plausible.
-   Review the application's export description.
-   Create a new export if needed, keeping the earlier file until the
    new one is checked.

### The restore operation fails

-   Confirm that you selected a file created by the application's
    supported export function.
-   Check whether the file was renamed or edited.
-   Ensure that the file is accessible and not empty.
-   Review any error message carefully.
-   Avoid repeated attempts that might overwrite or alter current
    records.
-   Preserve the original backup and current data while investigating.

### Some records appear to be missing

-   Check whether those records were included in the exported data.
-   Confirm that you selected the intended backup and date.
-   Review whether the application uses separate storage for certain
    features.
-   Check the documentation for the installed version.
-   Do not assume that a restore will recover information that was never
    included in the backup.

### Totals differ after restoration

-   Verify that the correct backup was selected.
-   Compare known transactions and dates.
-   Check whether categories or settings were included.
-   Review rounding or calculation behavior.
-   Avoid making further edits until you understand the discrepancy.

### The file cannot be opened or looks unusual

Do not edit the file to try to repair it unless you understand its
format and the application supports that action. Keep an unchanged copy
and consult the application's documented troubleshooting process.

## 14.14 Actions to Avoid Before Backing Up

Before you have a verified backup, avoid actions that may remove or make
local data inaccessible, such as:

-   Clearing browser site data or application storage
-   Resetting application data
-   Uninstalling an application when its data may be stored locally
-   Switching to a different browser profile without migrating records
-   Replacing an existing backup with an unverified export
-   Restoring an unfamiliar file over current records
-   Manually editing a backup file without understanding its format

The consequences of these actions depend on the device, browser, and
application implementation. When unsure, pause and review the backup
instructions before proceeding.

## 14.15 A Practical Backup Routine

A simple routine is usually easier to maintain than a complicated one.

### Suggested routine

1.  Create a backup after substantial record updates or at another
    interval that suits your use.
2.  Keep the most recent verified backup in a secure location.
3.  Retain an older backup until the newer one has been checked.
4.  Periodically verify that the files still exist and can be accessed.
5.  Test restoration only in a safe environment or after making a
    separate backup of current data.
6.  Before changing devices or clearing storage, create a fresh backup.
7.  Review storage and sharing permissions from time to time.

The appropriate frequency depends on how often your records change and
how much recent data you could reasonably recreate if necessary.

### Example routine

A user who records transactions every day may prefer to create backups
more frequently than someone who uses the application occasionally. The
important point is to choose a routine that matches how often your
records change and to avoid keeping only one unverified copy.

## 14.16 Privacy and Confidentiality

Financial records can reveal income patterns, expenses, obligations,
business relationships, and personal habits. Backup files should be
handled with the same care as the original records.

Recommended precautions:

-   Keep files in private folders.
-   Use device security features.
-   Avoid public computers for sensitive data-management tasks.
-   Remove unintended sharing permissions.
-   Share only the information needed for a specific purpose.
-   Be cautious when attaching backups to emails or messages.
-   Review any cloud-storage account used for backups.
-   Avoid leaving backup files on devices used by other people.

Do not assume that a file is encrypted merely because it is in JSON
format or stored locally. Use the security features actually provided by
your device and storage service.

## 14.17 Practical Example: Moving to a New Phone

Suppose a user is preparing to move Daily Khata Pro to a new phone.

1.  The user checks that recent transactions appear on the original
    phone.
2.  The user exports a JSON backup if the feature is available.
3.  The user stores the file in a private location and keeps a second
    copy.
4.  On the new phone, the user opens the appropriate version of the
    application.
5.  The user follows the supported restore procedure.
6.  The user checks several known transactions, dates, totals, and
    settings.
7.  The user keeps the original records until the migration has been
    verified.

This is an example workflow, not a guarantee that every application
version supports every step.

## 14.18 Important Limitations

Backup and restoration capabilities depend on the application's
implemented features and version. This chapter does not guarantee that
all data types are exported, that every backup can be restored across
all versions, or that cloud synchronization is available.

Users should verify the current application's behavior, read
confirmation messages, and keep independent copies of important records.

Daily Khata Pro is a record-keeping tool. It should not be treated as
the only preservation method for records that must be retained for
legal, tax, regulatory, or formal accounting purposes.

## 14.19 Chapter Summary

The key principles of backup and restoration are:

-   Keep an independent copy of important records.
-   Create a backup before clearing storage, changing devices, or
    performing a major data operation.
-   Store backup files securely.
-   Understand whether restoration replaces or merges existing data.
-   Verify records and totals after restoration.
-   Do not assume local storage is a backup or that cloud
    synchronization happens automatically.
-   Keep the original data until a migration or restore has been
    checked.
-   Treat backup files as confidential financial information.

A careful backup routine helps you remain in control of your records and
reduces the risk of avoidable data loss.

------------------------------------------------------------------------

**Daily Khata Pro --- Personal Finance & Expense Tracking**\
**Official Documentation**
