export default function SpecRow({ label, value }) {
  return (
    <div className="spec-row">
      <div className="spec-row-label">{label}</div>
      <div className="spec-row-value">{value}</div>
    </div>
  )
}
