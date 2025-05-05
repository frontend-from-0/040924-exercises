import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Baljan</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <div className="competences">
          <h2 className="header__title">I can code using:</h2>
          <p>JavaScript, ReactJS, HTML, CSS, BootStrap</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
