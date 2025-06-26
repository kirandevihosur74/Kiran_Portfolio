import Link from 'next/link'
import { Github, Twitter, Linkedin, Youtube, Mail } from 'lucide-react'
import { siteConfig } from '@/site.config'

const socialLinks = [
  { name: 'GitHub', href: siteConfig.links.github, icon: Github },
  { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="py-8 flex justify-center items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 