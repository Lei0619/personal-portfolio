import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Biography from './pages/Biography';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Biography />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
