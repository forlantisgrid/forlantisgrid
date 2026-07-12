export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    alert('Thank you for your inquiry. We will be in touch shortly.')
  }

  return (
    <div>
      <section style={{ padding: '3rem 0', background: 'var(--navy-50)' }}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Talk to our solutions engineers.</p>
        </div>
      </section>
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
              <input 
                id="name"
                type="text" 
                required 
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '6px' }} 
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
              <input 
                id="email"
                type="email" 
                required 
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '6px' }} 
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
              <textarea 
                id="message"
                rows="5" 
                required 
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '6px', fontFamily: 'inherit' }} 
              />
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </section>
    </div>
  )
}
