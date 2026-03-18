function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0d1b2a',
      color: '#c0c8d0',
      padding: '48px 40px 24px',
      borderTop: '2px solid #4a8fb5',
      marginTop: '60px'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
        
        <div>
          <img src="/logo.png" alt="Lockohn Consulting" style={{ height: '50px', marginBottom: '12px' }} />
          <p style={{ maxWidth: '280px', lineHeight: '1.6' }}>
            Bringing clarity, efficiency, and vetted innovation to F&B and manufacturing operations.
          </p>
        </div>

        <div>
          <h4 style={{ color: '#4a8fb5', marginBottom: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '13px' }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li>Vendor Evaluation & Selection</li>
            <li>Project Management</li>
            <li>Operations Consulting</li>
            <li>Technology Implementation</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#4a8fb5', marginBottom: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '13px' }}>Industries</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li>Food & Beverage</li>
            <li>Manufacturing</li>
          </ul>
        </div>

      </div>

      <div style={{ maxWidth: '1100px', margin: '32px auto 0', borderTop: '1px solid #1e3a52', paddingTop: '16px', fontSize: '13px', color: '#7a8a99' }}>
        © {new Date().getFullYear()} Lockohn Consulting. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
