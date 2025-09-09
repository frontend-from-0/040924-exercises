import './Navbar.css';

export function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1>Tuğba Çelik</h1>
        <ul className="nav-links">
          <li><a href="#about">Hakkımda</a></li>
          <li><a href="#projects">Projeler</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </nav>
    </header>
  );
}