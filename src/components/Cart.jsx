import React, { useState, useEffect } from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // TVA (Romanian VAT) rate - 19%
  const TVA_RATE = 0.19;
  
  useEffect(() => {
    // Fetch products from the JSON file
    fetch('/image/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Add quantity of 1 to each product
        const productsWithQuantity = data.products.map(product => ({
          ...product,
          quantity: 1
        }));
        setProducts(productsWithQuantity);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Calculate subtotal (before TVA)
  const calculateSubtotal = () => {
    return products.reduce((total, product) => {
      // Calculate price after discount
      const discountedPrice = product.price * (1 - (product.discount / 100));
      return total + (discountedPrice * product.quantity);
    }, 0);
  };

  // Calculate TVA amount
  const calculateTVA = (subtotal) => {
    return subtotal * TVA_RATE;
  };

  // Calculate final total (with TVA)
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tva = calculateTVA(subtotal);
    return subtotal + tva;
  };

  // Format price with currency
  const formatPrice = (price, currency = "EUR") => {
    return `${price.toFixed(2)} ${currency}`;
  };

  if (loading) return <div className="cart-loading">Se încarcă coșul de cumpărături...</div>;
  if (error) return <div className="cart-error">Eroare: {error}</div>;

  const subtotal = calculateSubtotal();
  const tva = calculateTVA(subtotal);
  const total = calculateTotal();

  return (
    <div className="cart-container">
      <h2>Coșul meu de cumpărături</h2>
      
      {products.length === 0 ? (
        <p className="cart-empty">Coșul tău este gol</p>
      ) : (
        <>
          <div className="cart-headers">
            <div className="header-product">Produs</div>
            <div className="header-price">Preț</div>
            <div className="header-discount">Reducere</div>
            <div className="header-quantity">Cantitate</div>
            <div className="header-total">Total</div>
          </div>
          
          <div className="cart-items">
            {products.map(product => {
              const discountedPrice = product.price * (1 - (product.discount / 100));
              const itemTotal = discountedPrice * product.quantity;
              
              return (
                <div key={product.id} className="cart-item">
                  <div className="item-product">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="item-image" 
                    />
                    <div className="item-details">
                      <h3>{product.name}</h3>
                      <p className="item-category">{product.category}</p>
                    </div>
                  </div>
                  <div className="item-price">
                    {formatPrice(product.price, product.currency)}
                  </div>
                  <div className="item-discount">
                    {product.discount > 0 ? `${product.discount}%` : '-'}
                  </div>
                  <div className="item-quantity">
                    {product.quantity}
                  </div>
                  <div className="item-total">
                    {formatPrice(itemTotal, product.currency)}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>{formatPrice(subtotal, "EUR")}</span>
            </div>
            <div className="summary-row">
              <span>TVA (19%):</span>
              <span>{formatPrice(tva, "EUR")}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>{formatPrice(total, "EUR")}</span>
            </div>
          </div>
          
          <div className="cart-actions">
            <button className="button-continue-shopping">
              Continuă cumpărăturile
            </button>
            <button className="button-checkout">
              Finalizează comanda
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;