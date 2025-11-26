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

        // Skills Grid Animation
        gsap.from(".skill-tile", {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".skills-grid",
                start: "top 80%"
            }
        });
    }, []);

    return (
        <div ref={pageRef} className="page-container">
            {/* Intro Block */}
            <section className="about-intro">
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

            {/* Skills Grid */}
            <section className="skills-section">
                <h2 className="section-title neon-text-purple">CORE CAPABILITIES</h2>
                <div className="skills-grid">
                    {['AI', 'VR/AR', 'QUANTUM', 'BLOCKCHAIN', 'CYBERSEC', 'NEURAL', 'HOLO', 'NANO', 'BIO'].map((skill) => (
                        <div key={skill} className="skill-tile">
                            <span className="skill-text">{skill}</span>
                            <div className="skill-glow"></div>
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

        .about-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          padding: 50px 20px;
          margin-bottom: 100px;
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
          background: var(--glass-bg);
          padding: 20px;
          border: 1px solid var(--glass-border);
          border-radius: 10px;
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

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 800px;
          margin: 0 auto 100px;
        }

        .skill-tile {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid var(--accent-purple);
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
        }

        .skill-tile:hover {
          background: var(--accent-purple);
          box-shadow: 0 0 20px var(--accent-purple);
        }

        .skill-text {
          font-family: var(--font-header);
          font-weight: 700;
          z-index: 2;
        }

        .skill-tile:hover .skill-text {
          color: #000;
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
