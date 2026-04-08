import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Vendors() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="section-heading">Solution Providers & Vendors</div>
      <h1 className="section-title">Get in front of the right people. At the right time.</h1>
      <p className="section-body">
        You have great products and services. The challenge is getting in front of the actual 
        decision makers — Corporate, Senior Directors, Engineering, Maintenance, and Operations 
        Managers inside food and beverage manufacturing facilities — before projects are spec'd 
        and budgets are locked. Lockohn bridges that gap.
      </p>

      {/* CTA */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2 className="section-title">Ready to get in front of the right decision makers?</h2>
        <p className="section-body" style={{ margin: '0.75rem auto 1.5rem' }}>
          Let's talk about how Lockohn can connect you with the right FM teams.
        </p>
        <button className="btn-primary" onClick={() => navigate('/contact')}>
          Connect With Lockohn
        </button>
      </div>
    </section>
  );
}