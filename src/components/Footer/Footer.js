import React from 'react'
import './Footer.scss'

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner card background-grey">
      <div className="display-flex">
        <div className="extra-small-6">
          <div className="text-left">
            © {new Date().getFullYear()} DJ Zwackery | Page by{' '}
            <a href="https://jamesiv.es/">James Ives</a>
          </div>
        </div>

        <div className="extra-small-6">
          <div className="text-right">
            <a href="mailto:djzwackery@gmail.com">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
