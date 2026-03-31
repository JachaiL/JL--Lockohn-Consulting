import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-grid">
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
    </section>
  );
}
