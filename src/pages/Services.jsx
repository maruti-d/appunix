import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Globe, Smartphone, Cpu, ShoppingBag, Zap, ArrowRight } from 'lucide-react';
import './Services.css';

// Placeholder images - replace with your own high-quality assets
// const bgImages = {
//   web: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
//   app: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
//   ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
//   sec: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
//   cloud: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
// };

const ServiceCard = ({ title, desc, icon, size, bgImage }) => {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const shadowX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const shadowY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`service-card ${size}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* 1. New: Background Image Layer */}
      <div className="card-bg-image" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="card-bg-overlay"></div>
      </div>

      {/* 2. Existing: Interactive Spotlight */}
      <motion.div 
        className="spotlight"
        style={{
          background: `radial-gradient(600px circle at ${shadowX}px ${shadowY}px, rgba(0, 242, 234, 0.1), transparent 40%)`
        }}
      />

      {/* 3. Existing: Content */}
      <div className="card-inner">
        <div className={`icon-box ${hovered ? 'glow' : ''}`}>
          {icon}
        </div>
        
        <div className="content-text">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>

        <motion.button 
          className="card-button"
          whileHover={{ x: 5 }}
        >
          Explore Service <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const data = [
  { 
    title: "Cloud-Native Microservices", 
    label: "Infrastructure & Scale",
    icon: <Cpu size={50} />, 
    size: "large", 
    desc: "Architecting high-concurrency systems with Java & Spring Boot. We leverage Docker and Kubernetes on AWS/GCP to ensure 99.9% uptime and seamless scaling.",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  { 
    title: "Shopify Engineering", 
    label: "E-Commerce Systems",
    icon: <ShoppingBag size={50}/>, 
    size: "medium", 
    desc: "Custom Shopify App development and high-performance store architecture. We bridge the gap between complex business logic and seamless retail experiences.",
    bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    title: "AI & Intelligent Dev", 
    label: "Modern Innovation",
    icon: <Zap size={50}/>, 
    size: "medium", 
    desc: "Integrating Python-based AI models and LLMs into production environments. We build smart automations that transform data into business intelligence.",
    bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    title: "Cross-Platform Mobile", 
    label: "Flutter Mastery",
    icon: <Smartphone size={50}/>, 
    size: "medium", 
    desc: "Native-grade iOS and Android applications built with Flutter. One codebase, zero compromises on performance or UI/UX.",
    bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    title: "Performance Marketing", 
    label: "Digital Growth",
    icon: <Globe size={50}/>, 
    size: "medium", 
    desc: "Technical SEO and data-driven marketing strategies designed to convert traffic into high-value leads and recurring revenue.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2072&auto=format&fit=crop"
  }
];

  return (
    <section className="services-wrapper">
      <div className="section-intro">
        <h2>Next-Gen <span className="accent">Digital</span> Expertise</h2>
      </div>
      <div className="bento-container">
        {data.map((item, i) => <ServiceCard key={i} {...item} />)}
      </div>
    </section>
  );
};

export default Services;