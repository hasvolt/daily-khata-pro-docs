# Chapter 2: App Passcode Lock & Security

## Overview

Daily Khata Pro includes an app-lock feature designed to help prevent
casual access to the app's financial records and private information.
Users can set a numeric passcode and use it to unlock the app when the
lock screen is displayed.

The passcode is an access-control measure for the app interface. It
should be used alongside sensible device security practices, such as a
screen lock on the phone or computer.

> **Important:** An app passcode helps restrict access through the app's
> lock screen. It should not be treated as a replacement for device
> security, a secure backup, or a guarantee that data can never be
> accessed through other means.

## Purpose of the Passcode Lock

The passcode lock is intended to help users:

-   Reduce the chance of another person casually opening the app.
-   Add an extra access step before viewing personal finance
    information.
-   Keep the app's records less exposed when the device is temporarily
    shared.
-   Use a recovery question to regain access if they forget their
    passcode, where that recovery option was configured during setup.

## Passcode Format

The User Manual describes a **4--6 digit numeric PIN**.

When creating a PIN:

1.  Choose a number that you can remember.
2.  Avoid easy-to-guess combinations, such as repeated digits or a
    simple sequence.
3.  Do not use a PIN that you have already shared with other people.
4.  Do not write the PIN in a place where other people can easily find
    it.

The exact controls and wording may vary slightly depending on the
installed version of Daily Khata Pro.

## How to Set Up or Change the Passcode

Use the app's security or passcode settings to configure the lock, if
available in your installed version.

1.  Open Daily Khata Pro.
2.  Navigate to the **Security** or relevant app-lock settings.
3.  Follow the on-screen instructions to create a numeric PIN.
4.  If the app asks you to confirm the PIN, enter it again.
5.  If a recovery question is offered, choose a question and enter an
    answer that you will remember.
6.  Save or confirm the settings, then follow any on-screen
    confirmation.

**Before relying on the lock:** Test that the PIN works and make sure
you understand the recovery process. Do not assume that a recovery
question is configured unless you completed that step.

## How to Unlock the App

When the app displays its lock screen:

1.  Enter the configured PIN.
2.  Check the digits before submitting.
3.  If the PIN is accepted, continue using the app.
4.  If the PIN is rejected, carefully re-enter it. Avoid repeatedly
    guessing if you are unsure of the correct PIN.

The app should return to its normal interface after successful
authentication. If the app does not unlock as expected, close and reopen
it once, then follow the recovery instructions shown by the app.

## If You Forget the PIN

The User Manual describes a **Forgot PIN** recovery flow that uses the
security recovery question selected during PIN setup.

1.  On the lock screen, select **Forgot PIN**.
2.  Read the recovery prompt.
3.  Enter the answer you configured during setup.
4.  If the answer is accepted, follow the on-screen steps to set a new
    PIN.
5.  Confirm the new PIN if requested, then use it to unlock the app.

According to the app's FAQ, completing this recovery process is intended
to let the user set a new PIN **without losing existing app data**.

If you did not configure a recovery question, cannot remember the
answer, or do not see the recovery option, do not assume that your data
can be recovered through another method. Check the app's current in-app
instructions and any available backup before attempting actions that
could affect stored data.

## Privacy and Local Data

Daily Khata Pro is described in its User Manual as a client-side,
offline-first application. The manual states that financial records are
stored in the device's local browser storage rather than on an
app-operated server.

This has several practical implications:

-   The passcode lock and the storage location are separate concepts.
-   Unlocking the interface does not itself create a backup.
-   Clearing browser/site data, resetting the browser, uninstalling or
    resetting the app environment, or losing the device may affect
    locally stored records, depending on the installation and storage
    configuration.
-   A PIN recovery flow is not the same thing as a data backup or
    restore process.
-   If the app provides an export or backup feature, use it periodically
    and store the exported file somewhere secure.

Do not assume that data is encrypted merely because the app has a
passcode screen. The lock-screen feature alone does not prove that local
records are encrypted at rest.

## Recommended Security Practices

For better protection of personal and financial records:

-   Use a unique PIN that is not shared with other apps or accounts.
-   Keep your device protected with its own screen lock.
-   Do not share your PIN or recovery answer.
-   Choose a recovery answer that other people cannot easily guess.
-   Keep your browser, operating system, and app version updated where
    updates are available.
-   Export or back up important records periodically if the app supports
    it.
-   Store backup files in a private, access-controlled location.
-   Avoid using the app on a device that other people can access freely.
-   Before handing your device to someone else, lock the device rather
    than relying only on the app passcode.

## Troubleshooting

### The PIN is not accepted

-   Check that you are entering the same digits used during setup.
-   Make sure you are not confusing the PIN with your device lock code.
-   Try the **Forgot PIN** option if it is available and you configured
    the recovery question.
-   Avoid deleting app data or clearing browser storage as a first
    troubleshooting step, because this may affect locally stored
    records.

### The recovery answer is not accepted

-   Check spelling and spacing, if the answer was text-based.
-   Remember that the recovery answer may need to match the original
    answer as entered.
-   If recovery still fails, consult the current in-app guidance. Do not
    assume that support can bypass the recovery process or retrieve a
    forgotten PIN.

### The lock screen does not appear or behaves unexpectedly

-   Close and reopen the app.
-   Confirm that the passcode feature is enabled in the app's security
    settings, if such a setting is available.
-   Make sure you are using the intended browser or installed app
    environment.
-   If the issue continues, document the app version, device/browser,
    and the steps that reproduce the problem before reporting it.

## Limitations

-   A numeric PIN is only one layer of protection and should not replace
    device-level security.
-   Anyone who knows the PIN may be able to unlock the app.
-   A recovery question may be guessable if the answer is based on
    public or easily known information.
-   The passcode feature does not automatically protect exported files,
    screenshots, device backups, or other copies of information.
-   Local browser storage can be affected by browser settings, site-data
    clearing, device changes, or other environment changes.
-   Do not assume encryption, remote account recovery, cloud backup, or
    multi-user access controls unless those capabilities are explicitly
    documented in the installed version.

## Important Disclaimer

Daily Khata Pro is a personal finance and record-keeping tool. The
passcode feature is intended as an additional access barrier, not as a
guarantee of complete data security. Users are responsible for
protecting their device, keeping their PIN and recovery information
private, and maintaining backups of important records where backup
features are available.

Feature names, screens, and recovery behaviour may change between
versions. Always follow the instructions shown by the installed version
of the app.

## Quick Reference

  -----------------------------------------------------------------------
  Task                                What to do
  ----------------------------------- -----------------------------------
  Create a PIN                        Open the app's security/passcode
                                      settings and follow the setup
                                      prompts.

  Unlock the app                      Enter the configured 4--6 digit
                                      numeric PIN.

  Recover a forgotten PIN             Select **Forgot PIN**, answer the
                                      configured recovery question, and
                                      follow the reset prompts.

  Protect records                     Use a device screen lock and keep
                                      PIN/recovery information private.

  Reduce data-loss risk               Export or back up important records
                                      periodically if the app supports
                                      it.

  Troubleshoot safely                 Avoid clearing app/browser data
                                      before checking backup options.
  -----------------------------------------------------------------------
