// Importation des divers éléments
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import './assets/styles/loader.css';
import './assets/styles/header.css';
import './assets/styles/about.css';
import './assets/styles/projects.css';
import './assets/styles/skills.css';
import './assets/styles/education.css';
import './assets/styles/contact.css';


// Déclaration des divers constantes
function App() {
  const [loading, setLoading] = useState(true);
  const [pageVisible, setPageVisible] = useState(false);

  const handleTransitionEnd = () => {
    setLoading(false);
    setTimeout(() => setPageVisible(true), 100);
  };

  // Effet pour gérer l'apparition des sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = sectionTop < window.innerHeight - 100;
        if (isVisible) {
          section.classList.add('visible');
        }
      });
    };

    if (!loading) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);


  // On return l'HTML
  return (
    <LanguageProvider>
      <div className="app-content">
        {loading && <Loader onTransitionEnd={handleTransitionEnd} />}
        {!loading && (
          <div className={`page-content ${pageVisible ? 'fade-in' : ''}`}>
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </div>
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;