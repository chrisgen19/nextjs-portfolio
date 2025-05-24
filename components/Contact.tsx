'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header" style={{ textAlign: 'left' }}>
            <p className="section-subtitle">Get In Touch</p>
            <h2 className="section-title">Let&apos;s Work Together</h2>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Smith"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
              />
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              style={isSubmitted ? { background: 'linear-gradient(135deg, #28ca42 0%, #22a737 100%)' } : {}}
            >
              {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Let&apos;s Connect</h3>
          <p>
            I&apos;m always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <Link href="mailto:john.doe@example.com" className="contact-value">
                  john.doe@example.com
                </Link>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-text">
                <span className="contact-label">Phone</span>
                <Link href="tel:+1234567890" className="contact-value">
                  +1 (234) 567-890
                </Link>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <span className="contact-label">Location</span>
                <span className="contact-value">San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <Link href="https://linkedin.com" target="_blank" className="social-link" title="LinkedIn">
              <span>in</span>
            </Link>
            <Link href="https://github.com" target="_blank" className="social-link" title="GitHub">
              <span>⚡</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="social-link" title="Twitter">
              <span>𝕏</span>
            </Link>
            <Link href="https://facebook.com" target="_blank" className="social-link" title="Facebook">
              <span>f</span>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="social-link" title="Instagram">
              <span>📷</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}