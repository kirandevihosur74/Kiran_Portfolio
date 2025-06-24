'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/site.config'

const techStack = [
  { category: 'Frontend', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'Tools', technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'] },
]

const experience = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications and mentoring junior developers.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Startup',
    period: '2020 - 2022',
    description: 'Built and maintained multiple client projects using modern web technologies.',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Created responsive and accessible user interfaces for various clients.',
  },
]

export default function AboutPageClient() {
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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with over 5 years of experience building 
              modern web applications. I love solving complex problems and creating 
              user-friendly experiences.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Profile Section */}
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">My Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I started my journey in web development back in 2018, fascinated by the 
                  endless possibilities of creating digital experiences that could reach 
                  millions of people worldwide.
                </p>
                <p>
                  Over the years, I've worked on various projects ranging from small business 
                  websites to large-scale enterprise applications. Each project has taught me 
                  something new and helped me grow as a developer.
                </p>
                <p>
                  When I'm not coding, you can find me sharing knowledge through blog posts, 
                  contributing to open-source projects, or exploring new technologies. I believe 
                  in continuous learning and staying up-to-date with the latest industry trends.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-40 h-40 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">K</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
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
              <h2 className="text-3xl font-bold">Tech Stack</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {techStack.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full" accent="purple">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                          >
                            {tech}
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

      {/* Experience */}
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
              <h2 className="text-3xl font-bold">Experience</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My professional journey in the tech industry
              </p>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={job.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card accent="yellow">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-xl font-semibold">{job.role}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {job.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {job.description}
                      </p>
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