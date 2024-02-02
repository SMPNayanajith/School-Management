import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Adds.css'
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../../images/student.jpg';
import img2 from '../../images/school.jpg';

export default function Adds() {
  return (
    <div className='adds-container'>
      


    <>
      <Swiper className='aa'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
      >
        
        <SwiperSlide>
        <img src={img1} alt="" className="full-screen-image" />

      </SwiperSlide>
      <SwiperSlide>
        <img className='img2' src={img2} alt="" />
          </SwiperSlide>
          
        {/*
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      */}
      </Swiper>
     
    </>
 

    </div>
  )
}
