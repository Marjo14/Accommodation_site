import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Data from '../data/hotels.json'
import { useState, useEffect } from 'react'

const DetailsHotel = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const selectedHotel = Data.find(h => h.id === parseInt(id));
        setHotel(selectedHotel);
    }, [id]);

    const handleAddClick = () => {
        setCount(prevCount => prevCount + 1);
        
        // Récupérer le panier actuel du localStorage
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Ajouter l'hôtel actuel au panier
        const updatedCart = [...currentCart, hotel];
        
        // Sauvegarder le panier mis à jour dans le localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert('Hotel added to cart!');
    };

    if (!hotel) {
        return <div className="flex justify-center items-center h-screen">
            <p className="text-xl font-semibold">Loading...</p>
        </div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Link to="/hotels" className="mb-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                ← Back to hotels
            </Link>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-4">
                <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                    <h2 className="text-3xl font-bold mb-4">{hotel.name}</h2>
                    <p className="text-gray-600 mb-4">{hotel.location}</p>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-2xl font-semibold">€ {hotel.price}<span className="text-sm text-gray-500">/night</span></p>
                        <p className={`px-4 py-2 rounded-full ${hotel.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                            {hotel.available ? 'Available' : 'Not Available'}
                        </p> 
                    </div>
                    <p className="text-gray-700">{hotel.description}</p>
                    <button 
                        onClick={handleAddClick}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                        disabled={!hotel.available}
                    >
                        {hotel.available ? 'Add to Cart' : 'Not Available'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailsHotel