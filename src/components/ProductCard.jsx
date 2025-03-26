import React from 'react';
import '../styles/ProductCard.CSS'; 

const ProductCard = ({ image, title, price, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
      <button className="add-to-cart-button" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;