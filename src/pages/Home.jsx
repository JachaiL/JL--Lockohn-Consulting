import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        backgroundColor: '#ffffff',
        textAlign: 'center',
        padding: '80px 40px 60px',
        borderBottom: '3px solid #4a8fb5',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
      }}>
        <img src="/logo.png" alt="Lockohn Consulting" style={{ height: '160px', marginBottom: '32px' }} />
        <h1 style={{ color: '#0d1b2a', fontSize: '2.6rem', textTransform: 'uppercase', letterSpacing: '3px', fontFamily: 'sans-serif', marginBottom: '16px' }}>
          Operational Clarity. Vetted Solutions.
        </h1>
        <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '680px', margin: '0 auto 32px' }}>
          Helping F&B and manufacturing teams cut through the noise and implement the right solutions with confidence.
        </p>
        <Link to="/contact" style={{
          display: 'inline-block',
          backgroundColor: '#4a8fb5',
          color: '#ffffff',
          padding: '14px 40px',
          textDecoration: 'none',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: '600',
          fontSize: '15px',
        }}>
          Let's Talk
        </Link>
      </div>

      {/* About */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h2 style={{ color: '#0d1b2a', textTransform: 'uppercase', letterSpacing: '2px', borderLeft: '4px solid #4a8fb5', paddingLeft: '16px', marginBottom: '24px', fontFamily: 'sans-serif' }}>
          Who We Are
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#444', marginBottom: '16px' }}>
          Most teams are tasked with doing more with less. They don't have the resources, time, or budget flexibility to sift through vendors or evaluate every solution. Every project requires putting their name on the line — and choosing the wrong partner can create more problems than it solves.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#444' }}>
          My role is to remove that burden. I learn the project, understand the constraints, and work alongside your team to navigate engagements with pre-vetted solution providers — partners who are committed before, during, and after the project.
        </p>
      </div>

      {/* Services */}
      <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid #d0d8e0', borderBottom: '1px solid #d0d8e0', padding: '60px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#0d1b2a', textTransform: 'uppercase', letterSpacing: '2px', borderLeft: '4px solid #4a8fb5', paddingLeft: '16px', marginBottom: '40px', fontFamily: 'sans-serif' }}>
            What We Do
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {[
              'Vendor Evaluation & Selection',
              'Project Management',
              'Operations Consulting',
              'Technology Implementation'
            ].map(service => (
              <div key={service} style={{
                borderLeft: '3px solid #4a8fb5',
                padding: '20px',
                backgroundColor: '#f9fafb',
                color: '#0d1b2a',
                fontWeight: '600',
                fontSize: '15px',
                letterSpacing: '0.5px'
              }}>
                <span style={{ color: '#4a8fb5', marginRight: '8px' }}>▸</span>{service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h2 style={{ color: '#0d1b2a', textTransform: 'uppercase', letterSpacing: '2px', borderLeft: '4px solid #4a8fb5', paddingLeft: '16px', marginBottom: '24px', fontFamily: 'sans-serif' }}>
          Industries We Serve
        </h2>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {['Food & Beverage', 'Manufacturing'].map(industry => (
            <div key={industry} style={{
              border: '2px solid #4a8fb5',
              padding: '16px 32px',
              color: '#0d1b2a',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '14px'
            }}>
              {industry}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div style={{ backgroundColor: '#0d1b2a', padding: '60px 40px', textAlign: 'center' }}>
        <h2 style={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '16px', fontFamily: 'sans-serif' }}>
          Get In Touch
        </h2>
        <p style={{ color: '#9aa8b5', marginBottom: '32px', fontSize: '1.1rem' }}>
          Ready to bring clarity to your next project?
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <a href="mailto:info@lockohnconsulting.com" style={{ color: '#4a8fb5', fontSize: '1.1rem', textDecoration: 'none', fontWeight: '600' }}>
            info@lockohnconsulting.com
          </a>
          <a href="tel:6512454959" style={{ color: '#4a8fb5', fontSize: '1.1rem', textDecoration: 'none', fontWeight: '600' }}>
            651-245-4959
          </a>
        </div>
      </div>

    </div>
  )
}

export default Home
