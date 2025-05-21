import React from 'react';
import '../styles/CardStyles.css';

const ProductCard = ({ product }) => {
  const { name, price, currency, description, images, discount, rating } = product;
  
  // Calculate discounted price
  const discountedPrice = discount ? price - (price * discount / 100) : price;
  
  // Format the prices with 2 decimal places
  const formattedOriginalPrice = price.toFixed(2);
  const formattedDiscountedPrice = discountedPrice.toFixed(2);
  
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
    <div className="product-card">
      <div className="product-image">
        <img src={images[0]} alt={name} />
        {discount > 0 && (
          <div className="discount-badge">-{discount}%</div>
        )}
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        
        {renderStars(rating)}
        
        <div className="product-price">
          {discount > 0 ? (
            <>
              <span className="original-price">{formattedOriginalPrice} {currency}</span>
              <span className="discounted-price">{formattedDiscountedPrice} {currency}</span>
            </>
          ) : (
            <span className="regular-price">{formattedOriginalPrice} {currency}</span>
          )}
        </div>
        
        <p className="product-description">{description}</p>
        
        <div className="product-actions">
          <button className="view-details-btn">Vezi detalii</button>
          <button className="add-to-cart-btn">Adaugă în coș</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;