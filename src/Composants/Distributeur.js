import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
const Distributeur = () => {
   
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-12">
      <h1 className="text-3xl font-bold mb-6">Distributeur Automatique de CBD</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Localisation</h2>
        <p className="text-gray-700 mb-4">
          Notre distributeur automatique de CBD est situé au <strong className='text-green-600'>27 rue de l'ingénieur Morandière</strong>, dans la ville de <strong className='text-green-600'>Monts</strong>.
        </p>
        <div className="flex flex-col items-center justify-center">
                    <a 
                      href="https://www.google.fr/maps/place/27+Rue+de+l'Ing%C3%A9nieur+Morandi%C3%A8re,+37260+Monts/@47.2803186,0.6535211,771m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47fcd808ab09e0e9:0x232b550da0929100!8m2!3d47.280315!4d0.656096!16s%2Fg%2F11h6c7_v5y?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-gray-700 hover:text-green-600 transition-colors"
                    >
                      <FaMapMarkerAlt className="text-3xl mb-2" />
                      <div className="text-center">
                        <p className="font-semibold text-lg">Distributeur automatique</p>
                        <p>27 rue de l'ingénieur Morandière</p>
                        <p>37260 Monts</p>
                        <p className="mt-2 text-sm font-bold text-green-600">Ouvrir dans Google Maps</p>
                      </div>
                    </a>
                  </div>
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 mb-4">
          Découvrez une sélection de produits CBD de haute qualité, disponibles 24h/24 et 7j/7. 
          Profitez de la commodité d'acheter vos produits préférés à tout moment.
        </p>
        <img 
          src={process.env.PUBLIC_URL + "/images/distributeur.webp"} 
          alt="Distributeur Automatique de CBD" 
          className="w-full object-contain h-[700px] rounded-lg mt-4"
        />
      </div>
    </div>
  );
};

export default Distributeur;