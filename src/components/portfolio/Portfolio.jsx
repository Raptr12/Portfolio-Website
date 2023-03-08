import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/stock612x612.jpg'
import IMG2 from '../../assets/stock612x612.jpg'
import IMG3 from '../../assets/stock612x612.jpg'
import IMG4 from '../../assets/stock612x612.jpg'
import IMG5 from '../../assets/stock612x612.jpg'
import IMG6 from '../../assets/stock612x612.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Name of the project here',
    github: 'https://github.com/Raptr12',
    demo: 'https://github.com/Raptr12/Portfolio-Website'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Name of the project here',
    github: 'https://github.com/Raptr12',
    demo: 'https://github.com/Raptr12/Portfolio-Website'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Name of the project here',
    github: 'https://github.com/Raptr12',
    demo: 'https://github.com/Raptr12/Portfolio-Website'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Name of the project here',
    github: 'https://github.com/Raptr12',
    demo: 'https://github.com/Raptr12/Portfolio-Website'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Name of the project here',
    github: 'https://github.com/Raptr12',
    demo: 'https://github.com/Raptr12/Portfolio-Website'
  },
  {
    id: 6,
    image: IMG1,
    title: 'Name of the project here',
    github: 'https://github.com/Raptr12',
    demo: 'https://github.com/Raptr12/Portfolio-Website'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portfolio__items'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio