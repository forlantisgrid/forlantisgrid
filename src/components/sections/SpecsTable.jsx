import SpecRow from '../ui/SpecRow'

export default function SpecsTable({ specs }) {
  return (
    <section className="specs-table">
      <div className="container">
        <h2 className="section-title">Specifications</h2>
        <div>
          {specs.map((spec, idx) => (
            <SpecRow key={idx} label={spec.label} value={spec.value} />
          ))}
        </div>
      </div>
    </section>
  )
}
