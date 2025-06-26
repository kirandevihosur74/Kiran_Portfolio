'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import Developer_pic from '@/public/images/Developer.png'
import IdeasPic from '@/public/images/ideas.png'
import Hiking_pic from '@/public/images/cu_hiking.png'
import Voluteering_pic from '@/public/images/cu_logo.png'

const techStack = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    technologies: ['Java', 'Python', 'Node.js', 'Flask', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'AI/ML',
    technologies: ['GPT-4','Gemini','LLMs', 'Hugging Face Transformers', 'Scikit-learn', 'TensorFlow'],
  },
  {
    category: 'Distributed Systems',
    technologies: ['Kafka', 'gRPC', 'REST APIs', 'Spark', 'Delta Lake'],
  },
  {
    category: 'Cloud & DevOps',
    technologies: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Git', 'CI/CD'],
  },
  {
    category: 'Testing & Tools',
    technologies: ['PyTest', 'Jest', 'JUnit', 'Postman', 'GitHub Copilot', 'Cursor'],
  },
];

const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'Asante Inc',
    period: 'June 2024 – Dec 2024',
    description: 'Led development of GPT-4-powered features and scaled AWS-based APIs for AI-driven user engagement.',
  },
  {
    role: 'Software Engineer',
    company: 'TEKsystems Global Services',
    period: 'Aug 2021 – June 2023',
    description: 'Built distributed systems and modular UIs using Java, Spring Boot, React, and Kafka with 99.9% uptime.',
  },
  {
    role: 'Associate Software Engineer',
    company: 'Accenture',
    period: 'Nov 2020 – Aug 2021',
    description: 'Developed secure, performant web apps and optimized Python APIs in cloud-native environments.',
  },
];

const education = [
  {
    institution: 'University of Colorado Boulder',
    degree: 'Master of Science in Data Science',
    period: 'Aug 2023 – May 2025',
    location: 'Boulder, CO',
    gpa: 'GPA: 3.97 / 4.00',
    highlights: [
      'Data Structures & Algorithms',
      'Machine Learning',
      'Data Mining',
      'Data Center Scale Computing',
      'Cybersecurity for Data Science',
      'Data Science as a Field',
      'Ethical Issues in Data Science'
    ]
  },
  {
    institution: 'KLE Technological University',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    period: 'Aug 2016 – June 2020',
    location: 'Hubli, India',
    gpa: 'GPA: 8.52 / 10.00',
    highlights: [
      'Data Structures and Algorithms',
      'Software Engineering',
      'Web Technologies',
      'Cloud Computing',
      'Database Systems',
      'Operating Systems',
      'Object-Oriented Programming',
      'Computer Networks',
      'Distributed Systems'
    ]
  }
];

const certifications = [
  {
    title: 'Generative AI Fundamentals',
    issuer: 'Databricks',
    date: 'Apr 2025',
    link: 'https://credentials.databricks.com/141222473'
  },
  {
    title: "MongoDB – The Complete Developer's Guide",
    issuer: 'Udemy',
    date: 'Apr 2023',
    link: 'https://www.udemy.com/certificate/UC-8afd4436-091f-406d-9857-431bf3bee47f/'
  },
  {
    title: 'Go Java Full Stack with Spring Boot and React',
    issuer: 'Udemy',
    date: 'Apr 2022',
    link: 'https://www.udemy.com/certificate/UC-9b7c76d5-9c10-4f8f-8411-9240d4d24fab/'
  },
  {
    title: 'Spot Award – Outstanding Contribution in Project',
    issuer: 'TEKsystems',
    date: 'Dec 2022',
    link: 'https://drive.google.com/file/d/10xmiMn-7RPNXy6kKZirsu6XuhKJ2rsH1/view?usp=sharing'
  },
  {
    title: 'Python Course',
    issuer: 'Coursera & Google',
    date: 'Aug 2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/6NVJPMLJNE5D'
  },
  {
    title: 'React Course',
    issuer: 'Udemy',
    date: 'March 2022',
    link: 'https://www.udemy.com/certificate/UC-fa62dde6-35b2-4e4a-b720-4a41bfcb70dd/'
  },
  {
    title: 'Vue Course',
    issuer: 'Udemy',
    date: 'Apr 2021',
    link: 'https://www.udemy.com/certificate/UC-1a678cec-e73f-425f-bd3a-ffb22c4e5f75/'
  },
  {
    title: 'React Testing library with Jest',
    issuer: 'Udemy',
    date: 'Apr 2022',
    link: 'https://www.udemy.com/certificate/UC-4a5b1839-adf8-4cf8-bce0-189633dd48c7/'
  },
  {
    title: 'SQL (Basic)',
    issuer: 'Hackerrank',
    date: 'Jun 2021',
    link: 'https://www.hackerrank.com/certificates/60fc939f83a0/'
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'Hackerrank',
    date: 'Jun 2021',
    link: 'https://www.hackerrank.com/certificates/751bb7105ddf'
  },
  {
    title: 'Python (Basic)',
    issuer: 'Hackerrank',
    date: 'Sep 2020',
    link: 'https://www.hackerrank.com/certificates/49c312817472'
  },
  {
    title: 'Python (Intermediate)',
    issuer: 'Hackerrank',
    date: 'Sep 2020',
    link: 'https://www.hackerrank.com/certificates/95c1fddfb353'
  },
  {
    title: 'Introduction to R Programming',
    issuer: 'University of Colorado Boulder',
    date: 'Jul 2023',
    link: 'https://www.coursera.org/account/accomplishments/certificate/3B224EA9BZNB'
  },
  {
    title: 'Data Science Hackathon',
    issuer: 'University of Colorado Boulder',
    date: 'Dec 2024',
    link: 'https://drive.google.com/file/d/1NlRmfFOfjmpES9vmD77bUPe0h6j1ugjp/view?usp=sharing'
  }
];

// Helper to parse 'Apr 2025' to a comparable value
function parseMonthYear(str: string) {
  const [month, year] = str.split(' ')
  return new Date(`${month} 1, ${year}`).getTime()
}

const volunteeringExperiences = [
  {
    title: "Officer",
    company: "CU Hiking Club",
    company_url: "https://www.cuhikingclub.com",
    logo_path: Hiking_pic,
    duration: "Aug 2024 - May 2025",
    location: "Boulder, Colorado",
    description:
      "Serve as a Hiking Officer for the CU Hiking Club, overseeing the organization and execution of group hiking activities. Responsibilities include leading hikes, planning routes, ensuring safety protocols, and coordinating with club members to foster teamwork and outdoor exploration. Actively contribute to building a vibrant hiking community within the university by encouraging participation and promoting environmental stewardship",
    color: "#0071C5",
  },
  {
    title: "Volunteering",
    company: "University of Colorado Boulder",
    company_url:
      "https://drive.google.com/file/d/1gxXn_CJ0CC_ZyfYJtdRs3kOOM28eN7TT/view?usp=sharing",
    logo_path: Voluteering_pic,
    duration: "Apr 21, 2024",
    location: "Boulder, Colorado",
    description:
      "I have given an impact of 6 hours of volunteering service for the Volunteer Resource Center during National Volunteer Week 2024 at the University of Colorado Boulder. My efforts were recognized and verified by the university as a meaningful contribution to the community.",
    color: "#4285F4",
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
              I'm a passionate full-stack developer with 3+ years of experience crafting scalable, user-centric web applications. I thrive on solving complex problems, building performant distributed systems, and creating seamless digital experiences powered by modern technologies and AI.
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
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-justify">
                <p>
                  I started my web development journey in 2018, curious about how the web connects people and ideas. That curiosity grew into a passion for building scalable, intelligent applications that solve real-world problems.
                </p>
                <p>
                  Over the years, I've worked on diverse projects building backend systems in Python, designing APIs with Flask and FastAPI, and developing full-stack web apps using React, TypeScript, and Node.js. My work often bridges web engineering and AI, leveraging LLMs like GPT-4 and Gemini, along with frameworks such as Hugging Face Transformers and LangChain, to build intelligent, responsive features.
                </p>
                <p>
                  What drives me is the challenge of creating efficient, maintainable systems that feel seamless to users. I love working with modern cloud-native stacks, experimenting with new technologies, and using code to bring impactful ideas to life.
                </p>
              </div>
            </motion.div>
            <div className="flex justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-auto h-auto overflow-hidden border-2 border-gray-300 dark:border-gray-700 bg-white/5 shadow-xl flex items-center justify-center"
              >
                <Image
                  src={IdeasPic}
                  alt="Ideas Illustration"
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                  priority
                />
              </motion.div>
            </div>
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
                  whileHover={{ scale: 1.04, boxShadow: '0 0 32px 0 rgba(245,158,11,0.25)' }}
                  className="relative bg-white/30 dark:bg-white/10 rounded-2xl p-8 border border-white/30 dark:border-white/20 shadow-2xl backdrop-blur-lg transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{category.category}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="bg-white/20 dark:bg-white/10 text-gray-900 dark:text-white border border-white/30 dark:border-white/20 text-xs font-semibold rounded px-3 py-2 shadow-sm backdrop-blur-sm transition"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Education Section */}
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
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, boxShadow: '0 0 32px 0 rgba(245,158,11,0.25)' }}
                  className="relative bg-white/30 dark:bg-white/10 rounded-2xl p-8 border border-white/30 dark:border-white/20 shadow-2xl backdrop-blur-lg transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                      <p className="text-sm text-gray-800 dark:text-gray-100">{edu.location}</p>
                    </div>
                    <div className="text-sm text-gray-800 dark:text-gray-100">{edu.period}</div>
                  </div>
                  <div className="mt-2">
                    <span className="font-medium text-gray-900 dark:text-white">{edu.degree}</span>
                    <span className="ml-2 text-xs text-gray-800 dark:text-gray-100">{edu.gpa}</span>
                  </div>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <li
                        key={h}
                        className="bg-white/20 dark:bg-white/10 text-gray-900 dark:text-white border border-white/30 dark:border-white/20 text-xs font-semibold rounded px-3 py-2 shadow-sm backdrop-blur-sm transition"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
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
                  <Card className="bg-white/30 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-2xl backdrop-blur-lg">
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

      {/* Certifications Section */}
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
              <h2 className="text-3xl font-bold">Certifications & Awards</h2>
            </div>
            <div className="space-y-4">
              {certifications
                .slice()
                .sort((a, b) => parseMonthYear(b.date) - parseMonthYear(a.date))
                .map((cert, idx) => (
                  <motion.a
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.04, boxShadow: '0 0 32px 0 rgba(245,158,11,0.25)' }}
                    className="block relative bg-white/30 dark:bg-white/10 rounded-2xl p-6 border border-white/30 dark:border-white/20 shadow-2xl backdrop-blur-lg transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                        <p className="text-sm text-gray-800 dark:text-gray-100">{cert.issuer}</p>
                      </div>
                      <div className="text-sm text-gray-800 dark:text-gray-100">{cert.date}</div>
                    </div>
                  </motion.a>
                ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Volunteering & Activities Section */}
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
              <h2 className="text-3xl font-bold">Volunteering & Activities</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Ways I give back and stay engaged beyond work
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {volunteeringExperiences.map((exp, idx) => (
                <motion.div
                  key={exp.title + exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 0 32px 0 rgba(245,158,11,0.25)' }}
                  className="bg-white/30 dark:bg-white/10 rounded-2xl p-6 border border-white/30 dark:border-white/20 shadow-2xl backdrop-blur-lg flex gap-4"
                >
                  <Image
                    src={exp.logo_path}
                    alt={exp.company}
                    width={56}
                    height={56}
                    className="w-14 h-14 object-contain rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <a
                        href={exp.company_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-lg text-primary-700 dark:text-primary-400 hover:underline"
                      >
                        {exp.company}
                      </a>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-0 sm:ml-4">{exp.duration}</span>
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{exp.location}</div>
                    <div className="text-gray-700 dark:text-gray-300 text-sm">{exp.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
} 