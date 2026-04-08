import React from 'react';

export default function Section({ heading, title, body }) {
  return (
    <section style={{ margin: '3rem 0' }}>
      {heading && <div className="section-heading" style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>{heading}</div>}
      {title && <h2 className="section-title" style={{ fontSize: '2.4rem' }}>{title}</h2>}
      {body && <p className="section-body" style={{ fontSize: '1.2rem', lineHeight: '1.9' }}>{body}</p>}
    </section>
  );
}