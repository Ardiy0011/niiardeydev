import React from 'react';
import { motion } from 'framer-motion';
import selfImage from '../images/self.jpg';
import './About.css';

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="about-image-container"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="about-smoke about-smoke-1" />
        <div className="about-smoke about-smoke-2" />
        <div className="about-image-wrapper">
          <img className="about-self-image" src={selfImage} alt="Nii Ardey Dev" />
        </div>
      </motion.div>

      <motion.div
        className="about-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="about-name">Nii Ardey Dev</h2>
        <p className="about-tagline">
          Software engineer who crafts digital experiences.
        </p>
      </motion.div>

      <motion.a
        className="about-phone"
        href="tel:0241934584"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        024 193 4584
      </motion.a>
    </motion.div>
  );
};

export default About;
