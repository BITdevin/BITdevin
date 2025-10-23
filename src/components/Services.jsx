import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRulerCombined,
  faCarSide,
  faBolt,
  faTruckMonster,
  faTools,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

const servicesList = [
  { icon: faRulerCombined, title: "Suspension Lift Kits", desc: "Expert installation for superior ground clearance and performance." },
  { icon: faCarSide, title: "Custom Fender Conversions", desc: "Precision metalwork and paint for a rugged, aggressive stance." },
  { icon: faBolt, title: "Offroad Lighting & Electrical", desc: "Professional installs of LED bars, spotlights, and wiring." },
  { icon: faTruckMonster, title: "Steel Bumpers & Recovery", desc: "Heavy-duty bumpers, winches, and recovery points for any situation." },
  { icon: faTools, title: "Accessory Fitment", desc: "Roof racks, canopies, snorkels, and other essential gear." },
  { icon: faShieldAlt, title: "Performance & Safety", desc: "Comprehensive checks and road-legal tuning for peace of mind." }
];

export default function Services() {
  return (
    <section id="services" className="services" style={{ padding: '4rem 0', backgroundColor: 'var(--gray)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ color: 'var(--primary)', fontSize: '2rem', fontWeight: '700' }}>
            Built For The Bush
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0.75rem auto' }}>
            Our workshop is equipped to handle every aspect of your 4x4 conversion with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {servicesList.map((service, i) => (
            <div
              key={i}
              className="service-card"
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '16px',
                padding: '1.5rem 1.25rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
              }}
            >
              {/* Icon */}
              <div className="icon" style={{ marginBottom: '0.75rem' }}>
                <FontAwesomeIcon icon={service.icon} size="lg" color="var(--primary)" />
              </div>

              {/* Title */}
              <h4 style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                {service.title}
              </h4>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.4' }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
