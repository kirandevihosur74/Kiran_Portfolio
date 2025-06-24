'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/site.config'

const blogPosts = [
  {
    slug: 'getting-started-with-nextjs-14',
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn how to build modern web applications with Next.js 14, the latest version of the React framework.',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['Next.js', 'React', 'Tutorial'],
    featured: true,
  },
  {
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS',
    excerpt: 'A comprehensive guide to using Tailwind CSS for building beautiful, responsive user interfaces.',
    date: '2024-01-10',
    readTime: '8 min read',
    tags: ['CSS', 'Tailwind', 'Design'],
    featured: true,
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2024',
    excerpt: 'Essential TypeScript patterns and practices to write more maintainable and type-safe code.',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    featured: false,
  },
  {
    slug: 'building-apis-with-nodejs',
    title: 'Building RESTful APIs with Node.js',
    excerpt: 'A step-by-step guide to creating robust and scalable REST APIs using Node.js and Express.',
    date: '2023-12-28',
    readTime: '10 min read',
    tags: ['Node.js', 'API', 'Backend'],
    featured: false,
  },
  {
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Learn advanced techniques to optimize React applications for better performance and user experience.',
    date: '2023-12-20',
    readTime: '7 min read',
    tags: ['React', 'Performance', 'Optimization'],
    featured: false,
  },
  {
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques You Should Know',
    excerpt: 'Explore cutting-edge CSS features and techniques that can enhance your web development workflow.',
    date: '2023-12-15',
    readTime: '9 min read',
    tags: ['CSS', 'Frontend', 'Modern Web'],
    featured: false,
  },
]

export default function BlogPageClient() {
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
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about web development, design, and technology. 
              Sharing knowledge and experiences from my journey as a developer.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Posts */}
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
              <h2 className="text-3xl font-bold">Featured Posts</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My most popular and comprehensive articles
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full" accent="pink">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
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
          </motion.div>
        </Container>
      </Section>

      {/* All Posts */}
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
              <h2 className="text-3xl font-bold">All Posts</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Complete collection of my articles and tutorials
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full" accent="yellow">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </time>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded">
                            +{post.tags.length - 2}
                          </span>
                        )}
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