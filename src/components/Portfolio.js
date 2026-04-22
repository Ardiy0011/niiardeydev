import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
        <Swiper
          slidesPerView={1.12}
          spaceBetween={14}
          centeredSlides={true}
          grabCursor={true}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
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
                  <img className="card-image" src={project.imageUrl} alt={project.title} loading="lazy" />
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Portfolio;
