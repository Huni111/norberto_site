import React from 'react';
import '../styles/PrivacyPolicy.css'; // Updated path to use the styles directory

const Privacy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <h1 className="privacy-policy-title">Politica de Confidențialitate (GDPR)</h1>
        
        <p className="privacy-policy-date"><strong>Ultima actualizare:</strong> 01.05.2025</p>
        
        <p className="privacy-policy-intro">
          Norberto Fashion SRL respectă dreptul la viață privată al vizitatorilor și clienților săi și se angajează 
          să protejeze datele personale ale acestora, în conformitate cu Regulamentul (UE) 2016/679 privind protecția 
          datelor cu caracter personal (GDPR).
        </p>
        
        <hr className="privacy-policy-divider" />
        
        <h3 className="privacy-policy-section-title">1. Operatorul de date</h3>
        <p className="privacy-policy-operator">
          Norberto Fashion SRL<br />
          CUI: [CUI-ul firmei]<br />
          Adresă: [Adresa firmei]<br />
          Email: norbertofashion@gmail.com<br />
          Telefon: +40 755 981 012
        </p>
        
        <hr className="privacy-policy-divider" />
        
        <h3 className="privacy-policy-section-title">2. Ce date colectăm</h3>
        <p>
          Putem colecta următoarele tipuri de date personale:
        </p>
        <ul className="privacy-policy-list">
          <li>Nume și prenume</li>
          <li>Adresă de e-mail</li>
          <li>Număr de telefon</li>
          <li>Adresă de livrare/facturare</li>
          <li>Informații despre companie (în cazul comenzilor B2B)</li>
          <li>Date tehnice: IP, browser, tip dispozitiv (prin Google Analytics)</li>
        </ul>
        
        <hr className="privacy-policy-divider" />
        
        <h3 className="privacy-policy-section-title">3. Scopurile prelucrării</h3>
        <p>
          Datele sunt colectate și prelucrate pentru următoarele scopuri:
        </p>
        <ul className="privacy-policy-list">
          <li>Procesarea comenzilor și livrarea produselor</li>
          <li>Emiterea facturilor</li>
          <li>Comunicarea cu clienții</li>
          <li>Analiza traficului pe site (Google Analytics)</li>
          <li>Îmbunătățirea experienței utilizatorului</li>
        </ul>
        
        <hr className="privacy-policy-divider" />
        
        <h3 className="privacy-policy-section-title">4. Temeiul legal al prelucrării</h3>
        <p>
          Prelucrarea datelor personale se face în baza unuia dintre următoarele temeiuri legale:
        </p>
        <ul className="privacy-policy-list">
          <li>Executarea unui contract</li>
          <li>Consimțământul explicit (unde este necesar)</li>
          <li>Interesul legitim al companiei</li>
          <li>Obligații legale</li>
        </ul>
        
        <hr className="privacy-policy-divider" />
        
        <h3 className="privacy-policy-section-title">5. Stocarea datelor</h3>
        <p>
          Datele sunt stocate pe servere securizate și sunt păstrate doar atât timp cât este necesar pentru scopurile 
          menționate sau conform cerințelor legale.
        </p>
        
        <hr className="privacy-policy-divider" />
        
        <h3 className="privacy-policy-section-title">6. Dezvăluirea datelor către terți</h3>
        <p>
          Nu vindem, nu închiriem și nu distribuim datele personale către terți. Putem transmite date doar către:
        </p>
        <ul className="privacy-policy-list">
          <li>Furnizori de servicii (ex: firme de curierat, contabili)</li>
          <li>Autorități publice, doar în baza unei obligații legale</li>
        </ul>
        
        <hr className="privacy-policy-divider" />
        
        <h3 className="privacy-policy-section-title">7. Drepturile dumneavoastră</h3>
        <p>
          În conformitate cu GDPR, aveți următoarele drepturi:
        </p>
        <ul className="privacy-policy-list">
          <li>Dreptul de acces la datele personale</li>
          <li>Dreptul de rectificare a datelor</li>
          <li>Dreptul la ștergerea datelor ("dreptul de a fi uitat")</li>
          <li>Dreptul la restricționarea prelucrării</li>
          <li>Dreptul de opoziție</li>
          <li>Dreptul la portabilitatea datelor</li>
          <li>Dreptul de a depune o plângere la ANSPDCP (www.dataprotection.ro)</li>
        </ul>
        <p>
          Pentru exercitarea acestor drepturi, ne puteți contacta la: <strong>norbertofashion@gmail.com</strong>
        </p>
        
        <hr className="privacy-policy-divider" />
        
        <h3 className="privacy-policy-section-title">8. Securitatea datelor</h3>
        <p>
          Norberto Fashion SRL ia toate măsurile tehnice și organizatorice necesare pentru protejarea datelor personale 
          împotriva accesului neautorizat, pierderii sau modificării.
        </p>
        
        <hr className="privacy-policy-divider" />
        
        <h3 className="privacy-policy-section-title">9. Politica de cookie-uri</h3>
        <p>
          Site-ul folosește cookie-uri pentru funcționalitate și analiză de trafic. Detalii complete găsiți în 
          <strong> Politica de Cookie-uri</strong> disponibilă pe site.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
