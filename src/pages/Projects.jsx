import React from 'react';

const Projects = () => {
  return (
    <section className="features" id="features">
      <h2 className="section-title">Projects</h2>
      <div className="features-container">
        <div className="feature-content">
          <div className="content-panel active">
            <h3 id="performance">🛒 E-Commerce Website (Completed)</h3>
            <p>This e-commerce system is designed to simulate a complete online retail experience — from browsing products to managing orders.</p>
            <ul className="feature-list">
              <li><strong>Key Features:</strong></li>
              <li>User registration and authentication</li>
              <li>Shopping cart and checkout systemShopping cart and checkout system</li>
              <li>Admin dashboard for inventory and order management</li>
              <li><strong>Technologies: Laravel, React (frontend), MySQL</strong></li>
            </ul>
            <h3>📰 Publishing Website for La Verdad Herald (In Progress)</h3>
            <p>Developed to replace Facebook as the main platform for publishing, this system provides a structured and secure environment for students, moderators, and administrators to manage content collaboratively.</p>
            <ul className="feature-list">
              <li><strong>Key Features (Planned):</strong></li>
              <li>Role-based access control (Admin, Moderator, Students)</li>
              <li>Article creation, review, and approval workflow</li>
              <li>Organized publication dashboard for managing posts</li>
              <li>Responsive and accessible design for readers</li>
              <li><strong>Technologies: Laravel, React (frontend), MySQL</strong></li>
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

export default Projects;
