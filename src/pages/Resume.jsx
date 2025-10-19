import React from 'react';

const Resume = () => {
  return (
    <section className="features" id="resume">
      <h2 className="section-title">Resume</h2>
      <div className="features-container">
        <div className="feature-content">
          <div className="content-panel active">
            <p>
              Download my resume to learn more about my experience and qualifications.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}Lei Ann Judea Dico.pdf`}
              download="Lei Ann Judea Dico.pdf"
              className="cta-button cta-primary"
            >
  Download Resume
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
