import { products } from '../data/products'
import ProductGrid from '../components/sections/ProductGrid'

export default function Products() {
  return (
    <div>
      <section style={{ padding: '3rem 0', background: 'var(--navy-50)' }}>
        <div className="container">
          <h1>Power Equipment & Solutions</h1>
          <p>Utility-grade products for critical infrastructure.</p>
        </div>
      </section>
      <ProductGrid products={products} />
    </div>
  )
}
