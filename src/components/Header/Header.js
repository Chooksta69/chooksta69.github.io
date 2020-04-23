import React from 'react'
import Logo from '@images/logo.png'
import './Header.scss'

const Header = () => (
  <header className="header">
    <div className="wrapper text-center">
      <img className="margin-center" src={Logo} alt="DJ Zwackery" />
    </div>
  </header>
)

export default Header
