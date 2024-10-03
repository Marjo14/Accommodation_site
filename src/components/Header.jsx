import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

const Header = () => {
    return (
      <header className="bg-gradient-to-r from-[#ddd0c8] to-[#e5d3c8] shadow-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* CHANGÉ: Remplacé la div par un conteneur flex */}
          <div className="flex items-center">

            {/* AJOUTÉ: Nouveau Link pour l'icône de la maison */}
            <Link to="/" className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-8 w-8 text-gray-800 hover:text-gray-600 transition duration-300" 
                   viewBox="0 0 20 20" 
                   fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            {/* MODIFIÉ: Link séparé pour "Hotels" */}
            <Link to="/hotels" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300">
              Hotels
            </Link>
            <Link to="/cart" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300 absolute right-5">Cart</Link>
          </div>
        </div>
      </header>
    );
};

export default Header;