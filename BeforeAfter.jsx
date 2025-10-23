import React, { useState } from "react";
import { motion } from "framer-motion";

const transformations = [
  {
    before: "/images/fender-new.jpg", // swapped
    after: "/images/fender-old.jpg",  // swapped
  },
];

export default function BeforeAfter() {
  const [viewMode, setViewMode] = useState("before");
  const current = transformations[0];

  const whatsappMessage = "Hello Gas Garage! I'm interested in your 4x4 services and would like a free quote.";
  const whatsappLink = `https://wa.me/260965356900?text=${encodeURIComponent(whatsappMessage)}`;

  const buttonStyle = {
    padding: "0.9rem 1.8rem",
    borderRadius: "12px",
    fontWeight: "600",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const hoverEffect = {
    transform: "translateY(-3px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
  };

  return (
    <section
      id="builds"
      className="before-after"
      style={{
        marginTop: "var(--space-3xl)",
        backgroundColor: "var(--gray)",
        padding: "var(--space-3xl) 0",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <header className="section-header" style={{ textAlign: "center" }}>
          <h2 className="section-title" style={{ color: "var(--primary)", fontSize: "var(--text-2xl)", fontWeight: "700" }}>
            Transformation Showcase
          </h2>
          <p className="section-subtitle" style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0.75rem auto 2rem" }}>
            See our precision work — before and after your 4×4 upgrade.
          </p>

          {/* Before/After Toggle Buttons */}
          <div className="toggle-buttons" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
            <button
              className={`nav-button ${viewMode === "before" ? "active" : ""}`}
              onClick={() => setViewMode("before")}
              style={{
                ...buttonStyle,
                backgroundColor: viewMode === "before" ? "var(--accent)" : "var(--primary)",
                color: viewMode === "before" ? "var(--primary)" : "var(--white)",
                border: "none",
                width: "220px",
              }}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverEffect)}
              onMouseLeave={(e) =>
                Object.assign(e.target.style, {
                  ...buttonStyle,
                  backgroundColor: viewMode === "before" ? "var(--accent)" : "var(--primary)",
                  color: viewMode === "before" ? "var(--primary)" : "var(--white)",
                  border: "none",
                  width: "220px",
                })
              }
            >
              Toyota Land Cruiser — Before
            </button>

            <button
              className={`nav-button ${viewMode === "after" ? "active" : ""}`}
              onClick={() => setViewMode("after")}
              style={{
                ...buttonStyle,
                backgroundColor: viewMode === "after" ? "var(--accent)" : "var(--primary)",
                color: viewMode === "after" ? "var(--primary)" : "var(--white)",
                border: "none",
                width: "220px",
              }}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverEffect)}
              onMouseLeave={(e) =>
                Object.assign(e.target.style, {
                  ...buttonStyle,
                  backgroundColor: viewMode === "after" ? "var(--accent)" : "var(--primary)",
                  color: viewMode === "after" ? "var(--primary)" : "var(--white)",
                  border: "none",
                  width: "220px",
                })
              }
            >
              Toyota Land Cruiser — After
            </button>
          </div>
        </header>

        {/* Image Transition */}
        <motion.div
          key={viewMode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="comparison-static"
          style={{ textAlign: "center" }}
        >
          <div
            className="image-box"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <img
              src={viewMode === "before" ? current.before : current.after}
              srcSet={
                viewMode === "before"
                  ? "/images/fender-new.jpg 640w, /images/fender-new.jpg 1280w"
                  : "/images/fender-old.jpg 640w, /images/fender-old.jpg 1280w"
              }
              sizes="(max-width: 768px) 100vw, 800px"
              alt={viewMode === "before" ? "Toyota Land Cruiser — Before" : "Toyota Land Cruiser — After"}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                transition: "opacity 0.4s ease-in-out",
              }}
            />
          </div>

          {/* Service Buttons */}
          <div
            className="hero-cta"
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...buttonStyle,
                backgroundColor: "var(--accent)",
                color: "var(--primary)",
                border: "none",
                width: "220px",
              }}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverEffect)}
              onMouseLeave={(e) =>
                Object.assign(e.target.style, { ...buttonStyle, backgroundColor: "var(--accent)", color: "var(--primary)", border: "none", width: "220px" })
              }
            >
              View Our Services
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...buttonStyle,
                backgroundColor: "var(--primary)",
                color: "var(--white)",
                border: "2px solid var(--accent)",
                width: "220px",
              }}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverEffect)}
              onMouseLeave={(e) =>
                Object.assign(e.target.style, { ...buttonStyle, backgroundColor: "var(--primary)", color: "var(--white)", border: "2px solid var(--accent)", width: "220px" })
              }
            >
              Book Your Upgrade
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
