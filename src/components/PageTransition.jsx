import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
    const location = useLocation();
    const containerRef = useRef(null);
    const wipeRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Reset wipe
        gsap.set(wipeRef.current, { scaleY: 1, transformOrigin: "bottom" });

        // Wipe out (reveal content)
        tl.to(wipeRef.current, {
            scaleY: 0,
            duration: 0.8,
            ease: "power4.inOut",
            transformOrigin: "top"
        });

        return () => {
            // Cleanup if needed
        };
    }, [location]);

    return (
        <div ref={containerRef} className="page-transition-container">
            <div ref={wipeRef} className="page-wipe"></div>
            {children}

            <style jsx>{`
        .page-transition-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
        }

        .page-wipe {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--accent-blue);
          z-index: 9999;
          pointer-events: none;
        }
      `}</style>
        </div>
    );
};

export default PageTransition;
