import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Card from '../components/Card';

const Partners = () => {
  const wallRef = useRef(null);
  const svgRef = useRef(null);

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

    // Neural Network Lines Animation
    const svg = svgRef.current;
    const lines = [];
    const numLines = 20;

    for (let i = 0; i < numLines; i++) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("stroke", "rgba(0, 207, 255, 0.2)");
      line.setAttribute("stroke-width", "1");
      svg.appendChild(line);
      lines.push({
        el: line,
        x1: Math.random() * 100,
        y1: Math.random() * 100,
        x2: Math.random() * 100,
        y2: Math.random() * 100,
        speed: Math.random() * 0.2 + 0.1
      });
    }

    const animateLines = () => {
      lines.forEach(line => {
        line.x1 += (Math.random() - 0.5) * line.speed;
        line.y1 += (Math.random() - 0.5) * line.speed;
        line.x2 += (Math.random() - 0.5) * line.speed;
        line.y2 += (Math.random() - 0.5) * line.speed;

        // Bounce off edges
        if (line.x1 < 0 || line.x1 > 100) line.speed *= -1;
        if (line.y1 < 0 || line.y1 > 100) line.speed *= -1;

        line.el.setAttribute("x1", `${line.x1}%`);
        line.el.setAttribute("y1", `${line.y1}%`);
        line.el.setAttribute("x2", `${line.x2}%`);
        line.el.setAttribute("y2", `${line.y2}%`);
      });
      requestAnimationFrame(animateLines);
    };

    animateLines();

  }, []);

  const partners = [
    "CYBERDYNE", "TYRELL CORP", "MASSIVE DYNAMIC",
    "WEYLAND-YUTANI", "OSCORP", "STARK IND",
    "UMBRELLA CORP", "APERTURE SCI", "BLACK MESA"
  ];

  return (
    <div className="page-container">
      <div className="neural-bg">
        <svg ref={svgRef} width="100%" height="100%"></svg>
      </div>
      <h1 className="page-title glitch-effect" data-text="Collaborations">Collaborations</h1>

      <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px', color: '#ccc', fontSize: '1.2rem' }}>
        I collaborate with developers, designers, and creative minds working on futuristic, experimental, and interactive digital products. My focus is on projects that push boundaries and explore new visual languages.
      </p>

      {/* 3D Logo Wall */}
      <div className="logo-wall-container">
        <div ref={wallRef} className="logo-wall">
          {partners.map((partner, index) => (
            <div key={index} className="logo-tile">
              <div className="logo-glow"></div>
              <span className="logo-text">{partner}</span>
              <div className="connector-dot top"></div>
              <div className="connector-dot bottom"></div>
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
            <div className="card-scanline"></div>
          </Card>
          <Card title="Project: EXTREMIS" className="study-card">
            <p>Bio-enhancement protocol development.</p>
            <div className="status-indicator">STATUS: ACTIVE</div>
            <div className="card-scanline"></div>
          </Card>
        </div>
      </section>

      <style jsx>{`
        .page-container {
          padding: 150px 20px 50px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
          position: relative;
        }

        .neural-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
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
          gap: 60px;
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
          box-shadow: 0 0 30px rgba(0, 207, 255, 0.3);
          transform: translateZ(30px);
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

        .connector-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          background: var(--accent-blue);
          border-radius: 50%;
          box-shadow: 0 0 5px var(--accent-blue);
        }
        .top { top: -3px; left: 50%; transform: translateX(-50%); }
        .bottom { bottom: -3px; left: 50%; transform: translateX(-50%); }

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
          background: rgba(4, 247, 255, 0.1);
        }

        .card-scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(0, 207, 255, 0.1), transparent);
          background-size: 100% 3px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }

        .study-card:hover .card-scanline {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Partners;
