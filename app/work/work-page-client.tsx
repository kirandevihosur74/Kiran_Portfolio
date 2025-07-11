'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import Verbizz_pic from '@/public/images/recommend.png'
import PitStop_pic from '@/public/images/pitstop.png'
import Ritematch_pic from '@/public/images/ritematch_pic.png'
import Dashboard_pic from '@/public/images/F1_dashboard.png'
import LLM_forge_pic from '@/public/images/llm_forge.png'
import Stream_pic from '@/public/images/Stream_biz_pic.png'
import f1Pic from '@/public/images/f1_pic.png'
import f1SimPic from '@/public/images/f1_sim.png'

const projects = [
  {
    id: 'f1-racesim',
    title: 'F1 RaceSim: Real-Time Race Simulation with AI Insights',
    description: 'Built a full-stack race strategy simulator using Next.js, FastAPI, and Gemini AI, enabling real-time simulation, multi-strategy comparison, and weather-aware race prediction with interactive visualizations; deployed on AWS Lambda and Vercel, achieving 40% faster cold-start time through serverless optimization and AI inference rate-limiting.',
    image: f1SimPic,
    tags: ['Next.js', 'FastAPI', 'Gemini AI', 'AWS Lambda', 'Vercel', 'Serverless', 'AI', 'Visualization'],
    year: '2025',
    link: 'https://github.com/kirandevihosur74/F1RaceSim', // replace with actual repo if available
    demo: 'https://f1-race-sim.vercel.app', // replace with actual live demo if available
    featured: true,
  },
  {
    id: 'verbizz',
    title: 'Verbizz – Personalized Business Recommendation System',
    description: 'A cloud-native microservices platform for real-time business recommendations using gRPC, Kafka, Redis, and Flask. Built scalable AI-first architecture with PostgreSQL, Kubernetes, and content-aware recommendation engine.',
    image: Verbizz_pic,
    tags: ['Flask', 'Kafka', 'Redis', 'gRPC', 'PostgreSQL', 'Kubernetes', 'Docker', 'AI'],
    year: '2024',
    link: 'https://github.com/kirandevihosur74/Verbizz',
    demo: 'https://verbizz-demo.com',
    featured: true,
  },
  {
    id: 'ritematch',
    title: 'Ritematch – AI-Powered Job Matching & Resume Tailoring Portal',
    description: 'A full-stack web platform using LLMs to match resumes to jobs, tailor content with generative AI, and provide ATS-optimized resume outputs. Built with Django and React for a seamless user experience.',
    image: Ritematch_pic,
    tags: ['Django', 'React', 'GPT-4o', 'Gemini', 'Tailwind CSS', 'DRF', 'Firebase'],
    year: '2023',
    link: 'https://github.com/kirandevihosur74/RiteMatch',
    demo: 'https://ritematch-demo.com',
    featured: true,
  },
  {
    id: 'pitstopanalytics',
    title: 'PitStopAnalytics – F1 Championship Predictor',
    description: 'A machine learning project predicting F1 championship winners using clustering, PCA, and ML models. Uses data from the Ergast F1 API and explores driver and constructor patterns.',
    image: PitStop_pic,
    tags: ['Python', 'Pandas', 'Scikit-learn', 'PCA', 'Clustering', 'Jupyter', 'F1 API'],
    year: '2024',
    link: 'https://github.com/kirandevihosur74/PitStopAnalytics',
    demo: 'https://sites.google.com/view/pit-stop-analytics/introduction',
    featured: true,
  },
  {
    id: 'bizstream',
    title: 'BizStream – Streaming Smart Business Recommendations in Real-Time',
    description: 'A real-time microservices platform that matches users to businesses using Kafka, Redis, FastAPI, and Streamlit. Built with containerized services and a live recommendation pipeline powered by streaming Yelp data.',
    image: Stream_pic,
    tags: ['Kafka', 'Redis', 'FastAPI', 'Streamlit', 'Docker Compose', 'Python'],
    year: '2025',
    link: 'https://github.com/kirandevihosur74/BizStream-Business-Stream',
    demo: 'http://localhost:8501',  // replace with actual deployed link if available
    featured: true
  },
  {
    id: 'llmforge',
    title: 'LLMForge – Sentiment Analysis with BERT',
    description: 'A complete ML pipeline with fine-tuned BERT for binary sentiment classification. Includes PyTorch/TensorFlow support, FastAPI REST API, Prometheus monitoring, and Docker-based deployment.',
    image: LLM_forge_pic,
    tags: ['BERT', 'PyTorch', 'TensorFlow', 'FastAPI', 'Docker', 'Prometheus', 'NLP'],
    year: '2025',
    link: 'https://github.com/kirandevihosur74/LLMForge',
    demo: 'http://localhost:8000', // replace with actual if deployed
    featured: true,
  },
  {
    id: 'f1-dashboard',
    title: 'Formula 1 Insights Dashboard',
    description: 'A data visualization dashboard that explores Formula 1 racing statistics using Streamlit and embedded Tableau Public views. Provides real-time, interactive insights into race data, driver performance, and team analytics.',
    image: Dashboard_pic,
    tags: ['Streamlit', 'Tableau Public', 'Python', 'Data Visualization'],
    year: '2025',
    link: 'https://github.com/kirandevihosur74/F1_dashboard',  // replace with your actual repo if available
    demo: 'https://public.tableau.com/views/F1_dashboard_new/Dashboard2?:embed=y&:display_count=yes&:showVizHome=no',          // replace with actual deployed link if available
    featured: true
  }

  // {
  //   id: 'task-management',
  //   title: 'Task Management App',
  //   description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
  //   image: '/api/placeholder/400/300',
  //   tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
  //   year: '2023',
  //   link: 'https://github.com/kiran/task-management',
  //   demo: 'https://task-app-demo.com',
  //   featured: true,
  // },
  // {
  //   id: 'portfolio-website',
  //   title: 'Portfolio Website',
  //   description: 'A modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode, animations, and responsive design.',
  //   image: '/api/placeholder/400/300',
  //   tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  //   year: '2024',
  //   link: 'https://github.com/kiran/portfolio',
  //   demo: 'https://kiran-portfolio.com',
  //   featured: true,
  // },
  // {
  //   id: 'weather-app',
  //   title: 'Weather Dashboard',
  //   description: 'A weather application that displays current weather conditions and forecasts using OpenWeatherMap API.',
  //   image: '/api/placeholder/400/300',
  //   tags: ['React', 'JavaScript', 'CSS3', 'OpenWeatherMap API'],
  //   year: '2023',
  //   link: 'https://github.com/kiran/weather-app',
  //   demo: 'https://weather-app-demo.com',
  //   featured: false,
  // },
  // {
  //   id: 'blog-platform',
  //   title: 'Blog Platform',
  //   description: 'A content management system for blogs with markdown support, user authentication, and admin dashboard.',
  //   image: '/api/placeholder/400/300',
  //   tags: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL', 'NextAuth'],
  //   year: '2023',
  //   link: 'https://github.com/kiran/blog-platform',
  //   demo: 'https://blog-platform-demo.com',
  //   featured: false,
  // },
  // {
  //   id: 'chat-app',
  //   title: 'Real-time Chat App',
  //   description: 'A real-time chat application with user authentication, message history, and file sharing capabilities.',
  //   image: '/api/placeholder/400/300',
  //   tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
  //   year: '2022',
  //   link: 'https://github.com/kiran/chat-app',
  //   demo: 'https://chat-app-demo.com',
  //   featured: false,
  // },
]

const featuredProjects = projects.filter(p => p.featured)
const otherProjects = projects.filter(p => !p.featured)

export default function WorkPageClient() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center py-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
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
      <Section className="py-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Some of my best work and most challenging projects
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
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
                        <Image
                          src={project.image}
                          alt={project.title}
                        />
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
    </>
  )
} 