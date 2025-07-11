'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/site.config'
import Kiran_pic from '@/public/images/Kiran_pic.jpg'
import Ritematch from '@/public/images/ritematch.png'
import Verbizz from '@/public/images/business.png'
import f1SimPic from '@/public/images/f1_pic.png'
import Image from 'next/image'

const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" {...props}>
    <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z" fill="#ffffff" />
    <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z" fill="#ffffff" />
  </svg>
);

const HackerRankIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#ffffff" d="M11.999 0C10.626 0 2.195 4.818 1.513 6c-.682 1.182-.686 10.819 0 12 .686 1.181 9.115 6 10.486 6 1.371 0 9.8-4.824 10.487-6 .686-1.176.686-10.83 0-12-.687-1.17-9.115-6-10.487-6zm2.841 19.415v.002c-.188 0-1.939-1.677-1.8-1.814.041-.041.296-.069.832-.086 0-1.23.028-3.215.045-4.046.002-.095-.021-.161-.021-.274h-3.787c0 .333-.022 1.697.065 3.416.011.213-.075.279-.272.278-.48-.001-.96-.005-1.44-.004-.194 0-.278-.072-.272-.286.043-1.567.14-3.938-.007-9.969v-.149c-.46-.016-.778-.045-.82-.086C7.225 6.26 9 4.583 9.187 4.583c.187 0 1.951 1.677 1.813 1.814-.041.041-.374.07-.795.086v.148c-.114 1.207-.096 3.731-.124 4.94h3.803c0-.213.018-1.628-.057-3.921-.005-.159.046-.242.199-.244.525-.004 1.049-.006 1.575-.003.164.001.216.081.213.252-.173 8.967-.031 8.341-.031 9.86.42.016.797.045.838.086.136.136-1.593 1.814-1.781 1.814z" />
  </svg>
);

const featuredProjects = [
  {
    title: 'F1 RaceSim',
    description:
      'F1 race strategy simulator with real-time AI insights, multi-strategy comparison, and weather-aware predictions.',
    tags: ['Next.js', 'FastAPI', 'Gemini AI', 'AWS Lambda', 'Vercel', 'Serverless', 'AI', 'Visualization'],
    year: '2025',
    link: '/work',
    thumbnail: f1SimPic,
  },
  {
    title: 'Ritematch',
    description:
      'AI-powered job matching and resume tailoring portal with NLP-based match scoring, LLM resume rewriting, and ATS optimization.',
    tags: ['Django', 'React', 'Python', 'Tailwind', 'OpenAI', 'Gemini','LLMs'],
    year: '2024',
    link: '/work',
    thumbnail: Ritematch,
  },
  {
    title: 'Verbizz',
    description:
      'Personalized business recommendation system using microservices, Kafka, Redis, and gRPC for real-time updates.',
    tags: ['Flask', 'Python', 'gRPC', 'Kafka', 'Redis', 'PostgreSQL', 'Kubernetes'],
    year: '2024',
    link: '/work',
    thumbnail: Verbizz,
  }

]

const socialLinks = [
  { name: 'GitHub', href: siteConfig.links.github, icon: Github },
  { name: 'LeetCode', href: 'https://leetcode.com/u/Kirandevihosur/', icon: LeetCodeIcon },
  { name: 'HackerRank', href: 'https://www.hackerrank.com/profile/dkiran760', icon: HackerRankIcon },
  { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
]

export default function HomePageClient() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
                We're living in the age of AI agents and I'm here for it. I'm a developer who enjoys building modern web apps and finding creative ways to use AI to solve real-world problems.
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
            <div className="flex justify-center md:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-60 h-50 overflow-hidden rounded-2xl shadow-xl border border-gray-300 dark:border-gray-700 bg-white/5 flex items-center justify-center"
              >
                <Image
                  src={Kiran_pic}
                  alt="Kiran Devihosur"
                  width={250}
                  height={192}
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
            </div>
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
              I'm a passionate developer with expertise in modern web technologies.
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
                  whileHover={{
                    scale: 1.04,
                    y: -8,
                    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25), 0 0 0 4px rgba(0, 0, 0, 0.67)',
                    transition: { type: 'spring', stiffness: 300, damping: 20 }
                  }}
                  whileTap={{
                    scale: 0.97,
                    boxShadow: '0 4px 16px 0 rgba(0,0,0,0.18), 0 0 0 2px #fbbf24aa'
                  }}
                  style={{ borderRadius: '1rem' }}
                  onClick={e => {
                    // Confetti effect can be added here if desired
                  }}
                >
                  <Card
                    href={project.link}
                    className="relative h-72 overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 dark:bg-black/30 p-0 flex flex-col justify-end"
                    accent="orange"
                  >
                    <div className="absolute inset-0 z-0">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className="w-full h-full"
                        style={{ willChange: 'transform' }}
                      >
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover w-full h-full opacity-80"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/40" />
                      </motion.div>
                    </div>
                    <div className="relative z-10 p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <span className="text-sm text-gray-200">{project.year}</span>
                      </div>
                      <p className="text-gray-100">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-900/70 text-xs font-medium rounded text-white"
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