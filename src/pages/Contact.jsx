import { useState } from 'react'
import './Contact.css'

const FORMSPREE_ID = 'maqrwrlj'

const EQUIPMENT_OPTIONS = [
  'Power Transformers',
  'Dead Tank Circuit Breakers',
  'Gas-Insulated Switchgear',
  'Surge Arresters',
  'Instrument Transformers',
  'Padmount Transformers',
  'Solid State Transformers',
  'Vanadium Flow Batteries',
  'Synchronous Condensers',
]

const WHY_FORLANTIS = [
  'Global standards: IEEE, ANSI, IEC, CSA, DOE',
  'ISO 9001 · ISO/IEC 17025 lab',
  '20K+ GIS bays, 120K+ breakers in service',
  'Spec to commissioning & maintenance',
  'Power transformers within 10–12 months',
]

const INITIAL_FORM = {
  name: '',
  email: '',
  company: '',
  equipment: '',
  details: '',
  services: false,
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [id]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'Full name': form.name,
          'Work email': form.email,
          'Company': form.company,
          'Equipment type': form.equipment,
          'Project details': form.details,
        }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleReset = () => {
    setForm(INITIAL_FORM)
    setStatus('idle')
  }

  return (
    <div>
      {/* Hero header */}
      <section className="contact-hero">
        <div className="container">
          <span className="section-eyebrow">Contact</span>
          <h1 className="contact-hero-title">Ready to Power Your Next Project?</h1>
          <p className="contact-hero-sub">Talk to our solutions engineers about your substation equipment needs.</p>
        </div>
      </section>

      {/* Main content */}
      <section className="contact-body">
        <div className="container contact-grid">

          {/* Left: Quote form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Request a Quote</h3>

            {status === 'success' ? (
              <div className="contact-success">
                <p className="contact-success-msg">
                  Thank you. Our solutions engineers will reply within one business day{form.email ? ` at ${form.email}` : ''}.
                </p>
                <button className="btn btn-primary" onClick={handleReset}>Send another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full name</label>
                    <input id="name" type="text" placeholder="Jane Rodriguez" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Work email</label>
                    <input id="email" type="email" placeholder="you@utility.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input id="company" type="text" placeholder="EPC / utility / developer" value={form.company} onChange={handleChange} required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="equipment">Equipment type</label>
                    <select id="equipment" value={form.equipment} onChange={handleChange} required>
                      <option value="" disabled>Select equipment</option>
                      {EQUIPMENT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-field form-field-full">
                  <label htmlFor="details">Project details</label>
                  <textarea id="details" rows="4" placeholder="Ratings, quantities, site location, target delivery" value={form.details} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-secondary contact-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>

          {/* Right: Info sidebar */}
          <div className="contact-sidebar">
            <div className="contact-info-row">
              <span className="contact-info-label">Email Us</span>
              <span className="contact-info-value">info@forlantisgrid.com</span>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-label">Website</span>
              <span className="contact-info-value">forlantisgrid.com</span>
            </div>
            <div className="contact-why">
              <span className="section-eyebrow">Why Forlantis Power</span>
              <ul className="contact-why-list">
                {WHY_FORLANTIS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
