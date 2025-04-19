import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./index.html" className="logo">
            <strong>Freelancer</strong> portfolio
          </a>

          <ul className="nav-list">
            <li className="nav-list__item">
              <a href="#" className="nav-list__link nav-list__link--active">
                Home
              </a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="nav-list__link">
                Projects
              </a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="nav-list__link">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
