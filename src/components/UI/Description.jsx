import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const Description = ({ headText, subText }) => {
  const { t } = useTranslation()
  return (
    <>
      <h2 className={headText}>{t('Description')}</h2>
      <p className={subText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ab consequuntur est
        praesentium tenetur voluptate voluptates omnis labore esse quidem. Nesciunt sed dignissimos,
        blanditiis eos non exercitationem ducimus eligendi dolores.
      </p>
    </>
  )
}

Description.propTypes = {
  headText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired
}

export default Description
