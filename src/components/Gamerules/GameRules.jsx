import { useTranslation } from 'react-i18next'
import './game.scss'

const GameRules = () => {
  const { t } = useTranslation()
  return (
    <section className="container-fluid game__wrapper" id="gamerules">
      <div className="container">
        <div className="row justify-content-between">
          <div
            className="col-sm-12 col-lg-6 mt-5 pt-5"
            data-aos="fade-right"
            data-aos-duration="3000">
            <div className="head__wrapper">
              <h1 className="main__head">{t('GAMES RULE:')}</h1>
              <h1 className="sub__head">{t('Games for those that arent gamer')}</h1>
            </div>
            <div className="desc__head my-3">
              <span className="desc__head__text">{t('Even the all-powerful')}.</span>
              <p className="desc__para__text mt-5">{t('When she reached')}</p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6" data-aos="fade-up" data-aos-duration="3000">
            <div className="img__wrapper">
              <img
                loading="lazy"
                src="https://blend.com/wp-content/uploads/2021/05/LO_Mobile_App.png"
                alt="game for mobile"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameRules
