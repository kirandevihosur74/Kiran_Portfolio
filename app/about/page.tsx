import { Metadata } from 'next'
import AboutPageClient from './about-page-client'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Kiran - a full-stack developer passionate about building modern web applications.',
}

export default function AboutPage() {
  return <AboutPageClient />
} 