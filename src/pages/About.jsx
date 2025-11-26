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

    const skills = [
        { name: "React.js", desc: "Dynamic Interface Engine" },
        { name: "Next.js", desc: "High-Performance Framework" },
        { name: "TailwindCSS", desc: "Utility-First Styling" },
        { name: "GSAP", desc: "Animation & Motion Control" },
        { name: "Framer Motion", desc: "Microinteractions & UI Motion" },
        { name: "JavaScript/TypeScript", desc: "Core Logic Systems" },
        { name: "Python", desc: "Backend & Automation" },
        { name: "Git/GitHub", desc: "Version Control Protocol" }
    ];

    return (
        <div className="about-page" ref={pageRef}>
            <div className="about-intro">
                <div className="neon-border-left">
                    <h1 className="page-title neon-text-cyan">About Me</h1>
                    <p className="lead">
                        I’m Mohit, a developer obsessed with futuristic interfaces, neon aesthetics, and building digital experiences that feel alive. I love mixing animation, interactivity, and technology to create cyber-themed, immersive websites.
                    </p>
                    <br />
                    <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                        I specialize in creating modern, interactive, and animated web experiences using React, Next.js, Tailwind, and GSAP. My work blends technology with visual storytelling — turning ordinary pages into futuristic environments. From neon-lit UI elements to hologram-inspired interactions, I’m constantly exploring new ways to bring creativity into development.
                        <br /><br />
                        Right now, I'm learning advanced UI/UX concepts, animation systems, 3D-like effects, and scalable front-end architecture so I can build visually stunning digital products.
                    </p>
                </div>
                <div className="neon-border-right">
                    <HologramReveal src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Profile" />
                </div>
            </div>

            <div className="timeline-section">
                <h2 className="section-title neon-text-blue">MY JOURNEY</h2>
                <div className="timeline">
                    <div className="timeline-line"></div>
                    <div className="timeline-item left">
                        <div className="timeline-node"></div>
                        <div className="timeline-content">
                            <h3 className="neon-text-purple">The Awakening</h3>
                            <p>Discovered the power of code. Started building simple constructs in the digital void.</p>
                        </div>
                    </div>
                    <div className="timeline-item right">
                        <div className="timeline-node"></div>
                        <div className="timeline-content">
                            <h3 className="neon-text-cyan">Frontend Mastery</h3>
                            <p>Mastered the React ecosystem. Began crafting complex user interfaces and dynamic experiences.</p>
                        </div>
                    </div>
                    <div className="timeline-item left">
                        <div className="timeline-node"></div>
                        <div className="timeline-content">
                            <h3 className="neon-text-blue">Full Stack Architect</h3>
                            <p>Building scalable, robust applications. Exploring the depths of backend systems and cloud infrastructure.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="section-title neon-text-purple">Tech Arsenal</h2>
                <div className="skills-grid">
                    {skills.map((skill, i) => (
                        <div className="hex-skill-wrapper" key={i}>
                            <div className="hex-skill">
                                <div className="hex-inner">
                                    <span className="skill-text">{skill.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="stats-section">
                <div className="stats-grid">
                    <div className="stat-item">
                        <div className="stat-value neon-text-cyan">2+</div>
                        <div className="stat-label">Years of Learning & Building</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value neon-text-purple">15+</div>
                        <div className="stat-label">Completed Mini Projects</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value neon-text-blue">8+</div>
                        <div className="stat-label">Technologies Used</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value neon-text-cyan">∞</div>
                        <div className="stat-label">Curiosity & Experimentation</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .about-page {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding-top: 100px;
                    color: #fff;
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
                    text-align: right;
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
                    text-align: center;
                }

                .stat-value {
                    font-size: 3rem;
                    font-weight: 700;
                    font-family: var(--font-header);
                }
                
                .stat-label {
                    color: #ccc;
                    margin-top: 10px;
                }

                @media(max-width: 768px) {
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
