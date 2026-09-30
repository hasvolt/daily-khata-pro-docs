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
      }
    ],

    // Documentation Sidebar
    sidebar: [
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
