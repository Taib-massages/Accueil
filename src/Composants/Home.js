import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  
  return (
    <div className="bg-neutral-100 mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
      <div className="relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[550px] ">
        <img 
          src={`${process.env.REACT_APP_PUBLIC_URL}/images/taib.webp`}
          alt="Cours de Pilates"
          className="w-full h-full object-cover sm:object-cover transform sm:transform-none translate-y-[30px] lg:translate-y-[20px]"
        />
      </div>
      
      <section className="max-w-7xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-[#5d795d] text-center mb-2">
          Taib Massages
        </h1>
        <h2 className="text-xl text-center mb-1">
          Votre spécialiste Massage, Réflexologie et Pierres Chaudes et Ventouses à Paris.
          RDV à domicile ou Paris 18e.
          <br></br><strong className='text-[#5d795d]'>Table de massage non fournie</strong>
        </h2>
  
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Link to="/prestations" className="block">
            <div className="bg-[#f6e6d1] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#5d795d]">Prestations et prix</h3>
              <p className="text-gray-600">
                Découvrez mes prestations de Massage, Soins du visage, Réflexologie, Pierres chaudes et ventouses ! 
              </p>
              <span className="inline-block mt-4 text-[#5d795d] font-bold hover:text-green-900">
                Découvrir les prestations →
              </span>
            </div>
          </Link>
          <Link to="/pilates" className="block">
            <div className="bg-[#f6e6d1] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#5d795d]">Cours de pilates</h3>
              <p className="text-gray-600">
              Découvrez le pilates pour développer le corps de façon harmonieuse, rectifier les mauvaises postures
              </p>
              <span className="inline-block mt-4 text-[#5d795d] font-bold hover:text-green-900">
                Intéressé(e) par le pilates ? →
              </span>
            </div>
          </Link>
          <Link to="/cadeaux" className="block">
            <div className="bg-[#f6e6d1] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#5d795d]">Offrez du bien-être</h3>
              <p className="text-gray-600">
              Envie de faire plaisir à un proche ? Avec mes bon cadeaux bien être vous ferez assurément des heureux.
              </p>
              <span className="inline-block mt-4 text-[#5d795d] font-bold hover:text-green-900">
                Toutes les modalités ici →
              </span>
            </div>
          </Link>
          <Link to="/contact" className="block">
            <div className="bg-[#f6e6d1] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#5d795d]">Contact</h3>
              <p className="text-gray-600">
              Un renseignement, une envie, une question ou vous savez déjà ce que vous voulez ?
              </p>
              <span className="inline-block mt-4 text-[#5d795d] font-bold hover:text-green-900">
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