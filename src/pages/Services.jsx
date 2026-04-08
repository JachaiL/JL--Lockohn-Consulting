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
        <div className="card" style={{ padding: '2.5rem' }}>
          <div className="card-header">
            <span className="card-title" style={{ fontSize: '1.4rem', fontWeight: '700' }}>Food and Beverage Processors and Manufacturers</span>
            <span className="card-tag" style={{ fontSize: '1rem', padding: '4px 12px' }}>Manufacturers</span>
          </div>
          <div className="card-body" style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>Every vendor search costs you what you can least afford: time.</p>
            <div style={{ marginTop: '1.5rem' }}>
              <button className="btn-primary" onClick={() => navigate('/services/manufacturers')}>
                Learn How We Help FM Teams
              </button>
            </div>
          </div>
        </div>
        <div className="card" style={{ padding: '2.5rem' }}>
          <div className="card-header">
            <span className="card-title" style={{ fontSize: '1.4rem', fontWeight: '700' }}>Solution Providers and Vendors</span>
            <span className="card-tag" style={{ fontSize: '1rem', padding: '4px 12px' }}>Partners</span>
          </div>
          <div className="card-body" style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>Getting in front of the right decision makers takes too long.</p>
            <div style={{ marginTop: '1.5rem' }}>
              <button className="btn-primary" onClick={() => navigate('/services/vendors')}>
                Learn How We Help SVs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}