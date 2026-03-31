import React from 'react';

export default function Contact() {
  return (
    <section className="contact-grid">
      <div>
        <h1>Contact Lockohn Consulting</h1>
        <p className="section-body">
          If you're facing throughput issues, leadership gaps, or operational instability,
          let’s talk. Most plants don’t need a full overhaul — they need clarity, alignment,
          and a system that people can actually run.
        </p>

        <form className="contact-form">
          <div className="form-field">
            <label className="form-label">Name</label>
            <input className="form-input" type="text" placeholder="Your name" />
          </div>

          <div className="form-field">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" placeholder="you@example.com" />
          </div>

          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="How can we help?" />
          </div>

          <button className="btn-primary" type="submit">
            Send message
          </button>
        </form>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Availability</span>
          <span className="card-tag">Response time</span>
        </div>
        <div className="card-body">
          I typically respond within 1–2 business days.  
          For urgent plant issues, mention it in your message and I’ll prioritize accordingly.
        </div>
      </div>
    </section>
  );
}
