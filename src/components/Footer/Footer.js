import React from 'react'
import './Footer.scss'

const Footer = ({email}) => (
  <footer className="footer">
    <div className="footer__inner card background-grey">
      <div className="row">
        <div className="small-6 extra-small-12">
          <div className="text-left">
            © {new Date().getFullYear()} DJ Zwackery | Page by{' '}
            <a href="https://jamesiv.es/">James Ives</a>
          </div>
        </div>

        <div className="small-6 extra-small-12">
          <div className="footer__inner--contact">
            <a href={`mailto:${email}`}>Contact/Bookings</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

Footer.defaultProps = {
  email: process.env.GATSBY_EMAIL_ADDRESS
}

export default Footer
