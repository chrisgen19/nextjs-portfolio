// components/Hero.tsx
'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  const particles = Array.from({ length: 5 }, (_, i) => i)

  // Smooth scroll function for CTA buttons
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <section className="banner" id="home">
      <div className="particles" aria-hidden="true">
        {particles.map((_, index) => (
          <div key={index} className={`particle particle-${index + 1}`} />
        ))}
      </div>
      
      <header className="content">
        <motion.p 
          className="greeting"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, World!
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I&apos;m Christian D.
        </motion.h1>
        
        <motion.p 
          className="tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer & <span>Creative Problem Solver</span>
        </motion.p>
        
        <motion.div 
          className="description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>
            Experienced Full Stack Developer with 15+ years of expertise in Wordpress, Laravel, React, 
            and modern web technologies. Specialized in building scalable applications and 
            innovative digital solutions for startups and enterprises. Passionate about creating 
            elegant, user-friendly applications that solve real-world problems.
          </p>
        </motion.div>
        
        <motion.nav 
          className="cta-container"
          aria-label="Main navigation actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#projects" 
            className="cta-button cta-primary"
            onClick={(e) => handleCTAClick(e, '#projects')}
            aria-label="View portfolio projects and work samples"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="cta-button cta-secondary"
            onClick={(e) => handleCTAClick(e, '#contact')}
            aria-label="Contact Christian D. for collaboration opportunities"
          >
            Get In Touch
          </a>
        </motion.nav>
      </header>
      
      <div className="scroll-indicator" aria-hidden="true"></div>
    </section>
  )
}