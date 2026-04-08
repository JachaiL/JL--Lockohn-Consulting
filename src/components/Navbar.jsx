import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar" style={{ 
      padding: '1rem 0', 
      background: '#ffffff', 
      borderBottom: '2px solid #1b2b4b' 
    }}>
      <div className="nav-inner" style={{ 
        padding: '0.75rem 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
      }}>

        {/* Left — two column vertical link stacks */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 2rem' }}>
          <NavLink to="/" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')}
            style={{ color: '#1b2b4b', fontSize: '1rem', display: 'block' }}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')}
            style={{ color: '#1b2b4b', fontSize: '1rem', display: 'block' }}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')}
            style={{ color: '#1b2b4b', fontSize: '1rem', display: 'block' }}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')}
            style={{ color: '#1b2b4b', fontSize: '1rem', display: 'block' }}>
            Contact
          </NavLink>
        </div>

        {/* Center — logo */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="/logo_png_2.png"
            alt="Lockohn Consulting"
            style={{
              height: '140px',
              width: 'auto',
              opacity: 1,
            }}
          />
        </div>

        {/* Right — Book a call */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <NavLink to="/contact" className="nav-cta" style={{ fontSize: '0.95rem', padding: '0.6rem 1.2rem' }}>
            Book a Call
          </NavLink>
        </div>

      </div>
    </header>
  );
}