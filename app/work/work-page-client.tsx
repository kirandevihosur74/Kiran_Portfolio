'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/site.config'

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe. Features include user authentication, product management, shopping cart, and secure payment processing.',
    image: '/api/placeholder/400/300',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    year: '2024',
    link: 'https://github.com/kiran/ecommerce-platform',
    demo: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/400/300',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    year: '2023',
    link: 'https://github.com/kiran/task-management',
    demo: 'https://task-app-demo.com',
    featured: true,
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode, animations, and responsive design.',
    image: '/api/placeholder/400/300',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    year: '2024',
    link: 'https://github.com/kiran/portfolio',
    demo: 'https://kiran-portfolio.com',
    featured: true,
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather conditions and forecasts using OpenWeatherMap API.',
    image: '/api/placeholder/400/300',
    tags: ['React', 'JavaScript', 'CSS3', 'OpenWeatherMap API'],
    year: '2023',
    link: 'https://github.com/kiran/weather-app',
    demo: 'https://weather-app-demo.com',
    featured: false,
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'A content management system for blogs with markdown support, user authentication, and admin dashboard.',
    image: '/api/placeholder/400/300',
    tags: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL', 'NextAuth'],
    year: '2023',
    link: 'https://github.com/kiran/blog-platform',
    demo: 'https://blog-platform-demo.com',
    featured: false,
  },
  {
    id: 'chat-app',
    title: 'Real-time Chat App',
    description: 'A real-time chat application with user authentication, message history, and file sharing capabilities.',
    image: '/api/placeholder/400/300',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
    year: '2022',
    link: 'https://github.com/kiran/chat-app',
    demo: 'https://chat-app-demo.com',
    featured: false,
  },
]

export default function WorkPageClient() {
  return (
    <>
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
              My <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here's a collection of projects I've worked on. Each project represents 
              a unique challenge and learning experience.
            </p>
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
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Some of my best work and most challenging projects
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full" accent="orange">
                    <div className="space-y-4">
                      <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                      </div>
                      <div className="space-y-3">
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
                        <div className="flex gap-3 pt-2">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                          >
                            Live Demo
                          </a>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm font-medium"
                          >
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* All Projects */}
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">All Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Complete collection of my work
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full" accent="purple">
                    <div className="space-y-4">
                      <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-3 pt-2">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                          >
                            Demo
                          </a>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm font-medium"
                          >
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
} 