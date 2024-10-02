import React from 'react';
import { Link } from 'react-router-dom';

export const CardsHotels = ({ id, name, location, price, image, available }) => {
    return (
        <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full pt-[56.25%]">
                <img 
                    src={image} 
                    alt={name} 
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="mb-1">Location: {location}</p>
                <p className="mb-1">Price: ${price}</p>
                <p className="mb-3">Available: {available ? 'Yes' : 'No'}</p>
                <Link 
                    to={`/Hotels/${id}`}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    View details
                </Link>
            </div>
        </div>
    );
};

export default CardsHotels;