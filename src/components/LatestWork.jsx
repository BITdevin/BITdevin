import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/fender-old.jpg",
  "/images/gallery5.jpg",
  "/images/6.jpg",
  

  
  
];

export default function LatestWork() {
  return (
    <section
      id="latest-work"
      style={{ padding: "4rem 0", backgroundColor: "var(--white)" }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ color: "var(--primary)", fontSize: "2.5rem", fontWeight: "700" }}>
            Our Latest Work
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0.75rem auto" }}>
            Real transformations from Zambia's toughest terrains
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          style={{ paddingBottom: "2rem" }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  backgroundColor: "#fff",
                  height: "450px",       // Increased height
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"  // Ensures image fills the box
                  }}
                  loading="lazy"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
