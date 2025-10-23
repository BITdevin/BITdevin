import React, { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  { 
    name: "Headlights", 
    image: "/images/products/suspension.jpg",
    description: "Professional-grade lighting systems for superior night off-road performance"
  },
  { 
    name: "Steel Bumpers", 
    image: "/images/products/bumpers.jpg",
    description: "Heavy-duty steel bumpers with integrated recovery points"
  },
  { 
    name: "WARN Winches & Recovery", 
    image: "/images/products/winches.jpg",
    description: "Premium recovery equipment for extreme off-road situations"
  },
  { 
    name: "Off-road Tires", 
    image: "/images/products/tires.jpg",
    description: "All-terrain and mud-terrain tires built for African conditions"
  },
  { 
    name: "Awnings", 
    image: "/images/products/lighting.jpg",
    description: "High-performance LED lighting systems for night off-roading"
  },
  { 
    name: "4x4 Headlights", 
    image: "/images/products/airlockers.jpg",
    description: "Advanced differential lockers for maximum traction control"
  }
];

export default function Products() {
  const [filter, setFilter] = useState('');

  const handleInquiry = (productName) => {
    const message = `Hello! I'm interested in ${productName}. Can you provide pricing and availability?`;
    window.open(`https://wa.me/260965356900?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section id="products" className="products" aria-labelledby="products-title">
      <div className="container">
        <h2 id="products-title" className="section-title">Premium Partner Products</h2>
        <p className="section-subtitle">
          We only install the best-in-class accessories, trusted worldwide by offroaders.
        </p>

        <div style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              padding: 'var(--space-md)',
              width: '300px',
              maxWidth: '100%',
              border: '2px solid var(--accent)',
              borderRadius: 'var(--border-radius)',
              fontSize: 'var(--text-base)'
            }}
            aria-label="Search products"
          />
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <motion.div 
              key={index} 
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button 
                  className="cta cta-link"
                  onClick={() => handleInquiry(product.name)}
                  aria-label={`Inquire about ${product.name}`}
                >
                  Inquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}