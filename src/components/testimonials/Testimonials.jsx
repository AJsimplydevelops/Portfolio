/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.avif'
import AVTR3 from '../../assets/avatar3.avif'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
{
  avatar: AVTR1,
  name: 'Kevin Zhao',
  review: 'Keep up the Great Work. I greatly appreciate it. It saves time and effort for me as a customer.'
},
{
  avatar: AVTR2,
  name: 'Jafe Court',
  review: 'You were really nice, and did a good job on our data cleaning.'
},
{
  avatar: AVTR3,
  name: 'Zenaida Galway',
  review: 'No complaints, data cleaning was cleaned expertly, a good job. No problems with work, jobs not getting done etc. Excellent, is all I can say for you.'
},
{
  avatar: AVTR3,
  name: 'Rebecca Tote',
  review: 'Timely service, good communication'
},
]


const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}   </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials