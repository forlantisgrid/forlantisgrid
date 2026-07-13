import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import './Products.css'

const TAGS = ['Up to 1,100 kV', '50/60 Hz', 'UL Certified', 'ISO 9001']

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="products-hero">
        <div className="container">
          <span className="section-eyebrow">Substation Equipment</span>
          <h1 className="products-hero-title">Product Range</h1>
          <p className="products-hero-lede">
            Utility-Grade Power Equipment. Proven Performance. Trusted Solutions.
          </p>
        </div>
      </section>

      {/* Listing */}
      <section className="products-listing">
        <div className="container">
          <div className="products-tags">
            {TAGS.map((tag) => (
              <span key={tag} className="product-tag">{tag}</span>
            ))}
          </div>
          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <div key={product.slug} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card-img"
                />
                <div className="product-card-body">
                  <span className="product-card-badge">{product.badge}</span>
                  <h3 className="product-card-title">{product.name}</h3>
                  <p className="product-card-desc">{product.description}</p>
                  <div className="product-card-footer">
                    <span className="product-card-lead">{product.lead}</span>
                    <Link to={`/products/${product.slug}`} className="product-card-link">
                      View Specs →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
