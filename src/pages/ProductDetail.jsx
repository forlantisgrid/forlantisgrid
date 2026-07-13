import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import SpecRow from '../components/ui/SpecRow'
import './ProductDetail.css'

const STANDARDS = ['IEEE/ANSI', 'IEC', 'CSA', 'DOE']

export default function ProductDetail() {
  const { slug } = useParams()
  const product = PRODUCTS.find((p) => p.slug === slug) ?? PRODUCTS[0]
  const [tab, setTab] = useState('Specifications')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const gallery = product.gallery ?? []
  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () => setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length)
  const showNext = () => setLightboxIndex((i) => (i + 1) % gallery.length)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, gallery.length])

  return (
    <div>
      {/* Hero: full-bleed photo with navy overlay */}
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

          {/* Left side: Specifications / Capabilities tabs */}
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

          {/* Right side: CTA + standards tags */}
          <div className="detail-sidebar">
            <div className="detail-cta-card">
              <h3 className="detail-cta-title">Ready to spec this equipment?</h3>
              <p className="detail-cta-body">
                Talk to our solutions engineers about ratings, lead times, and delivery.
              </p>
              <Link to="/contact" className="btn btn-secondary">Request a Quote</Link>
              {product.whitepaper && (
                <a href={product.whitepaper} className="btn btn-outline" download>
                  Download Whitepaper (PDF)
                </a>
              )}
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

      {/* Ratings table (optional, per-product) */}
      {product.ratingsTable && (
        <section className="detail-ratings">
          <div className="container">
            <h2 className="section-title">{product.ratingsTable.title}</h2>
            <div className="detail-ratings-scroll">
              <table className="detail-ratings-table">
                <thead>
                  <tr>
                    {product.ratingsTable.columns.map((col) => (
                      <th key={col}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.ratingsTable.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {product.ratingsTable.note && (
              <p className="detail-ratings-note">{product.ratingsTable.note}</p>
            )}
          </div>
        </section>
      )}

      {/* Gallery (optional, per-product) */}
      {product.gallery && (
        <section className="detail-gallery">
          <div className="container">
            <h2 className="section-title">Gallery</h2>
            <div className="detail-gallery-grid">
              {product.gallery.map((item, i) => (
                <figure
                  key={item.src}
                  className={`detail-gallery-item${item.size ? ` detail-gallery-item--${item.size}` : ''}`}
                  onClick={() => setLightboxIndex(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Enlarge image: ${item.caption || item.alt}`}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLightboxIndex(i)}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  {item.caption && <figcaption>{item.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
          {gallery.length > 1 && (
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); showPrev() }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[lightboxIndex].src} alt={gallery[lightboxIndex].alt} />
            {gallery[lightboxIndex].caption && (
              <figcaption>{gallery[lightboxIndex].caption}</figcaption>
            )}
          </figure>
          {gallery.length > 1 && (
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); showNext() }}
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  )
}
