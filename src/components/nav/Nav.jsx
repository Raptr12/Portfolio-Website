import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {MdDesignServices} from 'react-icons/md'
import {BsStack} from 'react-icons/bs'
import {RiMessage2Fill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDesignServices/></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsStack/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Fill/></a>
    </nav>
  )
}

export default Nav