import StatBlock from '../ui/StatBlock'
import './StatsSection.css'

export default function StatsSection({ stats }) {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <StatBlock key={idx} value={stat.value} label={stat.label} inverse />
          ))}
        </div>
      </div>
    </section>
  )
}
