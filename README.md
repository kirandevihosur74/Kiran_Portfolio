# Kiran Portfolio

A modern, responsive developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🌐 Live Demo

[https://kirandevihosur.com](https://kirandevihosur.com)

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Optimized for all screen sizes
- **Animations**: Smooth page transitions and micro-interactions with Framer Motion
- **SEO Optimized**: Built-in metadata, Open Graph, and sitemap generation
- **MDX Support**: Write blog posts and content in Markdown
- **Performance**: Optimized for speed and Core Web Vitals
- **Email Integration**: Contact form powered by EmailJS
- **Particles & Confetti**: Visual effects using react-tsparticles and canvas-confetti
- **Toasts & Typing Animation**: User feedback with react-hot-toast and react-simple-typewriter

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and posts
│   ├── contact/           # Contact page
│   ├── work/              # Work/projects page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components (Card, Container, Section)
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme provider
├── lib/                  # Utility functions
├── site.config.ts        # Site configuration
└── next-sitemap.config.js # Sitemap configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Content**: MDX
- **SEO**: next-sitemap
- **Deployment**: gh-pages (for GitHub Pages)
- **Email**: @emailjs/browser
- **Particles/Confetti**: react-tsparticles, tsparticles, tsparticles-preset-triangles, canvas-confetti
- **Toasts**: react-hot-toast
- **Typing Animation**: react-simple-typewriter

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kiran-portfolio.git
cd kiran-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Configuration

### Site Configuration

Edit `site.config.ts` to customize your portfolio:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  url: 'https://your-domain.com',
  links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
  // ... more config
}
```

### Customization

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font families in `tailwind.config.js`
- **Content**: Edit the content in each page component
- **Styling**: Customize components in the `components/` directory

## 📄 Pages

### Home (`/`)
- Hero section with introduction
- About preview
- Featured projects showcase

### About (`/about`)
- Personal story and background
- Tech stack overview
- Professional experience

### Work (`/work`)
- Project portfolio with filtering
- Featured projects section
- Project details and links

### Contact (`/contact`)
- Contact form
- Contact information
- Social media links

## 🎨 Customization

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Export metadata and default component
4. Add navigation link in `components/navbar.tsx`

### Adding Blog Posts

1. Create MDX files in `content/blog/`
2. Add frontmatter with metadata
3. Posts will automatically appear in the blog listing

### Styling

The project uses Tailwind CSS with custom utilities:

- `.container-custom`: Consistent container spacing
- `.section-padding`: Standard section padding
- `.gradient-text`: Gradient text effect
- `.card-hover`: Card hover animations

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### GitHub Pages

This project supports static export and deployment to GitHub Pages using `gh-pages`:

```bash
npm run build
npm run export
npm run deploy
```

### Other Platforms

The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## 📊 Performance

- **Core Web Vitals**: Optimized for all metrics
- **SEO**: Built-in metadata and sitemap generation
- **Accessibility**: WCAG 2.1 compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 🧰 Development Tools

- **Cursor**: Used as the primary AI coding assistant and editor for building and maintaining this project.
- **ESLint**: For code linting and quality
- **TypeScript**: For static type checking
- **Tailwind CSS**: For utility-first styling

---
