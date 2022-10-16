import { useTranslation } from 'react-i18next';
import './game.scss';
import iphoneImg from '../../assets/img/mobile.png';
import Geno from '../../assets/img/geno.png';
import GenoRight from '../../assets/img/geno-right.png';

const GameRules = () => {
  const { t } = useTranslation();
  return (
    <section className="container-fluid game__wrapper" id="gamerules">
      <div className="geno__img">
        <img
          src={Geno}
          alt="geno-img"
          className="img-fluid
              inner__img pt-5"
        />
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div
            className="col-sm-12 col-lg-6 pt-5 mt-5"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div className="head__wrapper">
              <h1 className="main__head">{t('GAMES RULE:')}:</h1>
              <h1 className="sub__head">
                {t('Games for those that arent gamer')}
              </h1>
            </div>
            <div className="desc__head my-3">
              <span className="desc__head__text">
                {t('Even the all-powerful')}.
              </span>
              <p className="desc__para__text mt-5">{t('When she reached')}</p>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="img__wrapper">
              <img
                loading="lazy"
                src={iphoneImg}
                alt="game for mobile"
                className="img-fluid mobile__img"
              />
              <img
                src={GenoRight}
                alt="geno-img"
                className="img-fluid geno__sec__img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameRules;
