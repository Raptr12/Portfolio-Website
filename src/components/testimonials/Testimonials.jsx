import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Spocky.png'
import AVTR2 from '../../assets/.-..png'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Co-Workers</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial__container">
        <article className="testimonial">
          <div className="cliente__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className='client__name'>Spocky</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt 
              doloribus saepe maiores molestias et praesentium necessitatibus? Et 
              facere eum libero exercitationem deserunt a delectus, quod, aperiam iusto 
              sint dolorum error!
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="cliente__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className='client__name'>Spocky</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt 
              doloribus saepe maiores molestias et praesentium necessitatibus? Et 
              facere eum libero exercitationem deserunt a delectus, quod, aperiam iusto 
              sint dolorum error!
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="cliente__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className='client__name'>Spocky</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt 
              doloribus saepe maiores molestias et praesentium necessitatibus? Et 
              facere eum libero exercitationem deserunt a delectus, quod, aperiam iusto 
              sint dolorum error!
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="cliente__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className='client__name'>Spocky</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt 
              doloribus saepe maiores molestias et praesentium necessitatibus? Et 
              facere eum libero exercitationem deserunt a delectus, quod, aperiam iusto 
              sint dolorum error!
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials