// components/Navigation.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    // Close mobile menu after clicking
    setIsMenuOpen(false)
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  // Close menu when clicking outside (for mobile)
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link href="#" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
          CGD
        </Link>
        
        {/* Desktop & Mobile Navigation Menu */}
        <ul 
          className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={handleOverlayClick}
        >
          <li>
            <a 
              href="#home" 
              className="nav-link" 
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="nav-link" 
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="nav-link" 
              onClick={(e) => handleLinkClick(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="nav-link" 
              onClick={(e) => handleLinkClick(e, 'skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="nav-link" 
              onClick={(e) => handleLinkClick(e, 'experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="nav-link" 
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
          <li>
            <Link 
              href="/resume.pdf" 
              className="nav-cta" 
              download
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
          </li>
        </ul>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}