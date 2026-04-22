import React from 'react';
import './SmokeBackground.css';

const SmokeBackground = () => {
  return (
    <div className="smoke-bg">
      <div className="smoke-bg-layer smoke-bg-1"></div>
      <div className="smoke-bg-layer smoke-bg-2"></div>
      <div className="smoke-bg-layer smoke-bg-3"></div>
      <div className="smoke-bg-layer smoke-bg-4"></div>
      <div className="smoke-bg-layer smoke-bg-5"></div>
      <div className="smoke-vignette"></div>
      <div className="smoke-grain"></div>
    </div>
  );
};

export default SmokeBackground;
