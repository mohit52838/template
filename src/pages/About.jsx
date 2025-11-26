import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../components/Card';
import HologramReveal from '../components/HologramReveal';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        // Timeline Animation
        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                    }
                }
            );
        });

        // Skills Grid Animation (Hexagons)
        gsap.from(".hex-skill", {
            scale: 0,
            opacity: 0,
            rotation: 180,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".skills-grid",
                start: "top 80%"
            }
        });
    }, []);

    return (
        <div ref={pageRef} className="page-container">
            {/* Intro Block */}
            <section className="about-intro neon-border-left">
                <div className="intro-text">
                    <h1 className="page-title glitch-effect" data-text="ABOUT NEONTECH">ABOUT NEONTECH</h1>
                    <p className="lead">Pioneering the digital frontier since 2042.</p>
                </div>
                <div className="intro-image">
                    <HologramReveal src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Founder" />
                </div>
            </section>

            {/* Timeline */}
            <section className="timeline-section">
                <h2 className="section-title neon-text-blue">OUR EVOLUTION</h2>
                <div className="timeline">
                    <div className="timeline-line"></div>
                    {[2042, 2045, 2048, 2050].map((year, i) => (
                        <div key={year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content">
                                <h3 className="neon-text-cyan">{year}</h3>
                                <p>Major milestone achieved in quantum computing integration.</p>
                            </div>
                            <div className="timeline-node"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Grid (Hexagons) */}
            <section className="skills-section neon-border-right">
                <h2 className="section-title neon-text-purple">CORE CAPABILITIES</h2>
                <div className="skills-grid">
                    {['AI', 'VR/AR', 'QUANTUM', 'BLOCKCHAIN', 'CYBERSEC', 'NEURAL', 'HOLO', 'NANO', 'BIO'].map((skill) => (
                        <div key={skill} className="hex-skill-wrapper">
                            <div className="hex-skill">
                                <div className="hex-inner">
                                    <span className="skill-text">{skill}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stats */}
            <section className="stats-section">
                <div className="stats-grid">
                    <Card title="Systems Online">
                        <div className="stat-value neon-text-blue">99.9%</div>
                    </Card>
                    <Card title="Data Processed">
                        <div className="stat-value neon-text-cyan">50PB</div>
                    </Card>
                    <Card title="Global Nodes">
                        <div className="stat-value neon-text-purple">10k+</div>
                    </Card>
                </div>
            </section>

            <style jsx>{`
        .page-container {
          padding-top: 100px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .neon-border-left {
          border-left: 2px solid var(--accent-blue);
          padding-left: 40px;
          position: relative;
        }
        
        .neon-border-left::before {
          content: '';
          position: absolute;
          top: 0;
          left: -2px;
          width: 2px;
          height: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
        }

        .neon-border-right {
          border-right: 2px solid var(--accent-purple);
          padding-right: 40px;
          position: relative;
        }

        .neon-border-right::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: -2px;
          width: 2px;
          height: 50%;
          background: var(--accent-blue);
          box-shadow: 0 0 10px var(--accent-blue);
        }

        .about-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          padding: 50px 20px;
          margin-bottom: 100px;
          background: linear-gradient(90deg, rgba(0, 207, 255, 0.05), transparent);
        }

        .page-title {
          font-size: 4rem;
          margin-bottom: 20px;
          font-family: var(--font-header);
        }

        .lead {
          font-size: 1.5rem;
          color: #ccc;
        }

        .section-title {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 80px;
          font-family: var(--font-header);
        }

        /* Timeline Styles */
        .timeline-section {
          position: relative;
          padding: 50px 20px;
          margin-bottom: 100px;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 100%;
          background: var(--accent-blue);
          box-shadow: 0 0 10px var(--accent-blue);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 20px 40px;
          margin-bottom: 50px;
        }

        .timeline-item.left { left: 0; text-align: right; }
        .timeline-item.right { left: 50%; text-align: left; }

        .timeline-content {
          background: rgba(0, 0, 0, 0.8);
          padding: 20px;
          border: 1px solid var(--accent-blue);
          border-radius: 0;
          position: relative;
          box-shadow: 0 0 15px rgba(0, 207, 255, 0.1);
        }
        
        .timeline-content::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          width: 10px;
          height: 10px;
          border-top: 2px solid var(--accent-cyan);
          border-left: 2px solid var(--accent-cyan);
        }

        .timeline-content::after {
          content: '';
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 10px;
          height: 10px;
          border-bottom: 2px solid var(--accent-cyan);
          border-right: 2px solid var(--accent-cyan);
        }

        .timeline-node {
          position: absolute;
          top: 20px;
          width: 20px;
          height: 20px;
          background: #000;
          border: 2px solid var(--accent-cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-cyan);
          z-index: 2;
        }

        .left .timeline-node { right: -10px; }
        .right .timeline-node { left: -10px; }

        /* Hex Skills Grid */
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          max-width: 900px;
          margin: 0 auto 100px;
        }

        .hex-skill-wrapper {
          width: 120px;
          height: 104px; /* width * 0.866 */
          position: relative;
        }

        .hex-skill {
          width: 100%;
          height: 100%;
          background: var(--accent-purple);
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          cursor: pointer;
        }

        .hex-inner {
          width: 96%;
          height: 96%;
          background: #000;
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .hex-skill:hover {
          filter: drop-shadow(0 0 10px var(--accent-purple));
          transform: scale(1.1);
        }

        .hex-skill:hover .hex-inner {
          background: rgba(108, 92, 231, 0.2);
        }

        .skill-text {
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 0.8rem;
          color: #fff;
          z-index: 2;
        }

        /* Stats */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          padding: 0 20px 100px;
        }

        .stat-value {
          font-size: 3rem;
          font-weight: 700;
          font-family: var(--font-header);
        }

        @media (max-width: 768px) {
          .about-intro { grid-template-columns: 1fr; }
          .timeline-line { left: 20px; }
          .timeline-item { width: 100%; padding-left: 60px; padding-right: 0; text-align: left; }
          .timeline-item.left, .timeline-item.right { left: 0; }
          .left .timeline-node, .right .timeline-node { left: 10px; right: auto; }
        }
      `}</style>
        </div>
    );
};

export default About;
