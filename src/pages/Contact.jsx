import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <div className="contact-info">
          <h3>Connect With Me</h3>
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-details">
              <h4>Email</h4>
              <p>leiannjudeadico20@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-details">
              <h4>Phone</h4>
              <p>0938 173 5200</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-details">
              <h4>Location</h4>
              <p>Sampaloc, Apalit, Pampanga</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
