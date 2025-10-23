import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="/images/logo.png" 
              alt="Gas Garage Offroad Center" 
              className="logo-img" 
            />
            <p className="footer-description">
              Zambia's trusted 4×4 specialists. We build your vision.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <a href="#services">Suspension Lifts</a>
            <a href="#services">Fender Conversions</a>
            <a href="#services">Bumpers & Winches</a>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <a href="tel:+260965356900">+260 965 356 900</a>
            <a href="mailto:info@gasgarage.com">info@gasgarage.com</a>
          </div>
        </div>
        
        {/* FIXED: FAR RIGHT */}
        <div className="social-links far-right">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta cta-primary"
          >
            Facebook
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta cta-primary"
          >
            Instagram
          </a>
        </div>
        
        <p className="copyright">© Developed by Infinityguard Technologies (Pty) Ltd</p>
        <p className="copyright">© 2025 Gas Garage Offroad Center</p>
      </div>
    </footer>
  );
}