import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>I am a recent graduate with a dual background in technology, holding an Associate in Computer Technology (ACT) and a Bachelor of Science in Information Systems (BSIS). This unique combination ensures I can master both the hands-on technical needs and the high-level business strategy of any organization's IT environment.</p>
          <h2>Personal Passions and Interests</h2>
          <p>Outside of my professional pursuits, I maintain a diverse range of personal interests that keep me creative and balanced:</p>
          <p><strong>Martial Arts:</strong> I am actively involved in martial arts, which is a continuous practice in discipline, focus, and dedicated repetition.</p>
          <p><strong>Creative Writing:</strong> I enjoy expressing myself through making poetry and writing songs, engaging the creative and imaginative side of my mind.</p>
          <p><strong>Gaming and Anime:</strong> My interests also include playing games and watching anime, which serve as great sources of entertainment, storytelling, and imaginative escape.</p>
        </div>
        <div className="about-visual">
          <div className="about-graphic"></div>
        </div>
      </div>

      <div className="about-content" style={{ marginTop: '80px' }}>
        <div className="about-visual">
          <div className="about-graphic-alt">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
          </div>
        </div>
        <div className="about-text">
          <h2>🎯 About Me: Aspiring SQA Specialist</h2>
          <p>I am an aspiring Software Quality Assurance (SQA) professional with a strong foundation built from a B.S. in Information Systems (BSIS) and an Associate in Computer Technology. My educational background provides a critical dual perspective: the Associate degree delivered hands-on technical proficiency in system configuration, troubleshooting, and IT infrastructure, enabling me to accurately isolate and document technical defects.</p>
          <p>Complementary to this, the BSIS equipped me with a strategic mindset in Systems Analysis and Design, focusing on how technology solutions must align with business needs. This unique combination ensures I don't just find bugs, but also assess whether the software meets the overall functional and strategic business requirements. I am eager to apply my analytical skills and dedication to detail to ensure product excellence and enhance the user experience.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
