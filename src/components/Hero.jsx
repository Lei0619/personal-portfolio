import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="text-rotator">
          <div className="text-set active">
            <h1 className="glitch-text" data-text="FUTURE IS NOW">FUTURE IS NOW</h1>
            <p className="subtitle">Hi, I'm <strong>Lei Ann Judea Dico</strong> and here is my portfolio</p>
          </div>
          <div className="text-set">
            <h1 className="glitch-text" data-text="BEYOND LIMITS">BEYOND LIMITS</h1>
            <p className="subtitle">Where technology meets infinite possibilities</p>
          </div>
          <div className="text-set">
            <h1 className="glitch-text" data-text="ELECTRIC DREAMS">ELECTRIC DREAMS</h1>
            <p className="subtitle">Powering tomorrow's digital revolution today</p>
          </div>
        </div>
      </div>
      <div className="cta-container">
        <a href="#features" className="cta-button cta-primary">Skills</a>
        <a href="#about" className="cta-button cta-secondary">About Me</a>
      </div>
    </section>
  );
};

export default Hero;
