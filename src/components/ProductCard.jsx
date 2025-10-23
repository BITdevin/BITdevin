import React from 'react';

export default function ProductCard({ p, onViewDetails }) {
  const whatsappLink = `https://wa.me/260971234567?text=Hi! I'm interested in the ${encodeURIComponent(p.name)}. Can I get a price?`;

  return (
    <article className="product-card" aria-labelledby={`p-${p.id}`}>
      <img src={p.img} alt={p.name} loading="lazy" />
      <div className="body">
        <h3 id={`p-${p.id}`}>{p.name}</h3>
        <p>{p.short}</p>
        <div className="product-actions">
          <a className="cta cta-primary" href={whatsappLink} target="_blank" rel="noreferrer">
            Request Price
          </a>
          <button 
            className="cta cta-secondary" 
            onClick={onViewDetails} 
            aria-label={`View details for ${p.name}`}
          >
            View
          </button>
        </div>
      </div>
    </article>
  );
}