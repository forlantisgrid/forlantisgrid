import Card from '../ui/Card'
import './ProductGrid.css'

export default function ProductGrid({ products, title = 'Products' }) {
  return (
    <section className="product-grid-section">
      <div className="container">
        <span className="section-eyebrow">Equipment Portfolio</span>
        <h2 className="section-title">{title}</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Card key={product.id}>
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-product-img"
                />
              )}
              <div className="card-body">
                <h3 className="card-product-name">{product.name}</h3>
                <p className="card-product-desc">{product.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
