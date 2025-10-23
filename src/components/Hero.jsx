import React from 'react';

export default function Hero() {
  const whatsappMessage = "Hello Gas Garage! I'm interested in your 4x4 services and would like a free quote.";
  const whatsappLink = `https://wa.me/260965356900?text=${encodeURIComponent(whatsappMessage)}`;

  const buttonStyle = {
    padding: '0.9rem 1.8rem',
    borderRadius: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const hoverEffect = {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.25)'
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">Your 4x4 Vision, Built Tough.</h1>
        <p className="hero-subtitle">
          Zambia's trusted specialists in custom builds, suspension, and essential offroad fitments.
        </p>

        <div className="hero-cta" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
          
          {/* Primary */}
          <a
            href={whatsappLink}
            style={{
              ...buttonStyle,
              backgroundColor: 'var(--accent)',
              color: 'var(--white)',
              border: 'none'
            }}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverEffect)}
            onMouseLeave={(e) =>
              Object.assign(e.target.style, { ...buttonStyle, backgroundColor: 'var(--accent)', color: 'var(--white)', border: 'none' })
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Free Quote
          </a>

          {/* Secondary */}
          <a
            href="#services"
            style={{
              ...buttonStyle,
              backgroundColor: 'rgba(17, 15, 16, 0.8)',
              color: 'var(--white)',
              border: '2px solid var(--accent)'
            }}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverEffect)}
            onMouseLeave={(e) =>
              Object.assign(e.target.style, { ...buttonStyle, backgroundColor: 'rgba(17, 15, 16, 0.8)', color: 'var(--white)', border: '2px solid var(--accent)' })
            }
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
