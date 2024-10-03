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
        <div className="w-full px-10">
            <h2 className="text-2xl font-bold mb-10 text-center mt-5"> {/* Ajoutez mt-4 pour l'espace supérieur */}
    Vous trouverez la sélection des hôtels :
</h2>
           
           
            <div className="flex justify-between">
                {cardsHotels.slice(0, 3).map((element) => (
                    <CardsHotels 
                        key={element.id}
                        id={element.id}
                        name={element.name} 
                        location={element.location} 
                        price={element.price}
                        image={element.image} 
                        available={element.available} 
                        addToCardsHotels={() => handleAddToCart(element)}
                        className="w-[32%]" // Ajustez ce pourcentage si nécessaire
                    />
                ))}
            </div>
        </div>
    );
}

export default Hotels;