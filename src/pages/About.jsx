import './About.css'
import iconFactory from '/icon-factory.png'
import iconGlobe from '/icon-globe.png'
import iconShield from '/icon-shield.png'
import iconGear from '/icon-gear.png'

const PILLARS = [
  {
    title: 'Power Equipment',
    desc: 'Transformers, breakers, and substation equipment to IEEE, ANSI, and IEC standards, sourced from one of the world\'s most experienced high-voltage manufacturers.',
    icon: iconFactory,
  },
  {
    title: 'Global Manufacturing Access',
    desc: 'Bridging qualified manufacturers with execution-focused local support. We bring world-class production capability to North American project timelines.',
    icon: iconGlobe,
  },
  {
    title: 'Risk-Aware Delivery',
    desc: 'Reducing technical, manufacturing, schedule, and quality risks at every stage, from specification through commissioning and beyond.',
    icon: iconShield,
  },
  {
    title: 'Project Services',
    desc: 'Engineering, quality oversight, factory acceptance testing, commissioning, and long-term maintenance support for every product we supply.',
    icon: iconGear,
  },
]

export default function About() {
  return (
    <div>
      <section className="about-hero">
        <div className="container about-hero-content">
          <h1 className="about-hero-title">About Forlantis Power Solutions</h1>
          <p>Critical power infrastructure solutions for utilities, EPC contractors, data centers, renewables, and industrial facilities.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="container about-body">
          <div className="about-text">
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="about-section-title">Critical Power Infrastructure Solutions</h2>
            <p>
              Forlantis Power Solutions supplies utility-grade substation equipment designed to meet international standards for utilities, 
              EPC contractors, data centers, renewable energy projects, and industrial facilities. Our products are engineered for reliability, 
              safety, and long-term performance, helping customers build dependable power infrastructure worldwide.            
            </p>
            <p>
              Our role is to bridge qualified global manufacturers with execution-focused local support:
              reducing technical, manufacturing, schedule, and quality risks from first specification
              through final commissioning. We don\'t just supply equipment; we manage the full delivery.
            </p>
            <p>
              Our portfolio spans nine equipment families: power transformers, dead tank circuit breakers,
              gas-insulated switchgear (GIS), surge arresters, instrument transformers, padmount transformers,
              solid state transformers, vanadium flow batteries, and synchronous condensers.
              All products meet or exceed NEMA, IEEE/ANSI, DOE, CSA, and IEC standards.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="about-pillars-section">
        <div className="container">
          <span className="section-eyebrow">How We Operate</span>
          <h2 className="about-section-title">Four Ways We Deliver Value</h2>
          <div className="about-pillars">
            {PILLARS.map((p) => (
              <div key={p.title} className="about-pillar">
                <img src={p.icon} alt="" className="pillar-icon" />
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
