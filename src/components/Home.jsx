import React from "react";
import HeroSection from './Hero'
import ProductCard from "./ProductCard";

const Home = () => {

const product = {
    "id": 1,
    "name": "Men's Classic Suit",
    "price": 499.99,
    "currency": "EUR",
    "description": "A timeless men's suit, perfect for any formal occasion.",
    "images": [
      "https://example.com/images/suit1-front.jpg",
      "https://example.com/images/suit1-back.jpg"
    ],
    "stock": 10,
    "category": "Suits",
    "discount": 10,
    "rating": 4.5
  }


    return (
        <>
            <HeroSection />

            <div className="premium_style">

                <div>
                    <h1>Calitate și Eleganță la Superlativ</h1>

                    <p>La Norberto Fashion, fiecare costum este o expresie a rafinamentului și atenției la detalii. Folosim doar materiale premium și tehnici de croitorie impecabile pentru a oferi ținute care combină eleganța clasică cu confortul modern. Fiecare piesă este creată pentru bărbatul care apreciază stilul autentic și rafinamentul desăvârșit.

                        Alege Norberto Fashion pentru costume ce emană încredere, stil și exclusivitate – perfecte pentru orice ocazie.</p>

                </div>
                <div><img className="quality-image" src="https://i.ibb.co/27hCtptC/Norberto-4.jpg"></img></div>

            </div>

        <ProductCard
        image={product.images[0]}
        >


        </ProductCard>
            

        </>
    )
}

export default Home;