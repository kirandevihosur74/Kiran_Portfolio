'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/site.config'
import emailjs from '@emailjs/browser'
import { useRef, useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import toast, { Toaster } from 'react-hot-toast'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'kirandevihosur74@gmail.com',
    href: 'mailto:kirandevihosur74@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    href: "https://maps.app.goo.gl/bgt1hwvxwRrj5RRW9",
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (303) 257-9505',
    href: 'tel:+13032579505',
  },
]

const socialLinks = [
  { name: 'GitHub', href: siteConfig.links.github, icon: Github },
  { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
]

export default function ContactPageClient() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    if (!formRef.current) return
    emailjs.sendForm(
      'service_xhajjyu',
      'template_0qjkufm',
      formRef.current,
      'Ja6MKRxSoJZI9unjo'
    )
    .then(() => {
      setStatus('success')
      toast.success('Message sent successfully!')
      formRef.current?.reset()
    }, () => {
      setStatus('error')
      toast.error('Something went wrong. Please try again.')
    })
  }

  useEffect(() => {
    if (status === 'success') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      })
    }
  }, [status])

  return (
    <>
      <Toaster />
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Information */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Send a Message</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
                    placeholder="Tell me more about your project or inquiry..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Feel free to reach out through any of these channels.
                </p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <Card key={info.title} className="p-4" accent="pink">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                          <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-gray-100">
                            {info.title}
                          </h3>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-300">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  )
} 