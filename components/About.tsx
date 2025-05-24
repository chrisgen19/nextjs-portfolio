// components/About.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useIsDesktop } from '../utils/hooks' // Adjust path if your structure is different

export default function About() {
  const isDesktop = useIsDesktop(); // Use the imported hook

  // Animation for the about content
  const aboutContentDesktopAnimation = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  // Animation for the about image
  const aboutImageDesktopAnimation = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay: 0.2 },
  };

  // Static state for mobile (no animation)
  const noAnimation = {
    initial: { opacity: 1, x: 0, y: 0 }, // Ensure all animated properties are reset
    whileInView: { opacity: 1, x: 0, y: 0 },
    // No viewport or transition needed for static elements
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          {...(isDesktop ? aboutContentDesktopAnimation : noAnimation)}
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
          {...(isDesktop ? aboutImageDesktopAnimation : noAnimation)}
        >
          <div className="image-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" // Replace with your actual image path
              alt="Professional headshot" // Update alt text
              width={500}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw" // Adjust sizes as per your design
              priority // Consider adding priority if this image is above the fold
            />
          </div>
          {/* If floating shapes also need conditional animation, apply similar logic */}
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}