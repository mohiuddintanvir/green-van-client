import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './banner.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-screen w-screen"
    >
      <SwiperSlide className='slide-1'>
        <div className="slide-background"></div>
        <div className='slide-content animate__animated animate__fadeInUp p-4 md:p-8 lg:p-12'>
          <h1 className='font-Poppins font-bold text-lg md:text-xl lg:text-2xl tracking-wide text-[#3dd67d]'>A New Way to be Healthy</h1>
          <p className='font-Poppins font-bold text-4xl md:text-6xl lg:text-7xl'>Fresh Vegetable</p>
          <p className='font-Poppins text-2xl md:text-4xl lg:text-5xl font-light tracking-wide'>For You Everyday</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide-2'>
        <div className="slide-background"></div>
        <div className='slide-content animate__animated animate__fadeInUp p-4 md:p-8 lg:p-12'>
          <h1><span className='font-Poppins font-bold text-6xl md:text-9xl lg:text-13xl text-white'>20%</span></h1>
          <p className='text-[#f8f8f8] text-xl md:text-3xl lg:text-5xl font-Lato font-bold'>Sales On Bio Product</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide-3'>
        <div className="slide-background"></div>
        <div className='slide-content animate__animated animate__fadeInUp p-4 md:p-8 lg:p-12'>
          <h1><span className='font-Poppins font-bold text-4xl md:text-7xl lg:text-9xl text-white'>Get Vegetable</span></h1>
          <p className='text-[#f8f8f8] text-xl md:text-3xl lg:text-5xl font-Lato font-bold tracking-wide text-center'>From Trusted Source</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
