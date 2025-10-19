import React from 'react';

const Skills = () => {
  return (
    <section className="features" id="features">
      <h2 className="section-title">Technical Skills Overview</h2>
      <div className="features-container">
        <div className="feature-content">
          <div className="content-panel active" id="performance">
            <h3>🧠 Core Programming Skills</h3>
            <ul className="feature-list">
              <li>JavaScript (ES6+) – Strong understanding of modern syntax, DOM manipulation, and interactive web features.</li>
              <li>PHP (Laravel Framework) – Experienced in building structured and secure web applications using MVC architecture.</li>
              <li>React.js – Proficient in developing dynamic and component-based user interfaces.</li>
              <li>Vite – Skilled in using Vite for rapid React development and optimized project builds.</li>
              <li>HTML5 & CSS3 – Solid foundation in creating responsive, semantic, and visually appealing front-end designs.</li>
            </ul>
          </div>
          <div className="content-panel" id="security">
            <h3>Military-Grade Security</h3>
            <p>Your data is protected by the most advanced encryption protocols available. Multi-layered security ensures complete protection against cyber threats. You may tell your friends about TemplateMo free css website and how easy it is.</p>
            <ul className="feature-list">
              <li>256-bit AES encryption</li>
              <li>Biometric authentication</li>
              <li>Zero-knowledge architecture</li>
              <li>Real-time threat detection</li>
              <li>Automated security updates</li>
            </ul>
          </div>
          <div className="content-panel" id="network">
            <h3>Global Neural Network</h3>
            <p>Connect to our worldwide infrastructure that spans across continents. Seamless integration with existing systems and future-proof architecture.</p>
            <ul className="feature-list">
              <li>200+ global data centers</li>
              <li>Intelligent routing algorithms</li>
              <li>Cross-platform compatibility</li>
              <li>5G and satellite connectivity</li>
              <li>Decentralized architecture</li>
            </ul>
          </div>
          <div className="content-panel" id="analytics">
            <h3>Advanced Analytics</h3>
            <p>Harness the power of AI-driven insights to make data-driven decisions. Real-time analytics and predictive modeling at your fingertips.</p>
            <ul className="feature-list">
              <li>Machine learning algorithms</li>
              <li>Predictive analytics</li>
              <li>Custom dashboard creation</li>
              <li>Real-time data visualization</li>
              <li>Automated reporting</li>
            </ul>
          </div>
          <div className="content-panel" id="integration">
            <h3>Seamless Integration</h3>
            <p>Connect with thousands of apps and services through our universal API. Built to work with your existing tools and workflows.</p>
            <ul className="feature-list">
              <li>RESTful API architecture</li>
              <li>WebSocket support</li>
              <li>SDK for major platforms</li>
              <li>One-click integrations</li>
              <li>Custom webhook support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
