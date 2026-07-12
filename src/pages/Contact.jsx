import { useState } from 'react'
import './Contact.css'

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
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

          {/* Left — Quote form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Request a Quote</h3>

            {submitted ? (
              <div className="contact-success">
                <p className="contact-success-msg">
                  Thank you — our solutions engineers will reply within one business day{email ? ` at ${email}` : ''}.
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full name</label>
                    <input id="name" type="text" placeholder="Jane Rodriguez" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Work email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@utility.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input id="company" type="text" placeholder="EPC / utility / developer" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="equipment">Equipment type</label>
                    <select id="equipment" required defaultValue="">
                      <option value="" disabled>Select equipment</option>
                      {EQUIPMENT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-field form-field-full">
                  <label htmlFor="details">Project details</label>
                  <textarea
                    id="details"
                    rows="4"
                    placeholder="Ratings, quantities, site location, target delivery"
                    required
                  />
                </div>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Include project services (engineering, testing, commissioning)
                </label>
                <button type="submit" className="btn btn-secondary contact-submit">Submit Request</button>
              </form>
            )}
          </div>

          {/* Right — Info sidebar */}
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
