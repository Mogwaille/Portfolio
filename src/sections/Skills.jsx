// Importation des divers éléments
import React, { useContext } from 'react';
import logoJS from '../assets/images/logo-js.png';
import logoReact from '../assets/images/logo-react.png';
import logoHTML from '../assets/images/logo-html.png';
import logoCSS from '../assets/images/logo-css.png';
import logoNode from '../assets/images/logo-nodejs.png';
import logoMongo from '../assets/images/logo-mongodb.png';
import logoGit from '../assets/images/logo-git.png';
import logoGithub from '../assets/images/logo-github.png';
import logoSass from '../assets/images/logo-sass.png';
import logoVercel from '../assets/images/logo-vercel.png';
import { LanguageContext } from '../LanguageContext';
import translations from '../translations';


// Déclaration des divers constantes
function Skills() {
  const { language } = useContext(LanguageContext);

  
  // On return l'HTML
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">{translations[language].skillsTitle}</h2>
      <div className="skills-container">
        <div className="skills-logos">
          <div className="skill">
            <img src={logoJS} alt="JavaScript" className="skill-logo" />
            <p className="skill-name">JavaScript</p>
          </div>
          <div className="skill">
            <img src={logoReact} alt="React.js" className="skill-logo" />
            <p className="skill-name">React.js</p>
          </div>
          <div className="skill">
            <img src={logoHTML} alt="HTML5" className="skill-logo" />
            <p className="skill-name">HTML5</p>
          </div>
          <div className="skill">
            <img src={logoCSS} alt="CSS3" className="skill-logo" />
            <p className="skill-name">CSS3</p>
          </div>
          <div className="skill">
            <img src={logoNode} alt="Node.js" className="skill-logo" />
            <p className="skill-name">Node.js</p>
          </div>
          <div className="skill">
            <img src={logoMongo} alt="MongoDB" className="skill-logo" />
            <p className="skill-name">MongoDB</p>
          </div>
        </div>
        <h3 className="tools-title">{translations[language].toolsTitle}</h3>
        <div className="tools-logos">
          <div className="tool">
            <img src={logoGit} alt="Git" className="tool-logo" />
            <p className="tool-name">Git</p>
          </div>
          <div className="tool">
            <img src={logoGithub} alt="GitHub" className="tool-logo" />
            <p className="tool-name">GitHub</p>
          </div>
          <div className="tool">
            <img src={logoSass} alt="SASS" className="tool-logo" />
            <p className="tool-name">SASS</p>
          </div>
          <div className="tool">
            <img src={logoVercel} alt="Vercel" className="tool-logo" />
            <p className="tool-name">Vercel</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;