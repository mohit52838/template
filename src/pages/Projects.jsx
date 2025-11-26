import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Card from '../components/Card';
import Button from '../components/Button';

const Projects = () => {
  const [filter, setFilter] = useState('ALL');
  const gridRef = useRef(null);

  const projects = [
    { id: 1, title: "Neon Portfolio V2", category: "React", img: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop", desc: "Cyber Interface with TRON aesthetics." },
    { id: 2, title: "Mandala Maker", category: "Creative", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", desc: "Symmetry Art Generator using p5.js." },
    { id: 3, title: "SmartConnect", category: "App", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop", desc: "Digital Empowerment Platform." },
    { id: 4, title: "Disaster Mgmt", category: "Web App", img: "https://images.unsplash.com/photo-1558494949-efdeb6bf80d1?q=80&w=1000&auto=format&fit=crop", desc: "Real-Time Map System." },
  ];

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.category === filter || filter === 'ALL');

  useEffect(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }
    );
  }, [filter]);

  return (
    <div className="page-container">
      <div className="cyber-grid-overlay"></div>
      <h1 className="page-title glitch-effect" data-text="Featured Projects">Featured Projects</h1>

      {/* Filter Bar */}
      <div className="filter-bar">
        {['ALL', 'React', 'Creative', 'App', 'Web App'].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            <span className="btn-text">{cat}</span>
            <div className="btn-glitch"></div>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div ref={gridRef} className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card-wrapper">
            <Card title={project.title} className="project-card">
              <div className="project-thumb" style={{ backgroundImage: `url(${project.img})` }}>
                <div className="scan-overlay"></div>
                <div className="hologram-pulse"></div>
              </div>
              <div className="project-meta">
                <div>
                  <span className="project-cat" style={{ display: 'block', marginBottom: '5px' }}>{project.category}</span>
                  <p style={{ fontSize: '0.8rem', color: '#aaa' }}>{project.desc}</p>
                </div>
                <Button variant="secondary" className="view-btn">View</Button>
              </div>
              <div className="animated-corner top-left"></div>
              <div className="animated-corner bottom-right"></div>
            </Card>
          </div>
        ))}
      </div>

      <style jsx>{`
        .page-container {
          padding: 150px 20px 50px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
          position: relative;
        }

        .cyber-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 207, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 207, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
          z-index: -1;
        }

        .page-title {
          font-size: 4rem;
          text-align: center;
          margin-bottom: 50px;
          font-family: var(--font-header);
        }

        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid var(--glass-border);
          color: #888;
          padding: 10px 25px;
          font-family: var(--font-header);
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
        }

        .filter-btn:hover, .filter-btn.active {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(4, 247, 255, 0.3);
          background: rgba(4, 247, 255, 0.1);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .project-card-wrapper {
          perspective: 1000px;
        }

        .project-thumb {
          height: 200px;
          background-size: cover;
          background-position: center;
          margin-bottom: 20px;
          position: relative;
          border: 1px solid var(--glass-border);
          overflow: hidden;
        }

        .scan-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 50%);
          background-size: 100% 4px;
          opacity: 0.5;
          pointer-events: none;
        }

        .hologram-pulse {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 207, 255, 0.2), transparent);
          transform: skewX(-20deg);
          animation: holoPulse 3s infinite;
        }

        @keyframes holoPulse {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .project-cat {
          color: var(--accent-purple);
          font-size: 0.9rem;
          letter-spacing: 1px;
        }

        .view-btn {
          padding: 8px 20px !important;
          font-size: 0.8rem !important;
        }

        /* Animated Corners */
        .animated-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: var(--accent-cyan);
          transition: all 0.3s;
          opacity: 0.5;
        }

        .top-left {
          top: -2px;
          left: -2px;
          border-top: 2px solid;
          border-left: 2px solid;
        }

        .bottom-right {
          bottom: -2px;
          right: -2px;
          border-bottom: 2px solid;
          border-right: 2px solid;
        }

        .project-card-wrapper:hover .animated-corner {
          width: 100%;
          height: 100%;
          opacity: 1;
          box-shadow: inset 0 0 20px rgba(0, 207, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Projects;
