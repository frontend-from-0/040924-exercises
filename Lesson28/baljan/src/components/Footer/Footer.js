import './footer.css';

import instagram from './../../img/icons/instagram.svg';
import gitHub from './../../img/icons/gitHub.svg';
import linkedIn from './../../img/icons/linkedIn.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={gitHub} alt="GitHub" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;