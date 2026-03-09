export default function Footer() {
  return (
    <footer style={{
      background: 'var(--brown-mid)',
      borderTop: '1px solid rgba(201,169,110,0.2)',
      padding: '3rem 2rem',
      textAlign: 'center',
    }}>
      <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.5rem', color: 'var(--gold)', letterSpacing: '0.3em', marginBottom: '1rem' }}>
        AURUM
      </div>
      <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
        © 2026 Aurum Fine Dining · Nairobi, Kenya · All rights reserved
      </p>
    </footer>
  )
}