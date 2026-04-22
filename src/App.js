import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Portfolio from './components/Portfolio';
import DevPortfolio from './components/DevPortfolio';
import About from './components/About';
import Navigation from './components/Navigation';
import SmokeBackground from './components/SmokeBackground';
import selfImage from './images/self.jpg';
import './App.css';

function MainView() {
  const [activeTab, setActiveTab] = useState('portfolio');
  const location = useLocation();
  const mode = location.pathname.startsWith('/dev') ? 'dev' : 'wed';

  useEffect(() => {
    setActiveTab('portfolio');
  }, [mode]);

  return (
    <div className="main-content" key="main">
      <SmokeBackground />
      <div className="content-wrapper">
        <AnimatePresence mode="wait">
          {activeTab === 'portfolio' && (
            mode === 'dev'
              ? <DevPortfolio key="dev-portfolio" />
              : <Portfolio key="portfolio" />
          )}
          {activeTab === 'about' && <About key="about" />}
        </AnimatePresence>
      </div>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const iconRels = ['icon', 'shortcut icon', 'apple-touch-icon'];

    iconRels.forEach((rel) => {
      let link = document.querySelector(`link[rel='${rel}']`);

      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }

      link.setAttribute('href', selfImage);
    });
  }, []);

  const handleSplashEnd = () => setShowSplash(false);

  return (
    <BrowserRouter>
      <div className="app">
        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen key="splash" onEnd={handleSplashEnd} />
          ) : (
            <Routes>
              <Route path="/" element={<div />} />
              <Route path="/wed" element={<MainView />} />
              <Route path="/dev" element={<MainView />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
