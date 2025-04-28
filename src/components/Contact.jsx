import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you'll add your form submission logic later
        console.log('Formular trimis:', formData);
        // Reset form
        setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        alert('Mesaj trimis! Vă vom contacta în curând.');
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contactează-ne</h1>
                <p>Ne-ar face plăcere să auzim de la dumneavoastră. Completați formularul de mai jos sau folosiți informa��iile noastre de contact.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Informații de Contact</h2>
                    <div className="info-item">
                        <i className="icon location-icon"></i>
                        <div>
                            <h3>Adresă</h3>
                            <p>Strada Croitorilor 123, Sectorul de Modă, Oraș, România</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <i className="icon phone-icon"></i>
                        <div>
                            <h3>Telefon</h3>
                            <p>+40 712 345 678</p>
                            <p>+40 723 456 789</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <i className="icon email-icon"></i>
                        <div>
                            <h3>Email</h3>
                            <p>info@norbertotailor.ro</p>
                            <p>contact@norbertotailor.ro</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <i className="icon hours-icon"></i>
                        <div>
                            <h3>Program de Lucru</h3>
                            <p>Luni - Vineri: 9:00 - 18:00</p>
                            <p>Sâmbătă: 10:00 - 16:00</p>
                            <p>Duminică: Închis</p>
                        </div>
                    </div>
                    
                    {/* Follow Us section removed as requested */}
                </div>

                <div className="contact-form">
                    <h2>Trimite-ne un Mesaj</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nume Complet</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Numele dumneavoastră"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Emailul dumneavoastră"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject">Subiect</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subiectul mesajului"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Mesaj</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Mesajul dumneavoastră"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        
                        <button type="submit" className="submit-button">Trimite Mesaj</button>
                    </form>
                </div>
            </div>

            <div className="map-container">
                <h2>Găsește-ne</h2>
                <div className="map-placeholder">
                    {/* Înlocuiți acest div cu o implementare reală de hartă precum Google Maps */}
                    <div style={{ 
                        backgroundColor: '#eee', 
                        height: '400px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        marginTop: '20px'
                    }}>
                        <p>Harta va fi afișată aici</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;