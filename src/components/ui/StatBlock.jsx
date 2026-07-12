export default function StatBlock({ value, label, inverse = false }) {
  return (
    <div className={`stat-block${inverse ? ' inverse' : ''}`}>
      <div className="stat-block-value">{value}</div>
      <div className="stat-block-label">{label}</div>
    </div>
  )
}
