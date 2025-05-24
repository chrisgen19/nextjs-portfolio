// components/Contact.tsx
'use client'
import { useState } from 'react' // useEffect is no longer needed here if only used by the hook
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useIsDesktop } from '../utils/hooks' // Adjust path if your structure is different

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isDesktop = useIsDesktop(); // Use the imported hook

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
      
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  }

  const getButtonText = () => {
    switch (status) {
      case 'loading': return '⏳ Sending...'
      case 'success': return '✅ Message Sent!'
      case 'error': return '❌ Try Again'
      default: return 'Send Message'
    }
  }

  const getButtonStyle = () => {
    switch (status) {
      case 'success': return { background: 'linear-gradient(135deg, #28ca42 0%, #22a737 100%)' }
      case 'error': return { background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)' }
      default: return {}
    }
  }

  // Define animation variants
  const formWrapperDesktopAnimation = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const contactInfoDesktopAnimation = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay: 0.2 },
  };

  // Define what happens on mobile (no animation or static state)
  const noAnimation = {
    initial: { opacity: 1, x: 0, y: 0 }, // Ensure all animated properties are reset
    whileInView: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-form-wrapper"
          {...(isDesktop ? formWrapperDesktopAnimation : noAnimation)}
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
                disabled={status === 'loading'}
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
                disabled={status === 'loading'}
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
                disabled={status === 'loading'}
              />
            </div>
            
            {errorMessage && (
              <div style={{ 
                color: '#ff6b6b', 
                marginBottom: '1rem', 
                textAlign: 'center',
                padding: '12px',
                background: 'rgba(255, 107, 107, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 107, 107, 0.3)'
              }}>
                {errorMessage}
              </div>
            )}
            
            {status === 'success' && (
              <div style={{ 
                color: '#28ca42', 
                marginBottom: '1rem', 
                textAlign: 'center',
                padding: '12px',
                background: 'rgba(40, 202, 66, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(40, 202, 66, 0.3)'
              }}>
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            
            <button 
              type="submit" 
              className="submit-btn"
              style={getButtonStyle()}
              disabled={status === 'loading'}
            >
              {getButtonText()}
            </button>
          </form>
        </motion.div>

        <motion.div 
          className="contact-info"
          {...(isDesktop ? contactInfoDesktopAnimation : noAnimation)}
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
  );
}