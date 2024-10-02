import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DetailsHotel from '../pages/DetailsHotel';

export const CardsHotels = ({ id, name, location, price, image, available, addToCardsHotels }) => { //Props
    const [count, setCount] = useState(0); // Initialiser le count 

    const handleRemoveClick = () => { // Création variable pour décrémenter le count en prenant compte de l'incrémentation précédente
        setCount(prevCount => Math.max(0, prevCount - 1)); // The Math.max() method returns the number with the highest value.
        // prevCount =>  prend comme argument la valeur précédente de count (qu'on appelle ici prevCount).

    };

    const cardsHotels = {
        id: id, //variable des proprs
        name: name,
        location: location,
        price: price,
        image: image,
        available: available,
    }

    return (
        <div className="hotel-card">
          
            <h3>{name}</h3>
            <p>Location: {location}</p>
            <p>Price: ${price}</p>
            <p>Available: {available ? 'Yes' : 'No'}</p>
            <button onClick={() => addToCardsHotels({ id, name, location, price, image, available })}>
                Add to cart ({count})
            </button>
            <button

                type="button"
                onClick={handleRemoveClick}
                aria-label="Remove from cart">

                🗑️
            </button>
            <Link to ={`/Hotels/${id}`}> View details</Link>


        </div>

    )
}

export default CardsHotels

