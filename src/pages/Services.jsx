import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="section-heading">What We Do</div>
      <h1 className="section-title">Two audiences. One trusted connection.</h1>
      <p className="section-body">We bridge the gap for both sides.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2.5rem' }}>
        <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="card-body">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.25rem' }}>Food and Beverage Processors and Manufacturers</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.9' }}>Every vendor search costs you what you can least afford: time. We work with you early in the process to identify and engage the right solution providers — so your team can focus on operations, not vendor research.</p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <button className="btn-primary" onClick={() => navigate('/services/manufacturers')}>
              Learn How We Help FM Teams
            </button>
          </div>
        </div>
        <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="card-body">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.25rem' }}>Solution Providers and Vendors</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.9' }}>Getting in front of the right decision makers takes too long. We connect you directly with pre-qualified Engineering, Operations, and Maintenance leads inside F&B facilities — before projects are spec'd and budgets are locked.</p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <button className="btn-primary" onClick={() => navigate('/services/vendors')}>
              Learn How We Help SVs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}