// Importation des divers éléments
import { useContext } from 'react';
import icon from '../assets/images/favicon.ico';
import logoTrad from '../assets/images/logo-trad.png';
import { LanguageContext } from '../LanguageContext';


// Déclaration des divers constantes
function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };


  // On return l'HTML
  return (
    <nav>
      <div className="nav-logo">
        <img src={icon} alt="Icon" />
      </div>
      <ul>
        <li>
          <button className="language-button" onClick={toggleLanguage}>
            <img src={logoTrad} alt="Logo de traduction" className="language-icon" />
            {language === 'fr' ? 'Français' : 'English'}
          </button>
        </li>
        <li><a href="#home">{language === 'fr' ? 'Accueil' : 'Home'}</a></li>
        <li><a href="#about">{language === 'fr' ? 'À propos' : 'About'}</a></li>
        <li><a href="#projects">{language === 'fr' ? 'Projets' : 'Projects'}</a></li>
        <li><a href="#skills">{language === 'fr' ? 'Compétences' : 'Skills'}</a></li>
        <li><a href="#education">{language === 'fr' ? 'Formations' : 'Education'}</a></li>
        <li><a href="#contact">{language === 'fr' ? 'Contact' : 'Contact'}</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;