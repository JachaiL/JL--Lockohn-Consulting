import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-brand">
          <div className="nav-logo-circle">
            <span className="nav-logo-initials">JL</span>
          </div>
          <div className="nav-title-block">
            <span className="nav-title">Lockohn Consulting</span>
            <span className="nav-subtitle">Food • Manufacturing • Operations</span>
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
