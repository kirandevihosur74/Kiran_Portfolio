import { Metadata } from 'next'
import ContactPageClient from './contact-page-client'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me for collaborations, opportunities, or just to say hello.',
}

export default function ContactPage() {
  return <ContactPageClient />
} 