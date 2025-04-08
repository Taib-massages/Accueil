import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO/SEO';

<SEO 
  title="Taib-massages - Spécialiste de bien-être"
  description="Spécialiste de bien-être spécialisé en massages et cours de Pilates à Paris 18e."
  image="/images/og-image.png"
  canonical="https://Taib-massages.github.io/Accueil/"
/>

const Home = () => {
  
  return (
    <div className="bg-neutral-100 mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
      <div className="relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[550px] max-w-5xl mx-auto ">
        <img 
          src={`${process.env.REACT_APP_PUBLIC_URL}/images/taib.webp`}
          alt="Taib massages, masseur spécialiste à Paris 18e - Spécialisé en massages, pierres chaudes, ventouses et Pilates"
          className="w-full h-full object-contain rounded-[2vw] sm:object-contain transform sm:transform-none translate-y-[10px] lg:translate-y-[15px]"
           loading="lazy"
        />
      </div>
      
      <section className="max-w-7xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-[#5d795d] text-center mb-2">
          Taib Massages
        </h1>
        <h2 className="text-xl text-center mb-1">
          Votre spécialiste Massage, Réflexologie et Pierres Chaudes et Ventouses sèches à Paris.
          RDV à domicile ou Paris 18e.
        </h2>
        <p className=' text-center mb-1 font-semibold text-xl'>Prestations à domicile, possibilité d'utiliser un futon de massage</p>
        <h3 className="text-2xl text-center mb-1 text-[#5d795d] font-bold mt-8">
          Diplômes et formations 
        </h3>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 text-xl text-center">
            <li className="font-semibold">Diplôme de masseur de l'institut national paramédical et sportif des Pays-Bas Amsterdam NESPG</li>
            <li><strong className='text-[#5d795d]'>Pierres chaudes :</strong> Formation à l'institut Figari Paris France</li>
            <li><strong className='text-[#5d795d]'>Pilates :</strong> certificat d'instructeur, Shift U Instituto Portugues de Desporto</li>
            <li><strong className='text-[#5d795d]'>Ventouses sèches : </strong>Praticien ventouses traditionnelles chinoises Ecole SHEN en médecine traditionnelle chinoise Paris France</li>
            <li className='font-semibold'>Expérience de plus de 20 ans dans plusieurs SPA de palaces parisiens (Ritz, Bristol, Prince de Galles ...)</li>
          </ul>
        </div>
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