import { Metadata } from 'next'
import BlogPageClient from './blog-page-client'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights about web development, design, and technology.',
}

export default function BlogPage() {
  return <BlogPageClient />
} 