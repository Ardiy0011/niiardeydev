import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import './Portfolio.css';
import nedsImage from '../images/neds.jpg';
import josephAndGeraldineImage from '../images/josephngeraldine.jpg';
import fiipoksImage from '../images/fiipoks.jpg';

const projects = [
  {
    id: 1,
    title: 'Joseph & Geraldine',
    year: '2024',
    category: 'Wedding Website',
    description: 'Elegant black-and-gold wedding experience with RSVP flow and immersive photo-led storytelling.',
    tech: ['React', 'RSVP', 'Animation'],
    url: 'https://joseph-x-geri-git-main-ardiy0011s-projects.vercel.app/',
    imageUrl: josephAndGeraldineImage,
    accent: {
      text: '#d2ffff',
      border: 'rgba(64, 224, 208, 0.35)',
      start: 'rgba(64, 224, 208, 0.13)',
      end: 'rgba(17, 124, 124, 0.16)',
    },
  },
  {
    id: 2,
    title: 'FiiFii & Pokuah',
    year: '2026',
    category: 'Wedding Website',
    description: 'Moody black-and-gold hero experience with cinematic portrait styling and live wedding countdown.',
    tech: ['React', 'Countdown', 'Design'],
    url: 'https://fiiwedspoks.vercel.app/',
    imageUrl: fiipoksImage,
    accent: {
      text: '#f2dd9d',
      border: 'rgba(196, 160, 82, 0.45)',
      start: 'rgba(196, 160, 82, 0.22)',
      end: 'rgba(87, 62, 22, 0.24)',
    },
  },
  {
    id: 3,
    title: 'E & N Wedding',
    year: '2024',
    category: 'Wedding Website',
    description: 'Coastal visual style wedding page with RSVP journey, romantic typography, and minimal interactions.',
    tech: ['React', 'UI Motion', 'RSVP'],
    url: 'https://e-x-n-wed-git-main-ardiy0011s-projects.vercel.app/',
    imageUrl: nedsImage,
    accent: {
      text: '#d2ffff',
      border: 'rgba(64, 224, 208, 0.35)',
      start: 'rgba(64, 224, 208, 0.13)',
      end: 'rgba(17, 124, 124, 0.16)',
    },
  },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);
  const viewportRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const lastIdx = useRef(0);

  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) {
        setSlideWidth(viewportRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const unsubscribe = x.on('change', (latest) => {
      if (slideWidth > 0) {
        const idx = Math.round(-latest / slideWidth);
        const clamped = Math.max(0, Math.min(idx, projects.length - 1));
        if (clamped !== lastIdx.current) {
          lastIdx.current = clamped;
          setActiveIndex(clamped);
        }
      }
    });
    return unsubscribe;
  }, [x, slideWidth]);

  const handleDragEnd = (_, info) => {
    const currentX = x.get();
    const vx = info.velocity.x;
    const sw = slideWidth || 300;

    const projected = currentX + vx * 0.35;

    let target = Math.round(-projected / sw);
    target = Math.max(0, Math.min(target, projects.length - 1));

    lastIdx.current = target;
    setActiveIndex(target);
    animate(x, -target * sw, {
      type: 'spring',
      velocity: vx,
      stiffness: 80,
      damping: 20,
      mass: 0.8,
      restDelta: 0.5,
    });
  };

  return (
    <motion.div
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="portfolio-header">
        <motion.p
          className="portfolio-label"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          WEDDINGS
        </motion.p>
        <motion.h1
          className="portfolio-brand"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Nii Ardey <span>Dev</span>
        </motion.h1>
      </div>

      <div className="slider-section">
        <div className="slider-viewport" ref={viewportRef}>
          <motion.div
            className="slider-track"
            style={{ x }}
            drag="x"
            dragConstraints={{
              left: -(projects.length - 1) * (slideWidth || 300),
              right: 0,
            }}
            dragElastic={0.12}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
          >
            {projects.map((project) => (
              <div className="slide-wrapper" key={project.id}>
                <div
                  className="project-card"
                  style={{
                    '--card-accent-text': project.accent.text,
                    '--card-accent-border': project.accent.border,
                    '--card-accent-start': project.accent.start,
                    '--card-accent-end': project.accent.end,
                  }}
                >
                  <div className="card-visual">
                    <div className="card-smoke-layer card-smoke-1" />
                    <div className="card-smoke-layer card-smoke-2" />
                    <img className="card-image" src={project.imageUrl} alt={project.title} loading="lazy" />
                    <div className="card-noise" />
                  </div>

                  <div className="card-content">
                    <h2 className="card-title">{project.title}</h2>
                    <p className="card-meta">{project.year} &middot; {project.category}</p>
                    <p className="card-description">{project.description}</p>
                    <div className="card-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                    <a className="card-link" href={project.url} target="_blank" rel="noreferrer">
                      Open Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="slider-pagination">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`pagination-dot ${i === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
