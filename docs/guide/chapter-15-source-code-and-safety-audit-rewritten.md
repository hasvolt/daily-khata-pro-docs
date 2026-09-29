# Chapter 15: Source Code & Safety Audit

## 1. Purpose of This Chapter

Daily Khata Pro is presented as an open-source application. This chapter explains how users can locate the published source code, review the project license, inspect selected parts of the code, observe browser network activity, and test offline behaviour in a controlled environment.

The purpose is transparency. Instead of relying only on a product description, users can review available evidence and document what they personally checked.

This chapter is intended as a practical introduction for curious users, developers, and technically minded reviewers. You do not need to perform every check to use the app, and the steps below are not a substitute for a professional security assessment.

> **Important:** These checks do not prove that every app build, browser extension, hosting layer, or third-party dependency is completely safe. Findings depend on the exact source code, version, browser, device, configuration, and test actions used.

## 2. Find the Official Source Repository

Start from the app’s verified website or official documentation and follow the GitHub link published by the developer. Avoid choosing a repository only because its name looks similar.

### Suggested review steps

1. Open the official project website or documentation.
2. Follow its source-code or GitHub link.
3. Confirm that the repository owner and project name match the project information published by the developer.
4. Review the repository’s `README` file for project information, setup instructions, and links.
5. Locate and read the license file.
6. Look through the source folders and dependency files.
7. Review recent commit history and release information, if available.
8. Record the repository URL and the version or commit you inspected.

### What to look for

- **Repository identity:** Does the official website link to this exact repository?
- **README:** Does it explain the project and its intended use?
- **License:** Is a license file included, and does it identify the license?
- **Source files:** Are the application files available for inspection?
- **Dependency files:** Are the packages used by the project listed?
- **Version information:** Is there a release, tag, commit, or other identifier that helps you describe what you reviewed?

**Repository reference:** Use the project’s official GitHub link published by the developer. Confirm the current URL before sharing it with others.

A repository can have forks, copies, or similarly named projects. A fork may contain legitimate changes, but it should not automatically be treated as the official version.

## 3. What Open Source Means

Open-source software makes source code available under a license that defines how people may use, modify, and redistribute it. The exact permissions and obligations depend on the license.

For a user, source availability can make it possible to examine how selected functions work, review dependencies, and compare the published code with documentation. Developers may also be able to modify the software within the license terms.

Open source does **not** automatically mean:

- The code has been independently audited.
- Every published or deployed build was created from the source currently displayed.
- The application contains no bugs or security vulnerabilities.
- All third-party libraries are risk-free.
- Every privacy or security claim has already been verified.
- A downloaded copy is identical to the version served by a website.
- The application will remain maintained or receive updates indefinitely.

### Source code versus the version you use

A website may serve a built version of an application rather than raw source files. The published repository and deployed app should not be assumed to match unless the versions can be identified and compared.

For meaningful verification, consider these separately:

1. **The source code:** What does the repository contain?
2. **The license:** What does it allow, and what conditions apply?
3. **The deployed or installed version:** Which version are you actually using?
4. **Observed behaviour:** What happened during the tests you performed?
5. **Independent review:** Has a qualified third party audited the specific version? Do not claim this unless there is evidence.

## 4. Understanding the MIT License

If the repository includes an MIT License, read the complete license file in the repository. Do not rely solely on a short description in a README or on a third-party website.

In general, the MIT License permits use, copying, modification, distribution, sublicensing, and sale of copies, subject to its conditions. These include retaining the required copyright notice and permission notice in copies or substantial portions of the software.

### Practical points

- Confirm that the repository actually includes an MIT License.
- Read the complete license text before redistributing or adapting the code.
- Keep required copyright and license notices when redistributing covered code.
- Check whether separate licenses apply to assets, fonts, icons, images, documentation, or dependencies.
- Do not assume that every item in a repository is covered by the same license without checking.
- Do not treat an MIT License as a security certification, warranty, or guarantee of support.

### If you reuse or modify the project

Before publishing a modified copy, identify the code and other materials you are reusing, preserve applicable notices, and review the license terms. If the situation has legal or commercial significance, seek qualified legal advice.

This section is a plain-language overview, not legal advice.

## 5. Review the Source Code

A source-code review can begin with a few focused questions. You do not need to understand every line to identify areas worth investigating, but keyword searches alone cannot establish that the application is secure.

### 5.1 Application data and storage

Look for how the app handles financial records, notes, settings, preferences, and other user-entered information.

Questions to consider:

- Does the code use browser storage, IndexedDB, local storage, or another storage mechanism?
- Which types of information are stored?
- Is sensitive information stored in readable form?
- Is any data copied to another location?
- What happens when site data or browser storage is cleared?
- Does the app distinguish between deleting a record from the interface and securely erasing stored copies?
- Are backup files created, and what information do they contain?

Possible search terms in a code editor include `localStorage`, `sessionStorage`, `indexedDB`, `JSON.stringify`, `JSON.parse`, `export`, `import`, `backup`, and `restore`. These are starting points only: a term may be used for harmless reasons, and the absence of a term does not prove that a storage mechanism is not used.

### 5.2 Network requests and external services

Look for code that communicates with remote servers or loads external resources.

Possible search terms include:

- `fetch`
- `XMLHttpRequest`
- `WebSocket`
- analytics or telemetry-related package names
- external API URLs
- remote scripts and embedded resources

When you find a request, try to understand:

- Which domain does it contact?
- What triggers the request?
- Is it loading a static resource such as a script, image, font, or stylesheet?
- Does the request include user-entered information or financial records?
- Does it contact an external service for a feature the user has activated?
- Is the destination documented or otherwise expected?

A request to load a font or stylesheet is not automatically a data leak. Likewise, finding no obvious request in one file does not prove that the whole app makes no network requests. Requests can originate from dependencies, service workers, browser features, or other code paths.

### 5.3 Passcode and access controls

If the application includes a PIN or passcode feature, review how it is implemented and what it is intended to protect.

Questions include:

- How is the passcode stored and checked?
- Does the app lock automatically, and under what conditions?
- What happens if the passcode is forgotten?
- Are sensitive screens simply hidden in the interface, or is access also gated by application logic?
- Does the code actually encrypt stored information, or does it only display a lock screen?

A local passcode screen is not necessarily equivalent to strong encryption of stored data. Do not assume that a PIN protects the underlying records from someone who can access the device, browser storage, or application files.

### 5.4 Backup and restore

Review how the application exports and imports user data.

Questions include:

- Which records and settings are included in an export?
- Is the export encrypted, or is it a readable format such as JSON?
- Does restore replace existing data, merge it, or reject conflicting records?
- What happens if the selected backup file is incomplete or invalid?
- Does the app display a confirmation before a potentially destructive restore?

Do not test restore behaviour on your only copy of important data. Keep a separate backup and use a test copy whenever possible.

### 5.5 Limits of a code search

A source-code search is a starting point, not a complete security audit. Understanding the meaning of code often requires following how data moves through the application, reviewing dependencies, and testing the exact build. If you are not comfortable interpreting a result, record the question rather than drawing a strong conclusion from a keyword match.

## 6. Basic Browser Network Inspection

A desktop browser’s Developer Tools can show network requests made while a web app loads and runs. This can help you understand which domains the browser contacts during a controlled test.

### Before starting

- Use a test browser profile where practical.
- Use sample data rather than real financial records.
- Close unrelated tabs if that makes the results easier to interpret.
- Avoid sharing logs or screenshots that contain personal records, cookies, access tokens, or other secrets.

### Step-by-step procedure

1. Open the app in a supported desktop browser.
2. Open Developer Tools, often with **F12** or through the browser menu.
3. Select the **Network** tab.
4. If available, clear the existing Network log.
5. Reload the app and wait for the interface to finish loading.
6. Review the listed requests, including their domains, resource types, and initiators where shown.
7. Use the app’s features with non-sensitive sample data.
8. Observe whether additional requests appear when you create, edit, export, or delete sample records.
9. Note the time and action associated with any request you want to investigate.
10. If practical, repeat the test after clearing the Network log and reloading the page.

The exact labels and layout of Developer Tools vary by browser and version. If your browser does not expose the same controls, use its official documentation for the corresponding feature.

### How to interpret what you see

- A request for a script, image, font, stylesheet, or other static resource is not automatically evidence of a data leak.
- A request occurring when you use a feature does not, by itself, prove that the feature’s data was transmitted.
- A quiet Network tab during one test does not prove that no request can occur in other circumstances.
- Cached resources, service workers, browser extensions, and test settings can affect what you observe.
- A request to an unfamiliar domain deserves investigation, but the domain name alone may not explain what information was sent.
- If you cannot determine what a request contains, describe it as unverified rather than asserting that private data was transmitted.

Do not publish raw diagnostic logs without reviewing them for personal data, cookies, tokens, and other secrets.

## 7. Testing Offline Behaviour

Offline testing can help establish which functions work after the app has loaded and the internet connection has been disconnected. Use a test profile and sample data so you do not risk important records.

### Step-by-step procedure

1. Open the application while online.
2. Wait until the interface has loaded fully.
3. If the app offers an export or backup function, create a test backup before experimenting with storage or browser settings.
4. Disconnect the test device from the internet or enable Airplane Mode.
5. Try basic actions, such as navigating between pages and adding or editing a sample record.
6. Note which functions continue to work and which display an error, wait for a connection, or become unavailable.
7. If you test export, import, or restore, use sample records and a separate test copy.
8. Reconnect only when you need to test a function that genuinely requires a network.
9. Record the browser, version, date, and actions you tested.

### Interpreting the result

If the app continues to work offline, that shows that the tested functions worked in that particular environment. It does not independently prove that every feature is offline-capable or that the app never makes network requests.

Some web applications can load from a previously cached copy, while other features may require remote resources. Behaviour can differ depending on the browser, whether the app was already loaded, and whether required resources were cached.

Describe the result precisely. For example, “I was able to add and edit a sample record after disconnecting the internet in this browser” is more accurate than “The app is completely offline and never connects to a server.”

## 8. Check the App Version and Published Source

Security observations are meaningful only when the tested version is described clearly. If the app and repository do not identify matching versions, note that limitation.

### Record the following details

- App URL or installation source
- Date of the test
- App version or release identifier, if shown
- Repository URL
- Repository commit or release reviewed
- Browser name and version
- Device or operating-system details when relevant
- Test profile or environment used
- Actions performed
- Network requests or errors observed
- Any limitations that prevented further testing

### Why version matching matters

A developer may update the repository without the deployed website changing immediately, or a website may be deployed from a particular commit that is not obvious to a user. A local copy can also differ from the live version.

Do not claim that a deployed build has been verified from source unless you have actually compared the deployed version with the source used to build it. If you cannot establish a match, state that the source and deployed version were reviewed separately.

## 9. Third-Party Dependencies

Open-source applications often rely on packages and libraries created by other developers. Dependencies may provide interface components, charts, icons, storage utilities, calculations, or other features.

### Basic dependency review

1. Find the project’s package manifest and lockfile, if present.
2. Review the dependency names and versions.
3. Check whether the packages come from expected, official package sources.
4. Look for security advisories relevant to the versions in use.
5. Consider whether packages are maintained and whether updates are available.
6. Review the licenses of dependencies and included assets when redistributing the application.

The exact dependency files depend on the project’s technology stack. Do not assume a particular file exists if the repository uses a different setup.

### What a dependency review can and cannot establish

- A known security advisory can identify a risk worth investigating.
- An old package is not automatically vulnerable, but its status deserves review.
- A package with no known advisory is not automatically safe.
- A dependency can make network requests or introduce vulnerabilities even if the main application code does not.
- A dependency scan can help identify known issues, but it cannot guarantee that the application is secure.

Avoid installing unknown packages or running unfamiliar code on a device containing important personal or financial information just to experiment. If you are not familiar with software review, ask a qualified developer to help interpret the findings.

## 10. Privacy and Sensitive Financial Information

Treat financial records, private notes, passcodes, passwords, and exported backup files as sensitive information. A backup file can contain more information than a screenshot of the app, so handle it carefully.

### Recommended practices

- Use a device lock and keep the operating system and browser updated.
- Do not share your app passcode or backup files publicly.
- Store backups in a location you control and limit access to them.
- Avoid entering real financial information while testing an unfamiliar build.
- Be careful when using shared devices or public computers.
- Review exported files before sending them to another person or service.
- Avoid including personal details in bug reports, screenshots, or screen recordings.
- Understand that deleting a record in the interface may not securely erase every copy, browser cache, or previously exported backup.
- Keep more than one backup of important records when practical, and verify that a backup can be read or restored before relying on it.

### Passcode versus encryption

A passcode screen can help prevent casual access through the app interface, but it does not necessarily encrypt the underlying data. If a feature claims to encrypt data, review the implementation and documentation rather than assuming that a PIN screen means the stored records are encrypted.

### Local storage and browser data

If information is stored in browser storage, clearing the site’s data or using a different browser profile may make the information unavailable to the app. The exact result depends on the application’s implementation and the browser. Before clearing data, reinstalling the app, changing devices, or testing restore, create and verify a backup if the app provides that option.

## 11. Reporting a Suspected Issue

If you notice behaviour that seems unexpected, document it carefully. Separate what you observed from what you suspect might have caused it.

### Suggested reporting steps

1. Stop using real or sensitive data for further testing.
2. Record the app version, browser, date, and steps that reproduce the issue.
3. Reproduce the behaviour with sample data where possible.
4. Note what you expected to happen and what actually happened.
5. Use sample data in screenshots or recordings.
6. Remove passwords, cookies, access tokens, private notes, personal details, and financial information from diagnostic material.
7. Report the issue through the project’s official support or issue-reporting channel.
8. Avoid publishing exploitable details about another person’s data or account.

### Write a clear report

A useful report might include:

- **Environment:** Browser and version, app version if available
- **Steps:** A numbered list of actions
- **Expected result:** What you thought should happen
- **Observed result:** What actually happened
- **Reproducibility:** Whether it happened once or repeatedly
- **Evidence:** Sanitized screenshots or logs, if useful
- **Limitations:** Anything you could not verify

Do not claim that a privacy breach or vulnerability is confirmed unless the evidence supports that conclusion. If the cause is unclear, report the observable behaviour and label the cause as unknown.

## 12. A Simple Audit Checklist

Use this checklist when reviewing a specific version of the app:

- [ ] I found the repository through an official project link.
- [ ] I checked the repository owner and project name.
- [ ] I reviewed the README and license file.
- [ ] I identified the app version or release, where available.
- [ ] I recorded the repository commit or release reviewed.
- [ ] I reviewed relevant storage-related code.
- [ ] I reviewed relevant network-related code.
- [ ] I checked third-party dependencies at a basic level.
- [ ] I inspected browser Network activity during a controlled test.
- [ ] I tested selected offline functions with sample data.
- [ ] I reviewed backup and restore behaviour using a separate test copy.
- [ ] I avoided sharing personal information in logs or screenshots.
- [ ] I recorded what I observed and what remains uncertain.
- [ ] I documented the limitations of my test.

This checklist is intended to organize a basic review. It is not a formal certification or a guarantee that all risks have been found.

## 13. What This Audit Can and Cannot Tell You

A basic user audit can improve understanding and may help identify unexpected behaviour. It can provide evidence about the particular code, version, browser, and actions reviewed.

However, it cannot automatically establish that:

- Every deployed build matches the reviewed source.
- Every possible code path has been tested.
- Every dependency is free of vulnerabilities.
- All data is encrypted at rest or in transit.
- No data can ever leave the device.
- The application is free from bugs or security issues.
- A professional or independent audit has been completed.

A full assessment may require a developer or security professional to examine the application architecture, code paths, dependencies, build process, hosting configuration, and behaviour under additional test conditions.

Avoid absolute claims such as “100% secure,” “no possible data leak,” or “independently verified” unless strong, specific evidence supports them. A careful report says what was tested, what was observed, which version was reviewed, and what remains unverified.

## 14. Practical Example: Documenting a Basic Test

The following is an example of how to record a test. It is a template, not a claim that these results have been observed for every Daily Khata Pro version.

**Test record**

- **App URL:** Enter the address you tested.
- **Test date:** Enter the date.
- **App version:** Enter the displayed version, if available.
- **Repository commit/release:** Enter the identifier you reviewed, if known.
- **Browser:** Enter browser name and version.
- **Test data:** Sample records only.
- **Actions:** Loaded the app, created a sample record, edited it, and tested selected pages offline.
- **Observed result:** Write exactly what happened.
- **Network observations:** Note the domains and request types you observed without including tokens or private information.
- **Limitations:** State which features you did not test and whether you could match the deployed build to the source.

This format makes it easier to compare later tests without overstating what the evidence proves.

## 15. Chapter Summary

Source-code transparency makes independent inspection possible. Users can locate the official repository, review the license, examine relevant storage and network code, observe browser Network activity, test selected offline functions, inspect dependencies at a basic level, and handle backups carefully.

The most reliable approach is to keep claims proportional to evidence. Record what you tested, what you observed, which version you reviewed, and what remains unverified. Open source and basic testing can support transparency, but they should not be treated as a guarantee of complete security.
