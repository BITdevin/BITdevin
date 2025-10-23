import React, { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { image: '/images/gallery1.jpg', category: 'Suspension', title: 'Toyota Hilux — 2" Lift' },
  { image: '/images/gallery2.jpg', category: 'Fenders', title: 'Land Cruiser — Widebody' },
  { image: '/images/gallery3.jpg', category: 'Bumpers', title: 'Custom Steel Bumper' },
  { image: '/images/gallery4.jpg', category: 'Lighting', title: 'LED Light Bar Install' },
  { image: '/images/gallery5.jpg', category: 'Roof Rack', title: 'Expedition Roof System' },
  { image: '/images/gallery6.jpg', category: 'Recovery', title: 'WARN Winch Integration' } // renamed for consistency
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="gallery" style={{ marginTop: 'var(--space-3xl)' }}>
        <div className="container">
          <h2 className="section-title">Our Latest Work</h2>
          <p className="section-subtitle">Real transformations from Zambia's toughest terrains</p>

          <div className="gallery-grid" role="list">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(item)}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedImage(item);
                }}
                aria-label={`${item.title} — ${item.category}`}
              >
                <img src={item.image} alt={item.title} className="gallery-image" loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <span className="gallery-category">{item.category}</span>
                    <h3 className="gallery-title">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close image">×</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-info">
              <span className="lightbox-category">{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
