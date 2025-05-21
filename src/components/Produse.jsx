import React, { useState, useEffect } from 'react';
import '../styles/CardStyles.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: 'all',
    sortBy: 'default'
  });
  
  // Function to render star rating
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const starElements = [];
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      starElements.push(<span key={`star-${i}`} className="star">★</span>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      starElements.push(<span key="half-star" className="star half">★</span>);
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starElements.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return <div className="product-rating">{starElements}</div>;
  };
  
  // Fetch products data from the JSON file
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // In a real app, you would use an API call, but here we'll import the JSON directly
        const response = await fetch('/image/products.json');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Nu s-au putut încărca produsele. Vă rugăm încercați mai târziu.');
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  // Get unique categories for the filter
  const categories = products.length > 0 
    ? ['all', ...new Set(products.map(product => product.category))]
    : ['all'];
  
  // Filter and sort products
  const filteredProducts = products.filter(product => {
    if (filters.category === 'all') return true;
    return product.category === filters.category;
  });
  
  // Sort products based on user selection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const discountedPriceA = a.discount ? a.price - (a.price * a.discount / 100) : a.price;
    const discountedPriceB = b.discount ? b.price - (b.price * b.discount / 100) : b.price;
    
    switch (filters.sortBy) {
      case 'price-asc':
        return discountedPriceA - discountedPriceB;
      case 'price-desc':
        return discountedPriceB - discountedPriceA;
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        return (b.discount || 0) - (a.discount || 0);
      default:
        return 0; // Default order (as in the JSON)
    }
  });
  
  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Produse</h1>
        <p>Descoperă colecția noastră de îmbrăcăminte pentru bărbați, realizată din materiale premium.</p>
      </div>
      
      {/* Filters section */}
      <div className="products-filters">
        <div className="filter-group">
          <label htmlFor="category">Categorie:</label>
          <select 
            id="category" 
            name="category" 
            value={filters.category}
            onChange={handleFilterChange}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'Toate categoriile' : category}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="sortBy">Sortează după:</label>
          <select 
            id="sortBy" 
            name="sortBy" 
            value={filters.sortBy}
            onChange={handleFilterChange}
          >
            <option value="default">Implicit</option>
            <option value="price-asc">Preț (Crescător)</option>
            <option value="price-desc">Preț (Descrescător)</option>
            <option value="rating">Rating</option>
            <option value="discount">Discount</option>
          </select>
        </div>
      </div>
      
      {/* Products grid */}
      {loading ? (
        <div className="loading-indicator">Se încarcă produsele...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="products-grid">
          {sortedProducts.length > 0 ? (
            sortedProducts.map(product => (
              <div className="product-grid-item" key={product.id}>
                <div className="product-card">
                  <div className="product-image">
                    {/* Use the first image from the images array */}
                    <img src={product.images && product.images.length > 0 ? product.images[0] : product.image} alt={product.name} />
                    {product.discount > 0 && (
                      <span className="discount-badge">-{product.discount}%</span>
                    )}
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-category">{product.category}</div>
                    
                    {/* Add star rating */}
                    {renderStarRating(product.rating)}
                    
                    <div className="product-price">
                      {product.discount > 0 ? (
                        <>
                          <span className="original-price">{product.price} {product.currency || 'RON'}</span>
                          <span className="discounted-price">
                            {(product.price - (product.price * product.discount / 100)).toFixed(2)} {product.currency || 'RON'}
                          </span>
                        </>
                      ) : (
                        <span>{product.price} {product.currency || 'RON'}</span>
                      )}
                    </div>
                    {product.description && (
                      <p className="product-description">{product.description}</p>
                    )}
                    <button className="add-to-cart-btn">Adaugă în coș</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products-message">
              Nu există produse care să corespundă filtrelor selectate.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
