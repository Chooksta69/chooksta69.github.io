import React, {useState} from 'react'
import Logo from '@images/logo.png'
import { navigate } from 'gatsby';
import './Header.scss'

// Renders the global header.
const Header = () => {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)

    if (clicks === 1) {
      navigate('/bigjim')
    }

  }

  return (
    <header className="header" onClick={handleClick}>
      <div className="wrapper text-center">
        <img className="margin-center" src={`${Logo}`} alt="DJ Zwackery" />
      </div>
    </header>
  )
}

export default Header
