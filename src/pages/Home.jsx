import Hero from '../components/sections/Hero'
import StatsSection from '../components/sections/StatsSection'
import ProductGrid from '../components/sections/ProductGrid'
import CTA from '../components/sections/CTA'
import { stats, featuredProducts } from '../data/index'

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsSection stats={stats} />
      <ProductGrid products={featuredProducts} />
      <CTA />
    </div>
  )
}
