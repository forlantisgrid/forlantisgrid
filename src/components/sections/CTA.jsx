import Button from '../ui/Button'
import './CTA.css'

export default function CTA() {
  return (
    <section
      className="cta-section"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}blueprint-navy-overlay.png)` }}
    >
      <div className="cta-overlay" />
      <div className="container cta-content">
        <span className="section-eyebrow">Get Started</span>
        <h2 className="cta-title">Ready to Power Your Next Project?</h2>
        <p className="cta-sub">Talk to our solutions engineers about your critical infrastructure needs.</p>
        <a href="/contact" className="btn btn-secondary">Get in Touch</a>
      </div>
    </section>
  )
}
