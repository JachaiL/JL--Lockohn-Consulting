import React from 'react';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        heading="Core Services"
        title="Operational clarity for food & manufacturing plants"
        body="Whether you're dealing with throughput instability, leadership gaps, or frontline inconsistency, Lockohn Consulting helps plants build systems that actually work on the floor."
      />

      <div className="grid-3">
        <div className="card">
          <div className="card-header">
            <span className="card-title">Diagnostics</span>
            <span className="card-tag">Assessment</span>
          </div>
          <div className="card-body">
            A structured review of your plant’s systems, leadership, throughput, and communication flow.
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Stabilization</span>
            <span className="card-tag">Execution</span>
          </div>
          <div className="card-body">
            Hands-on support to reduce daily firefighting and create predictable production days.
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Leadership Systems</span>
            <span className="card-tag">Coaching</span>
          </div>
          <div className="card-body">
            Practical playbooks and routines for supervisors, leads, and managers to run the floor effectively.
          </div>
        </div>
      </div>
    </>
  );
}
