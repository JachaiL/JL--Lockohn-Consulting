import React from 'react';

export default function Services() {
  return (
    <section>
      <h1 className="section-title">Services</h1>
      <p className="section-body">
        Lockohn Consulting helps food processors and manufacturers stabilize operations,
        improve throughput, and build leadership systems that actually work on the floor.
      </p>

      <div className="grid-3" style={{ marginTop: '2rem' }}>
        <div className="card">
          <div className="card-header">
            <span className="card-title">Operational Diagnostics</span>
            <span className="card-tag">Assessment</span>
          </div>
          <div className="card-body">
            A structured review of your plant’s systems, leadership, throughput, and communication flow.
            Identifies bottlenecks, misalignments, and hidden constraints.
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Stabilization & Throughput</span>
            <span className="card-tag">Execution</span>
          </div>
          <div className="card-body">
            Hands-on support to reduce daily firefighting, stabilize production, and create predictable
            operating days your team can actually run.
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Leadership Systems</span>
            <span className="card-tag">Coaching</span>
          </div>
          <div className="card-body">
            Practical playbooks and routines for supervisors, leads, and managers to run the floor
            effectively — with clarity, consistency, and confidence.
          </div>
        </div>
      </div>

      <section className="section" style={{ marginTop: '3rem' }}>
        <h2>For Solution Providers</h2>
        <p>
          If you sell equipment, software, or services into food or manufacturing plants, I help you
          understand the operational realities your buyers face — so your solutions land cleanly and
          adoption sticks.
        </p>
        <p>
          This includes on‑floor workflow mapping, operator interviews, leadership alignment, and
          identifying the real constraints that determine whether your solution succeeds or stalls.
        </p>
        <p>
          You get clearer messaging, stronger positioning, and a more accurate understanding of how
          your product fits into the daily rhythm of a plant.
        </p>
      </section>
    </section>
  );
}
