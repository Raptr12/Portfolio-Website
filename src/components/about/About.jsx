import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import {HiOutlineCode} from 'react-icons/hi'
import {HiUsers} from 'react-icons/hi'
import {BsFillFolderFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <HiOutlineCode className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <HiUsers className='about__icon'/>
              <h5>Worked With</h5>
              <small>Well developed teams</small>
            </article>

            <article className='about__card'>
              <BsFillFolderFill className='about__icon'/>
              <h5>Projects</h5>
              <small>Working On New Projects</small>
            </article>
          </div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus officia dicta incidunt nesciunt unde debitis voluptatem exercitationem, asperiores quam beatae sunt. Ad modi officiis provident voluptatem molestias incidunt reprehenderit.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About