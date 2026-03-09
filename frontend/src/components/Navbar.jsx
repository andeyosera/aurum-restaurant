import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = ['/', '/menu', '/booking', '/contact']
const labels = ['Home', 'Menu', 'Reservations', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.5rem 4rem',
      background: 'linear-gradient(to bottom, rgba(26,16,8,0.95), transparent)',
    }}>
      <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.8rem', color: 'var(--gold)', letterSpacing: '0.2em' }}>
        AURUM
      </div>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2.5rem' }} className="desktop-nav">
        {links.map((path, i) => (
          <NavLink key={path} to={path}
            style={({ isActive }) => ({
              color: isActive ? 'var(--gold)' : 'var(--cream)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'color 0.3s',
              fontFamily: 'Jost',
              fontWeight: 300,
            })}>
            {labels[i]}
          </NavLink>
        ))}
      </div>

      {/* Reserve button */}
      <NavLink to="/booking" style={{
        border: '1px solid var(--gold)',
        color: 'var(--gold)',
        padding: '0.5rem 1.5rem',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        transition: 'all 0.3s',
      }}
        onMouseEnter={e => { e.target.style.background = 'var(--gold)'; e.target.style.color = 'var(--brown-dark)' }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--gold)' }}
      >
        Reserve
      </NavLink>
    </nav>
  )
}