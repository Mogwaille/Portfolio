// Importation des divers éléments
import React, { useEffect, useContext } from 'react';
import Ohmyfood from '../assets/images/ohmyfood.jpg';
import Sophie from '../assets/images/sophie.jpg';
import Kasa from '../assets/images/kasa.jpg';
import { LanguageContext } from '../LanguageContext';
import translations from '../translations';


// Déclaration des divers constantes
function Projects() {
  const { language } = useContext(LanguageContext);

  // Création de la fonction pour modifier la couleur au slide
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const projectContainer = document.querySelector('.project-container');

    const colors = {
      one: '#4a90e2',
      two: '#8156d2',
      three: '#356859',
      four: '#e78354',
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slide = entry.target;
            const slideClass = slide.classList[1];
            projectContainer.style.transition = 'background-color 1s ease';
            projectContainer.style.backgroundColor = colors[slideClass];
          }
        });
      },
      { threshold: 0.5 }
    );

    slides.forEach((slide) => {
      observer.observe(slide);
    });

    return () => {
      slides.forEach((slide) => {
        observer.unobserve(slide);
      });
    };
  }, []);


  // On return l'HTML
  return (
    <section>
      <div className="portfolio-transition">
        <div className="portfolio-text">PORTFOLIO</div>
      </div> 
      <div className="project-container" id="projects">
        <div className="blocHorizontal">
          <div className="slide one" style={{ backgroundColor: 'transparent' }}>
            <h2>{translations[language].projectsTitle}</h2>
            <p>{translations[language].projectsIntro}</p>
            <p dangerouslySetInnerHTML={{ __html: translations[language].projectsScroll }}></p>
          </div>
          <div className="slide two" style={{ backgroundColor: 'transparent' }}>
            <div className="image-container">
              <img src={Ohmyfood} alt="Image du site Ohmyfood" className="projectsImg" />
            </div>
            <div className="text-content ohmyfood">
              <h3>Ohmyfood</h3>
              <p>{translations[language].ohmyfoodDescription}</p>
              <a href="https://mogwaille.github.io/Ohmyfood/" target="_blank" rel="noopener noreferrer">
                {translations[language].viewProject}
              </a>
            </div>
          </div>
          <div className="slide three" style={{ backgroundColor: 'transparent' }}>
            <div className="image-container">
              <img src={Sophie} alt="Image du site de Sophie Bluel" className="projectsImg" />
            </div>
            <div className="text-content">
              <h3>Sophie Bluel</h3>
              <p>{translations[language].sophieDescription1}</p>
              <p>{translations[language].sophieDescription2}</p>
              <a href="https://github.com/Mogwaille/SophieBluel" target="_blank" rel="noopener noreferrer">
                {translations[language].viewProject}
              </a>
            </div>
          </div>
          <div className="slide four" style={{ backgroundColor: 'transparent' }}>
            <div className="image-container">
              <img src={Kasa} alt="Image du site Kasa" className="projectsImg"/>
            </div>
            <div className="text-content">
              <h3>Kasa</h3>
              <p>{translations[language].kasaDescription1}</p>
              <p>{translations[language].kasaDescription2}</p>
              <a href="https://kasa-gamma-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                {translations[language].viewProject}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;