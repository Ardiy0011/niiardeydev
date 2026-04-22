import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Portfolio.css';
import compactempImage from '../images/dev/compactemp.jpg';
import p2pImage from '../images/dev/p2prevamp1.jpg';
import skrentalsImage from '../images/dev/skrentalimg.jpg';
import addoImage from '../images/dev/addo-addo.jpg';
import kaevalImage from '../images/dev/kaeval.jpg';
import fretlockerImage from '../images/dev/fretlockerofficail.png';
import kudiImage from '../images/dev/kudi-k.jpg';
import nostalImage from '../images/dev/nostal.jpg';
import artisanImage from '../images/dev/a-hound.png';

const accent = {
  text: '#d2ffff',
  border: 'rgba(64, 224, 208, 0.35)',
  start: 'rgba(64, 224, 208, 0.13)',
  end: 'rgba(17, 124, 124, 0.16)',
};

const projects = [
  {
    id: 1,
    title: 'CompactEmp',
    year: '2025',
    category: 'HR Platform',
    description: 'HR platform for onboarding, payroll, and team ops.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    url: 'http://compact-tempt.vercel.app/',
    imageUrl: compactempImage,
    accent,
  },
  {
    id: 2,
    title: 'P2P Logistics',
    year: '2024',
    category: 'Logistics App',
    description: 'UK-Ghana shipping app for fast parcel delivery.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    url: 'https://p2p-ui-uat.vercel.app',
    imageUrl: p2pImage,
    accent,
  },
  {
    id: 3,
    title: 'Skrentals',
    year: '2024',
    category: 'Car Rental',
    description: 'Car rental platform for web and mobile bookings.',
    tech: ['React', 'TypeScript', 'Node.js', 'Flutter'],
    url: 'https://skrentals-frontend-git-main-ardiy0011s-projects.vercel.app',
    imageUrl: skrentalsImage,
    accent,
  },
  {
    id: 4,
    title: 'Addo-Addo Legal',
    year: '2024',
    category: 'Law Firm',
    description: 'Law firm site for litigation and property services.',
    tech: ['React', 'Next.js', 'Node.js', 'JavaScript'],
    url: 'https://addo-addo.com/',
    imageUrl: addoImage,
    accent,
  },
  {
    id: 5,
    title: 'KAEVAL',
    year: '2023',
    category: 'Career Guidance',
    description: 'Career guidance app using RIASEC and MBTI models.',
    tech: ['React', 'JavaScript', 'Node.js', 'PostgreSQL'],
    url: 'https://kaeval.luminatecs.com',
    imageUrl: kaevalImage,
    accent,
  },
  {
    id: 6,
    title: 'Fretlocker',
    year: '2023',
    category: 'Auction App',
    description: 'Guitar auction app for bidding and listings.',
    tech: ['Django', 'JavaScript', 'PostgreSQL', 'AWS'],
    url: 'https://fretlocker.onrender.com/',
    imageUrl: fretlockerImage,
    accent,
  },
  {
    id: 7,
    title: 'Kudi-Crypto',
    year: '2023',
    category: 'Crypto Tracker',
    description: 'Crypto tracker with real-time market data.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    url: 'https://kudi-crypto.netlify.app/',
    imageUrl: kudiImage,
    accent,
  },
  {
    id: 8,
    title: 'Nostal-Console',
    year: '2022',
    category: 'Arcade Games',
    description: 'Arcade web app with classic retro games.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    url: 'https://nostal-arcade.netlify.app/',
    imageUrl: nostalImage,
    accent,
  },
  {
    id: 9,
    title: 'Artisan-Hound',
    year: '2022',
    category: 'Service Finder',
    description: 'Find nearby artisans and services by location.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    url: 'https://artisan-hound.netlify.app/',
    imageUrl: artisanImage,
    accent,
  },
];

const DevPortfolio = () => {
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
          DEVELOPER
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

export default DevPortfolio;
