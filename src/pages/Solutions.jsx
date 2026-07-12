import Card from '../components/ui/Card'

export default function Solutions() {
  const verticals = [
    { id: 1, name: 'Utilities', description: 'Grid stability and transmission solutions' },
    { id: 2, name: 'Data Centers', description: 'High-reliability power infrastructure' },
    { id: 3, name: 'Renewables', description: 'Integration and storage systems' },
    { id: 4, name: 'Industrial', description: 'Heavy industry power conversion' },
  ]

  return (
    <div>
      <section style={{ padding: '3rem 0', background: 'var(--navy-50)' }}>
        <div className="container">
          <h1>Industry Solutions</h1>
          <p>Tailored power infrastructure for every vertical.</p>
        </div>
      </section>
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {verticals.map((v) => (
              <Card key={v.id}>
                <h3>{v.name}</h3>
                <p>{v.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
