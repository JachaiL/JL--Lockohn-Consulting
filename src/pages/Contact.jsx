import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    const response = await fetch('https://formspree.io/f/xdavqzeq', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (response.ok) {
      setStatus('success');
      e.target.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <section className="contact-grid">
      <div>
        <h1>Contact Lockohn Consulting</h1>
        <p className="section-body">
          Your time is valuable, whether in daily operations, coordinating maintenance strategies, or engineering your team's next project. Resources are tight - reach out to see how Lockohn Consulting can be an owner's resource in getting in front of the right vendor partners at the right time.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label">Name</label>
            <input className="form-input" type="text" name="name" placeholder="Your name" required />
          </div>

          <div className="form-field">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" name="email" placeholder="you@example.com" required />
          </div>

          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" name="message" placeholder="How can we help?" required />
          </div>

          <button className="btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'success' && (
            <p style={{ color: '#5aaedc', marginTop: '1rem' }}>
              Message sent! I'll be in touch within 1–2 business days.
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ff6b6b', marginTop: '1rem' }}>
              Something went wrong. Please try again or email jachai@lockohnconsulting.com directly.
            </p>
          )}
        </form>
      </div>

      <div style={{ position: 'relative' }}>

        <svg style={{ position: 'absolute', bottom: '-40px', right: '-60px', pointerEvents: 'none', zIndex: 0, opacity: 0.6 }}
          width="340" height="340" viewBox="0 0 240 240">
          <g transform="translate(120,120)">
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
              <rect key={i} x="-10" y="-108" width="20" height="28" rx="3"
                fill={i % 3 === 0 ? '#0d2040' : i % 3 === 1 ? '#1b4b7a' : '#3a7ab5'}
                opacity="0.7"
                transform={`rotate(${angle})`}/>
            ))}
            <circle cx="0" cy="0" r="88" fill="none" stroke="#0d2040" strokeWidth="5" opacity="0.8"/>
            <circle cx="0" cy="0" r="88" fill="none" stroke="#5aaedc" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="0" cy="0" r="60" fill="none" stroke="#1b4b7a" strokeWidth="4" opacity="0.7"/>
            <circle cx="0" cy="0" r="60" fill="none" stroke="#5aaedc" strokeWidth="1" opacity="0.4"/>
            {[0,60,120,180,240,300].map((angle, i) => (
              <line key={i} x1="0" y1="0"
                x2={Math.cos((angle-90)*Math.PI/180)*58}
                y2={Math.sin((angle-90)*Math.PI/180)*58}
                stroke={i % 2 === 0 ? '#0d2040' : '#3a7ab5'}
                strokeWidth={i % 2 === 0 ? 4 : 2.5}
                opacity="0.7"/>
            ))}
            <circle cx="0" cy="0" r="18" fill="none" stroke="#0d2040" strokeWidth="5" opacity="0.8"/>
            <circle cx="0" cy="0" r="18" fill="none" stroke="#5aaedc" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="0" cy="0" r="7" fill="#1b4b7a" opacity="0.8"/>
            <circle cx="0" cy="0" r="4" fill="#5aaedc" opacity="0.7"/>
          </g>
        </svg>

        <svg style={{ position: 'absolute', top: '0px', left: '-40px', pointerEvents: 'none', zIndex: 0, opacity: 0.5 }}
          width="200" height="200" viewBox="0 0 380 380">
          <line x1="30" y1="20" x2="30" y2="320" stroke="#0d2040" strokeWidth="8" opacity="0.9"/>
          <line x1="52" y1="40" x2="52" y2="320" stroke="#1b4b7a" strokeWidth="6" opacity="0.8"/>
          <line x1="72" y1="60" x2="72" y2="320" stroke="#3a7ab5" strokeWidth="4" opacity="0.7"/>
          <line x1="30" y1="320" x2="260" y2="320" stroke="#0d2040" strokeWidth="8" opacity="0.9"/>
          <circle cx="260" cy="320" r="9" fill="none" stroke="#5aaedc" strokeWidth="3" opacity="0.9"/>
          <circle cx="260" cy="320" r="3" fill="#5aaedc" opacity="0.7"/>
        </svg>

        <div className="card" style={{ position: 'relative', zIndex: 1, height: '160px' }}>
          <div className="card-header">
            <span className="card-title">Availability</span>
            <span className="card-tag">Response time</span>
          </div>
          <div className="card-body">
            I typically respond within 1–2 business days.
            For urgent plant issues, mention it in your message and I'll prioritize accordingly.
          </div>
        </div>

      </div>
    </section>
  );
}