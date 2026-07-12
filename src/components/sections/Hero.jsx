import './Hero.css'

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: 'url(/images/photos/substation-dusk-wide.png)' }}
    >
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="section-eyebrow">Forlantis Power Solutions</span>
        <h1 className="hero-title">
          Critical Power<br />Infrastructure Solutions
        </h1>
        <p className="hero-sub">
          Utility-grade substation equipment backed by XD Group manufacturing excellence since 1959.
          Serving utilities, EPC contractors, data centers, renewables, and industrial facilities.
        </p>
        <div className="hero-actions">
          <a href="/products" className="btn btn-secondary">Explore Products</a>
          <a href="/contact" className="btn btn-outline">Talk to an Engineer</a>
        </div>
      </div>
    </section>
  )
}
