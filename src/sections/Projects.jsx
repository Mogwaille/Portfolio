import React, { useEffect } from 'react';
import Ohmyfood from '../assets/images/ohmyfood.jpg';
import Sophie from '../assets/images/sophie.jpg';
import Kasa from '../assets/images/kasa.jpg';

function Projects() {
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const projectContainer = document.querySelector('.project-container');

    const colors = {
      one: '#4a90e2', // Bleu pour la première slide
      two: '#8156d2', // Violet pour la deuxième slide
      three: '#356859', // Vert pour la troisième slide
      four: '#e78354', // Rose pour la quatrième slide
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slide = entry.target;
            const slideClass = slide.classList[1]; // ex: "one", "two", etc.
            projectContainer.style.transition = 'background-color 1s ease';
            projectContainer.style.backgroundColor = colors[slideClass];
          }
        });
      },
      { threshold: 0.5 } // Ajuste le seuil pour que la couleur change lorsque 50% de la slide est visible.
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

  return (
    <section>
      <div className="portfolio-transition">
        <div className="portfolio-text">PORTFOLIO</div>
      </div> 
      <div className="project-container" id="projects">
        <div className="blocHorizontal">
          <div className="slide one" style={{ backgroundColor: 'transparent' }}>
            <h2>PROJETS</h2>
            <p>Voici une sélection de mes projets réalisés durant ma formation.</p>
            <p>Faites <strong>défiler</strong> l'écran pour les découvrir.</p>
          </div>
          <div className="slide two" style={{ backgroundColor: 'transparent' }}>
            <div className="image-container">
              <img src={Ohmyfood} alt="Image du site Ohmyfood" />
            </div>
            <div className="text-content">
              <h3>Ohmyfood</h3>
              <p>Création d'une interface mobile-first avec utilisation de Sass,<br /> et implémentation d'animations CSS modernes</p>
              <a href="https://mogwaille.github.io/Ohmyfood/" target="_blank" rel="noopener noreferrer">Voir le projet</a>
            </div>
          </div>
          <div className="slide three" style={{ backgroundColor: 'transparent' }}>
            <div className="image-container">
              <img src={Sophie} alt="Image du site de Sophie Bluel" />
            </div>
            <div className="text-content">
              <h3>Sophie Bluel</h3>
              <p>Création d'une page web dynamique en utilisant JavaScript et en communiquant avec une API.</p>
              <p>Inclut également la création d'une page de connexion ainsi qu'une modale permettant d'uploader de nouveaux médias.</p>
              <a href="https://github.com/Mogwaille/SophieBluel" target="_blank" rel="noopener noreferrer">Voir le projet</a>
            </div>
          </div>
          <div className="slide four" style={{ backgroundColor: 'transparent' }}>
            <div className="image-container">
              <img src={Kasa} alt="Image du site Kasa" />
            </div>
            <div className="text-content">
              <h3>Kasa</h3>
              <p>Implémentation du front-end d'une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive.</p>
              <p>Rédaction de fichier JSON et utilisation de Node.js pour exécuter du code JavaScript en dehors du navigateur.</p>
              <a href="https://github.com/Mogwaille/Kasa" target="_blank" rel="noopener noreferrer">Voir le projet</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;