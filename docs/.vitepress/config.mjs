import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Daily Khata Pro',

  description:
    'Official user manual, documentation, and help center for Daily Khata Pro.',

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Daily Khata Pro',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Guide', link: '/guide/getting-started' },
      { text: 'FAQ', link: '/guide/faq' }
    ],

    sidebar: [
      {
        text: 'Start Here',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          {
            text: 'Introduction & Overview',
            link: '/guide/chapter-1-introduction-overview'
          }
        ]
      },

      {
        text: 'Financial Records',
        collapsed: true,
        items: [
          {
            text: 'Personal Notes & Private Vault',
            link: '/guide/chapter-3-personal-notes-private-vault'
          },
          {
            text: 'Smart Fund Allocation',
            link: '/guide/chapter-4-smart-fund-allocation-rule'
          },
          {
            text: 'Recording Income & Splits',
            link: '/guide/chapter-5-recording-income-and-splits'
          },
          {
            text: 'Logging Expenses & Deductions',
            link: '/guide/chapter-6-logging-expenses-and-deductions'
          },
          {
            text: 'Financial Goals & Milestones',
            link: '/guide/chapter-8-financial-goals-and-milestones'
          },
          {
            text: 'Split Bill & Group Share',
            link: '/guide/chapter-9-split-bill-group-share'
          },
          {
            text: 'Loans, EMIs & Udhar Records',
            link: '/guide/chapter-10-loans-emis-udhar-records'
          },
          {
            text: 'Category Budgets & Spending Limits',
            link: '/guide/chapter-11-category-budgets-spending-limits'
          }
        ]
      },

      {
        text: 'Settings, Calculators & Reports',
        collapsed: true,
        items: [
          {
            text: 'Custom Settings & Rules Engine',
            link: '/guide/chapter-13-custom-settings-rules-engine'
          },
          {
            text: 'Reports, Charts & PDF Statements',
            link: '/guide/chapter-12-reports-charts-pdf-statements'
          },
          {
            text: 'GST & Non-GST Invoice Generator',
            link: '/guide/chapter-16-gst-non-gst-invoice-generator'
          },
          {
            text: 'Financial Planning Calculators',
            link: '/guide/chapter-17-multi-purpose-financial-planning-calculators'
          },
          {
            text: 'Cross-Currency Calculator',
            link: '/guide/chapter-18-universal-multi-country-cross-currency-calculator'
          }
        ]
      },

      {
        text: 'Work & Research',
        collapsed: true,
        items: [
          {
            text: 'Work Projects & Daily Timeline',
            link: '/guide/chapter-7-work-projects-and-daily-timeline'
          },
          {
            text: 'Work Attendance & Shift Wage Register',
            link: '/guide/chapter-20-work-attendance-shift-wage-register'
          },
          {
            text: 'Sensex, Nifty 50 & Commercial Research',
            link: '/guide/chapter-19-live-sensex-nifty50-commercial-research'
          },
          {
            text: 'Finance Knowledge Blog',
            link: '/guide/chapter-21-finance-knowledge-blog-editorial-library'
          }
        ]
      },

      {
        text: 'Security & Data Management',
        collapsed: true,
        items: [
          {
            text: 'App Passcode Lock & Security Vault',
            link: '/guide/app-passcode-lock-security'
          },
          {
            text: 'Backup, Restore & Data Safety',
            link: '/guide/chapter-14-backup-restore-data-sovereignty'
          },
          {
            text: 'Source Code & Safety Audit',
            link: '/guide/chapter-15-source-code-and-safety-audit'
          },
          {
            text: 'Google Drive Backup & Sync',
            link: '/guide/chapter-22-google-drive-client-side-sync-backup'
          }
        ]
      },

      {
        text: 'Help & Support',
        collapsed: false,
        items: [
          {
            text: 'Frequently Asked Questions',
            link: '/guide/faq'
          },
          {
            text: 'FAQ — Detailed Chapter',
            link: '/guide/chapter-23-frequently-asked-questions'
          },
          { text: 'Troubleshooting', link: '/troubleshooting' },
          { text: 'Privacy', link: '/privacy' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      label: 'On this page',
      level: [2, 3]
    },

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    footer: {
      message: 'Official Documentation for Daily Khata Pro',
      copyright: 'Copyright © 2026 HasVolt'
    },

    lastUpdatedText: 'Last updated'
  }
})
