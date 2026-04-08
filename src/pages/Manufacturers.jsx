import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Manufacturers() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="section-heading">Food & Beverage Processors & Manufacturers</div>
      <h1 className="section-title">Move progress forward. Without the vendor search slowing you down.</h1>
      <p className="section-body">
        Engineering, Maintenance, and Operations teams in food and beverage processing and 
        manufacturing are charged with moving projects forward with limited resources and teams. 
        Greenfield builds, brownfield upgrades, maintenance management, acquisition-driven 
        initiatives, market shifts — each one requires finding the right solution provider. 
        And that process costs you what you can least afford: time. Repeated discovery calls, 
        sales pitches, and evaluations before you even know if a vendor fits. Lockohn eliminates 
        that cycle — connecting you directly with pre-vetted partners who already match your 
        needs, at no cost to your team.
      </p>

      {/* The Challenge */}
      <div style={{ marginTop: '3rem' }}>
        <div className="section-heading">The Challenge</div>
        <h2 className="section-title">Your time is your most valuable resource.</h2>
        <p className="section-body">
          Finding the right vendors early in your project cycle often means sifting through 
          countless options, lengthy discovery calls, and extended lead times — before you even 
          know if a solution fits your requirements. Meanwhile your team is already stretched thin, 
          and your name is on the line for every vendor decision you make.
        </p>
      </div>

      {/* How Lockohn Helps */}
      <div style={{ marginTop: '3rem' }}>
        <div className="section-heading">How Lockohn Helps</div>
        <h2 className="section-title">We do the work. You get the right partner.</h2>
        <div className="grid-3" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '1.5rem', gap: '1.5rem' }}>
          {[
            { title: 'Earlier Vendor Access', body: 'Get qualified vendors on your radar earlier in your planning phase — before timelines tighten and options narrow.' },
            { title: 'Pre-Vetted Partners', body: 'Every solution provider we connect you with has been vetted. No unknown quantities, no wasted discovery calls.' },
            { title: 'Direct Connections', body: 'Skip the sales queue. We connect you directly to decision makers at supplier companies.' },
            { title: 'Full Project Lifecycle', body: 'We serve as a trusted conduit from project initiation to completion and beyond — not just the introduction.' },
          ].map((item) => (
            <div className="card" key={item.title}>
              <div className="card-header">
                <span className="card-title">{item.title}</span>
              </div>
              <div className="card-body">{item.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Areas of Application */}
      <div style={{ marginTop: '3rem' }}>
        <div className="section-heading">Areas of Application</div>
        <h2 className="section-title">Wherever your project takes you</h2>
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
              <div className="card-body" style={{ color: 'var(--text)', fontWeight: 500 }}>
                {area}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2 className="section-title">Ready to simplify your vendor search?</h2>
        <p className="section-body" style={{ margin: '0.75rem auto 1.5rem' }}>
          No cost. No obligation. Just the right connection at the right time.
        </p>
        <button className="btn-primary" onClick={() => navigate('/contact')}>
          Connect With Lockohn
        </button>
      </div>
    </section>
  );
}