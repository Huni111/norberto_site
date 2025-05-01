import React from 'react';
import '../styles/Terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1 className="terms-title">Termeni și Condiții de Utilizare – Norberto Fashion</h1>
        
        <p className="terms-date"><strong>Ultima actualizare:</strong> {new Date().toLocaleDateString()}</p>
        
        <p className="terms-intro">
          Vă rugăm să citiți cu atenție acești termeni și condiții înainte de a utiliza site-ul www.norbertocollection.ro, 
          operat de Norberto Fashion SRL, cu sediul în Satu Mare, România.
        </p>
        
        <hr className="terms-divider" />
        
        <h3 className="terms-section-title">1. Informații Generale</h3>
        <p>
          Site-ul www.norbertocollection.ro este administrat de Norberto Fashion SRL, având CUI [CUI-ul firmei] și 
          sediul social în [adresă completă]. Prin accesarea și utilizarea acestui site, sunteți de acord cu acești 
          termeni și condiții.
        </p>
        
        <hr className="terms-divider" />
        
        <h3 className="terms-section-title">2. Drepturi de Autor</h3>
        <p>
          Conținutul acestui site (texte, imagini, logo-uri, design, cod sursă) este proprietatea Norberto Fashion SRL 
          și este protejat de legislația privind drepturile de autor. Este interzisă copierea, distribuirea sau 
          reutilizarea oricărei părți fără acordul nostru scris.
        </p>
        
        <hr className="terms-divider" />
        
        <h3 className="terms-section-title">3. Produse și Comenzi</h3>
        <p>
          Produsele prezentate sunt dedicate în principal clienților B2B (business-to-business). Prețurile și stocurile 
          pot suferi modificări fără notificare prealabilă. Comenzile sunt procesate în funcție de disponibilitatea 
          produselor. Ne rezervăm dreptul de a refuza comenzi fără a oferi o justificare.
        </p>
        
        <hr className="terms-divider" />
        
        <h3 className="terms-section-title">4. Livrare și Transport</h3>
        <p>
          Livrarea se face prin curier, iar costul transportului este, de regulă, suportat de client, cu excepția 
          cazurilor în care se convine altfel. Greutatea estimativă a coletelor este între 100–150 kg per transport.
        </p>
        
        <hr className="terms-divider" />
        
        <h3 className="terms-section-title">5. Plată</h3>
        <p>
          Modalitățile de plată acceptate vor fi comunicate în procesul de comandă. Facturile sunt emise în 
          conformitate cu legislația fiscală din România.
        </p>
        
        <hr className="terms-divider" />
        
        <h3 className="terms-section-title">6. Politica de Confidențialitate</h3>
        <p>
          Datele personale colectate prin intermediul site-ului sunt prelucrate conform GDPR. Pentru mai multe 
          informații, vă rugăm să consultați pagina „Politica de Confidențialitate".
        </p>
        
        <hr className="terms-divider" />
        
        <h3 className="terms-section-title">7. Limitarea Răspunderii</h3>
        <p>
          Norberto Fashion SRL nu își asumă responsabilitatea pentru eventualele erori sau neconcordanțe în 
          informațiile afișate pe site. Utilizarea site-ului se face pe propria răspundere.
        </p>
        
        <hr className="terms-divider" />
        
        <h3 className="terms-section-title">8. Modificări ale Termenilor și Condițiilor</h3>
        <p>
          Ne rezervăm dreptul de a modifica acești termeni și condiții oricând, fără notificare prealabilă. 
          Modificările vor fi publicate pe această pagină și vor intra în vigoare din momentul publicării.
        </p>
        
        <hr className="terms-divider" />
        
        <h3 className="terms-section-title">9. Legea Aplicabilă și Jurisdicția</h3>
        <p>
          Acești termeni și condiții sunt guvernați de legea română. Eventualele litigii vor fi soluționate de 
          instanțele competente din Satu Mare, România.
        </p>
        
        <hr className="terms-divider" />
        
        <p className="terms-contact">
          Pentru orice întrebare, ne puteți contacta la:
        </p>
        
        <p className="terms-footer">
          <strong>Norberto Fashion SRL</strong><br />
          Email: norbertofashion@gmail.com<br />
          Telefon: +40 755 981 012
        </p>
      </div>
    </div>
  );
};

export default Terms;
