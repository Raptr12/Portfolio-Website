import React from 'react'
import './about.css'
import ME from '../../assets/coding.png'
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
            <img src={ME} alt="About" />
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
            As a software engineer, I own a combination of technical and analytical skills, as well as a strong sense of creativity and innovation.
            My expertise in a range of programming languages, including Java, Python, and JavaScript, demonstrates my adaptability and flexibility as a developer.
            <br />
            <br />
            I am known for my attention to detail, logical thinking, and strategic mindset. These qualities serve me well in my role as a software engineer, My profession is based on dissecting intricate challenges and formulating imaginative and effective resolutions.
            <br />
            <br />
            My combination of technical expertise and strategic thinking, along with my commitment to personal growth and learning, make me a valuable asset to any software development team or project.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About