import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import SpecRow from '../components/ui/SpecRow'
import './ProductDetail.css'

const STANDARDS = ['IEEE/ANSI', 'IEC', 'CSA', 'DOE']

export default function ProductDetail() {
  const { slug } = useParams()
  const product = PRODUCTS.find((p) => p.slug === slug) ?? PRODUCTS[0]
  const [tab, setTab] = useState('Specifications')

  return (
    <div>
      {/* Hero — full-bleed photo with navy overlay */}
      <section
        className="detail-hero"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="detail-hero-overlay" />
        <div className="container detail-hero-content">
          <span className="section-eyebrow">{product.eyebrow}</span>
          <h1 className="detail-hero-title">{product.title}</h1>
          <p className="detail-hero-lede">{product.lede}</p>
          <div className="detail-stats">
            {product.stats.map((stat) => (
              <div key={stat.value} className="detail-stat">
                <span className="detail-stat-value">{stat.value}</span>
                <span className="detail-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="detail-body">
        <div className="container detail-grid">

          {/* Left — Tabs: Specifications / Capabilities */}
          <div className="detail-tabs-panel">
            <div className="detail-tabs">
              {['Specifications', 'Capabilities'].map((t) => (
                <button
                  key={t}
                  className={`detail-tab${tab === t ? ' active' : ''}`}
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="detail-tab-content">
              {tab === 'Specifications' ? (
                <div>
                  {product.specs.map((spec) => (
                    <SpecRow key={spec.label} label={spec.label} value={spec.value} />
                  ))}
                </div>
              ) : (
                <ul className="detail-bullets">
                  {product.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right — CTA + standards tags */}
          <div className="detail-sidebar">
            <div className="detail-cta-card">
              <h3 className="detail-cta-title">Ready to spec this equipment?</h3>
              <p className="detail-cta-body">
                Talk to our solutions engineers about ratings, lead times, and delivery.
              </p>
              <Link to="/contact" className="btn btn-secondary">Request a Quote</Link>
            </div>
            <div className="detail-standards">
              {STANDARDS.map((s) => (
                <span key={s} className="product-tag">{s}</span>
              ))}
            </div>
            <Link to="/products" className="detail-back">← All Products</Link>
          </div>

        </div>
      </section>
    </div>
  )
}
