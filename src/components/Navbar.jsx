import icon from '../assets/images/favicon.ico';

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <img src={icon} alt="Icon" />
      </div>
      <ul>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#education">Formations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;