'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header" style={{ textAlign: 'left' }}>
            <p className="section-subtitle">About Me</p>
            <h2 className="section-title">Passionate Developer</h2>
          </div>
          <p className="about-text">
            I&apos;m a full-stack developer with over 15 years of experience in creating innovative digital solutions. 
            My journey in tech began with a fascination for how things work on the web, and has evolved into a 
            career dedicated to building exceptional user experiences.
          </p>
          <p className="about-text">
            I specialize in modern JavaScript frameworks and cloud architecture, with a keen eye for clean, 
            maintainable code. When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing 
            to open-source projects, or mentoring aspiring developers. I believe in the power of technology 
            to solve real-world problems and am always excited to take on new challenges.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-number">15+</div>
              <div className="highlight-label">Years Experience</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">100+</div>
              <div className="highlight-label">Projects Completed</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">50+</div>
              <div className="highlight-label">Happy Clients</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">10+</div>
              <div className="highlight-label">Awards Won</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Professional headshot of Christian D., Full Stack Developer"
              width={500}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}