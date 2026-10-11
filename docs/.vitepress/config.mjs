import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Daily Khata Pro',

  description:
    'Official user manual, documentation, and help center for Daily Khata Pro.',

  cleanUrls: true,

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg'
      }
    ]
  ],

  sitemap: {
    hostname: 'https://docs.rozfiber.com'
  },

  themeConfig: {
    siteTitle: 'Daily Khata Pro',

    // Top Navigation Menu
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Getting Started',
        link: '/guide/getting-started'
      },
      {
        text: 'User Guide',
        link: '/guide/chapter-1-introduction-overview'
      },
      {
        text: 'FAQ',
        link: '/guide/chapter-23-frequently-asked-questions'
      },
      {
        text: 'Staff Manager',
        link: '/staff-manager/'
      }
    ],

    // Separate Sidebars for Daily Khata Pro and Staff Manager
    sidebar: {
      // ==========================================
      // DAILY KHATA PRO DOCUMENTATION
      // ==========================================
      '/guide/': [
        {
          text: 'Start Here',
          collapsed: false,
          items: [
            {
              text: 'Getting Started Guide',
              link: '/guide/getting-started'
            },
            {
              text: 'Chapter 1 — Introduction & Overview',
              link: '/guide/chapter-1-introduction-overview'
            },
            {
              text: 'Chapter 2 — App Passcode Lock & Security Vault',
              link: '/guide/chapter-2-app-passcode-lock-security'
            }
          ]
        },

        {
          text: 'Chapters 3–11: Records & Planning',
          collapsed: true,
          items: [
            {
              text: 'Chapter 3 — Personal Notes & Private Vault',
              link: '/guide/chapter-3-personal-notes-private-vault'
            },
            {
              text: 'Chapter 4 — Smart Fund Allocation Rule',
              link: '/guide/chapter-4-smart-fund-allocation-rule'
            },
            {
              text: 'Chapter 5 — Recording Income & Splits',
              link: '/guide/chapter-5-recording-income-and-splits'
            },
            {
              text: 'Chapter 6 — Logging Expenses & Deductions',
              link: '/guide/chapter-6-logging-expenses-and-deductions'
            },
            {
              text: 'Chapter 7 — Work Projects & Daily Timeline',
              link: '/guide/chapter-7-work-projects-and-daily-timeline'
            },
            {
              text: 'Chapter 8 — Financial Goals & Milestones',
              link: '/guide/chapter-8-financial-goals-and-milestones'
            },
            {
              text: 'Chapter 9 — Split Bill & Group Share',
              link: '/guide/chapter-9-split-bill-group-share'
            },
            {
              text: 'Chapter 10 — Loans, EMIs & Udhar Records',
              link: '/guide/chapter-10-loans-emis-udhar-records'
            },
            {
              text: 'Chapter 11 — Category Budgets & Spending Limits',
              link: '/guide/chapter-11-category-budgets-spending-limits'
            }
          ]
        },

        {
          text: 'Chapters 12–15: Reports, Settings & Data Safety',
          collapsed: true,
          items: [
            {
              text: 'Chapter 12 — Reports, Charts & PDF Statements',
              link: '/guide/chapter-12-reports-charts-pdf-statements'
            },
            {
              text: 'Chapter 13 — Custom Settings & Rules Engine',
              link: '/guide/chapter-13-custom-settings-rules-engine'
            },
            {
              text: 'Chapter 14 — Backup, Restore & Data Safety',
              link: '/guide/chapter-14-backup-restore-data-sovereignty'
            },
            {
              text: 'Chapter 15 — Source Code & Safety Audit',
              link: '/guide/chapter-15-source-code-and-safety-audit'
            }
          ]
        },

        {
          text: 'Chapters 16–19: Calculators & Research',
          collapsed: true,
          items: [
            {
              text: 'Chapter 16 — GST & Non-GST Invoice Generator',
              link: '/guide/chapter-16-gst-non-gst-invoice-generator'
            },
            {
              text: 'Chapter 17 — Financial Planning Calculators',
              link: '/guide/chapter-17-multi-purpose-financial-planning-calculators'
            },
            {
              text: 'Chapter 18 — Cross-Currency Calculator',
              link: '/guide/chapter-18-universal-multi-country-cross-currency-calculator'
            },
            {
              text: 'Chapter 19 — Sensex, Nifty 50 & Commercial Research',
              link: '/guide/chapter-19-live-sensex-nifty50-commercial-research'
            }
          ]
        },

        {
          text: 'Chapters 20–22: Work, Learning & Backup',
          collapsed: true,
          items: [
            {
              text: 'Chapter 20 — Work Attendance & Shift Wage Register',
              link: '/guide/chapter-20-work-attendance-shift-wage-register'
            },
            {
              text: 'Chapter 21 — Finance Knowledge Blog',
              link: '/guide/chapter-21-finance-knowledge-blog-editorial-library'
            },
            {
              text: 'Chapter 22 — Google Drive Backup & Sync',
              link: '/guide/chapter-22-google-drive-client-side-sync-backup'
            }
          ]
        },

        {
          text: 'Help & Support',
          collapsed: false,
          items: [
            {
              text: 'Chapter 23 — Frequently Asked Questions',
              link: '/guide/chapter-23-frequently-asked-questions'
            }
          ]
        }
      ],

      // ==========================================
      // STAFF MANAGER DOCUMENTATION
      // ==========================================
      '/staff-manager/': [
        {
          text: 'Staff Manager',
          collapsed: false,
          items: [
            {
              text: 'Documentation Home',
              link: '/staff-manager/'
            },
            {
              text: '01 — Introduction',
              link: '/staff-manager/01-introduction'
            },
            {
              text: '02 — Quick Start',
              link: '/staff-manager/02-quick-start'
            },
            {
              text: '03 — Accounts and Sign In',
              link: '/staff-manager/03-accounts-and-sign-in'
            },
            {
              text: '04 — Local Mode and Cloud',
              link: '/staff-manager/04-local-mode-and-upgrade-to-cloud'
            },
            {
              text: '05 — Install and Offline Use',
              link: '/staff-manager/05-install-and-offline-use'
            },
            {
              text: '06 — Navigation and Screen Layout',
              link: '/staff-manager/06-navigation-and-screen-layout'
            },
            {
              text: '07 — Data Lifecycle',
              link: '/staff-manager/07-data-lifecycle-and-record-relationships'
            },
            {
              text: '08 — Validation and Errors',
              link: '/staff-manager/08-validation-and-error-handling'
            }
          ]
        },

        {
          text: 'Staff and Attendance',
          collapsed: true,
          items: [
            {
              text: '10 — Businesses',
              link: '/staff-manager/10-businesses'
            },
            {
              text: '11 — Staff Profiles',
              link: '/staff-manager/11-staff-profiles'
            },
            {
              text: '12 — Payment Types and Rates',
              link: '/staff-manager/12-payment-types-and-rates'
            },
            {
              text: '13 — Custom Fields',
              link: '/staff-manager/13-custom-fields'
            },
            {
              text: '14 — Daily Attendance',
              link: '/staff-manager/14-daily-attendance'
            },
            {
              text: '15 — Work Entries and Sites',
              link: '/staff-manager/15-work-entries-sites-work-types'
            }
          ]
        },

        {
          text: 'Payments and Calculations',
          collapsed: true,
          items: [
            {
              text: '16 — Payments, Advances and Ledger',
              link: '/staff-manager/16-payments-advances-and-ledger'
            },
            {
              text: '17 — Calculations with Examples',
              link: '/staff-manager/17-calculations-with-examples'
            },
            {
              text: '18 — Month Settlement and Period Locking',
              link: '/staff-manager/18-month-settlement-and-period-locking'
            },
            {
              text: '19 — Dashboard',
              link: '/staff-manager/19-dashboard'
            },
            {
              text: '20 — Basic Calculator',
              link: '/staff-manager/20-basic-calculator'
            },
            {
              text: '21 — Balance Review',
              link: '/staff-manager/21-data-integrity-and-calculation-review'
            }
          ]
        },

        {
          text: 'Reports and Printing',
          collapsed: true,
          items: [
            {
              text: '30 — Work History',
              link: '/staff-manager/30-work-history'
            },
            {
              text: '31 — Salary Slips and Statements',
              link: '/staff-manager/31-salary-slips-and-statements'
            },
            {
              text: '32 — Reports and Filters',
              link: '/staff-manager/32-reports-and-filters'
            },
            {
              text: '33 — Print, PDF, Excel and Share',
              link: '/staff-manager/33-print-pdf-excel-and-share'
            }
          ]
        },

        {
          text: 'Team and Data Safety',
          collapsed: true,
          items: [
            {
              text: '40 — Team Members and Invites',
              link: '/staff-manager/40-team-members-and-invites'
            },
            {
              text: '41 — Roles and Permissions',
              link: '/staff-manager/41-roles-and-permissions'
            },
            {
              text: '42 — Multi-device, Sync and Offline',
              link: '/staff-manager/42-multi-device-sync-and-offline'
            },
            {
              text: '43 — Conflicts',
              link: '/staff-manager/43-conflicts'
            },
            {
              text: '44 — Trash and Recovery',
              link: '/staff-manager/44-trash-and-recovery'
            },
            {
              text: '45 — Backup, Restore and Export',
              link: '/staff-manager/45-backup-restore-and-export'
            },
            {
              text: '46 — Import Data',
              link: '/staff-manager/46-import-data'
            },
            {
              text: '47 — Privacy and Data Security',
              link: '/staff-manager/47-privacy-and-data-security'
            },
            {
              text: '48 — Activity and Audit Log',
              link: '/staff-manager/48-audit-log-and-activity'
            }
          ]
        },

        {
          text: 'Settings and Customization',
          collapsed: true,
          items: [
            {
              text: '50 — Business Settings',
              link: '/staff-manager/50-business-settings'
            },
            {
              text: '51 — Themes and Languages',
              link: '/staff-manager/51-themes-and-languages'
            },
            {
              text: '52 — Privacy Mask',
              link: '/staff-manager/52-privacy-mask'
            },
            {
              text: '53 — Profile and Account Settings',
              link: '/staff-manager/53-profile-and-account-settings'
            }
          ]
        },

        {
          text: 'Help and Troubleshooting',
          collapsed: true,
          items: [
            {
              text: '60 — Use Cases',
              link: '/staff-manager/60-use-cases'
            },
            {
              text: '61 — FAQ',
              link: '/staff-manager/61-faq'
            },
            {
              text: '62 — Troubleshooting',
              link: '/staff-manager/62-troubleshooting'
            },
            {
              text: '63 — Glossary',
              link: '/staff-manager/63-glossary'
            },
            {
              text: '64 — Limitations and Roadmap',
              link: '/staff-manager/64-limitations-and-roadmap'
            }
          ]
        },

        {
          text: 'Integrations',
          collapsed: true,
          items: [
            {
              text: '70 — Daily Khata Pro Integration',
              link: '/staff-manager/70-daily-khata-pro-integration'
            }
          ]
        },

        {
          text: 'Administration and Development',
          collapsed: true,
          items: [
            {
              text: '80 — Deployment Guide',
              link: '/staff-manager/80-deployment-guide'
            },
            {
              text: '81 — Environment Variables',
              link: '/staff-manager/81-environment-variables'
            },
            {
              text: '82 — Architecture',
              link: '/staff-manager/82-architecture'
            },
            {
              text: '83 — Database and Security Rules',
              link: '/staff-manager/83-database-and-security-rules'
            },
            {
              text: '84 — Testing Checklist',
              link: '/staff-manager/84-testing-checklist'
            }
          ]
        },

        {
          text: 'Release History',
          collapsed: false,
          items: [
            {
              text: '90 — Changelog',
              link: '/staff-manager/90-changelog'
            }
          ]
        }
      ]
    },

    // Local Documentation Search
    search: {
      provider: 'local'
    },

    // Table of Contents on Each Page
    outline: {
      label: 'On this page',
      level: [2, 3]
    },

    // Previous and Next Page Navigation
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    // Website Footer
    footer: {
      message: 'Official Documentation for Daily Khata Pro',
      copyright: 'Copyright © 2026 Rozfiber'
    },

    lastUpdatedText: 'Last updated'
  }
})
