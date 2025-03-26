import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel.js';

const Home = () => {
  const slides = [
    {
      image: process.env.PUBLIC_URL + '/images/taib.webp',
      alt: "Taib massages, réflexologie, pierres chaudes"
    },
    {
      image: process.env.PUBLIC_URL + '/images/Table.webp',
      alt: "Table de massage"
    },
    {
      image: process.env.PUBLIC_URL + '/images/Produits.webp',
      alt: "Sélection de produit bien-être premium lors de vos massages"
    }
  ];

  return (
    <div className="bg-[#f6e6d1] mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
      <Carousel slides={slides} />
      
      <section className="mt-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Taib Massages
        </h1>
        <h2 className="text-2xl text-center mb-1">
          Votre spécialiste Massage, Réflexologie et Pierres Chaudes et Ventouses à Paris.
          RDV à domicile ou Paris 18e.
          <br></br>Table de massage non fournie
        </h2>
        <p className="text-xl font-bold text-center mb-4">
          <Link to="/Contact" className="text-[#80a880] hover:underline">
            
          </Link>
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Link to="/prestations" className="block">
            <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-black">Prestations et prix</h3>
              <p className="text-gray-600">
                Découvrez mes prestations de Massage, Soins du visage, Réflexologie, Pierres chaudes et ventouses ! 
              </p>
              <span className="inline-block mt-4 text-[#80a880] font-bold hover:text-green-700">
                Découvrir les prestations →
              </span>
            </div>
          </Link>
          <Link to="/pilates" className="block">
            <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-black">Cours de pilates</h3>
              <p className="text-gray-600">
              Découvrez le pilates pour développer le corps de façon harmonieuse, rectifier les mauvaises postures
              </p>
              <span className="inline-block mt-4 text-[#80a880] font-bold hover:text-green-700">
                Intéressé(e) par le pilates ? →
              </span>
            </div>
          </Link>
          <Link to="/cadeaux" className="block">
            <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-black">Offrez du bien-être</h3>
              <p className="text-gray-600">
              Envie de faire plaisir à un proche ? Avec mes bon cadeaux bien être vous ferez assurément des heureux.
              </p>
              <span className="inline-block mt-4 text-[#80a880] font-bold hover:text-green-700">
                Toutes les modalités ici →
              </span>
            </div>
          </Link>
          <Link to="/contact" className="block">
            <div className="bg-neutral-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-black">Contact</h3>
              <p className="text-gray-600">
              Un renseignement, une envie ou une question ?
              </p>
              <span className="inline-block mt-4 text-[#80a880] font-bold hover:text-green-700">
                Contactez moi pour prendre un rendez vous →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;