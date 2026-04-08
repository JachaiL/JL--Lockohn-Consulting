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

      {/* Circuit decoration top-left - logo style */}
      <svg style={{ position: 'absolute', top: 0, left: 0, opacity: 0.3, pointerEvents: 'none', zIndex: 0 }}
        width="300" height="300" viewBox="0 0 300 300">
        <line x1="40" y1="20" x2="40" y2="180" stroke="#3a7ab5" strokeWidth="3"/>
        <line x1="55" y1="35" x2="55" y2="180" stroke="#3a7ab5" strokeWidth="2.5"/>
        <line x1="70" y1="50" x2="70" y2="180" stroke="#3a7ab5" strokeWidth="2"/>
        <line x1="40" y1="180" x2="160" y2="180" stroke="#3a7ab5" strokeWidth="3"/>
        <circle cx="160" cy="180" r="5" fill="none" stroke="#5aaedc" strokeWidth="2"/>
        <circle cx="40" cy="20" r="5" fill="none" stroke="#5aaedc" strokeWidth="2"/>
        <polyline points="60,60 85,40 110,52 140,28 170,42 195,25"
          fill="none" stroke="#5aaedc" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="60" cy="60" r="4" fill="none" stroke="#5aaedc" strokeWidth="2"/>
        <circle cx="110" cy="52" r="4" fill="none" stroke="#5aaedc" strokeWidth="2"/>
        <circle cx="170" cy="42" r="4" fill="none" stroke="#5aaedc" strokeWidth="2"/>
        <circle cx="195" cy="25" r="4" fill="#5aaedc" opacity="0.7"/>
        <line x1="40" y1="80" x2="100" y2="80" stroke="#5aaedc" strokeWidth="1.5"/>
        <line x1="100" y1="80" x2="100" y2="110" stroke="#5aaedc" strokeWidth="1.5"/>
        <circle cx="100" cy="110" r="3.5" fill="none" stroke="#5aaedc" strokeWidth="1.5"/>
        <line x1="40" y1="120" x2="80" y2="120" stroke="#3a7ab5" strokeWidth="1.5"/>
        <circle cx="80" cy="120" r="3.5" fill="none" stroke="#3a7ab5" strokeWidth="1.5"/>
      </svg>

      {/* Detailed gear + circuit SVG */}
      <svg style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.25, pointerEvents: 'none', zIndex: 0 }}
        width="380" height="380" viewBox="0 0 200 200">
        <g transform="translate(100,100)">
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
            <rect key={i} x="-7" y="-72" width="14" height="18" rx="2"
              fill="#5aaedc"
              transform={`rotate(${angle})`}/>
          ))}
          <circle cx="0" cy="0" r="58" fill="none" stroke="#5aaedc" strokeWidth="3"/>
          <circle cx="0" cy="0" r="38" fill="none" stroke="#3a7ab5" strokeWidth="2"/>
          {[0,60,120,180,240,300].map((angle, i) => (
            <line key={i}
              x1="0" y1="0"
              x2={Math.cos((angle-90)*Math.PI/180)*36}
              y2={Math.sin((angle-90)*Math.PI/180)*36}
              stroke="#3a7ab5" strokeWidth="2"/>
          ))}
          <circle cx="0" cy="0" r="12" fill="none" stroke="#5aaedc" strokeWidth="2.5"/>
          <circle cx="0" cy="0" r="5" fill="#5aaedc" opacity="0.6"/>
        </g>
        <line x1="28" y1="100" x2="5" y2="100" stroke="#5aaedc" strokeWidth="1.5"/>
        <line x1="5" y1="100" x2="5" y2="140" stroke="#5aaedc" strokeWidth="1.5"/>
        <circle cx="5" cy="140" r="3.5" fill="none" stroke="#5aaedc" strokeWidth="1.5"/>
        <line x1="100" y1="172" x2="100" y2="195" stroke="#3a7ab5" strokeWidth="1.5"/>
        <line x1="100" y1="195" x2="60" y2="195" stroke="#3a7ab5" strokeWidth="1.5"/>
        <circle cx="60" cy="195" r="3.5" fill="none" stroke="#3a7ab5" strokeWidth="1.5"/>
        <line x1="172" y1="100" x2="195" y2="100" stroke="#5aaedc" strokeWidth="1.5"/>
        <line x1="195" y1="100" x2="195" y2="60" stroke="#5aaedc" strokeWidth="1.5"/>
        <circle cx="195" cy="60" r="3.5" fill="none" stroke="#5aaedc" strokeWidth="1.5"/>
        <polyline points="20,40 45,25 70,35 95,15 120,28"
          fill="none" stroke="#5aaedc" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="20" cy="40" r="3" fill="#5aaedc"/>
        <circle cx="70" cy="35" r="3" fill="#5aaedc"/>
        <circle cx="120" cy="28" r="3" fill="#5aaedc"/>
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