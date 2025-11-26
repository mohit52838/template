import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const btnRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const text = textRef.current;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(text, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to([btn, text], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button ref={btnRef} className={`neon-button ${variant} ${className}`} onClick={onClick}>
      <span ref={textRef} className="btn-content">{children}</span>
      <div className="btn-scanline"></div>
      <div className="btn-glow"></div>

      <style jsx>{`
        .neon-button {
          position: relative;
          padding: 15px 40px;
          font-family: var(--font-header);
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid var(--accent-blue);
          color: var(--accent-blue);
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.3s ease, color 0.3s ease;
          z-index: 1;
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        }

        .neon-button.secondary {
          border-color: var(--accent-purple);
          color: var(--accent-purple);
        }

        .neon-button:hover {
          background: rgba(0, 207, 255, 0.1);
          box-shadow: 0 0 20px rgba(0, 207, 255, 0.4);
          text-shadow: 0 0 8px var(--accent-blue);
        }

        .neon-button.secondary:hover {
          background: rgba(108, 92, 231, 0.1);
          box-shadow: 0 0 20px rgba(108, 92, 231, 0.4);
          text-shadow: 0 0 8px var(--accent-purple);
        }

        .btn-scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 207, 255, 0.1) 51%, transparent 52%);
          background-size: 100% 4px;
          pointer-events: none;
          z-index: -1;
        }

        .btn-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.3s, transform 0.3s;
          pointer-events: none;
        }

        .neon-button:hover .btn-glow {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </button>
  );
};

export default Button;
