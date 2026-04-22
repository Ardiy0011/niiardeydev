import React from 'react';
import { motion } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = ({ onEnd }) => {
  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      onClick={onEnd}
    >
      {/* Smoke layers */}
      <div className="splash-smoke-container">
        <div className="smoke-layer smoke-1"></div>
        <div className="smoke-layer smoke-2"></div>
        <div className="smoke-layer smoke-3"></div>
        <div className="smoke-layer smoke-4"></div>
      </div>

      {/* Particle overlay */}
      <div className="splash-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <motion.div
        className="splash-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
      >
        <motion.h1
          className="splash-title"
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.15em' }}
          transition={{ delay: 0.8, duration: 2, ease: 'easeOut' }}
        >
          NII ARDEY DEV
        </motion.h1>
        <motion.div
          className="splash-divider"
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
        />
        <motion.h2
          className="splash-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 2, duration: 1.2, ease: 'easeOut' }}
        >
          PORTFOLIO: CORE GALLERY
        </motion.h2>
      </motion.div>

      {/* Click hint */}
      <motion.p
        className="splash-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3, duration: 1 }}
      >
        tap anywhere to enter
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;
