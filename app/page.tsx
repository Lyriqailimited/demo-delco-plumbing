import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delco Plumbing - AI Receptionist Demo',
  description: 'Nottingham's trusted plumbers - emergency repairs, leak detection & drain unblocking',
}

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0F2A45', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #495DA2 0%, #BFA072 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>Delco Plumbing</h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Nottingham's trusted plumbers - emergency repairs, leak detection & drain unblocking</p>
        <p style={{ marginBottom: '16px', opacity: 0.8 }}>📞 +44 7729 293333</p>
        <a href="#widget" style={{ display: 'inline-block', background: 'white', color: '#495DA2', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' }}>
          Try AI Receptionist
        </a>
      </section>

      {/* Widget */}
      <section id="widget" style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '32px' }}>Talk to Our AI Receptionist</h2>
        <iframe src="/widget.html" title="AI Voice Receptionist" width="100%" height="600" style={{ border: 'none', borderRadius: '12px' }} />
      </section>

      {/* Services */}
      <section style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 600; color: white; margin-bottom: 8px;">General Plumbing Repairs</h3>
            <p style="color: #94a3b8; font-size: 0.9rem;">Professional general plumbing repairs service available 24/7 in Nottingham.</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 600; color: white; margin-bottom: 8px;">Emergency Callouts</h3>
            <p style="color: #94a3b8; font-size: 0.9rem;">Professional emergency callouts service available 24/7 in Nottingham.</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 600; color: white; margin-bottom: 8px;">Leak Detection</h3>
            <p style="color: #94a3b8; font-size: 0.9rem;">Professional leak detection service available 24/7 in Nottingham.</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 600; color: white; margin-bottom: 8px;">Drain Unblocking</h3>
            <p style="color: #94a3b8; font-size: 0.9rem;">Professional drain unblocking service available 24/7 in Nottingham.</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 600; color: white; margin-bottom: 8px;">Bathroom Plumbing</h3>
            <p style="color: #94a3b8; font-size: 0.9rem;">Professional bathroom plumbing service available 24/7 in Nottingham.</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.1rem; font-weight: 600; color: white; margin-bottom: 8px;">Kitchen Plumbing</h3>
            <p style="color: #94a3b8; font-size: 0.9rem;">Professional kitchen plumbing service available 24/7 in Nottingham.</p>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section style={{ background: 'rgba(255,255,255,0.03)', padding: '60px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Why an AI Receptionist?</h2>
          <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Never miss a customer again</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '28px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🕐</div>
              <h3 style={{ fontWeight: 700, marginBottom: '8px' }}>24/7 Availability</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Always available, even on weekends and bank holidays</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '28px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>⚡</div>
              <h3 style={{ fontWeight: 700, marginBottom: '8px' }}>Instant Booking</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Customers can book appointments instantly via voice</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '28px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📞</div>
              <h3 style={{ fontWeight: 700, marginBottom: '8px' }}>Never Miss a Call</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Every enquiry captured and responded to immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Ready to transform your business?</h2>
        <p style={{ color: '#94a3b8', marginBottom: '32px' }}>Book a demo call with our team</p>
        <a href="#book" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #495DA2 0%, #BFA072 100%)', color: 'white', padding: '16px 40px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' }}>
          Book a Demo Call
        </a>
      </section>
    </main>
  )
}
