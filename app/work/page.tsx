import { Metadata } from 'next'
import WorkPageClient from './work-page-client'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Explore my portfolio of projects - from web applications to mobile apps and everything in between.',
}

export default function WorkPage() {
  return <WorkPageClient />
} 