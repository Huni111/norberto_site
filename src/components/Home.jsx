import React, {useEffect} from "react";
import HeroSection from './Hero'
import Products from '../../image/products.json'
import ProductCarousel from './ProductCarusel'
import '../styles/Home.css'; // Import the CSS file


const Home = () => {


  const product = Products.products;

  return (
    <>
      <HeroSection />

      <section className="premium_style">
        <div>
          <h1>Calitate și Eleganță la Superlativ</h1>
          <p>La Norberto Fashion, fiecare costum este o expresie a rafinamentului și atenției la detalii. Folosim doar materiale premium și tehnici de croitorie impecabile pentru a oferi ținute care combină eleganța clasică cu confortul modern. Fiecare piesă este creată pentru bărbatul care apreciază stilul autentic și rafinamentul desăvârșit.

            Alege Norberto Fashion pentru costume ce emană încredere, stil și exclusivitate – perfecte pentru orice ocazie.</p>
        </div>
        <div>
          <img className="quality-image" src="https://i.ibb.co/27hCtptC/Norberto-4.jpg" alt="Premium quality suit" />
        </div>
      </section>


            <ProductCarousel products={Products.products} />






       
            

        </>
    )
}

export default Home;
