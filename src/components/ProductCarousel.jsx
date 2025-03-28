import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Adjusted import for modules
import 'swiper/swiper-bundle.css';
import ProductCard from './ProductCard';
import Products from '../../image/products.json';

const ProductCarousel = () => {
  const product = Products.products;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      slidesPerView={4}
      className="product-swiper"
    >
      {product.map((item, index) => (
        <SwiperSlide key={index}>
          <ProductCard
            image={item.images[0]}
            title={item.name}
            price={item.price}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCarousel;