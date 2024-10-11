// Importation des divers éléments
import React, { useState, useContext } from 'react';
import logoGitHub from '../assets/images/logo-github.png';
import logoLinkedIn from '../assets/images/logo-linkedin.png';
import { LanguageContext } from '../LanguageContext';
import translations from '../translations';


// Déclaration des divers constantes
function Contact() {
  const { language } = useContext(LanguageContext);
  const [isCopied, setIsCopied] = useState(false);

  // Constante pour copier l'email dans le presse-papier
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('td.webdev@outlook.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };


  // On return l'HTML
  return (
    <footer id="contact" className="contact-section">
      <div className="social-media-section">
        <div className="social-media">
          <h2>{translations[language].socialTitle}</h2>
          <p>{translations[language].socialDescription}</p>
          <div className="buttons">
            <a
              href="https://github.com/Mogwaille"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <img src={logoGitHub} alt="Logo GitHub" className="logo-social" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/timoth%C3%A9e-daemers-0128ba1b7/?originalSubdomain=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button linkedin"
            >
              <img src={logoLinkedIn} alt="Logo LinkedIn" className="logo-social" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <div className="contact-form">
          <h2>{translations[language].contactTitle}</h2>
          <div className="email-container">
            <span className="email-address">td.webdev@outlook.com</span>
            <button className="copy-button" onClick={copyEmailToClipboard}>
              {isCopied ? translations[language].copySuccess : translations[language].copyIcon}
            </button>
          </div>
          <p>{translations[language].formOr}</p>
          <form>
            <label htmlFor="name">{translations[language].namePlaceholder}</label>
            <input type="text" id="name" name="name" placeholder={translations[language].namePlaceholder} required />

            <label htmlFor="email">{translations[language].emailPlaceholder}</label>
            <input type="email" id="email" name="email" placeholder={translations[language].emailPlaceholder} required />

            <label htmlFor="subject">{translations[language].subjectPlaceholder}</label>
            <input type="text" id="subject" name="subject" placeholder={translations[language].subjectPlaceholder} required />

            <label htmlFor="message">{translations[language].messagePlaceholder}</label>
            <textarea id="message" name="message" placeholder={translations[language].messagePlaceholder} rows="5" required></textarea>

            <button type="submit" className="submit-button">{translations[language].submitButton}</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Contact;