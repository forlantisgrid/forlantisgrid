import { Link } from 'react-router-dom'
import './ProductGrid.css'

export default function ProductGrid({ products, title = 'Products' }) {
  return (
    <section className="product-grid-section">
      <div className="container">
        <span className="section-eyebrow">Equipment Portfolio</span>
        <h2 className="section-title">{title}</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.slug || product.name} className="pg-card">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="pg-card-img"
                />
              )}
              <div className="pg-card-body">
                {product.badge && (
                  <span className="pg-card-badge">{product.badge}</span>
                )}
                <h3 className="pg-card-name">{product.name}</h3>
                <p className="pg-card-desc">{product.description}</p>
                {product.slug && (
                  <Link to={`/products/${product.slug}`} className="pg-card-link">
                    View Specs →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}