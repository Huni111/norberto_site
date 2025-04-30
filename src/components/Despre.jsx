import React from 'react';
import '../styles/Despre.css';

const Despre = () => {
    return (
        <div className="despre-container">
            {/* Hero Section */}
            <div className="despre-hero">
                <h1>Despre noi</h1>
                <p className="tagline">Eleganță și rafinament în fiecare cusătură</p>
            </div>

            {/* Our Story Section */}
            <section className="despre-section">
                <div className="section-content">
                    <div className="text-content">
                        <h2>Povestea noastră</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at fermentum nunc. 
                            Maecenas id lectus vitae mauris faucibus cursus. Nulla facilisi. Nullam consectetur 
                            nec eros vel tempor. Vivamus sit amet urna ac nisi viverra consectetur id eget magna. 
                            Donec varius leo non lobortis molestie.
                        </p>
                        <p>
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
                            curae; Cras consectetur mauris at nisl varius, eget tempus purus feugiat. Donec 
                            feugiat neque non ex faucibus, quis varius magna bibendum. Etiam efficitur justo 
                            vitae odio rhoncus, in auctor urna rhoncus.
                        </p>
                    </div>
                    <div className="image-container">
                        <img src="/image/despre/atelier.jpg" alt="Atelierul nostru" />
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="despre-section mission-section">
                <div className="section-content reverse">
                    <div className="image-container">
                        <img src="/image/despre/mission.jpg" alt="Misiunea noastră" />
                    </div>
                    <div className="text-content">
                        <h2>Misiunea noastră</h2>
                        <p>
                            Proin id enim vel elit congue feugiat. Curabitur porttitor purus quam, 
                            sit amet vulputate tellus placerat quis. Donec at velit ultrices, sagittis 
                            libero at, fringilla augue. Fusce sit amet pellentesque justo, at ultrices nisl.
                        </p>
                        <p>
                            Mauris gravida lorem nec dolor laoreet, ac facilisis justo bibendum. Praesent 
                            rutrum, justo at placerat lacinia, ipsum nulla congue ligula, nec ultrices nulla 
                            lacus sit amet orci. Phasellus commodo fermentum justo, eget commodo nisi ultrices vel.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="despre-section values-section">
                <h2 className="centered-heading">Valorile noastre</h2>
                <div className="values-container">
                    <div className="value-card">
                        <div className="value-icon">✂️</div>
                        <h3>Calitate</h3>
                        <p>Nullam consequat, eros sit amet hendrerit vulputate, magna erat scelerisque magna.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">👔</div>
                        <h3>Eleganță</h3>
                        <p>Fusce laoreet elit quis diam convallis, in fermentum purus tempus.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🧵</div>
                        <h3>Atenție la detalii</h3>
                        <p>Integer nec sem at nibh ultricies pharetra in et enim.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3>Servicii personalizate</h3>
                        <p>Donec vehicula nisl id tempus dictum. Sed eu velit sit amet metus commodo.</p>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="despre-section team-section">
                <h2 className="centered-heading">Echipa noastră</h2>
                <div className="team-container">
                    <div className="team-member">
                        <div className="member-image">
                            <img src="/image/despre/team1.jpg" alt="Membru echipă" />
                        </div>
                        <h3>Nume Prenume</h3>
                        <p className="member-role">Fondator & Designer</p>
                        <p>Morbi auctor sapien vel sapien ultrices, vel volutpat enim vehicula.</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image">
                            <img src="/image/despre/team2.jpg" alt="Membru echipă" />
                        </div>
                        <h3>Nume Prenume</h3>
                        <p className="member-role">Master Croitor</p>
                        <p>Quisque vel interdum metus, id facilisis turpis.</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image">
                            <img src="/image/despre/team3.jpg" alt="Membru echipă" />
                        </div>
                        <h3>Nume Prenume</h3>
                        <p className="member-role">Consultant Vestimentar</p>
                        <p>Vivamus feugiat, nisi eget rutrum ultricies, arcu urna interdum nisi.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="despre-section testimonials-section">
                <h2 className="centered-heading">Ce spun clienții noștri</h2>
                <div className="testimonials-container">
                    <div className="testimonial">
                        <div className="quote-mark">"</div>
                        <p className="testimonial-text">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Nulla facilisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                        </p>
                        <p className="testimonial-author">— Client Mulțumit</p>
                    </div>
                    <div className="testimonial">
                        <div className="quote-mark">"</div>
                        <p className="testimonial-text">
                            Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur 
                            sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis.
                        </p>
                        <p className="testimonial-author">— Alt Client Mulțumit</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Despre;
