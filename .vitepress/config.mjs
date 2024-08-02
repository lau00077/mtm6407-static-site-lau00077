import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/mtm6407-static-site-lau00077/',
  title: "Ottawa Snowboarding",
  description: "Take adventures on the slopes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Ski Resorts', link: '/skiresorts' },
      { text: 'Gear', link: '/gear' },
      { text: 'Tips', link: '/tips' },
      { text: 'Contact', link: '/contact' },
    ],

    sidebar: {

    '/skiresorts': [
      {
        text: 'Ski Resorts Near Ottawa',
        items: [
          { text: 'Camp Fortune', link: '/skiresorts#camp-fortune' },
          { text: 'Calabogie Peaks', link: '/skiresorts#calabogie-peaks' },
          { text: 'Mont Tremblant', link: '/skiresorts#mont-tremblant' },
        ]
      }
    ],

    '/gear': [
      {
        text: 'Gear',
        items: [
          { text: 'Snowboards', link: '/gear#snowboards' },
          { text: 'Bindings', link: '/gear#bindings' }
        ]
      }
    ],

    '/tips': [
      {
        text: 'Tips',
        items: [
          { text: 'Beginner Tips', link: '/tips#beginner-tips' },
          { text: 'Advance Tips', link: '/tips#advance-tips' }
        ]
      }
    ],
    '/contact': [
      {
        text: 'Contact',
        items: [
          { text: 'Contact Us', link: '/contact#contact-us' }
        ]
      }
    ]
  },

    socialLinks: [
      { icon: 'github', link: 'https://www.github.com/lau00077' }
    ],

    footer: 
      {message: 'Made with ❤️ by Ottawa Snowboarding',
      copyright: 'Copyright © 2024-present'
      }
  }
})
