import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#0d1b2a',
      padding: '12px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #4a8fb5'
    }}>
      <Link to="/">
        <img src="/logo.png" alt="Lockohn Consulting" style={{ height: '60px' }} />
      </Link>
      <div style={{ display: 'flex', gap: '32px' }}>
        {[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Services', path: '/services' },
          { label: 'Food Processing', path: '/food-processing' },
          { label: 'Manufacturing', path: '/manufacturing' },
          { label: 'Contact', path: '/contact' },
        ].map(link => (
          <Link key={link.path} to={link.path} style={{
            color: '#c0c8d0',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            letterSpacing: '0.5px'
          }}
          onMouseOver={e => e.target.style.color = '#4a8fb5'}
          onMouseOut={e => e.target.style.color = '#c0c8d0'}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
