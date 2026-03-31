import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        <strong>Lockohn Consulting</strong> — Operational clarity for food & manufacturing leaders.
      </span>
      <span>© {new Date().getFullYear()} Lockohn Consulting. All rights reserved.</span>
    </footer>
  );
}
