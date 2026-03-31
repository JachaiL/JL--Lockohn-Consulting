import React from 'react';

export default function Section({ heading, title, body }) {
  return (
    <section style={{ margin: '3rem 0' }}>
      {heading && <div className="section-heading">{heading}</div>}
      {title && <h2 className="section-title">{title}</h2>}
      {body && <p className="section-body">{body}</p>}
    </section>
  );
}
