import React from 'react';
import { Link } from 'react-router-dom';

const Prestations = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Section bannière */}
      <div className="relative h-[500px] w-full">
        <img 
          src={`${process.env.REACT_APP_PUBLIC_URL}/images/presta-banner.webp`}
          alt="Mes prestations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-neutral-100 text-center relative top-40">
            Mes Prestations
          </h1>
        </div>
      </div>

      {/* Section principale */}
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section texte */}
          <div>
            <h2 className="text-3xl font-bold text-[#5d795d] mb-4">Massage de corps tête au pieds</h2>
            <p className="text-gray-600 mb-4">
              Découvrez ma prestation de massage professionnelles, adaptées à vos besoins et vos envies.
              Chaque séance est personnalisée pour vous offrir le meilleur moment de détente possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Massages sur mesure adaptés à vos besoins
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Utilisation d'huiles essentielles de qualité
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Table de massage non fournie
                </p>
              </div>
            </div>
          </div>
          {/* Section image */}
          <div>
            <img 
              src={`${process.env.REACT_APP_PUBLIC_URL}/images/massage.webp`}
              alt="Séance de massage"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
        {/* Section bouton */}
      <div className="bg-[#f6e6d1] max-w-7xl mx-auto rounded-lg mt-2 px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Link 
          to="/contact"
          className="inline-block bg-[#5d795d] text-white px-8 py-4 rounded-lg hover:bg-[#7da37d] transition-colors shadow-lg hover:shadow-xl"
        >
          <span className="text-xl font-bold">Réservez maintenant</span>
        </Link>
      </div>
      </div>
      {/*deuxième section presta*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section image */}
        <div>
            <img 
              src={`${process.env.REACT_APP_PUBLIC_URL}/images/Reflexologie.webp`}
              alt="Séance de massage"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Section texte */}
          <div>
            <h2 className="text-[#5d795d] text-3xl font-bold mb-4">Réflexologie</h2>
            <p className="text-gray-600 mb-4">
              Découvrez ma prestation de massage réflexologue, discipline thérapeutique qui consiste à masser des “points réflexes” situés sur différentes parties du corps.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Diminue le stress et l'anxiété
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Favorise la détente
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Améliore la qualité du sommeil
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f6e6d1] max-w-7xl mx-auto rounded-lg mt-2 px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Link 
          to="/contact"
          className="inline-block bg-[#5d795d] text-white px-8 py-4 rounded-lg hover:bg-[#7da37d] transition-colors shadow-lg hover:shadow-xl"
        >
          <span className="text-xl font-bold">Réservez maintenant</span>
        </Link>
      </div>
      </div>
      {/* 3e Section presta*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section texte */}
          <div>
            <h2 className="text-3xl font-bold text-[#5d795d] mb-4">Soins du visage et réflexologie plantaire</h2>
            <p className="text-gray-600 mb-4">
              Préservez et embelissez votre visage, suivit d'un massage plantaire pour libérer le stress et dynamiser l'organisme
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                Stimule la circulation sanguine et favorise la régénération cellulaire
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Utilisation de produits naturels de qualités
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                Soulage les tensions du dos et beaucoup d'autres douleurs
                </p>
              </div>
            </div>
          </div>
          {/* Section image */}
          <div>
            <img 
              src={`${process.env.REACT_APP_PUBLIC_URL}/images/soins.webp`}
              alt="Séance de massage"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="bg-[#f6e6d1] max-w-7xl mx-auto rounded-lg mt-2 px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Link 
          to="/contact"
          className="inline-block bg-[#5d795d] text-white px-8 py-4 rounded-lg hover:bg-[#7da37d] transition-colors shadow-lg hover:shadow-xl"
        >
          <span className="text-xl font-bold">Réservez maintenant</span>
        </Link>
      </div>
      </div>
      {/*4e section presta*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section image */}
        <div>
            <img 
              src={`${process.env.REACT_APP_PUBLIC_URL}/images/Pierres-chaudes.webp`}
              alt="Séance de massage"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Section texte */}
          <div>
            <h2 className="text-3xl font-bold text-[#5d795d] mb-4">Massage aux Pierres Chaudes</h2>
            <p className="text-gray-600 mb-4">
              Découvrez un massage pour libérer les tensions et purifier le corps, relaxer les muscles en profondeur et favoriser l'oxygénation des tissus.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                Favorise l'oxygénation des tissus
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                Lutte contre le stress et la fatigue
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                Génère une sensation de bien-être qui se prolonge longtemps après la séance
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f6e6d1] max-w-7xl mx-auto rounded-lg mt-2 px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Link 
          to="/contact"
          className="inline-block bg-[#5d795d] text-white px-8 py-4 rounded-lg hover:bg-[#7da37d] transition-colors shadow-lg hover:shadow-xl"
        >
          <span className="text-xl font-bold">Réservez maintenant</span>
        </Link>
      </div>
      </div>
      {/* 5e Section presta*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section texte */}
          <div>
            <h2 className="text-3xl font-bold text-[#5d795d] mb-4">Ventouses</h2>
            <p className="text-gray-600 mb-4">
              Découvrez le massage professionnelles à l'aide de ventouses, bénéfique pour la santé globale et qui traite efficacement les affections localisées et systémiques
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                Circulation sanguine et/ou retour veineux paresseux
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                Soigne la cellulite et la peau d'orange
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                Soulage les maux de dos et migraines.
                </p>
              </div>
            </div>
          </div>
          {/* Section image */}
          <div>
            <img 
              src={`${process.env.REACT_APP_PUBLIC_URL}/images/ventouse.webp`}
              alt="Séance de massage"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="bg-[#f6e6d1] max-w-7xl mx-auto rounded-lg mt-2 px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Link 
          to="/contact"
          className="inline-block bg-[#5d795d] text-white px-8 py-4 rounded-lg hover:bg-[#7da37d] transition-colors shadow-lg hover:shadow-xl"
        >
          <span className="text-xl font-bold">Réservez maintenant</span>
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default Prestations;