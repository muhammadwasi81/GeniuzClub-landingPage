import { Link } from 'react-scroll';
import './nav.scss';
import useLocalStorageHook from '../../utils/hooks/use-localstorage.js';
import i18n from '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import ScrollLink from '../UI/ScrollLinks';
import Logo from '../../assets/img/logo.png';

const Nav = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorageHook('language', 'en');

  const handleChange = () => {
    if (language === 'en') {
      i18n.changeLanguage('it');
      setLanguage('it');
    } else if (language === 'it') {
      i18n.changeLanguage('en');
      setLanguage('en');
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark
         nav__wrapper fixed-top"
      id="home"
    >
      <div className="container-fluid">
        <Link className="navbar-brand fs-2 fw-bold" to="/" role="button">
          <img
            src={Logo}
            alt="logo"
            className="img-fluid
            logo__img"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink to="slider">{t('Home')}</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="gamerules">{t('Game Rules')}</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="ourstudio">{t('Our studio')}</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="betaGame">{t('Beta Game')}</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="Faq">{t('Faq')}</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="Contact"> {t('Contact')}</ScrollLink>
            </li>
            <li className="nav-link">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => handleChange(e.target.value)}
              >
                <option defaultValue>Select Language</option>
                <option value="en">{t('English')}</option>
                <option value="it">{t('italian')}</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
