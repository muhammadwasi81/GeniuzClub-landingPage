import { useTranslation } from 'react-i18next'
import './beta.scss'

const BetaVersion = () => {
  const { t } = useTranslation()
  return (
    <section className="beta__wrapper" id="Faq">
      <div
        className="text-center text__wrapper pt-5"
        data-aos="fade-right"
        data-aos-duration="3000">
        <h1 className="play__text mt-5">{t('You Want To Play?')}</h1>
      </div>
      <div className="btn__wrapper d-flex my-5 pb-5" data-aos="fade-up" data-aos-duration="3000">
        <button className="btn__version m-auto">go to beta version</button>
      </div>
    </section>
  )
}

export default BetaVersion
