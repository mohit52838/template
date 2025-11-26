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
    // Hero Animation
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current,
      { opacity: 0, scale: 2, filter: "blur(20px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power4.out" }
    );

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

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
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
        </div>
        <div className="highlights-grid">
          <Card title="Quantum Core" className="highlight-card">
            <p>Processing power beyond physical limits.</p>
          </Card>
          <Card title="Neural Link" className="highlight-card">
            <p>Direct brain-computer interface protocol.</p>
          </Card>
          <Card title="Holo-Field" className="highlight-card">
            <p>Immersive 3D projection environments.</p>
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
        <div ref={sliderRef} className="projects-slider">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="project-slide">
              <Card title={`Project 0${i}`}>
                <div className="slide-content">
                  <div className="slide-img"></div>
                  <p>Classified Development</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
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

        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
        }

        .hero-title {
          font-size: 6rem;
          line-height: 1;
          margin-bottom: 2rem;
          color: #fff;
          text-align: center;
          font-weight: 900;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #aaa;
          text-align: center;
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
        }

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
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .about-preview {
          padding: 100px 5%;
          background: linear-gradient(90deg, transparent, rgba(108, 92, 231, 0.05), transparent);
        }

        .about-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-text h2 {
          font-size: 3rem;
          margin-bottom: 30px;
          font-family: var(--font-header);
        }

        .about-text p {
          font-size: 1.2rem;
          color: #ccc;
          margin-bottom: 40px;
          line-height: 1.8;
        }

        .projects-preview {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background: #000;
        }

        .projects-header {
          padding: 0 5%;
          margin-bottom: 50px;
          font-size: 3rem;
          font-family: var(--font-header);
        }

        .projects-slider {
          display: flex;
          gap: 50px;
          padding-left: 5%;
          width: max-content;
        }

        .project-slide {
          width: 400px;
          height: 500px;
        }

        .slide-img {
          height: 200px;
          background: rgba(0, 207, 255, 0.1);
          margin-bottom: 20px;
          border: 1px solid var(--glass-border);
        }

        .cta-section {
          padding: 150px 20px;
          text-align: center;
          background: radial-gradient(circle at center, rgba(0, 207, 255, 0.1), transparent 70%);
        }

        .cta-section h2 {
          font-size: 4rem;
          margin-bottom: 50px;
          font-family: var(--font-header);
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
