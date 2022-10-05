import PropTypes from 'prop-types'
import '../studio/studio.scss'

const CustomCard = ({ src, alt, subhead, children }) => {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={alt} loading="lazy" />
      <div className="card-body">
        <h4 className="card-title">{subhead}</h4>
        <p className="card-text">{children}</p>
      </div>
    </div>
  )
}

CustomCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subhead: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default CustomCard
