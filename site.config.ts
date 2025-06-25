export const siteConfig = {
  name: 'Kiran Portfolio',
  title: 'Kiran - Developer & Creator',
  description: 'Full-stack developer, creator, and problem solver. Building modern web applications and sharing knowledge through code.',
  url: 'https://kirandevihosur.com',
  ogImage: 'https://kiran-portfolio.com/og.jpg',
  links: {
    github: 'https://github.com/kirandevihosur74',
    linkedin: 'https://www.linkedin.com/in/kiran-devihosur/',
  },
  creator: 'Kiran',
  keywords: [
    'developer',
    'full-stack',
    'react',
    'next.js',
    'typescript',
    'portfolio',
    'web development',
  ],
  authors: [
    {
      name: 'Kiran Devihosur',
      url: 'https://kirandevihosur.com',
    },
  ],
  theme: {
    primary: '#3b82f6',
    secondary: '#1f2937',
    accent: '#f59e0b',
  },
} as const

export type SiteConfig = typeof siteConfig 