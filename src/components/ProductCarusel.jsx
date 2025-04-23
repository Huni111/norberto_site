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

// ProductCard subcomponent - updated to match Produse page design
const ProductCard = ({ product }) => {
  const { name, price, currency = "lei", images, discount = 0, rating = 0, description, category } = product;
  
  // Calculate discounted price
  const discountedPrice = discount ? price - (price * discount / 100) : price;
  
  // Generate star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return <div className="product-rating">{stars}</div>;
  };

  return (
    <div className='carusel-wrapper'>
      <div className="product-card">
        <div className="product-image">
          <img src={images[0]} alt={name} />
          {discount > 0 && (
            <span className="discount-badge">-{discount}%</span>
          )}
        </div>
        <div className="product-info">
          <h3>{name}</h3>
          {category && <div className="product-category">{category}</div>}
          
          {/* Star rating */}
          {renderStars(rating)}
          
          <div className="product-price">
            {discount > 0 ? (
              <>
                <span className="original-price">{price.toFixed(2)} {currency}</span>
                <span className="discounted-price">
                  {discountedPrice.toFixed(2)} {currency}
                </span>
              </>
            ) : (
              <span>{price.toFixed(2)} {currency}</span>
            )}
          </div>
          {description && (
            <p className="product-description">{description}</p>
          )}
          <button className="add-to-cart-btn">Adaugă în coș</button>
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
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    discount: PropTypes.number,
    rating: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string
  }).isRequired
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
