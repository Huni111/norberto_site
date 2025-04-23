import React, { useState } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt with:', formData);
    // After successful login, you could close the modal and update some auth state
  };

  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  // Inline styles to avoid conflicts with other components
  const styles = {
    modalBackdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(3px)'
    },
    modalContainer: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      width: '90%',
      maxWidth: '400px',
      padding: '1.5rem',
      animation: 'modalFadeIn 0.3s',
      position: 'relative'
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem'
    },
    modalTitle: {
      margin: 0,
      fontSize: '1.5rem',
      color: '#333'
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#777'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '500',
      color: 'black'

    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem'
    },
    forgotPassword: {
      textAlign: 'right',
      marginBottom: '1.5rem'
    },
    forgotPasswordLink: {
      color: '#4a90e2',
      textDecoration: 'none',
      fontSize: '0.9rem'
    },
    loginButton: {
      backgroundColor: '#4a90e2',
      color: 'white',
      border: 'none',
      padding: '0.75rem',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    registerLink: {
      marginTop: '1.5rem',
      textAlign: 'center'
    },
    registerLinkAnchor: {
      color: '#4a90e2',
      textDecoration: 'none',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.modalBackdrop} onClick={onClose}>
      <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>Intrare în cont</h2>
          <button style={styles.closeButton} onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email</label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="password">Parola</label>
            <input
              style={styles.input}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.forgotPassword}>
            <a style={styles.forgotPasswordLink} href="#">Ai uitat parola?</a>
          </div>

          <button style={styles.loginButton} type="submit">Intră în cont</button>
          
          <div style={styles.registerLink}>
            <p>Nu ai un cont? <a style={styles.registerLinkAnchor} href="#">Înregistrează-te</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
