const info = [
  { label: 'Address', value: '14 Riverside Drive, Westlands, Nairobi' },
  { label: 'Reservations', value: '+254 700 123 456' },
  { label: 'Email', value: 'hello@aurumnairobi.com' },
  { label: 'Lunch', value: 'Tuesday – Sunday, 12:00 – 15:00' },
  { label: 'Dinner', value: 'Tuesday – Sunday, 18:00 – 22:30' },
  { label: 'Closed', value: 'Every Monday' },
]

export default function Contact() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <p style={{ color: 'var(--gold)', letterSpacing: '0.4em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Find Us</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginBottom: '4rem' }}>
          We'd Love to <em style={{ color: 'var(--gold)' }}>Hear</em> from You
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0' }}>
          {info.map((item, i) => (
            <div key={item.label} style={{
              padding: '2rem',
              borderTop: '1px solid rgba(201,169,110,0.2)',
              borderLeft: i % 2 === 1 ? '1px solid rgba(201,169,110,0.2)' : 'none',
            }}>
              <p style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>{item.label}</p>
              <p style={{ color: 'var(--cream)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div style={{
          marginTop: '4rem', height: '300px',
          background: 'var(--brown-mid)',
          border: '1px solid rgba(201,169,110,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: '1rem',
        }}>
          <span style={{ fontSize: '2rem' }}>📍</span>
          <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', letterSpacing: '0.1em' }}>14 Riverside Drive, Westlands, Nairobi</p>
        </div>
      </div>
    </main>
  )
}