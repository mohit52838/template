import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/Button';
import Card from '../components/Card';
import HologramReveal from '../components/HologramReveal';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Hero Parallax & Glitch
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current,
      { opacity: 0, scale: 1.2, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2, ease: "power4.out" }
    );

    gsap.to(".hero-particles", {
      y: -100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Horizontal Scroll for Projects
    const slider = sliderRef.current;
    if (slider) {
      gsap.to(slider, {
        x: () => -(slider.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".projects-preview",
          start: "top top",
          end: () => "+=" + slider.scrollWidth,
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });
    }

    // Hologram Card Hover Effect (Light Burst)
    const cards = document.querySelectorAll('.highlight-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { boxShadow: "0 0 50px var(--accent-cyan), inset 0 0 20px var(--accent-cyan)", duration: 0.3 });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { boxShadow: "none", duration: 0.5 });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="tron-grid-floor"></div>
        <div className="hero-content">
          <h1 ref={titleRef} className="hero-title glitch-effect" data-text="THE FUTURE. REINVENTED.">
            THE FUTURE.<br />REINVENTED.
          </h1>
          <p className="hero-subtitle">
            Transcending boundaries with holographic interfaces and quantum computing.
          </p>
          <div className="hero-actions">
            <Button variant="primary">Initialize System</Button>
          </div>
        </div>
        <div className="hero-particles"></div>
      </section>

      {/* Tech Highlights */}
      <section className="tech-highlights">
        <div className="section-header">
          <h2 className="neon-text-blue">CORE TECHNOLOGIES</h2>
          <div className="header-line"></div>
        </div>
        <div className="highlights-grid">
          <Card title="Quantum Core" className="highlight-card">
            <p>Processing power beyond physical limits.</p>
            <div className="card-corner-trace"></div>
          </Card>
          <Card title="Neural Link" className="highlight-card">
            <p>Direct brain-computer interface protocol.</p>
            <div className="card-corner-trace"></div>
          </Card>
          <Card title="Holo-Field" className="highlight-card">
            <p>Immersive 3D projection environments.</p>
            <div className="card-corner-trace"></div>
          </Card>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="about-split">
          <div className="about-text">
            <h2 className="neon-text-purple">WHO WE ARE</h2>
            <p>We are the architects of the new digital era. Merging biological intuition with silicon precision.</p>
            <Link to="/about"><Button variant="secondary">Read Mission</Button></Link>
          </div>
          <div className="about-image">
            <HologramReveal src="https://images.unsplash.com/photo-1535378437327-b7128d8de742?q=80&w=1000&auto=format&fit=crop" alt="Future Tech" />
          </div>
        </div>
      </section>

      {/* Projects Slider */}
      <section className="projects-preview">
        <div className="projects-header">
          <h2 className="neon-text-cyan">LATEST INNOVATIONS</h2>
        </div>
        <div className="tron-frame-top"></div>
        <div ref={sliderRef} className="projects-slider">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="project-slide">
              <Card title={`Project 0${i}`}>
                <div className="slide-content">
                  <div className="slide-img"></div>
                  <p>Classified Development</p>
                </div>
              </Card>
              <div className="reflection"></div>
            </div>
          ))}
        </div>
        <div className="tron-frame-bottom"></div>
      </section>

      {/* CTA Footer */}
      <section className="cta-section">
        <h2 className="neon-text-blue">READY TO UPGRADE?</h2>
        <Button variant="primary" className="pulse-btn">Start Project</Button>
      </section>

      <style jsx>{`
        .home-page {
          overflow-x: hidden;
        }

        /* Hero */
        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
          perspective: 1000px;
          overflow: hidden;
        }

        .tron-grid-floor {
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 200%;
          height: 100%;
          background-image: 
            linear-gradient(var(--accent-blue) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent-blue) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: rotateX(60deg);
          opacity: 0.2;
          animation: gridScroll 20s linear infinite;
          z-index: -1;
        }

        @keyframes gridScroll {
          0% { transform: rotateX(60deg) translateY(0); }
          100% { transform: rotateX(60deg) translateY(50px); }
        }

        .hero-title {
          font-size: 6rem;
          line-height: 1;
          margin-bottom: 2rem;
          color: #fff;
          text-align: center;
          font-weight: 900;
          text-shadow: 0 0 20px var(--accent-cyan);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #aaa;
          text-align: center;
          max-width: 600px;
          margin: 0 auto 3rem;
          position: relative;
        }

        /* Tech Highlights */
        .tech-highlights {
          padding: 100px 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 60px;
          text-align: center;
          font-size: 2.5rem;
          font-family: var(--font-header);
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }

        .header-line {
          width: 100%;
          height: 2px;
          background: var(--accent-blue);
          box-shadow: 0 0 10px var(--accent-blue);
          margin-top: 10px;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .highlight-card {
          position: relative;
          overflow: hidden;
        }

        .card-corner-trace {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .card-corner-trace::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border-top: 2px solid var(--accent-cyan);
          border-left: 2px solid var(--accent-cyan);
          animation: traceCorner 2s infinite;
        }

        @keyframes traceCorner {
          0% { width: 0; height: 0; opacity: 0; }
          50% { width: 30px; height: 30px; opacity: 1; }
          100% { width: 40px; height: 40px; opacity: 0; }
        }

        /* Projects Slider */
        .projects-preview {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background: #000;
          position: relative;
          border-top: 1px solid var(--accent-blue);
          border-bottom: 1px solid var(--accent-blue);
        }

        .projects-header {
          padding: 0 5%;
          margin-bottom: 50px;
          font-size: 3rem;
          font-family: var(--font-header);
          z-index: 2;
        }

        .projects-slider {
          display: flex;
          gap: 50px;
          padding-left: 5%;
          width: max-content;
          z-index: 2;
        }

        .project-slide {
          width: 400px;
          height: 500px;
          position: relative;
        }

        .slide-img {
          height: 200px;
          background: rgba(0, 207, 255, 0.1);
          margin-bottom: 20px;
          border: 1px solid var(--glass-border);
          position: relative;
        }

        .slide-img::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(transparent 50%, rgba(0, 207, 255, 0.2) 50%);
          background-size: 100% 4px;
        }

        .reflection {
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 100%;
          height: 50px;
          background: linear-gradient(to bottom, rgba(0, 207, 255, 0.2), transparent);
          transform: scaleY(-1);
          opacity: 0.3;
          filter: blur(5px);
        }

        .tron-frame-top, .tron-frame-bottom {
          position: absolute;
          left: 0;
          width: 100%;
          height: 20px;
          background: repeating-linear-gradient(90deg, var(--accent-blue), var(--accent-blue) 10px, transparent 10px, transparent 20px);
          opacity: 0.5;
        }
        .tron-frame-top { top: 0; }
        .tron-frame-bottom { bottom: 0; }

        /* CTA */
        .cta-section {
          padding: 150px 20px;
          text-align: center;
          background: radial-gradient(circle at center, rgba(0, 207, 255, 0.1), transparent 70%);
          position: relative;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 100px;
          background: linear-gradient(to bottom, transparent, var(--accent-blue));
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .about-split { grid-template-columns: 1fr; }
          .projects-preview { height: auto; padding: 100px 0; }
          .projects-slider { flex-direction: column; width: 100%; padding: 0 20px; }
          .project-slide { width: 100%; height: auto; }
        }
      `}</style>
    </div>
  );
};

export default Home;
