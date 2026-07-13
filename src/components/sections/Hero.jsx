import { Link } from 'react-router-dom'
import './Hero.css'
export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}substation-dusk-wide.png)` }}
    >
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="section-eyebrow">Forlantis Power Solutions</span>
        <h1 className="hero-title">
          Substation Equipment<br />Solutions
        </h1>
        <p className="hero-sub">
          Utility-grade Power Equipment. Proven Performance. Trusted Solutions.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn btn-secondary">Explore Products</Link>
          <Link to="/contact" className="btn btn-outline">Talk to an Engineer</Link>
        </div>
      </div>
    </section>
  )
}
