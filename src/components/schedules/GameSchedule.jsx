import { useTranslation } from 'react-i18next';
import './schedule.scss';
import UserImg from '../../assets/img/user.png';

const GameSchedule = () => {
  const { t } = useTranslation();
  return (
    <section className="schedule__wrapper" id="betaGame">
      <div className="container">
        <div
          className="head__wrapper pt-lg-5 pt-3"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="head__text text-center">IL TEAM</h1>
        </div>

        <div className="row d-flex justify-content-center text-center text-white flex-wrap pt-5 mt-5">
          <div className="col-4">
            <img src={UserImg} alt="user-img" className="img-fluid" />
            <h1>Lorem</h1>
          </div>
          <div className="col-4">
            <img src={UserImg} alt="user-img" className="img-fluid" />
            <h1>Lorem</h1>
          </div>
          <div className="col-4">
            <img src={UserImg} alt="user-img" className="img-fluid" />
            <h1>Lorem</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSchedule;
