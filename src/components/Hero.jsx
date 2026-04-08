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

      {/* Circuit decoration top-left */}
<svg style={{ position: 'absolute', top: 0, left: '-80px', pointerEvents: 'none', zIndex: 0 }}
       width="380" height="380" viewBox="0 0 380 380">

        {/* Dark navy thick bracket lines */}
        <line x1="30" y1="20" x2="30" y2="320" stroke="#0d2040" strokeWidth="8" opacity="0.9"/>
        <line x1="52" y1="40" x2="52" y2="320" stroke="#1b4b7a" strokeWidth="6" opacity="0.8"/>
        <line x1="72" y1="60" x2="72" y2="320" stroke="#3a7ab5" strokeWidth="4" opacity="0.7"/>
        <line x1="90" y1="80" x2="90" y2="320" stroke="#5aaedc" strokeWidth="3" opacity="0.5"/>

        {/* Bottom horizontal sweep */}
        <line x1="30" y1="320" x2="260" y2="320" stroke="#0d2040" strokeWidth="8" opacity="0.9"/>
        <line x1="52" y1="320" x2="260" y2="320" stroke="#1b4b7a" strokeWidth="6" opacity="0.8"/>
        <line x1="72" y1="320" x2="260" y2="320" stroke="#3a7ab5" strokeWidth="4" opacity="0.7"/>

        {/* End nodes */}
        <circle cx="260" cy="320" r="9" fill="none" stroke="#5aaedc" strokeWidth="3" opacity="0.9"/>
        <circle cx="260" cy="320" r="3" fill="#5aaedc" opacity="0.7"/>
        <circle cx="30" cy="20" r="9" fill="none" stroke="#0d2040" strokeWidth="3" opacity="0.9"/>

        {/* Graph/trend line */}
        <polyline points="60,100 100,65 145,82 195,42 245,60 295,28 345,46"
          fill="none" stroke="#0d2040" strokeWidth="5" strokeLinejoin="round" opacity="0.8"/>
        <polyline points="60,100 100,65 145,82 195,42 245,60 295,28 345,46"
          fill="none" stroke="#5aaedc" strokeWidth="2.5" strokeLinejoin="round" opacity="0.9"/>
        <circle cx="60" cy="100" r="7" fill="none" stroke="#1b4b7a" strokeWidth="3" opacity="0.9"/>
        <circle cx="145" cy="82" r="7" fill="none" stroke="#3a7ab5" strokeWidth="3" opacity="0.9"/>
        <circle cx="245" cy="60" r="7" fill="none" stroke="#5aaedc" strokeWidth="3" opacity="0.9"/>
        <circle cx="345" cy="46" r="9" fill="#5aaedc" opacity="0.8"/>

        {/* Horizontal circuit traces */}
        <line x1="30" y1="150" x2="170" y2="150" stroke="#0d2040" strokeWidth="3" opacity="0.7"/>
        <line x1="170" y1="150" x2="170" y2="200" stroke="#1b4b7a" strokeWidth="3" opacity="0.7"/>
        <circle cx="170" cy="200" r="7" fill="none" stroke="#5aaedc" strokeWidth="2.5" opacity="0.8"/>
        <circle cx="170" cy="200" r="3" fill="#5aaedc" opacity="0.5"/>

        <line x1="30" y1="220" x2="120" y2="220" stroke="#0d2040" strokeWidth="2.5" opacity="0.6"/>
        <line x1="120" y1="220" x2="120" y2="260" stroke="#3a7ab5" strokeWidth="2.5" opacity="0.6"/>
        <circle cx="120" cy="260" r="6" fill="none" stroke="#3a7ab5" strokeWidth="2" opacity="0.7"/>
      </svg>

      {/* Large gear bottom-right */}
<svg style={{ position: 'absolute', bottom: '-100px', right: '-80px', pointerEvents: 'none', zIndex: 0 }}
        width="460" height="460" viewBox="0 0 240 240">

        <g transform="translate(120,120)">
          {/* Gear teeth - dark navy base */}
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
            <rect key={i} x="-10" y="-108" width="20" height="28" rx="3"
              fill={i % 3 === 0 ? '#0d2040' : i % 3 === 1 ? '#1b4b7a' : '#3a7ab5'}
              opacity="0.7"
              transform={`rotate(${angle})`}/>
          ))}
          {/* Outer ring - dark */}
          <circle cx="0" cy="0" r="88" fill="none" stroke="#0d2040" strokeWidth="5" opacity="0.8"/>
          <circle cx="0" cy="0" r="88" fill="none" stroke="#5aaedc" strokeWidth="1.5" opacity="0.5"/>
          {/* Inner ring */}
          <circle cx="0" cy="0" r="60" fill="none" stroke="#1b4b7a" strokeWidth="4" opacity="0.7"/>
          <circle cx="0" cy="0" r="60" fill="none" stroke="#5aaedc" strokeWidth="1" opacity="0.4"/>
          {/* Spokes - alternating dark and light */}
          {[0,60,120,180,240,300].map((angle, i) => (
            <line key={i}
              x1="0" y1="0"
              x2={Math.cos((angle-90)*Math.PI/180)*58}
              y2={Math.sin((angle-90)*Math.PI/180)*58}
              stroke={i % 2 === 0 ? '#0d2040' : '#3a7ab5'}
              strokeWidth={i % 2 === 0 ? 4 : 2.5}
              opacity="0.7"/>
          ))}
          {/* Center hub */}
          <circle cx="0" cy="0" r="18" fill="none" stroke="#0d2040" strokeWidth="5" opacity="0.8"/>
          <circle cx="0" cy="0" r="18" fill="none" stroke="#5aaedc" strokeWidth="1.5" opacity="0.6"/>
          <circle cx="0" cy="0" r="7" fill="#1b4b7a" opacity="0.8"/>
          <circle cx="0" cy="0" r="4" fill="#5aaedc" opacity="0.7"/>
        </g>

        {/* Circuit traces from gear */}
        <line x1="33" y1="120" x2="6" y2="120" stroke="#0d2040" strokeWidth="3" opacity="0.7"/>
        <line x1="6" y1="120" x2="6" y2="175" stroke="#1b4b7a" strokeWidth="3" opacity="0.7"/>
        <circle cx="6" cy="175" r="6" fill="none" stroke="#5aaedc" strokeWidth="2.5" opacity="0.8"/>

        <line x1="120" y1="207" x2="120" y2="234" stroke="#0d2040" strokeWidth="3" opacity="0.7"/>
        <line x1="120" y1="234" x2="75" y2="234" stroke="#3a7ab5" strokeWidth="3" opacity="0.7"/>
        <circle cx="75" cy="234" r="6" fill="none" stroke="#5aaedc" strokeWidth="2.5" opacity="0.8"/>

        <line x1="207" y1="120" x2="234" y2="120" stroke="#0d2040" strokeWidth="3" opacity="0.7"/>
        <line x1="234" y1="120" x2="234" y2="75" stroke="#1b4b7a" strokeWidth="3" opacity="0.7"/>
        <circle cx="234" cy="75" r="6" fill="none" stroke="#5aaedc" strokeWidth="2.5" opacity="0.8"/>
      </svg>

      {/* Small secondary gear top-right */}
      <svg style={{ position: 'absolute', top: '10px', right: '60px', pointerEvents: 'none', zIndex: 0, opacity: 0.35 }}
        width="140" height="140" viewBox="0 0 100 100">
        <g transform="translate(50,50)">
          {[0,45,90,135,180,225,270,315].map((angle, i) => (
            <rect key={i} x="-5" y="-42" width="10" height="12" rx="2"
              fill={i % 2 === 0 ? '#0d2040' : '#3a7ab5'}
              transform={`rotate(${angle})`}/>
          ))}
          <circle cx="0" cy="0" r="32" fill="none" stroke="#1b4b7a" strokeWidth="3"/>
          <circle cx="0" cy="0" r="20" fill="none" stroke="#3a7ab5" strokeWidth="2"/>
          <circle cx="0" cy="0" r="8" fill="none" stroke="#5aaedc" strokeWidth="2"/>
          <circle cx="0" cy="0" r="3" fill="#5aaedc"/>
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