import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {MdDesignServices} from 'react-icons/md'
import {RiMessage2Fill} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
        <a href="#"><AiFillHome/></a>
        <a href="#about"><FaUser/></a>
        <a href="#experience"><FaBook/></a>
        <a href="#services"><MdDesignServices/></a>
        <a href="#contact"><RiMessage2Fill/></a>
    </nav>
  )
}

export default Nav