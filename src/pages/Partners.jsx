import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Card from '../components/Card';

const Partners = () => {
  const wallRef = useRef(null);

  useEffect(() => {
    // 3D Floating Animation for Logo Wall
    const logos = wallRef.current.children;

    Array.from(logos).forEach((logo, i) => {
      gsap.to(logo, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-5, 5)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1
      });
    });
  }, []);

  const partners = [
    "CYBERDYNE", "TYRELL CORP", "MASSIVE DYNAMIC",
    "WEYLAND-YUTANI", "OSCORP", "STARK IND",
    "UMBRELLA CORP", "APERTURE SCI", "BLACK MESA"
  ];

  return (
    <div className="page-container">
      <h1 className="page-title glitch-effect" data-text="STRATEGIC ALLIANCES">STRATEGIC ALLIANCES</h1>

      {/* 3D Logo Wall */}
      <div className="logo-wall-container">
        <div ref={wallRef} className="logo-wall">
          {partners.map((partner, index) => (
            <div key={index} className="logo-tile">
              <div className="logo-glow"></div>
              <span className="logo-text">{partner}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <section className="case-studies">
        <h2 className="section-title neon-text-blue">JOINT VENTURES</h2>
        <div className="studies-grid">
          <Card title="Project: SKYNET" className="study-card">
            <p>Autonomous defense network integration.</p>
            <div className="status-indicator">STATUS: CLASSIFIED</div>
          </Card>
          <Card title="Project: EXTREMIS" className="study-card">
            <p>Bio-enhancement protocol development.</p>
            <div className="status-indicator">STATUS: ACTIVE</div>
          </Card>
        </div>
      </section>

      <style jsx>{`
        .page-container {
          padding: 150px 20px 50px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
        }

        .page-title {
          font-size: 4rem;
          text-align: center;
          margin-bottom: 80px;
          font-family: var(--font-header);
        }

        .logo-wall-container {
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          margin-bottom: 100px;
        }

        .logo-wall {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          transform-style: preserve-3d;
        }

        .logo-tile {
          width: 200px;
          height: 100px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          backdrop-filter: blur(5px);
          transition: all 0.3s;
          cursor: pointer;
        }

        .logo-tile:hover {
          background: rgba(0, 207, 255, 0.1);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 20px rgba(0, 207, 255, 0.2);
          transform: translateZ(20px);
        }

        .logo-text {
          font-family: var(--font-header);
          font-weight: 700;
          color: #aaa;
          letter-spacing: 1px;
          z-index: 2;
        }

        .logo-tile:hover .logo-text {
          color: #fff;
          text-shadow: 0 0 10px #fff;
        }

        .section-title {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 60px;
          font-family: var(--font-header);
        }

        .studies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
        }

        .status-indicator {
          margin-top: 20px;
          font-family: var(--font-header);
          color: var(--accent-cyan);
          font-size: 0.8rem;
          padding: 5px 10px;
          border: 1px solid var(--accent-cyan);
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Partners;
