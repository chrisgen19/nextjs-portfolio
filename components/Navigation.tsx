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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="#" className="logo">JD</Link>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
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
            <Link href="/resume.pdf" className="nav-cta" download>
              Resume
            </Link>
          </li>
        </ul>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}