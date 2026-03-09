import { useState } from 'react'

const menu = {
  Starters: [
    { name: 'Seared Scallops', desc: 'Cauliflower purée, crispy capers, lemon beurre blanc', price: 'KES 2,800' },
    { name: 'Foie Gras Torchon', desc: 'Brioche toast, fig jam, port wine reduction', price: 'KES 3,200' },
    { name: 'Heirloom Tomato Tartare', desc: 'Burrata, basil oil, aged balsamic', price: 'KES 2,100' },
  ],
  Mains: [
    { name: 'Wagyu Beef Tenderloin', desc: '200g A5 wagyu, truffle jus, potato gratin', price: 'KES 8,500' },
    { name: 'Pan-Roasted Duck Breast', desc: 'Cherry reduction, celeriac purée, wilted greens', price: 'KES 5,800' },
    { name: 'Lobster Thermidor', desc: 'Half lobster, gruyère crust, saffron risotto', price: 'KES 7,200' },
    { name: 'Wild Mushroom Risotto', desc: 'Porcini, truffle oil, aged parmesan (v)', price: 'KES 3,900' },
  ],
  Desserts: [
    { name: 'Chocolate Fondant', desc: 'Valrhona 70%, vanilla bean ice cream', price: 'KES 1,800' },
    { name: 'Crème Brûlée', desc: 'Madagascar vanilla, fresh berries', price: 'KES 1,600' },
    { name: 'Cheese Selection', desc: 'Five artisan cheeses, honey, walnut bread', price: 'KES 2,400' },
  ],
}

export default function Menu() {
  const [active, setActive] = useState('Starters')

  return (
    <main style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <p style={{ color: 'var(--gold)', letterSpacing: '0.4em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Seasonal Menu</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginBottom: '3rem' }}>
          A Journey of <em style={{ color: 'var(--gold)' }}>Flavour</em>
        </h1>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0', marginBottom: '3rem', borderBottom: '1px solid var(--brown-light)' }}>
          {Object.keys(menu).map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              background: 'none', border: 'none',
              borderBottom: active === cat ? '2px solid var(--gold)' : '2px solid transparent',
              color: active === cat ? 'var(--gold)' : 'var(--text-light)',
              padding: '0.8rem 2rem', cursor: 'pointer',
              fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              fontFamily: 'Jost', transition: 'all 0.3s',
              marginBottom: '-1px',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {menu[active].map((item, i) => (
            <div key={item.name} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              padding: '1.8rem 0',
              borderBottom: i < menu[active].length - 1 ? '1px solid rgba(201,169,110,0.15)' : 'none',
            }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.4rem', color: 'var(--cream)' }}>{item.name}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
              <span style={{ color: 'var(--gold)', fontFamily: 'Cormorant Garamond', fontSize: '1.1rem', whiteSpace: 'nowrap', marginLeft: '2rem' }}>
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}