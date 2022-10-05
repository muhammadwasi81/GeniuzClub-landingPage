import { Link } from 'react-scroll'
import '../Nav/nav.scss'
import PropTypes from 'prop-types'

const ScrollLink = ({ to, children }) => {
  return (
    <>
      <Link
        className="nav-link"
        to={to}
        spy={true}
        smooth={true}
        duration={100}
        offset={-150}
        activeClass="active">
        {children}
      </Link>
    </>
  )
}

ScrollLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}
export default ScrollLink
