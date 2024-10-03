import React, { useState } from 'react';
import DataHotel from '../data/hotels.json';
import CardsHotels from '../components/CardsHotels';

const Hotels = ({ addToCardsHotels }) => {
    const [cardsHotels, setCardsHotels] = useState(DataHotel);

    const handleAddToCart = (hotel) => {
        console.log('Ajout au panier:', hotel);
        addToCardsHotels(hotel);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-10 text-center mt-5">
                Vous trouverez la sélection des hôtels :
            </h2>
           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardsHotels.map((element) => (
                    <CardsHotels 
                        key={element.id}
                        id={element.id}
                        name={element.name} 
                        location={element.location} 
                        price={element.price}
                        image={element.image} 
                        available={element.available} 
                        addToCardsHotels={() => handleAddToCart(element)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hotels;