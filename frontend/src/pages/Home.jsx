import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        background: `linear-gradient(to bottom, rgba(26,16,8,0.6) 0%, rgba(26,16,8,0.85) 100%),
          url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600') center/cover no-repeat`,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        padding: '2rem',
      }}>
        <p style={{ color: 'var(--gold)', letterSpacing: '0.4em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Est. 2010 · Nairobi
        </p>
        <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--cream)' }}>
          Where Every<br /><em style={{ color: 'var(--gold)' }}>Moment</em> is<br />Savoured
        </h1>
        <p style={{ color: 'var(--text-light)', maxWidth: '480px', lineHeight: 1.8, marginBottom: '3rem', fontSize: '0.95rem' }}>
          An intimate fine dining experience crafted with the finest ingredients, 
          where culinary artistry meets warm, unhurried hospitality.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={() => navigate('/booking')} style={{
            background: 'var(--gold)', color: 'var(--brown-dark)',
            border: 'none', padding: '1rem 2.5rem',
            fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: 'Jost', fontWeight: 400,
          }}>
            Reserve a Table
          </button>
          <button onClick={() => navigate('/menu')} style={{
            background: 'transparent', color: 'var(--cream)',
            border: '1px solid var(--cream)', padding: '1rem 2.5rem',
            fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: 'Jost', fontWeight: 300,
          }}>
            View Menu
          </button>
        </div>
      </section>

      {/* About strip */}
      <section style={{
        background: 'var(--brown-mid)', padding: '6rem 2rem',
        textAlign: 'center',
      }}>
        <p style={{ color: 'var(--gold)', letterSpacing: '0.3em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Our Philosophy</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.3 }}>
          Food is the language of <em>love</em>, spoken with every dish
        </h2>
        <p style={{ color: 'var(--text-light)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.9, fontSize: '0.9rem' }}>
          Our chef sources ingredients from local farms and trusted artisan producers, 
          crafting seasonal menus that tell the story of the land. Every plate is a canvas, 
          every meal a memory.
        </p>
      </section>

      {/* Features */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          {[
            { icon: '🕯️', title: 'Intimate Atmosphere', desc: 'Only 12 tables, each thoughtfully arranged for privacy and warmth.' },
            { icon: '🍷', title: 'Curated Wine List', desc: 'Over 200 labels from boutique vineyards across 4 continents.' },
            { icon: '👨‍🍳', title: 'Award-Winning Chef', desc: 'Chef Kamau brings 20 years of Michelin-level experience to every plate.' },
          ].map(f => (
            <div key={f.title} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 400, color: 'var(--gold)', marginBottom: '1rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.9rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}