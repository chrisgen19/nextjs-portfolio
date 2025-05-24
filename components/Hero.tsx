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
      <div className="particles">
        {particles.map((_, index) => (
          <div key={index} className={`particle particle-${index + 1}`} />
        ))}
      </div>
      
      <div className="content">
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
          I&apos;m John Doe
        </motion.h1>
        
        <motion.p 
          className="tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer & <span>Creative Thinker</span>
        </motion.p>
        
        <motion.div 
          className="description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>
            Crafting digital experiences with clean code and innovative solutions. 
            Specialized in modern web technologies, turning complex problems into 
            elegant, user-friendly applications.
          </p>
        </motion.div>
        
        <motion.div 
          className="cta-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#projects" 
            className="cta-button cta-primary"
            onClick={(e) => handleCTAClick(e, '#projects')}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="cta-button cta-secondary"
            onClick={(e) => handleCTAClick(e, '#contact')}
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
      
      <div className="scroll-indicator"></div>
    </section>
  )
}