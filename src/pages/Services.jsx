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
            <span className="card-title">Food &amp; Beverage Processors &amp; Manufacturers</span>
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