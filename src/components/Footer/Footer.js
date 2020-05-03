import React from 'react'
import PropTypes from 'prop-types'
import EmailIcon from '@components/EmailIcon/EmailIcon'
import Jives from '@images/jives.png'
import './Footer.scss'

// Renders the global footer.
const Footer = ({email}) => (
  <footer className="footer">
    <div className="footer__inner card background-grey">
      <div className="row align-items-center">
        <div className="extra-small-6">
          <div className="footer__inner--contact">
            <a
              className="display-flex align-items-center"
              title="Email for Contact/Bookings"
              href={`mailto:${email}`}
            >
              <EmailIcon height="30px" width="30px" />
              <span>Contact / Bookings</span>
            </a>
          </div>
        </div>
        <div className="extra-small-6">
          <div className="text-right">
            © {new Date().getFullYear()} DJ Zwackery
            <span className="footer__inner--attribution">
              Icons provided by Twitter. Site created by{' '}
              <a
                className="footer__inner--credits"
                title="James Ives"
                href="https://jamesiv.es/"
              >
                James Ives.
              </a>{' '}
              <img alt="" src={Jives} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  /** The email for the contact button. */
  email: PropTypes.string
}

Footer.defaultProps = {
  email: process.env.GATSBY_EMAIL_ADDRESS
}

export default Footer
