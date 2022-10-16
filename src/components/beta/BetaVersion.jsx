import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './beta.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const BetaVersion = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [showFormErr, setShowFormErr] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState({
    title: '',
    paragraph: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    setShowCaptcha(true);
    console.log(email, 'email');
  };

  const sendEmail = async (captchaValue) => {
    if (!email) {
      setShowFormErr(true);
      return;
    }
    const params = {
      email,
      'g-recaptcha-response': captchaValue,
    };
    console.log(params, 'params');
    console.log(captchaValue, 'captchaValue');
    setFormSubmitted({ title: 'Sending message...', paragraph: '' });

    try {
      const { data } = await axios.post(
        `https://api.geniuz.club/landingpage/marketing/WhiteList`,
        {
          params,
          email,
        }
      );
      console.log(data, 'data');
    } catch (error) {
      setFormSubmitted({
        title: 'Error sending message, try again later',
        paragraph: 'Please contact Johnathan either by phone or email.',
      });
      console.log(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        'error'
      );
    }
  };
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
      {!formSubmitted.title ? (
        <div>
          <h3 className="text-center">Send me a message</h3>
          {!showCaptcha ? (
            <div className="container d-flex justify-content-around">
              <form onSubmit={submitHandler}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-warning w-100 my-3">
                  submit
                </button>
                {showFormErr ? (
                  <p className="text-danger">
                    Please fill email field to send a message
                  </p>
                ) : null}
              </form>
            </div>
          ) : (
            <ReCAPTCHA
              sitekey={'6Lev4X8iAAAAAF9UgTDVOib5O6QkQN7uuvD3u53z'}
              onChange={sendEmail}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h3 className="text-white">{formSubmitted.title}</h3>
          <p>{formSubmitted.paragraph}</p>
        </div>
      )}
    </section>
  );
};

export default BetaVersion;
