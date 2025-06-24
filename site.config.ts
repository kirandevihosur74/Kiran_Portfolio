export const siteConfig = {
  name: 'Kiran Portfolio',
  title: 'Kiran - Developer & Creator',
  description: 'Full-stack developer, creator, and problem solver. Building modern web applications and sharing knowledge through code.',
  url: 'https://kiran-portfolio.com',
  ogImage: 'https://kiran-portfolio.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/kiran',
    github: 'https://github.com/kiran',
    linkedin: 'https://linkedin.com/in/kiran',
    youtube: 'https://youtube.com/@kiran',
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
      name: 'Kiran',
      url: 'https://kiran-portfolio.com',
    },
  ],
  theme: {
    primary: '#3b82f6',
    secondary: '#1f2937',
    accent: '#f59e0b',
  },
} as const

export type SiteConfig = typeof siteConfig 