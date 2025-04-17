import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CompanyRegistrationForm.css";

const CompanyRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Company information
    companyName: "",
    cui: "",
    registrationNumber: "",
    socialAddress: "",
    deliveryAddress: "",
    
    // Contact information
    contactName: "",
    contactPosition: "",
    phoneNumber: "",
    email: "",
    
    // Account credentials
    password: "",
    confirmPassword: "",
    
    // Billing information
    iban: "",
    bank: "",
    vatPayer: false,
    
    // Collaboration type
    collaborationType: "",
    otherCollaborationDetails: "",
    
    // Communication preferences
    preferredChannel: "email",
    preferredLanguage: "română",
    
    // Terms and agreements
    termsAccepted: false,
    gdprAccepted: false
  });
  
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Validate required fields
    if (!formData.companyName) newErrors.companyName = "Denumirea companiei este obligatorie";
    if (!formData.cui) newErrors.cui = "CUI-ul este obligatoriu";
    if (!formData.socialAddress) newErrors.socialAddress = "Adresa sediului social este obligatorie";
    if (!formData.contactName) newErrors.contactName = "Numele persoanei de contact este obligatoriu";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Numărul de telefon este obligatoriu";
    if (!formData.email) newErrors.email = "Email-ul este obligatoriu";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Adresa de email este invalidă";
    
    // Validate password fields
    if (!formData.password) newErrors.password = "Parola este obligatorie";
    else if (formData.password.length < 8) newErrors.password = "Parola trebuie să conțină cel puțin 8 caractere";
    
    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirmarea parolei este obligatorie";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Parolele nu coincid";
    
    if (!formData.collaborationType) newErrors.collaborationType = "Selectați tipul de colaborare";
    if (formData.collaborationType === "other" && !formData.otherCollaborationDetails) {
      newErrors.otherCollaborationDetails = "Detaliați tipul de colaborare dorit";
    }
    
    if (!formData.termsAccepted) newErrors.termsAccepted = "Trebuie să acceptați termenii și condițiile";
    if (!formData.gdprAccepted) newErrors.gdprAccepted = "Trebuie să acceptați prelucrarea datelor personale";
    
    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would normally send the form data to your backend
      // For example:
      // await axios.post('/api/register-company', formData);
      
      // For now, we'll just simulate a success
      setTimeout(() => {
        alert("Înregistrarea companiei a fost realizată cu succes! Veți fi contactat în curând de echipa noastră.");
        navigate("/"); // Redirect to home page after successful registration
      }, 1000);
    } catch (error) {
      console.error("Registration error:", error);
      setErrors({
        form: "A apărut o eroare la înregistrare. Vă rugăm să încercați din nou."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="company-registration-container">
      <h1>Înregistrare companie</h1>
      <p className="registration-intro">
        Completați formularul de mai jos pentru a crea un cont business și pentru a beneficia de ofertele noastre dedicate companiilor.
      </p>
      
      {errors.form && <div className="error-message form-error">{errors.form}</div>}
      
      <form onSubmit={handleSubmit} className="company-registration-form">
        <section className="form-section">
          <h2>Informații despre firmă</h2>
          
          <div className="form-group">
            <label htmlFor="companyName">Denumirea companiei *</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={errors.companyName ? "error" : ""}
            />
            {errors.companyName && <div className="error-message">{errors.companyName}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="cui">Codul unic de înregistrare (CUI) *</label>
            <input
              type="text"
              id="cui"
              name="cui"
              value={formData.cui}
              onChange={handleChange}
              className={errors.cui ? "error" : ""}
            />
            {errors.cui && <div className="error-message">{errors.cui}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="registrationNumber">Nr. de înregistrare la Registrul Comerțului</label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
            />
            <small>Opțional, dar util</small>
          </div>
          
          <div className="form-group">
            <label htmlFor="socialAddress">Adresa sediului social *</label>
            <textarea
              id="socialAddress"
              name="socialAddress"
              value={formData.socialAddress}
              onChange={handleChange}
              className={errors.socialAddress ? "error" : ""}
            />
            {errors.socialAddress && <div className="error-message">{errors.socialAddress}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="deliveryAddress">Adresa punctului de livrare</label>
            <textarea
              id="deliveryAddress"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
            />
            <small>Completați doar dacă diferă de adresa sediului social</small>
          </div>
        </section>
        
        <section className="form-section">
          <h2>Informații de contact</h2>
          
          <div className="form-group">
            <label htmlFor="contactName">Nume persoană de contact *</label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className={errors.contactName ? "error" : ""}
            />
            {errors.contactName && <div className="error-message">{errors.contactName}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="contactPosition">Funcția în companie</label>
            <input
              type="text"
              id="contactPosition"
              name="contactPosition"
              value={formData.contactPosition}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phoneNumber">Număr de telefon *</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={errors.phoneNumber ? "error" : ""}
            />
            {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Adresă de e-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
        </section>
        
        <section className="form-section">
          <h2>Date autentificare cont</h2>
          
          <div className="form-group">
            <label htmlFor="password">Parolă *</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "error" : ""}
              />
              <button 
                type="button" 
                className="toggle-password-button" 
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Ascunde parola" : "Afișează parola"}
              >
                {showPassword ? "Ascunde" : "Afișează"}
              </button>
            </div>
            {errors.password && <div className="error-message">{errors.password}</div>}
            <small>Parola trebuie să conțină minim 8 caractere</small>
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmare parolă *</label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "error" : ""}
              />
              <button 
                type="button" 
                className="toggle-password-button" 
                onClick={toggleConfirmPasswordVisibility}
                aria-label={showConfirmPassword ? "Ascunde parola" : "Afișează parola"}
              >
                {showConfirmPassword ? "Ascunde" : "Afișează"}
              </button>
            </div>
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          </div>
        </section>
        
        <section className="form-section">
          <h2>Date pentru facturare</h2>
          
          <div className="form-group">
            <label htmlFor="iban">Cont bancar (IBAN)</label>
            <input
              type="text"
              id="iban"
              name="iban"
              value={formData.iban}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="bank">Banca</label>
            <input
              type="text"
              id="bank"
              name="bank"
              value={formData.bank}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="vatPayer"
              name="vatPayer"
              checked={formData.vatPayer}
              onChange={handleChange}
            />
            <label htmlFor="vatPayer">Firma este plătitoare de TVA</label>
          </div>
        </section>
        
        <section className="form-section">
          <h2>Tipul colaborării dorite *</h2>
          
          <div className="collaboration-options">
            <div className="radio-group">
              <input
                type="radio"
                id="collaborationTypeReseller"
                name="collaborationType"
                value="reseller"
                checked={formData.collaborationType === "reseller"}
                onChange={handleChange}
              />
              <label htmlFor="collaborationTypeReseller">Revânzător / Magazin fizic</label>
            </div>
            
            <div className="radio-group">
              <input
                type="radio"
                id="collaborationTypeOnline"
                name="collaborationType"
                value="online"
                checked={formData.collaborationType === "online"}
                onChange={handleChange}
              />
              <label htmlFor="collaborationTypeOnline">Comerț online</label>
            </div>
            
            <div className="radio-group">
              <input
                type="radio"
                id="collaborationTypeDistributor"
                name="collaborationType"
                value="distributor"
                checked={formData.collaborationType === "distributor"}
                onChange={handleChange}
              />
              <label htmlFor="collaborationTypeDistributor">Distribuitor</label>
            </div>
            
            <div className="radio-group">
              <input
                type="radio"
                id="collaborationTypeCustomization"
                name="collaborationType"
                value="customization"
                checked={formData.collaborationType === "customization"}
                onChange={handleChange}
              />
              <label htmlFor="collaborationTypeCustomization">Personalizare / comenzi speciale</label>
            </div>
            
            <div className="radio-group">
              <input
                type="radio"
                id="collaborationTypeOther"
                name="collaborationType"
                value="other"
                checked={formData.collaborationType === "other"}
                onChange={handleChange}
              />
              <label htmlFor="collaborationTypeOther">Alt tip de colaborare</label>
            </div>
            
            {formData.collaborationType === "other" && (
              <div className="form-group">
                <label htmlFor="otherCollaborationDetails">Specificați tipul de colaborare *</label>
                <textarea
                  id="otherCollaborationDetails"
                  name="otherCollaborationDetails"
                  value={formData.otherCollaborationDetails}
                  onChange={handleChange}
                  className={errors.otherCollaborationDetails ? "error" : ""}
                />
                {errors.otherCollaborationDetails && (
                  <div className="error-message">{errors.otherCollaborationDetails}</div>
                )}
              </div>
            )}
            
            {errors.collaborationType && <div className="error-message">{errors.collaborationType}</div>}
          </div>
        </section>
        
        <section className="form-section">
          <h2>Preferințe de comunicare</h2>
          
          <div className="form-group">
            <label htmlFor="preferredChannel">Canal preferat</label>
            <select
              id="preferredChannel"
              name="preferredChannel"
              value={formData.preferredChannel}
              onChange={handleChange}
            >
              <option value="email">Email</option>
              <option value="phone">Telefon</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="preferredLanguage">Limba preferată</label>
            <select
              id="preferredLanguage"
              name="preferredLanguage"
              value={formData.preferredLanguage}
              onChange={handleChange}
            >
              <option value="română">Română</option>
              <option value="engleză">Engleză</option>
              <option value="maghiară">Maghiară</option>
            </select>
          </div>
        </section>
        
        <section className="form-section terms-section">
          <h2>Termeni și condiții</h2>
          
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className={errors.termsAccepted ? "error" : ""}
            />
            <label htmlFor="termsAccepted">
              Accept <a href="/terms" target="_blank" rel="noopener noreferrer">Termenii și condițiile</a> *
            </label>
            {errors.termsAccepted && <div className="error-message">{errors.termsAccepted}</div>}
          </div>
          
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="gdprAccepted"
              name="gdprAccepted"
              checked={formData.gdprAccepted}
              onChange={handleChange}
              className={errors.gdprAccepted ? "error" : ""}
            />
            <label htmlFor="gdprAccepted">
              Sunt de acord cu <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">prelucrarea datelor personale (GDPR)</a> *
            </label>
            {errors.gdprAccepted && <div className="error-message">{errors.gdprAccepted}</div>}
          </div>
        </section>
        
        <div className="form-actions">
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? "Se procesează..." : "Înregistrează compania"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyRegistrationForm;
