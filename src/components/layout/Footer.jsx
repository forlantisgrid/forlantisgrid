import Logo from '../ui/Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <Logo height={72} variant="light" className="footer-logo" />
          <p>Critical infrastructure for utilities, data centers, renewables, and industry.</p>
        </div>
        <div className="footer-section">
          <h5>Contact</h5>
          <p>info@forlantisgrid.com</p>
          <p>forlantisgrid.com</p>
        </div>
        <div className="footer-section">
          <h5>Legal</h5>
          <p>&copy; 2026 Forlantis Power Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
