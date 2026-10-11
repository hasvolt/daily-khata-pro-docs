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

    // Documentation Sidebar
    sidebar: [
     {
  text: 'Staff Manager',
  collapsed: true,
  link: '/staff-manager/',
  items: [
    {
      text: 'Introduction',
      link: '/staff-manager/01-introduction'
    },
    {
      text: 'Quick Start',
      link: '/staff-manager/02-quick-start'
    },
    {
      text: 'Accounts and Sign In',
      link: '/staff-manager/03-accounts-and-sign-in'
    },
    {
      text: 'Local Mode and Cloud',
      link: '/staff-manager/04-local-mode-and-upgrade-to-cloud'
    },
    {
      text: 'Install and Offline Use',
      link: '/staff-manager/05-install-and-offline-use'
    },
    {
      text: 'Businesses',
      link: '/staff-manager/10-businesses'
    },
    {
      text: 'Staff Profiles',
      link: '/staff-manager/11-staff-profiles'
    },
    {
      text: 'Payment Types and Rates',
      link: '/staff-manager/12-payment-types-and-rates'
    },
    {
      text: 'Daily Attendance',
      link: '/staff-manager/14-daily-attendance'
    },
    {
      text: 'Payments and Ledger',
      link: '/staff-manager/16-payments-advances-and-ledger'
    },
    {
      text: 'Calculations',
      link: '/staff-manager/17-calculations-with-examples'
    },
    {
      text: 'Month Settlement',
      link: '/staff-manager/18-month-settlement-and-period-locking'
    },
    {
      text: 'Salary Slips',
      link: '/staff-manager/31-salary-slips-and-statements'
    },
    {
      text: 'Roles and Permissions',
      link: '/staff-manager/41-roles-and-permissions'
    },
    {
      text: 'Offline and Sync',
      link: '/staff-manager/42-multi-device-sync-and-offline'
    },
    {
      text: 'Backup and Restore',
      link: '/staff-manager/45-backup-restore-and-export'
    },
    {
      text: 'Privacy and Security',
      link: '/staff-manager/47-privacy-and-data-security'
    },
    {
      text: 'FAQ',
      link: '/staff-manager/61-faq'
    },
    {
      text: 'Troubleshooting',
      link: '/staff-manager/62-troubleshooting'
    },
    {
      text: 'Limitations',
      link: '/staff-manager/64-limitations-and-roadmap'
    },
    {
      text: 'Deployment Guide',
      link: '/staff-manager/80-deployment-guide'
    },
    {
      text: 'Database and Security',
      link: '/staff-manager/83-database-and-security-rules'
    },
    {
      text: 'Testing Checklist',
      link: '/staff-manager/84-testing-checklist'
    },
    {
      text: 'Changelog',
      link: '/staff-manager/90-changelog'
    }
  ]
}, {
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
