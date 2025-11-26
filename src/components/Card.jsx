import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Card = ({ title, children, className = '' }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)"
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={`holo-card ${className}`}>
      <div ref={contentRef} className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        <div className="card-body">
          {children}
        </div>
      </div>

      {/* Holographic Markers */}
      <div className="marker top-left"></div>
      <div className="marker top-right"></div>
      <div className="marker bottom-left"></div>
      <div className="marker bottom-right"></div>

      <div className="scan-line"></div>

      <style jsx>{`
        .holo-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transform-style: preserve-3d;
          transition: box-shadow 0.3s ease;
        }

        .holo-card:hover {
          box-shadow: 0 0 30px rgba(0, 207, 255, 0.15);
          border-color: rgba(0, 207, 255, 0.3);
        }

        .card-content {
          transform: translateZ(20px); /* Depth for content */
        }

        .card-title {
          font-family: var(--font-header);
          color: var(--accent-cyan);
          margin-bottom: 20px;
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 0 0 5px rgba(4, 247, 255, 0.5);
        }

        .card-body {
          color: #ccc;
          line-height: 1.6;
        }

        .marker {
          position: absolute;
          width: 10px;
          height: 10px;
          border-color: var(--accent-blue);
          transition: all 0.3s ease;
          opacity: 0.5;
        }

        .top-left { top: 0; left: 0; border-top: 2px solid; border-left: 2px solid; }
        .top-right { top: 0; right: 0; border-top: 2px solid; border-right: 2px solid; }
        .bottom-left { bottom: 0; left: 0; border-bottom: 2px solid; border-left: 2px solid; }
        .bottom-right { bottom: 0; right: 0; border-bottom: 2px solid; border-right: 2px solid; }

        .holo-card:hover .marker {
          width: 20px;
          height: 20px;
          opacity: 1;
          box-shadow: 0 0 10px var(--accent-blue);
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: rgba(0, 207, 255, 0.3);
          opacity: 0;
          pointer-events: none;
          filter: blur(2px);
        }

        .holo-card:hover .scan-line {
          animation: scan 2s linear infinite;
          opacity: 0.5;
        }

        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Card;
