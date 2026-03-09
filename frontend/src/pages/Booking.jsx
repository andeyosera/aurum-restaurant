import { useState } from 'react'
const [loading, setLoading] = useState(false)

const inputStyle = {
  width: '100%', background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(201,169,110,0.3)',
  color: 'var(--cream)', padding: '0.9rem 1.2rem',
  fontSize: '0.9rem', fontFamily: 'Jost', fontWeight: 300,
  outline: 'none', transition: 'border 0.3s',
}

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '2', requests: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
  e.preventDefault()
  setLoading(true)

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (res.ok) {
      setSubmitted(true)
    } else {
      alert(data.message || 'Something went wrong.')
    }
  } catch (err) {
    alert('Could not connect to server. Please try again.')
  } finally {
    setLoading(false)
  }
}

  return (
    <main style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 2rem' }}>
        <p style={{ color: 'var(--gold)', letterSpacing: '0.4em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Reservations</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginBottom: '0.8rem' }}>
          Reserve Your <em style={{ color: 'var(--gold)' }}>Evening</em>
        </h1>
        <p style={{ color: 'var(--text-light)', marginBottom: '3rem', lineHeight: 1.8, fontSize: '0.9rem' }}>
          We recommend booking at least 3 days in advance. For parties of 6 or more, please call us directly.
        </p>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px solid rgba(201,169,110,0.3)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🕯️</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--gold)', marginBottom: '1rem' }}>Reservation Received</h2>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8 }}>
              Thank you, {form.name}. We'll confirm your reservation at {form.email} within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inputStyle} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Date</label>
                <input name="date" type="date" value={form.date} onChange={handleChange} required style={{ ...inputStyle, colorScheme: 'dark' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Time</label>
                <select name="time" value={form.time} onChange={handleChange} required style={inputStyle}>
                  <option value="">Select time</option>
                  {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Guests</label>
                <select name="guests" value={form.guests} onChange={handleChange} style={inputStyle}>
                  {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+254 700 000000" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Special Requests</label>
              <textarea name="requests" value={form.requests} onChange={handleChange} placeholder="Dietary requirements, allergies, special occasions..." rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            <button type="submit" disabled={loading} style={{
  background: 'var(--gold)', color: 'var(--brown-dark)',
  border: 'none', padding: '1.1rem',
  fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase',
  cursor: loading ? 'not-allowed' : 'pointer',
  opacity: loading ? 0.7 : 1,
  fontFamily: 'Jost', fontWeight: 400,
  marginTop: '0.5rem', transition: 'opacity 0.3s',
}}>
  {loading ? 'Sending...' : 'Confirm Reservation'}
          </button>
          </form>
        )}
      </div>
    </main>
  )
}