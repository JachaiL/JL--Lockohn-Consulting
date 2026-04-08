import React from 'react';

export default function Section({ heading, title, body }) {
  return (
    <section style={{ margin: '3rem 0', width: '100%', maxWidth: '100%' }}>
      {heading && <div className="section-heading" style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>{heading}</div>}
      {title && <h2 className="section-title" style={{ fontSize: '3rem' }}>{title}</h2>}
      {body && <p className="section-body" style={{ fontSize: '1.6rem', lineHeight: '1.9', maxWidth: '100%' }}>{body}</p>}
    </section>
  );
}