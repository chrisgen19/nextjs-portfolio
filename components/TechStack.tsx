'use client'
import { motion } from 'framer-motion'

const techCategories = [
  {
    title: "Frontend Development",
    technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "SASS/SCSS", "Redux", "Three.js", "D3.js"]
  },
  {
    title: "Backend Development", 
    technologies: ["Node.js", "Python", "Express.js", "Django", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB", "Redis", "Docker"]
  },
  {
    title: "Cloud & DevOps",
    technologies: ["AWS", "Google Cloud", "Vercel", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform", "Nginx", "Cloudflare", "Linux"]
  },
  {
    title: "Tools & Others",
    technologies: ["Git", "VS Code", "Figma", "Jira", "Webpack", "Vite", "Jest", "Cypress", "Storybook", "Postman"]
  }
]

export default function TechStack() {
  return (
    <section className="tech-section" id="skills">
      <div className="tech-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Technologies</p>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-description">The tools and technologies I use to bring ideas to life</p>
        </motion.div>

        <div className="tech-categories">
          {techCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="tech-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="tech-grid">
                {category.technologies.map((tech) => (
                  <div key={tech} className="tech-item">{tech}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}