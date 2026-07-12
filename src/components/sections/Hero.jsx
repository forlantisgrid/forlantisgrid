import './Hero.css'

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(/substation-dusk-wide.png)` }}
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
          <a href="/products" className="btn btn-secondary">Explore Products</a>
          <a href="/contact" className="btn btn-outline">Talk to an Engineer</a>
        </div>
      </div>
    </section>
  )
}
