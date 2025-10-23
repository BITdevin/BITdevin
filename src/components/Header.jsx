import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">  {/* Removed container for consistency, but it's max-width controlled */}
        <a href="#" className="brand">
          <img 
            src="/images/logo-header.png" 
            alt="Gas Garage Offroad Center logo" 
            className="logo-img"
            loading="lazy"
          />
        </a>

        <nav className="nav" role="navigation" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#builds">Builds</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact" className="cta cta-primary">Contact Us</a>
        </nav>

        <button 
          className="mobile-nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav"
              className="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
              <a href="#builds" onClick={() => setIsOpen(false)}>Builds</a>
              <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}