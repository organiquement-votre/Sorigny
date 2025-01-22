import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel.js';

const Home = () => {
  const slides = [
    {
      image: process.env.PUBLIC_URL + '/images/Magasin.webp',
      alt: "Sélection de fleurs CBD premium à Organiquement Votre Sorigny"
    },
    {
      image: process.env.PUBLIC_URL + '/images/Spiritueux.webp',
      alt: "Sélection de spiritueux premium à Organiquement Votre Sorigny"
    },
    {
      image: process.env.PUBLIC_URL + '/images/spiritueux2.webp',
      alt: "Sélection de produit bien-être premium à Organiquement Votre Sorigny"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
      <Carousel slides={slides} />
      
      <section className="mt-4">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Organiquement Votre Sorigny
        </h1>
        <h2 className="text-2xl text-center mb-1">
          Votre boutique de CBD et Spiritueux en Indre-et-Loire
        </h2>
        <p className="text-xl font-bold text-center text-green-600 mb-4">
          <Link to="/Contact" className="text-green-600 hover:underline">
            Un renseignement, une commande ou une question ? Contactez-moi !
          </Link>
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/CBD" className="block">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-black">Produits CBD</h3>
              <p className="text-gray-600">
                Découvrez notre gamme complète de produits CBD : fleurs, résines, pollens, puff, savons, crèmes de massage
                et autres produits de bien-être.
              </p>
              <span className="inline-block mt-4 text-green-600 font-bold hover:text-green-700">
                Découvrir nos produits →
              </span>
            </div>
          </Link>

          <Link to="/Spiritueux" className="block">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-black">Spiritueux</h3>
              <p className="text-gray-600">
                Explorez notre sélection de Rhums, Whisky et autre spiritueux d'exception, soigneusement choisis
                pour votre plaisir.
              </p>
              <span className="inline-block mt-4 text-green-600 font-bold hover:text-green-700">
                Découvrir nos spiritueux →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;