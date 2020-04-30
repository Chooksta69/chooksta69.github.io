import React from 'react'
import PropTypes from 'prop-types'
import EmailIcon from '@components/EmailIcon/EmailIcon'
import './Footer.scss'

// Renders the global footer.
const Footer = ({email}) => (
  <footer className="footer">
    <div className="footer__inner card background-grey">
      <div className="row align-items-center">
        <div className="extra-small-6">
          <div className="text-left">
            © {new Date().getFullYear()} DJ Zwackery
            <span className="footer__inner--attribution">
              Site created by{' '}
              <a title="James Ives" href="https://jamesiv.es/">
                James Ives
              </a>
              . Icons provided by Twitter.
            </span>
          </div>
        </div>

        <div className="small-6 extra-small-6">
          <div className="footer__inner--contact">
            <a
              className="display-flex align-items-center justify-content-end"
              title="Email for Contact/Bookings"
              href={`mailto:${email}`}
            >
              <EmailIcon height="30px" width="30px" />
              <span>Contact / Bookings</span>
            </a>
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
