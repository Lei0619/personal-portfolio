import React from 'react';

const Features = () => {
  return (
    <section className="features" id="features">
      <h2 className="section-title">Core Features</h2>
      <div className="features-container">
        <div className="feature-tabs">
          <div className="tab-item active" data-tab="performance">
            <span className="tab-icon">⚡</span>
            <span>Performance</span>
          </div>
          <div className="tab-item" data-tab="security">
            <span className="tab-icon">🔒</span>
            <span>Security</span>
          </div>
          <div className="tab-item" data-tab="network">
            <span className="tab-icon">🌐</span>
            <span>Network</span>
          </div>
          <div className="tab-item" data-tab="analytics">
            <span className="tab-icon">📊</span>
            <span>Analytics</span>
          </div>
          <div className="tab-item" data-tab="integration">
            <span className="tab-icon">🔧</span>
            <span>Integration</span>
          </div>
        </div>
        <div className="feature-content">
          <div className="content-panel active" id="performance">
            <h3>Lightning Fast Performance</h3>
            <p>Experience unprecedented speed with our quantum-powered infrastructure. Built on cutting-edge technology that delivers results at the speed of thought. Electric Xtra CSS template is brought to you by TemplateMo website.</p>
            <ul className="feature-list">
              <li>Sub-millisecond response times</li>
              <li>99.99% uptime guarantee</li>
              <li>Automatic scaling based on demand</li>
              <li>Real-time data synchronization</li>
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
