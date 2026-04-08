import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar" style={{ 
      padding: '1rem 0', 
      background: '#ffffff', 
      borderBottom: '2px solid #1b2b4b' 
    }}>
      <div className="nav-inner" style={{ padding: '0.75rem 1.5rem' }}>

        <div className="nav-brand" style={{ gap: '1rem' }}>
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

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')} style={{ color: '#1b2b4b' }}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')} style={{ color: '#1b2b4b' }}>
            Services
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')} style={{ color: '#1b2b4b' }}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')} style={{ color: '#1b2b4b' }}>
            Contact
          </NavLink>
          <NavLink to="/contact" className="nav-cta">
            Book a call
          </NavLink>
        </nav>

      </div>
    </header>
  );
}