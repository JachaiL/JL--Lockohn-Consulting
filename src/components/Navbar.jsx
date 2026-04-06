import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar" style={{ padding: '0.5rem 0' }}>
      <div className="nav-inner" style={{ padding: '0.75rem 1.5rem' }}>

        {/* Brand with logo image */}
        <div className="nav-brand" style={{ gap: '1rem' }}>
          <img
            src="/logo_png_2.png"
            alt="Lockohn Consulting"
            style={{
              height: '72px',
              width: 'auto',
              filter: 'brightness(0) invert(1)',
              opacity: 0.92,
            }}
          />
          <div className="nav-title-block">
            <span className="nav-title" style={{ fontSize: '1.2rem', letterSpacing: '0.14em' }}>
              Lockohn Consulting
            </span>
            <span className="nav-subtitle" style={{ fontSize: '0.75rem' }}>
              Food • Manufacturing • Operations
            </span>
          </div>
        </div>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')}>
            Services
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')}>
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