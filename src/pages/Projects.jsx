import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Card from '../components/Card';
import Button from '../components/Button';

const Projects = () => {
  const [filter, setFilter] = useState('ALL');
  const gridRef = useRef(null);

  const projects = [
    { id: 1, title: "Cyber City", category: "VR", img: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, title: "Neon Grid", category: "BLOCKCHAIN", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, title: "Holo-UI", category: "UI/UX", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, title: "Quantum Net", category: "SECURITY", img: "https://images.unsplash.com/photo-1558494949-efdeb6bf80d1?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, title: "AI Core", category: "AI", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, title: "Space Link", category: "NETWORK", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" },
  ];

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }
    );
  }, [filter]);

  return (
    <div className="page-container">
      <h1 className="page-title glitch-effect" data-text="PROJECTS">PROJECTS</h1>

      {/* Filter Bar */}
      <div className="filter-bar">
        {['ALL', 'VR', 'AI', 'BLOCKCHAIN', 'UI/UX'].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div ref={gridRef} className="projects-grid">
        {filteredProjects.map((project) => (
          <Card key={project.id} title={project.title} className="project-card">
            <div className="project-thumb" style={{ backgroundImage: `url(${project.img})` }}>
              <div className="scan-overlay"></div>
            </div>
            <div className="project-meta">
              <span className="project-cat">{project.category}</span>
              <Button variant="secondary" className="view-btn">View Data</Button>
            </div>
          </Card>
        ))}
      </div>

      <style jsx>{`
        .page-container {
          padding: 150px 20px 50px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
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
          background: transparent;
          border: 1px solid var(--glass-border);
          color: #888;
          padding: 10px 25px;
          font-family: var(--font-header);
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .filter-btn:hover, .filter-btn.active {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(4, 247, 255, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .project-thumb {
          height: 200px;
          background-size: cover;
          background-position: center;
          margin-bottom: 20px;
          position: relative;
          border: 1px solid var(--glass-border);
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
      `}</style>
    </div>
  );
};

export default Projects;
