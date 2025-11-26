import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Button from '../components/Button';
import Card from '../components/Card';
import HologramReveal from '../components/HologramReveal';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Home = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const particlesRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const uiRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // 1. Initial Neon Surge (Load Animation)
    const tl = gsap.timeline();

    tl.to(heroRef.current, { opacity: 1, duration: 0.1 })
      .fromTo(gridRef.current,
        { scale: 2, opacity: 0, rotationX: 90 },
        { scale: 1, opacity: 0.4, rotationX: 60, duration: 2, ease: "power4.out" }
      )
      .fromTo(titleRef.current,
        { opacity: 0, scale: 1.5, textShadow: "0 0 0px #000" },
        { opacity: 1, scale: 1, textShadow: "0 0 50px var(--accent-blue)", duration: 1.5, ease: "elastic.out(1, 0.3)" },
        "-=1.5"
      )
      .to(subtitleRef.current, {
        duration: 2,
        text: {
          value: "Blending imagination with technology to build immersive, futuristic digital experiences.",
          delimiter: ""
        },
        ease: "none",
        onUpdate: function () {
          // Glitch effect during typing
          if (Math.random() > 0.9) {
            this.targets()[0].style.textShadow = `${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff00c1`;
          } else {
            this.targets()[0].style.textShadow = "none";
          }
        }
      }, "-=1");

    // 2. Parallax Effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5);
      const yPos = (clientY / window.innerHeight - 0.5);

      gsap.to(gridRef.current, {
        rotationX: 60 + yPos * 5,
        rotationY: xPos * 5,
        x: xPos * 20,
        duration: 1
      });

      gsap.to(particlesRef.current, {
        x: xPos * 50,
        y: yPos * 50,
        duration: 1.5
      });

      gsap.to(contentRef.current, {
        x: xPos * -20,
        y: yPos * -20,
        duration: 1
      });

      gsap.to(uiRef.current, {
        x: xPos * -40,
        y: yPos * -40,
        rotation: xPos * 10,
        duration: 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 3. Continuous Animations
    // Particles
    const particles = particlesRef.current.children;
    Array.from(particles).forEach((p, i) => {
      gsap.to(p, {
        y: -window.innerHeight,
        duration: "random(5, 10)",
        repeat: -1,
        ease: "none",
        delay: "random(0, 5)"
      });
    });

    // Neon Flicker for Title
    gsap.to(titleRef.current, {
      opacity: "random(0.8, 1)",
      textShadow: "random(0 0 20px var(--accent-blue), 0 0 50px var(--accent-blue))",
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      repeatRefresh: true
    });

    // UI Rings Rotation
    gsap.to(".ui-ring", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear"
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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section ref={heroRef} className="hero-section">
        {/* Layer 1: Black Base (CSS background) */}

        {/* Layer 2: TRON Grid */}
        <div ref={gridRef} className="layer-grid">
          <div className="grid-plane"></div>
        </div>

        {/* Layer 3: Hologram Particles */}
        <div ref={particlesRef} className="layer-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="holo-particle" style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2
            }}></div>
          ))}
        </div>

        {/* Layer 4: Digital Noise/Scanlines */}
        <div className="layer-noise"></div>

        {/* Cyber UI Elements */}
        <div ref={uiRef} className="hero-ui">
          <div className="ui-hex hex-1"></div>
          <div className="ui-hex hex-2"></div>
          <div className="ui-ring ring-1"></div>
        </div>
      </section>

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
          background: #000;
        }

        /* HERO SECTION */
        .hero-section {
          height: 100vh;
          width: 100vw;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          opacity: 0; /* For fade-in */
        }

        /* Layer 2: TRON Grid */
        .layer-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          transform-style: preserve-3d;
        }

        .grid-plane {
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: 
            linear-gradient(var(--accent-blue) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent-blue) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.2;
          mask-image: linear-gradient(to top, black 40%, transparent 100%);
        }

        /* Layer 3: Particles */
        .layer-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .holo-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--accent-cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-cyan);
        }

        /* Layer 4: Noise/Scanlines */
        .layer-noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 4;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
        }

        /* Cyber UI */
        .hero-ui {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 3;
          pointer-events: none;
        }

        .ui-hex {
          position: absolute;
          width: 100px;
          height: 115px;
          border: 1px solid var(--accent-purple);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          opacity: 0.3;
        }
        .hex-1 { top: 20%; left: 10%; }
        .hex-2 { bottom: 20%; right: 10%; }

        .ui-ring {
          position: absolute;
          border: 1px dashed var(--accent-cyan);
          border-radius: 50%;
          opacity: 0.2;
        }
        .ring-1 {
          width: 600px;
          height: 600px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .ui-circuit {
          position: absolute;
          top: 10%;
          right: 20%;
          width: 200px;
          height: 2px;
          background: var(--accent-blue);
          box-shadow: 0 0 10px var(--accent-blue);
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 5;
          text-align: center;
          max-width: 800px;
        }

        .hero-title {
          font-size: 6rem;
          line-height: 0.9;
          margin-bottom: 2rem;
          color: #fff;
          font-weight: 900;
          font-family: var(--font-header);
          letter-spacing: -2px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--accent-cyan);
          margin: 0 auto 3rem;
          font-family: 'Courier New', monospace;
          min-height: 1.5em; /* Prevent layout shift */
          letter-spacing: 2px;
        }

        /* Tech Highlights (Existing styles preserved/enhanced) */
        .tech-highlights {
          padding: 100px 5%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
          background: #000;
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

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .about-split { grid-template-columns: 1fr; }
          .projects-preview { height: auto; padding: 100px 0; }
          .projects-slider { flex-direction: column; width: 100%; padding: 0 20px; }
          .project-slide { width: 100%; height: auto; }
          .ui-ring { width: 300px; height: 300px; }
        }
      `}</style>
    </div>
  );
};

export default Home;
