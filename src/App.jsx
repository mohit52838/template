import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Custom Cursor Logic
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0 });
    };

    const handleHover = () => cursor.classList.add('hovered');
    const handleUnhover = () => cursor.classList.remove('hovered');

    window.addEventListener('mousemove', moveCursor);

    // Add hover listeners to clickable elements
    const clickables = document.querySelectorAll('a, button, .clickable');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    // Particle Generation
    const particlesContainer = document.querySelector('.particles-container');
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
      }
    }

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        <div ref={cursorRef} className="custom-cursor"></div>
        <div ref={dotRef} className="cursor-dot"></div>

        <div className="hex-grid-bg"></div>
        <div className="particles-container"></div>
        <div className="scan-lines"></div>
        <div className="vignette"></div>

        <Navbar />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
