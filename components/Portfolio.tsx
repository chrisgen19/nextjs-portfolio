'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: "E-commerce Platform",
    url: "ecommerce-platform.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Analytics Dashboard",
    url: "saas-dashboard.io",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1200&fit=crop",
    tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Network App",
    url: "social-network.app",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1200&fit=crop",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI Writing Assistant",
    url: "ai-assistant.tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=1200&fit=crop",
    tech: ["React", "OpenAI API", "Express", "Redis"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Fitness Tracker PWA",
    url: "fitness-tracker.com",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=1200&fit=crop",
    tech: ["Angular", "Firebase", "Chart.js", "PWA"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Real Estate Marketplace",
    url: "realestate-marketplace.io",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1200&fit=crop",
    tech: ["Svelte", "GraphQL", "AWS", "Mapbox"],
    liveUrl: "#",
    githubUrl: "#"
  }
]

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="projects">
      <div className="portfolio-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A collection of my recent work, showcasing modern web applications and creative solutions
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="browser-mockup"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="browser-header">
                <div className="traffic-lights">
                  <div className="traffic-light red"></div>
                  <div className="traffic-light yellow"></div>
                  <div className="traffic-light green"></div>
                </div>
                <div className="url-bar">{project.url}</div>
              </div>
              
              <div className="browser-content">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title} - ${project.tech.join(', ')} web application`}
                  width={800}
                  height={1200}
                  className="portfolio-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <div className="portfolio-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="portfolio-links">
                    <Link href={project.liveUrl} className="portfolio-link">
                      <span>View Live</span>
                      <span>→</span>
                    </Link>
                    <Link href={project.githubUrl} className="portfolio-link secondary">
                      <span>GitHub</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}