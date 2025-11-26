import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const gridRef = useRef(null);

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop", type: "wide", title: "Neon-themed UI Concepts" },
    { id: 2, src: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop", type: "tall", title: "Futuristic Layout Explorations" },
    { id: 3, src: "https://images.unsplash.com/photo-1558494949-efdeb6bf80d1?q=80&w=1000&auto=format&fit=crop", type: "wide", title: "Animation Tests & Motion Studies" },
    { id: 4, src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop", type: "tall", title: "Cyber Grid Background Experiments" },
    { id: 5, src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", type: "wide", title: "Prototype Screens of New Projects" },
    { id: 6, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", type: "tall", title: "Visual Experiments" },
  ];

  useEffect(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title glitch-effect" data-text="Gallery">Gallery</h1>

      <div ref={gridRef} className="masonry-grid">
        {images.map((img) => (
          <div key={img.id} className={`gallery-item ${img.type}`} onClick={() => setSelectedImage(img)}>
            <div className="img-wrapper">
              <img src={img.src} alt="Gallery Item" />
              <div className="scan-line-anim"></div>
            </div>
            <div className="item-overlay">
              <ZoomIn className="zoom-icon" size={32} />
              <span className="view-text">{img.title}</span>
            </div>
            <div className="corner-decor top-left"></div>
            <div className="corner-decor bottom-right"></div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt="Full View" />
            <div className="lightbox-controls">
              <button className="control-btn prev"><ChevronLeft /></button>
              <button className="control-btn next"><ChevronRight /></button>
            </div>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <div className="lightbox-ui">
              <div className="ui-line"></div>
              <div className="ui-text">IMG_SEQ_00{selectedImage.id} // HIGH_RES // ENCRYPTED</div>
              <div className="ui-line"></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .page-container {
          padding: 150px 20px 50px;
          max-width: 1400px;
          margin: 0 auto;
          min-height: 100vh;
        }

        .page-title {
          font-size: 4rem;
          text-align: center;
          margin-bottom: 60px;
          font-family: var(--font-header);
        }

        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 250px;
          gap: 20px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(0, 207, 255, 0.2);
          transition: all 0.3s;
          background: #000;
        }

        .gallery-item.tall {
          grid-row: span 2;
        }

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
          opacity: 0.8;
        }

        .scan-line-anim {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 50%;
          background: linear-gradient(to bottom, transparent, var(--accent-cyan), transparent);
          opacity: 0.5;
          transition: top 0.5s;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
          opacity: 1;
          filter: contrast(1.2) brightness(1.2);
        }

        .gallery-item:hover .scan-line-anim {
          top: 100%;
          transition: top 1s;
        }

        .item-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
          backdrop-filter: blur(2px);
          z-index: 2;
        }

        .gallery-item:hover .item-overlay {
          opacity: 1;
        }

        .zoom-icon {
          color: var(--accent-cyan);
          margin-bottom: 10px;
        }

        .view-text {
          font-family: var(--font-header);
          color: #fff;
          letter-spacing: 2px;
          font-size: 0.8rem;
        }

        .corner-decor {
          position: absolute;
          width: 15px;
          height: 15px;
          border-color: var(--accent-cyan);
          transition: all 0.3s;
          opacity: 0;
          z-index: 3;
        }

        .top-left { top: 10px; left: 10px; border-top: 2px solid; border-left: 2px solid; }
        .bottom-right { bottom: 10px; right: 10px; border-bottom: 2px solid; border-right: 2px solid; }

        .gallery-item:hover .corner-decor {
          opacity: 1;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          border: 1px solid var(--accent-blue);
          box-shadow: 0 0 50px rgba(0, 207, 255, 0.2);
          background: #000;
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 80vh;
          display: block;
        }

        .close-btn {
          position: absolute;
          top: -50px;
          right: -50px;
          background: transparent;
          border: 1px solid var(--accent-blue);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          cursor: pointer;
          transition: all 0.3s;
        }

        .close-btn:hover {
          background: var(--accent-blue);
          color: #000;
          box-shadow: 0 0 15px var(--accent-blue);
        }

        .lightbox-controls {
          position: absolute;
          top: 50%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .control-btn {
          pointer-events: auto;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid var(--accent-blue);
          color: var(--accent-blue);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          margin: 0 -60px;
        }

        .control-btn:hover {
          background: var(--accent-blue);
          color: #000;
        }

        .lightbox-ui {
          position: absolute;
          bottom: -40px;
          left: 0;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ui-line {
          flex-grow: 1;
          height: 1px;
          background: var(--accent-blue);
          box-shadow: 0 0 5px var(--accent-blue);
        }

        .ui-text {
          font-family: var(--font-header);
          color: var(--accent-cyan);
          font-size: 0.8rem;
          text-shadow: 0 0 5px var(--accent-cyan);
        }
      `}</style>
    </div>
  );
};

export default Gallery;
