import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <span className="neon-text">NEON</span><span className="holo-text">TECH</span>
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
          background: rgba(0, 0, 0, 0.8);
          border-top: 1px solid var(--glass-border);
          padding: 50px 20px;
          margin-top: 100px;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-blue), transparent);
          box-shadow: 0 0 10px var(--accent-blue);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .footer-logo {
          font-family: var(--font-header);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .neon-text {
          color: var(--accent-blue);
          text-shadow: 0 0 10px var(--accent-blue);
        }

        .holo-text {
          color: var(--text-color);
          margin-left: 5px;
        }

        .footer-links {
          display: flex;
          gap: 30px;
        }

        .footer-links a {
          color: #ccc;
          text-decoration: none;
          font-family: var(--font-header);
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: var(--accent-cyan);
          text-shadow: 0 0 5px var(--accent-cyan);
        }

        .footer-social {
          display: flex;
          gap: 20px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          text-decoration: none;
          font-family: var(--font-header);
          font-size: 0.8rem;
          transition: all 0.3s;
        }

        .social-icon:hover {
          background: var(--accent-blue);
          color: #000;
          box-shadow: 0 0 15px var(--accent-blue);
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
