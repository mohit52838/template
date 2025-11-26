import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid-overlay"></div>
      <div className="footer-content">
        <div className="footer-logo">
          <span className="neon-text-blue">NEON</span><span className="holo-text">TECH</span>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">TW</a>
          <a href="#" className="social-icon">IN</a>
          <a href="#" className="social-icon">GH</a>
        </div>
        <div className="footer-copy">
          &copy; 2025 NeonTech Industries. All rights reserved.
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: #000;
          border-top: 2px solid var(--accent-blue);
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .footer-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 207, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 207, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
          animation: footerGrid 10s linear infinite;
        }

        @keyframes footerGrid {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        .footer-logo {
          font-family: var(--font-header);
          font-size: 2rem;
          font-weight: 700;
          text-shadow: 0 0 15px var(--accent-blue);
        }

        .holo-text {
          color: #fff;
          margin-left: 5px;
        }

        .footer-links {
          display: flex;
          gap: 40px;
          position: relative;
        }

        .footer-links::before, .footer-links::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 50px;
          height: 1px;
          background: var(--accent-cyan);
          box-shadow: 0 0 5px var(--accent-cyan);
        }

        .footer-links::before { right: 100%; margin-right: 20px; }
        .footer-links::after { left: 100%; margin-left: 20px; }

        .footer-links a {
          color: #ccc;
          text-decoration: none;
          font-family: var(--font-header);
          transition: color 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-links a:hover {
          color: var(--accent-cyan);
          text-shadow: 0 0 10px var(--accent-cyan);
        }

        .footer-social {
          display: flex;
          gap: 20px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border: 1px solid var(--accent-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          text-decoration: none;
          font-family: var(--font-header);
          font-size: 0.8rem;
          transition: all 0.3s;
          background: rgba(0, 0, 0, 0.5);
        }

        .social-icon:hover {
          background: var(--accent-blue);
          color: #000;
          box-shadow: 0 0 20px var(--accent-blue);
          transform: scale(1.1);
        }

        .footer-copy {
          font-size: 0.8rem;
          color: #666;
          margin-top: 20px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
