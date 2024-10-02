import React, { useState } from 'react';
import DataHotel from '../data/hotels.json';
import CardsHotels from '../components/CardsHotels';

const Hotels = ({ addToCardsHotels }) => {
    const [cardsHotels, setCardsHotels] = useState(DataHotel);
    console.log('cardsHotels:', cardsHotels);

    // Fonction pour gérer l'ajout d'un hôtel au panier
    const handleAddToCart = (hotel) => {
        console.log('Ajout au panier:', hotel);
        addToCardsHotels(hotel);
    };
    console.log(cardsHotels)

    return (
        <div className="hotels-container"> 
            <h2 className="hotels-title">Vous trouverez la sélection des hôtels :</h2>
            <div className="hotels-grid">
                {cardsHotels.map((element,index) => (
                    <CardsHotels 
                        key={element.id}
                        id={element.id}
                        name={element.name} 
                        location={element.location} 
                        price={element.price}
                        image={element.image} 
                        available={element.available} 
                        addToCardsHotels={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hotels;
