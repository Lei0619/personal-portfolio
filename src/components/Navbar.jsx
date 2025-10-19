import React from 'react';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="nav-container">
        <a href="#home" className="logo-link">
          <svg className="logo-svg" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF5E00', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00B2FF', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <polygon points="20,2 38,14 38,26 20,38 2,26 2,14" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
            <polygon points="20,8 32,16 32,24 20,32 8,24 8,16" fill="url(#logoGradient)" opacity="0.3" />
            <circle cx="20" cy="20" r="3" fill="url(#logoGradient)" />
          </svg>
          <span className="logo-text">MY PORTFOLIO</span>
        </a>
        <ul className="nav-links" id="navLinks">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#features" className="nav-link">Skills</a></li>
          <li><a href="#performance" className="nav-link">Project</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#resume" className="nav-link">Resume</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="menu-toggle" id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
