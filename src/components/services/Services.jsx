import React from 'react'
import './services.css'
import {BiPlay} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>Frontend development and systems analyst</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiPlay className='service__list-icon' />
              <p>Design and development of user interfaces and web applications with React, MaterialUI, HTML, CSS and Bootstrap.</p>
            </li>
            <li>
              <BiPlay className='service__list-icon' />
              <p>Development of web solutions with WordPress by adapting templates and plugins.</p>
            </li>
            <li>
              <BiPlay className='service__list-icon' />
              <p>Analysis of user requirements and needs and design of solutions that meet their expectations and needs.</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className="services">
          <div className="service__head">
            <h3>Backend development and systems analyst</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiPlay className='service__list-icon' />
              <p>Web application development using Java, Python, JavaScript, NodeJS and other programming languages.</p>
            </li>
            <li>
              <BiPlay className='service__list-icon' />
              <p>Database design,development and management using MySQL, SQL Server, PLSQL, MariaDB and PostgreSQL.</p>
            </li>
            <li>
              <BiPlay className='service__list-icon' />
              <p>Application integration with third-party systems using Azure Devops or other integration tools.</p>
            </li>
            <li>
              <BiPlay className='service__list-icon' />
              <p>Development of API's and microservices in Java and SpringBoot for web and mobile applications.</p>
            </li>
            <li>
              <BiPlay className='service__list-icon' />
              <p>Requirements analysis to identify end-user needs and business goals.</p>
            </li>
            <li>
              <BiPlay className='service__list-icon' />
              <p>Communication with stakeholders to ensure alignment with project objectives.</p>
            </li>
            <li>
              <BiPlay className='service__list-icon' />
              <p>Design and maintenance of the database architecture to ensure scalability and efficiency of the application.</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}

        <article className="services">
          <div className="service__head">
            <h3>Cloud Development and QA Tester</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiPlay className='service__list-icon' />
              <p>Identification and resolution of quality problems in web applications.</p>
            </li>
            <li>
              <BiPlay className='service__list-icon' />
              <p>I work collaboratively with the development team to ensure code quality and application functionality.</p>
            </li>
            <li>
              <BiPlay className='service__list-icon' />
              <p>Knowledge of cloud services using Azure User Management.</p>
            </li>
          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}
      </div>
    </section>
  )
}

export default Services