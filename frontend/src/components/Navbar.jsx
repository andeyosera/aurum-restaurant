import { NavLink } from 'react-router-dom'

const links = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/booking', label: 'Reservations' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.5rem 4rem',
      background: 'rgba(26,16,8,0.95)',
    }}>
      <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.8rem', color: 'var(--gold)', letterSpacing: '0.2em' }}>
        AURUM
      </div>
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {links.map(({ path, label }) => (
          <NavLink key={path} to={path} style={({ isActive }) => ({
            color: isActive ? 'var(--gold)' : 'var(--cream)',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: 'Jost',
            fontWeight: 300,
          })}>
            {label}
          </NavLink>
        ))}
      </div>
      <NavLink to="/booking" style={{
        border: '1px solid var(--gold)',
        color: 'var(--gold)',
        padding: '0.5rem 1.5rem',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        textDecoration: 'none',
      }}>
        Reserve
      </NavLink>
    </nav>
  )
}