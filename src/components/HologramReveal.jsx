import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HologramReveal = ({ src, alt, className = '' }) => {
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(containerRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.5 }
        )
            .to(overlayRef.current, {
                height: "0%",
                duration: 1,
                ease: "power2.inOut"
            })
            .fromTo(imgRef.current,
                { filter: "grayscale(100%) brightness(2)" },
                { filter: "grayscale(0%) brightness(1)", duration: 0.5 },
                "-=0.5"
            );

    }, []);

    return (
        <div ref={containerRef} className={`holo-reveal ${className}`}>
            <img ref={imgRef} src={src} alt={alt} className="holo-img" />
            <div ref={overlayRef} className="holo-overlay"></div>
            <div className="scan-lines"></div>

            <style jsx>{`
        .holo-reveal {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--accent-cyan);
          box-shadow: 0 0 15px rgba(0, 207, 255, 0.2);
        }

        .holo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .holo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--accent-cyan);
          mix-blend-mode: overlay;
          z-index: 2;
        }

        .scan-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 51%);
          background-size: 100% 4px;
          z-index: 3;
          pointer-events: none;
          opacity: 0.3;
        }
      `}</style>
        </div>
    );
};

export default HologramReveal;
