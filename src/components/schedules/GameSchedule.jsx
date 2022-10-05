import { useTranslation } from 'react-i18next'
import Description from '../UI/Description'
import './schedule.scss'

const GameSchedule = () => {
  const { t } = useTranslation()
  return (
    <section className="schedule__wrapper" id="betaGame">
      <div className="container">
        <div className="head__wrapper pt-lg-5 pt-3" data-aos="fade-right" data-aos-duration="3000">
          <h1 className="head__text text-center">
            {t('Big Champions')} <br /> {t('Gaming Schedules')}
          </h1>
        </div>
        <div
          className="date__wrapper pt-lg-5 pt-4 text-white text-center"
          data-aos="fade-right"
          data-aos-duration="3000">
          <span className="date__text">October 26, {new Date().getFullYear()}</span>
          <p>Esport Language- Data 2</p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-lg-4 col-sm-12 mb-3">
            <Description headText="description__head" subText="game__desc" />
          </div>
          <div className="col-sm-12 col-lg-1 mb-3">
            <img
              src="https://www.freepnglogos.com/uploads/real-madrid-logo-png/real-madrid-logo-drawing-getdrawingsm-for-personal-use-real-madrid-logo-drawing-15.png"
              alt="team-logo"
              className="img-fluid"
              loading="lazy"
            />
            <div className="text-center text-white teams__info mt-3">
              <h6 className="team__name">Archer S</h6>
              <span className="text-nowrap team__profile">Team Profile</span>
            </div>
          </div>
          <div className="col-sm-12 col-lg-2 d-flex justify-content-center">
            <span className="vs__text">{t('VS')}</span>
          </div>
          <div className="col-sm-12 col-lg-1 mb-3">
            <img
              src="https://www.freepnglogos.com/uploads/real-madrid-logo-png/real-madrid-logo-drawing-getdrawingsm-for-personal-use-real-madrid-logo-drawing-15.png"
              alt="team-logo"
              className="img-fluid"
              loading="lazy"
            />
            <div className="text-center text-white teams__info mt-3">
              <h6>Archer S</h6>
              <span className="text-nowrap team__profile">Team Profile</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <Description headText="description__head" subText="game__desc text-lg-end" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameSchedule
