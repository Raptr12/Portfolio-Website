import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/martin-mesa-0b86b2235/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Raptr12" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial