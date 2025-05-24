// components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>John Doe</h4>
          <p>
            Full Stack Developer passionate about creating innovative digital solutions 
            that make a difference. Let&apos;s build something amazing together!
          </p>
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
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#experience">Experience</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><Link href="#">Web Development</Link></li>
            <li><Link href="#">Mobile Apps</Link></li>
            <li><Link href="#">UI/UX Design</Link></li>
            <li><Link href="#">Consulting</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Portfolio</Link></li>
            <li><Link href="#">Resume</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 John Doe. All rights reserved. | Built with ❤️ and lots of ☕</p>
      </div>
    </footer>
  )
}