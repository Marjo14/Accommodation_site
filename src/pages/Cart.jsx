import React, { useState, useEffect } from 'react'

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartItems);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Your purchase:</h2>
            {cart.length === 0 ? (
                <p>Your basket is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="mb-4 p-4 border rounded">
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p>{item.location}</p>
                            <img src={item.image} alt={item.name} className="w-full h-64 object-cover object-center" />
                            <p>€{item.price} per night</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Cart