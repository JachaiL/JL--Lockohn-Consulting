import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Background logo watermark */}
      <div style={{
        position: 'absolute',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '55%',
        opacity: 0.15,
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <img src="/logo_png_2.png" alt="" style={{ width: '100%' }} />
      </div>

      {/* SVG circuit decoration top-left */}
      <svg style={{ position: 'absolute', top: 0, left: 0, opacity: 0.35, pointerEvents: 'none', zIndex: 0 }}
        width="220" height="220" viewBox="0 0 220 220">
        <circle cx="20" cy="20" r="5" fill="none" stroke="#5aaedc" strokeWidth="1.5"/>
        <line x1="20" y1="20" x2="20" y2="80" stroke="#5aaedc" strokeWidth="1.5"/>
        <line x1="20" y1="80" x2="60" y2="80" stroke="#5aaedc" strokeWidth="1.5"/>
        <circle cx="60" cy="80" r="4" fill="none" stroke="#5aaedc" strokeWidth="1.5"/>
        <line x1="60" y1="80" x2="60" y2="140" stroke="#3a7ab5" strokeWidth="1.5"/>
        <line x1="60" y1="140" x2="120" y2="140" stroke="#3a7ab5" strokeWidth="1.5"/>
        <circle cx="120" cy="140" r="4" fill="none" stroke="#3a7ab5" strokeWidth="1.5"/>
        <line x1="20" y1="20" x2="100" y2="20" stroke="#5aaedc" strokeWidth="1.5"/>
        <line x1="100" y1="20" x2="100" y2="50" stroke="#5aaedc" strokeWidth="1.5"/>
        <circle cx="100" cy="50" r="4" fill="none" stroke="#5aaedc" strokeWidth="1.5"/>
        <line x1="100" y1="50" x2="160" y2="50" stroke="#5aaedc" strokeWidth="1.5"/>
        <circle cx="160" cy="50" r="5" fill="#5aaedc" opacity="0.5"/>
      </svg>

      {/* SVG gear bottom-right */}
      <svg style={{ position: 'absolute', bottom: '-30px', right: '30px', opacity: 0.2, pointerEvents: 'none', zIndex: 0 }}
        width="180" height="180" viewBox="0 0 100 100">
        <g transform="translate(50,50)">
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
            <rect key={i} x="-5" y="-48" width="10" height="14" rx="2"
              fill="#5aaedc"
              transform={`rotate(${angle})`}/>
          ))}
          <circle cx="0" cy="0" r="30" fill="none" stroke="#5aaedc" strokeWidth="2"/>
          <circle cx="0" cy="0" r="10" fill="none" stroke="#5aaedc" strokeWidth="2"/>
        </g>
      </svg>

      {/* Main content */}
      <div className="hero-grid" style={{ position: 'relative', zIndex: 1 }}>
        <div>
          <div className="hero-kicker">Food & Manufacturing Operations</div>
          <h1 className="hero-title">
            Turn <span>complex plants</span> into predictable, profitable systems.
          </h1>
          <p className="hero-body">
            Lockohn Consulting partners with food processors and manufacturers to stabilize throughput,
            reduce waste, and build operations your team can actually run—without burning them out.
          </p>
          <div className="hero-pills">
            <span className="hero-pill">Plant diagnostics</span>
            <span className="hero-pill">Throughput & yield</span>
            <span className="hero-pill">Leadership coaching</span>
            <span className="hero-pill">Frontline engagement</span>
          </div>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              Schedule an intro call
            </button>
            <button className="btn-ghost" onClick={() => navigate('/services')}>
              View services
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Typical outcomes</span>
            <span className="card-tag">Client results</span>
          </div>
          <div className="card-body">
            <ul className="card-list">
              <li>Stabilized daily production with fewer surprises and less firefighting.</li>
              <li>Clear playbooks for supervisors and leads—no more guessing at priorities.</li>
              <li>Improved communication between corporate, plant leadership, and the floor.</li>
              <li>Practical metrics that actually drive behavior, not just dashboards.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}