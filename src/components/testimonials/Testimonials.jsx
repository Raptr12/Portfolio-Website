import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Spocky.png'
import AVTR2 from '../../assets/.-..png'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name_person: 'Spocky',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt doloribus saepe maiores molestias et praesentium necessitatibus? Et facere eum libero exercitationem deserunt a delectus, quod, aperiam iusto sint dolorum error!'
  },
  {
    avatar: AVTR1,
    name_person: 'Spocky',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt doloribus saepe maiores molestias et praesentium necessitatibus? Et facere eum libero exercitationem deserunt a delectus, quod, aperiam iusto sint dolorum error!'
  },
  {
    avatar: AVTR1,
    name_person: 'Spocky',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt doloribus saepe maiores molestias et praesentium necessitatibus? Et facere eum libero exercitationem deserunt a delectus, quod, aperiam iusto sint dolorum error!'
  },
  {
    avatar: AVTR1,
    name_person: 'Spocky',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt doloribus saepe maiores molestias et praesentium necessitatibus? Et facere eum libero exercitationem deserunt a delectus, quod, aperiam iusto sint dolorum error!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Co-Workers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
          data.map(({avatar, name_person, review}, index) =>{
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="cliente__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name_person}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials