import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="section-heading">What We Do</div>
      <h1 className="section-title">Two audiences. One trusted connection.</h1>
      <p className="section-body">
        Lockohn Consulting sits at the intersection of two worlds — food and beverage 
        processors and manufacturers who need the right solution providers, and the vendors 
        and solution providers who need to get in front of the right decision makers. 
        We bridge that gap for both sides.
      </p>

      <div className="grid-3" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '2.5rem', gap: '2rem' }}>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Food & Beverage Processors & Manufacturers</span>
            <span className="card-tag">No Cost</span>
          </div>
          <div className="card-body">
            <p>Engineering, Maintenance, and Operations teams are charged with moving projects 
            forward with limited resources. Every vendor search costs you what you can least 
            afford — time.</p>
            <ul className="card-list" style={{ marginTop: '0.75rem' }}>
              <li>Pre-vetted solution providers matched to your needs</li>
              <li>Get ahead of projects earlier in your planning phase</li>
              <li>No repeated discovery calls or sales pitches</li>
              <li>No cost or obligation to your team — ever</li>
            </ul>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <button className="btn-primary" onClick={() => navigate('/services/manufacturers')}>
              Learn How We Help FM Teams
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Solution Providers & Vendors</span>
            <span className="card-tag">Partners</span>
          </div>
          <div className="card-body">
            <p>You have great products and services. The challenge is getting in front of 
            the actual decision makers — Corporate, Senior Directors, Engineering, Maintenance, 
            and Operations Managers — before projects are spec'd and budgets are locked.</p>
            <ul className="card-list" style={{ marginTop: '0.75rem' }}>
              <li>Direct access to qualified F&B decision makers</li>
              <li>Get ahead of projects before timelines are set</li>
              <li>Build long-term partnerships, not one-time transactions</li>
              <li>Be positioned as a trusted partner, not just a vendor</li>
            </ul>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <button className="btn-primary" onClick={() => navigate('/services/vendors')}>
              Learn How We Help SVs
            </button>
          </div>
        </div>