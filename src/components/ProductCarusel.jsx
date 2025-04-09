import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import '../styles/ProductCard.css'; // Import your existing CSS

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// ProductCard subcomponent
const ProductCard = ({ 
  image, 
  title, 
  price, 
  currency = "lei", 
  discount = 0, 
  rating = 0 
}) => {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  
  return (
    <div className='carusel-wrapper'>
      <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        {discount > 0 && (
          <div className="discount-badge">-{discount}%</div>
        )}
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <div className="price-container">
            {discount > 0 && (
              <span className="original-price">{price.toFixed(2)} {currency}</span>
            )}
            <p className="product-price">{discountedPrice.toFixed(2)} {currency}</p>
          </div>
          <div className="rating">
            {'★'.repeat(Math.floor(rating))}
            {'☆'.repeat(5 - Math.floor(rating))}
            <span className="rating-value">({rating})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component
const ProductCarousel = ({ products }) => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Produsele Noastre</h2>
      <div className="product-carousel">
        <Swiper
          rewind={true}
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          className="product-swiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              title={product.name}
              image={product.images[0]}
              price={product.price}
              currency="lei"
              discount={product.discount}
              rating={product.rating}
            />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  discount: PropTypes.number,
  rating: PropTypes.number
};

ProductCarousel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string,
      discount: PropTypes.number,
      rating: PropTypes.number
    })
  ).isRequired,
};

export default ProductCarousel;
