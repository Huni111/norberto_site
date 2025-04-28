import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import '../styles/ProductDetail.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // In a real app, you would use an API endpoint
        const response = await fetch('/image/products.json');
        const data = await response.json();
        const foundProduct = data.products.find(p => p.id.toString() === productId);
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Produsul nu a fost găsit');
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('A apărut o eroare. Vă rugăm încercați din nou.');
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [productId]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= (product?.stock || 10)) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    if (quantity < (product?.stock || 10)) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star">★</span>);
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
    
    return <div className="product-rating">{stars} <span className="rating-value">({rating})</span></div>;
  };

  if (loading) {
    return <div className="loading">Se încarcă produsul...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Eroare</h2>
        <p>{error}</p>
        <Link to="/products" className="back-button">Înapoi la produse</Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-container">
        <h2>Produsul nu a fost găsit</h2>
        <Link to="/products" className="back-button">Înapoi la produse</Link>
      </div>
    );
  }

  const discountedPrice = product.discount ? 
    product.price - (product.price * product.discount / 100) : 
    product.price;

  return (
    <div className="product-detail-container">
      <div className="product-detail-breadcrumb">
        <Link to="/">Acasă</Link> &gt; <Link to="/products">Produse</Link> &gt; <span>{product.name}</span>
      </div>
      
      <h1 className="product-detail-title">{product.name}</h1>
      
      <div className="product-detail-content">
        {/* Left column - Image carousel */}
        <div className="product-detail-images">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="product-detail-swiper"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="product-detail-image-container">
                  <img src={image} alt={`${product.name} - Imagine ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Right column - Product details */}
        <div className="product-detail-info">
          <div className="product-detail-meta">
            <div className="product-detail-category">
              Categorie: <span>{product.category}</span>
            </div>
            {renderStarRating(product.rating)}
            <div className="product-detail-stock">
              Stoc: <span className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>
                {product.stock > 0 ? `${product.stock} disponibile` : 'Indisponibil'}
              </span>
            </div>
          </div>
          
          <div className="product-detail-price">
            {product.discount > 0 && (
              <div className="original-price">
                <span className="price-label">Preț recomandat:</span>
                <span className="price-value">{product.price.toFixed(2)} {product.currency}</span>
              </div>
            )}
            
            <div className="current-price">
              <span className="price-label">Preț{product.discount > 0 ? ' redus' : ''}:</span>
              <span className="price-value">
                {discountedPrice.toFixed(2)} {product.currency}
                {product.discount > 0 && <span className="discount-badge">-{product.discount}%</span>}
              </span>
            </div>
          </div>
          
          <div className="product-detail-description">
            <h3>Descriere:</h3>
            <p>{product.description}</p>
          </div>
          
          <div className="product-detail-actions">
            <div className="quantity-selector">
              <button 
                onClick={decrementQuantity} 
                className="quantity-btn"
                disabled={quantity <= 1}
              >
                -
              </button>
              <input 
                type="number" 
                min="1" 
                max={product.stock || 10} 
                value={quantity} 
                onChange={handleQuantityChange}
                className="quantity-input"
              />
              <button 
                onClick={incrementQuantity} 
                className="quantity-btn"
                disabled={quantity >= (product.stock || 10)}
              >
                +
              </button>
            </div>
            
            <button className="add-to-cart-btn" disabled={product.stock <= 0}>
              Adaugă în coș
            </button>
          </div>
          
          <div className="product-detail-features">
            <h3>Caracteristici:</h3>
            <ul>
              <li>Material premium de calitate</li>
              <li>Croială modernă</li>
              <li>Confecționat în România</li>
              <li>Potrivit pentru ocazii formale</li>
              <li>Întreținere ușoară</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;