import { useTranslation } from 'react-i18next';
import Recaptcha from '../Recaptcha/Recaptcha';
import './beta.scss';

const BetaVersion = () => {
  const { t } = useTranslation();

  return (
    <section className="beta__wrapper" id="Faq">
      <div
        className="text-center text__wrapper pt-5"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <h1 className="play__text mt-5">{t('You Want To Play?')}</h1>
      </div>

      <div
        className="btn__wrapper d-flex my-5 pb-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <button className="btn__version m-auto" type="submit">
          go to beta version
        </button>
      </div>
      <div className="container">
        <Recaptcha />
        {/* <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="w-100">
            Submit
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default BetaVersion;
