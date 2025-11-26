import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
    const navRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
        );
    }, []);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'PROJECTS', path: '/projects' },
        { name: 'GALLERY', path: '/gallery' },
        { name: 'PARTNERS', path: '/partners' },
        { name: 'CONTACT', path: '/contact' },
    ];

    return (
        <nav ref={navRef} className="navbar">
            <div className="logo">
                <span className="neon-text">NEON</span><span className="holo-text">TECH</span>
            </div>
            <ul className="nav-links">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                            <span className="link-underline"></span>
                        </Link>
                    </li>
                ))}
            </ul>

            <style jsx>{`
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          padding: 1rem 2rem;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          box-shadow: 0 0 20px rgba(0, 207, 255, 0.1);
        }

        .logo {
          font-family: var(--font-header);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
        }

        .neon-text {
          color: var(--accent-blue);
          text-shadow: 0 0 10px var(--accent-blue);
        }

        .holo-text {
          color: var(--text-color);
          margin-left: 5px;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          color: var(--text-color);
          text-decoration: none;
          font-family: var(--font-header);
          font-size: 0.9rem;
          letter-spacing: 1px;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--accent-cyan);
          text-shadow: 0 0 8px var(--accent-cyan);
        }

        .link-underline {
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-purple);
          box-shadow: 0 0 10px var(--accent-purple);
          transition: width 0.3s ease;
        }

        .nav-link:hover .link-underline, .nav-link.active .link-underline {
          width: 100%;
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          .nav-links {
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
