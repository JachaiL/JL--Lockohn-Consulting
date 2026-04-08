import React from 'react';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />

      {/* What Lockohn Consulting Does */}
      <Section
        heading="Connecting F&B Manufacturers with Vetted Solution Providers"
        title="The right partner. At the right time."
        body="Lockohn Consulting works on your behalf to navigate the vendor selection process — connecting Engineering, Operations, and Maintenance teams at food and beverage manufacturers with pre-vetted solution providers for capital, operational, and maintenance initiatives. No sales pitch. Just quicker, better results when you need them."
      />

      {/* Two audience cards */}
      <div className="grid-3" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '2rem' }}>

        <div className="card" style={{ padding: '2rem' }}>
          <div className="card-header">
            <span className="card-title" style={{ fontSize: '1.3rem', fontWeight: '700' }}>Food & Beverage Processors & Manufacturers</span>
            <span className="card-tag">Manufacturers</span>
          </div>
          <div className="card-body" style={{ fontSize: '1.1rem', lineHeight: '1.9', marginTop: '1rem' }}>
            <p>You're already doing more with less. Finding the right vendor early in your project cycle means sifting through countless options and extended lead times — before you even know if a solution fits.</p>
            <p style={{ marginTop: '0.75rem' }}>Lockohn Consulting takes that burden off your plate.</p>
            <ul className="card-list" style={{ marginTop: '0.75rem', fontSize: '1.05rem' }}>
              <li>Get qualified vendors on your radar earlier in your planning phase</li>
              <li>Accelerate technical discussions with pre-vetted providers</li>
              <li>Shorten project timelines by connecting directly to supplier decision makers</li>
              <li>A trusted conduit from project initiation to completion and beyond</li>
            </ul>
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <button className="btn-primary" onClick={() => navigate('/services/manufacturers')}>
              Learn More
            </button>
          </div>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          <div className="card-header">
            <span className="card-title" style={{ fontSize: '1.3rem', fontWeight: '700' }}>Solution Providers & Vendors</span>
            <span className="card-tag">Partners</span>
          </div>
          <div className="card-body" style={{ fontSize: '1.1rem', lineHeight: '1.9', marginTop: '1rem' }}>
            <p>You've built great products and services. The challenge is getting in front of the right decision makers inside food and beverage manufacturing facilities — before projects are spec'd and budgets are locked.</p>
            <p style={{ marginTop: '0.75rem' }}>Lockohn Consulting bridges that gap.</p>
            <ul className="card-list" style={{ marginTop: '0.75rem', fontSize: '1.05rem' }}>
              <li>Access to pre-qualified decision makers inside F&B facilities</li>
              <li>Get ahead of projects before timelines are set</li>
              <li>Build long-term relationships, not one-time transactions</li>
              <li>Be positioned as a partner, not just another vendor</li>
            </ul>
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <button className="btn-primary" onClick={() => navigate('/services/vendors')}>
              Learn More
            </button>
          </div>
        </div>

      </div>

      {/* Areas of Application */}
      <Section
        heading="Areas of Application"
        title="Wherever your project takes you"
        body="From maintenance needs to full greenfield builds, Lockohn Consulting connects you with the right solution provider across every phase of your project."
      />

      <div className="grid-3" style={{ marginTop: '1.5rem' }}>
        {[
          'Maintenance Needs',
          'Design-Build & GC Resources',
          'Project Design & Management',
          'Brownfield, Renovation & Greenfield',
          'Mechanical, Electrical & Plumbing',
          'Controls Resources',
          'Refrigeration & Freezer Resources',
          'Wastewater Treatment & Sanitation',
          'Facilities Assessment Resources',
        ].map((area) => (
          <div className="card" key={area} style={{ padding: '1rem 1.25rem' }}>
            <div className="card-body" style={{ color: 'var(--text)', fontWeight: 500, fontSize: '1.1rem' }}>
              {area}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}