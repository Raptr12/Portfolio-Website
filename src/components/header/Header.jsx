import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi my name is</h5>
        <h1>Martin Mesa</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img className='image-me'  src={ME} alt="Martin Mesa" />
        </div>

        <a href="#contact" className='scroll__down'>You Can Scroll Down</a>
      </div>
    </header>
  )
}

export default Header