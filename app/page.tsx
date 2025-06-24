import { Metadata } from 'next'
import { siteConfig } from '@/site.config'
import HomePageClient from './home-page-client'

export const metadata: Metadata = {
  title: 'Home',
  description: siteConfig.description,
}

export default function HomePage() {
  return <HomePageClient />
} 