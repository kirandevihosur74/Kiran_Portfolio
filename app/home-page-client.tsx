'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/site.config'

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    year: '2024',
    link: '/work/ecommerce-platform',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    year: '2023',
    link: '/work/task-management',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    year: '2024',
    link: '/work/portfolio',
  },
]

const socialLinks = [
  { name: 'GitHub', href: siteConfig.links.github, icon: Github },
  { name: 'Twitter', href: siteConfig.links.twitter, icon: Twitter },
  { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
]

export default function HomePageClient() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Hi, I'm{' '}
                <span className="gradient-text">Kiran</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Full-stack developer, creator, and problem solver. Building modern web applications 
                and sharing knowledge through code.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/work"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Get In Touch
                </motion.a>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      whileTap={{ scale: 0.95, rotate: -6 }}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label={social.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">K</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    Developer & Creator
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* About Preview */}
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love building scalable applications, solving complex problems, and sharing my 
              knowledge with the community.
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              Learn more about me
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Featured Work</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Here are some of my recent projects
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card href={project.link} className="h-full" accent="orange">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="/work"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
} 