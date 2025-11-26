import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../components/Button';

const Contact = () => {
  const terminalRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Terminal Typing Effect
    const tl = gsap.timeline();
    tl.fromTo(terminalRef.current,
      { opacity: 0, scaleY: 0 },
      { opacity: 1, scaleY: 1, duration: 0.5, ease: "power2.out" }
    );

    // Map Rotation
    gsap.to(".wireframe-globe", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title glitch-effect" data-text="Initiate Contact Protocol">Initiate Contact Protocol</h1>
      <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '40px' }}>Let’s build something futuristic together.</p>

      <div className="contact-layout">
        {/* Terminal Form */}
        <div ref={terminalRef} className="terminal-window">
          <div className="terminal-header">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">COMM_UPLINK_V2.0 // SECURE</div>
          </div>

          <div className="terminal-body">
            <div className="line">&gt; INITIALIZING SECURE CONNECTION...</div>
            <div className="line">&gt; ENCRYPTION: AES-4096 [OK]</div>
            <div className="line">&gt; WAITING FOR INPUT...</div>
            <br />

            <form className="terminal-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input type="text" className="terminal-input" placeholder=" " required />
                <label className="floating-label">&gt; Name:</label>
                <div className="input-glow"></div>
              </div>
              <div className="input-group">
                <input type="email" className="terminal-input" placeholder=" " required />
                <label className="floating-label">&gt; Email:</label>
                <div className="input-glow"></div>
              </div>
              <div className="input-group">
                <textarea rows="4" className="terminal-input" placeholder=" " required></textarea>
                <label className="floating-label">&gt; Message:</label>
                <div className="input-glow"></div>
              </div>
              <Button variant="primary" className="send-btn">Transmit Message</Button>
            </form>
          </div>
        </div>

        {/* Wireframe Map */}
        <div className="info-panel">
          <div className="map-frame" ref={mapRef}>
            <div className="wireframe-globe">
              <div className="globe-grid"></div>
              <div className="globe-grid vertical"></div>
            </div>
            <div className="location-marker"></div>
            <div className="radar-sweep"></div>
            <div className="map-overlay-text">SECTOR 7G // ACTIVE</div>
          </div>

          <div className="coordinates">
            <h3>HQ COORDINATES</h3>
            <p className="coord-text">35.6762° N, 139.6503° E</p>
            <p className="coord-text">NEO-TOKYO // LEVEL 4</p>
            <div className="social-links">
              <a href="#" className="social-link">TWITTER_LINK</a>
              <a href="#" className="social-link">GITHUB_REPO</a>
              <a href="#" className="social-link">LINKEDIN_NET</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-container {
          padding: 150px 20px 50px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
          position: relative;
        }

        .page-title {
          font-size: 4rem;
          text-align: center;
          margin-bottom: 60px;
          font-family: var(--font-header);
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 50px;
        }

        /* Terminal Styles */
        .terminal-window {
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid var(--accent-blue);
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(0, 207, 255, 0.1);
          font-family: 'Courier New', monospace;
          position: relative;
        }

        .terminal-window::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px);
          pointer-events: none;
        }

        .terminal-header {
          background: rgba(0, 207, 255, 0.1);
          padding: 10px 15px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--accent-blue);
        }

        .dots { display: flex; gap: 8px; }
        .dot { width: 12px; height: 12px; border-radius: 50%; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }

        .terminal-title {
          margin-left: 20px;
          color: var(--accent-cyan);
          font-size: 0.9rem;
          letter-spacing: 1px;
        }

        .terminal-body {
          padding: 30px;
          color: var(--accent-cyan);
        }

        .line { margin-bottom: 5px; text-shadow: 0 0 5px var(--accent-cyan); }

        .input-group {
          position: relative;
          margin-bottom: 30px;
        }

        .terminal-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #333;
          color: #fff;
          font-family: 'Courier New', monospace;
          font-size: 1.1rem;
          padding: 10px 0;
          outline: none;
          transition: all 0.3s;
        }

        .terminal-input:focus {
          border-bottom-color: var(--accent-cyan);
        }

        .floating-label {
          position: absolute;
          top: 10px;
          left: 0;
          color: #666;
          pointer-events: none;
          transition: all 0.3s;
        }

        .terminal-input:focus ~ .floating-label,
        .terminal-input:not(:placeholder-shown) ~ .floating-label {
          top: -15px;
          font-size: 0.8rem;
          color: var(--accent-cyan);
        }

        .input-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
          transition: width 0.3s;
        }

        .terminal-input:focus ~ .input-glow {
          width: 100%;
        }

        /* Map Styles */
        .map-frame {
          height: 400px;
          border: 1px solid var(--accent-blue);
          position: relative;
          overflow: hidden;
          background: rgba(0, 10, 20, 0.8);
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .wireframe-globe {
          width: 250px;
          height: 250px;
          border: 1px solid rgba(0, 207, 255, 0.3);
          border-radius: 50%;
          position: relative;
          transform-style: preserve-3d;
        }

        .globe-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid rgba(0, 207, 255, 0.2);
          box-shadow: inset 0 0 20px rgba(0, 207, 255, 0.1);
        }

        .globe-grid.vertical {
          transform: rotateY(90deg);
        }

        .location-marker {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 15px #fff, 0 0 30px var(--accent-cyan);
          z-index: 10;
        }

        .radar-sweep {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          background: conic-gradient(from 0deg, transparent 0deg, rgba(0, 207, 255, 0.1) 60deg, transparent 60deg);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: radar 4s linear infinite;
          pointer-events: none;
        }

        @keyframes radar {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .map-overlay-text {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-family: var(--font-header);
          color: var(--accent-cyan);
          font-size: 0.8rem;
          background: rgba(0, 0, 0, 0.7);
          padding: 2px 5px;
        }

        .coordinates h3 {
          font-family: var(--font-header);
          color: var(--accent-purple);
          margin-bottom: 15px;
        }

        .coord-text {
          color: #ccc;
          font-family: 'Courier New', monospace;
          margin-bottom: 5px;
        }

        .social-links {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .social-link {
          color: var(--accent-blue);
          text-decoration: none;
          font-family: var(--font-header);
          border-left: 2px solid transparent;
          padding-left: 10px;
          transition: all 0.3s;
        }

        .social-link:hover {
          border-left-color: var(--accent-cyan);
          color: #fff;
          text-shadow: 0 0 10px var(--accent-cyan);
          padding-left: 20px;
        }

        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
