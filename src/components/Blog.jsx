import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to 4x4 Suspension Lift Kits",
    excerpt: "Discover how lift kits enhance off-road performance, improve visibility, and prevent bottoming out on rugged terrain.",
    image: "/images/blog/suspension-guide.jpg",
    date: "2024-10-15",
    readTime: "5 min read",
    category: "Suspension"
  },
  {
    id: 2,
    title: "Custom Fender Conversions: Metalwork Mastery",
    excerpt: "Learn about precision metalwork and award-winning paint techniques that give your 4x4 an aggressive, rugged stance.",
    image: "/images/blog/fender-conversions.jpg",
    date: "2024-10-08",
    readTime: "4 min read",
    category: "Body Work"
  },
  {
    id: 3,
    title: "Off-Road Lighting: Beyond Basic Headlights",
    excerpt: "Explore professional LED bar installations and electrical systems for superior night-time off-road adventures.",
    image: "/images/blog/offroad-lighting.jpg",
    date: "2024-10-01",
    readTime: "6 min read",
    category: "Lighting"
  },
  {
    id: 4,
    title: "Steel Bumpers & Recovery Gear Essentials",
    excerpt: "Everything you need to know about heavy-duty bumpers, winch systems, and recovery points for extreme situations.",
    image: "/images/blog/recovery-gear.jpg",
    date: "2024-09-24",
    readTime: "5 min read",
    category: "Recovery"
  },
  {
    id: 5,
    title: "Roof Racks & Overland Accessory Fitment",
    excerpt: "Professional guide to installing roof racks, canopies, and essential gear for your overland expeditions.",
    image: "/images/blog/overland-accessories.jpg",
    date: "2024-09-17",
    readTime: "4 min read",
    category: "Accessories"
  },
  {
    id: 6,
    title: "Performance Tuning & Safety Compliance",
    excerpt: "Ensure your 4x4 meets road-legal standards while maximizing performance for African terrain conditions.",
    image: "/images/blog/performance-tuning.jpg",
    date: "2024-09-10",
    readTime: "5 min read",
    category: "Performance"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">4x4 Knowledge Hub</h2>
        <p className="section-subtitle">
          Expert insights, guides, and latest trends in 4x4 conversions and off-road adventures.
        </p>
        
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="cta cta-link">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}