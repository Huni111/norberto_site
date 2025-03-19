import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Hero.css';
import slides from '../../image/slides.json';


const HeroSection = () => {
  return (
    <div className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="hero-swiper"
      >
        {slides.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="slide-text">
                <h1>{slide.heading}</h1>
                <p>{slide.subheading}</p>
                <button className="cta-button">Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;