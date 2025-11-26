import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../components/Button';

const Contact = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    // Terminal Typing Effect
    const tl = gsap.timeline();
    tl.fromTo(terminalRef.current,
      { opacity: 0, scaleY: 0 },
      { opacity: 1, scaleY: 1, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title glitch-effect" data-text="ESTABLISH UPLINK">ESTABLISH UPLINK</h1>

      <div className="contact-layout">
        {/* Terminal Form */}
        <div ref={terminalRef} className="terminal-window">
          <div className="terminal-header">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">COMM_UPLINK_V2.0</div>
          </div>

          <div className="terminal-body">
            <div className="line">&gt; INITIALIZING SECURE CONNECTION...</div>
            <div className="line">&gt; ENCRYPTION: AES-4096 [OK]</div>
            <div className="line">&gt; WAITING FOR INPUT...</div>
            <br />

            <form className="terminal-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label>&gt; ID_NAME:</label>
                <input type="text" className="terminal-input" autoFocus />
              </div>
              <div className="input-group">
                <label>&gt; CONTACT_FREQ:</label>
                <input type="email" className="terminal-input" />
              </div>
              <div className="input-group">
                <label>&gt; DATA_PACKET:</label>
                <textarea rows="4" className="terminal-input"></textarea>
              </div>
              <Button variant="primary" className="send-btn">TRANSMIT DATA</Button>
            </form>
          </div>
        </div>

        {/* Map / Info */}
        <div className="info-panel">
          <div className="map-frame">
            <div className="grid-map"></div>
            <div className="location-marker"></div>
            <div className="radar-sweep"></div>
          </div>

          <div className="coordinates">
            <h3>HQ COORDINATES</h3>
            <p>35.6762° N, 139.6503° E</p>
            <p>SECTOR 7G, NEO-TOKYO</p>
          </div>
        </div>
      </div>

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
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid #333;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
          font-family: 'Courier New', monospace;
        }

        .terminal-header {
          background: #111;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #333;
        }

        .dots { display: flex; gap: 8px; }
        .dot { width: 12px; height: 12px; border-radius: 50%; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }

        .terminal-title {
          margin-left: 20px;
          color: #888;
          font-size: 0.9rem;
        }

        .terminal-body {
          padding: 20px;
          color: var(--accent-cyan);
        }

        .line { margin-bottom: 5px; }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          margin-bottom: 5px;
          color: var(--accent-blue);
        }

        .terminal-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #333;
          color: #fff;
          font-family: 'Courier New', monospace;
          font-size: 1.1rem;
          padding: 5px 0;
          outline: none;
        }

        .terminal-input:focus {
          border-bottom-color: var(--accent-cyan);
        }

        /* Map Styles */
        .map-frame {
          height: 300px;
          border: 1px solid var(--accent-blue);
          position: relative;
          overflow: hidden;
          background: rgba(0, 20, 40, 0.5);
          margin-bottom: 30px;
        }

        .grid-map {
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 207, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 207, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .location-marker {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          background: var(--accent-cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-cyan);
          transform: translate(-50%, -50%);
        }

        .radar-sweep {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          background: conic-gradient(from 0deg, transparent 0deg, rgba(0, 207, 255, 0.2) 60deg, transparent 60deg);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: radar 4s linear infinite;
        }

        @keyframes radar {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .coordinates h3 {
          font-family: var(--font-header);
          color: var(--accent-purple);
          margin-bottom: 10px;
        }

        .coordinates p {
          color: #ccc;
          font-family: 'Courier New', monospace;
        }

        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
