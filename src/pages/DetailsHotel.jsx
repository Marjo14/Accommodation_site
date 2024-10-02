import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../data/hotels.json'
import { useState, useEffect } from 'react'

const DetailsHotel = () => {
    const {id} = useParams(); //Return un objet 
    //console.log(id);
    const [hotel, setHotel] = useState(null); //Initialise l'état qui est nulle

    useEffect(() => { // Charge le composant à chaque fois que le code est exécuté 
        const selectedHotel = Data.find(h => h.id === parseInt(id)); //Lors du chargement initial du composant 
        setHotel(selectedHotel); //contient l'hotel qui a été trouvé par son ID
      }, [id]);
      console.log(hotel)
      if (!hotel) {
        return <p>Loading...</p>;
      }

  return (
    <div>
    <h2> {hotel.name}</h2>
    <img src={hotel.image}  />
    <p> € {hotel.price}</p>
    <p>Available: {hotel.available ? 'Yes' : 'No'}</p>

    </div>

  )
}

export default DetailsHotel