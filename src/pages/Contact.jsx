import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

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
          If you're facing throughput issues, leadership gaps, or operational instability,
          let's talk. Most plants don't need a full overhaul — they need clarity, alignment,
          and a system that people can actually run.
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

      <div className="card">
        <div className="card-header">
          <span className="card-title">Availability</span>
          <span className="card-tag">Response time</span>
        </div>
        <div className="card-body">
          I typically respond within 1–2 business days.
          For urgent plant issues, mention it in your message and I'll prioritize accordingly.
        </div>
      </div>
    </section>
  );
}