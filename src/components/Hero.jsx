import React from 'react';

export default function Hero() {
  const whatsappMessage =
    "Hello Gas Garage! I'm interested in your 4x4 services and would like a free quote.";
  const whatsappLink = `https://wa.me/260965356900?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const buttonStyle = {
    padding: '0.9rem 1.8rem',
    borderRadius: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const hoverEffect = {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
  };

  return (
    <section
      id="home"
      className="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#110F10', // fallback color to avoid grey flash
        backgroundImage: 'url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text visibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to bottom, rgba(17,15,16,0.6), rgba(17,15,16,0.6))',
          zIndex: 1,
        }}
      ></div>

      <div
        className="container hero-content"
        style={{ position: 'relative', zIndex: 2, maxWidth: '900px', padding: '0 1rem' }}
      >
        <h1
          className="hero-title"
          style={{
            color: 'var(--white)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 800,
            marginBottom: '1rem',
          }}
        >
          Your 4x4 Vision, Built Tough.
        </h1>
        <p
          className="hero-subtitle"
          style={{
            color: 'var(--white)',
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            marginBottom: '2rem',
          }}
        >
          Zambia's trusted specialists in custom builds, suspension, and essential
          offroad fitments.
        </p>

        <div
          className="hero-cta"
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* Primary Button */}
          <a
            href={whatsappLink}
            style={{
              ...buttonStyle,
              backgroundColor: 'var(--accent)',
              color: 'var(--primary)',
              border: 'none',
              minWidth: '200px',
            }}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverEffect)}
            onMouseLeave={(e) =>
              Object.assign(e.target.style, {
                ...buttonStyle,
                backgroundColor: 'var(--accent)',
                color: 'var(--primary)',
                border: 'none',
              })
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Free Quote
          </a>

          {/* Secondary Button */}
          <a
            href="#services"
            style={{
              ...buttonStyle,
              backgroundColor: 'rgba(17, 15, 16, 0.8)',
              color: 'var(--white)',
              border: '2px solid var(--accent)',
              minWidth: '200px',
            }}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverEffect)}
            onMouseLeave={(e) =>
              Object.assign(e.target.style, {
                ...buttonStyle,
                backgroundColor: 'rgba(17, 15, 16, 0.8)',
                color: 'var(--white)',
                border: '2px solid var(--accent)',
              })
            }
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
