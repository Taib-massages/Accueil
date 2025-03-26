import React from 'react';
import { Link } from 'react-router-dom';

const Prestations = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Section bannière */}
      <div className="relative h-[500px] w-full">
        <img 
          src={`${process.env.PUBLIC_URL}/images/presta-banner.webp`}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section texte */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Un moment de bien-être unique</h2>
            <p className="text-gray-600 mb-4">
              Découvrez nos prestations de massage professionnelles, adaptées à vos besoins et vos envies.
              Chaque séance est personnalisée pour vous offrir le meilleur moment de détente possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Massages sur mesure adaptés à vos besoins
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Utilisation d'huiles essentielles de qualité
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Salle de massage professionnelle et privée
                </p>
              </div>
            </div>
          </div>
          {/* Section image */}
          <div>
            <img 
              src={`${process.env.PUBLIC_URL}/images/massage.webp`}
              alt="Séance de massage"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {/*deuxième section presta*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section image */}
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/images/Reflexologie.webp`}
              alt="Séance de massage"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Section texte */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Un moment de bien-être unique</h2>
            <p className="text-gray-600 mb-4">
              Découvrez nos prestations de massage professionnelles, adaptées à vos besoins et vos envies.
              Chaque séance est personnalisée pour vous offrir le meilleur moment de détente possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Massages sur mesure adaptés à vos besoins
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Utilisation d'huiles essentielles de qualité
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Salle de massage professionnelle et privée
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3e Section presta*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section texte */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Un moment de bien-être unique</h2>
            <p className="text-gray-600 mb-4">
              Découvrez nos prestations de massage professionnelles, adaptées à vos besoins et vos envies.
              Chaque séance est personnalisée pour vous offrir le meilleur moment de détente possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Massages sur mesure adaptés à vos besoins
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Utilisation d'huiles essentielles de qualité
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Salle de massage professionnelle et privée
                </p>
              </div>
            </div>
          </div>
          {/* Section image */}
          <div>
            <img 
              src={`${process.env.PUBLIC_URL}/images/soins.webp`}
              alt="Séance de massage"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {/*4e section presta*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section image */}
        <div>
            <img 
              src={`${process.env.PUBLIC_URL}/images/Pierres-chaudes.webp`}
              alt="Séance de massage"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Section texte */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Un moment de bien-être unique</h2>
            <p className="text-gray-600 mb-4">
              Découvrez nos prestations de massage professionnelles, adaptées à vos besoins et vos envies.
              Chaque séance est personnalisée pour vous offrir le meilleur moment de détente possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Massages sur mesure adaptés à vos besoins
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Utilisation d'huiles essentielles de qualité
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Salle de massage professionnelle et privée
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 5e Section presta*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section texte */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Un moment de bien-être unique</h2>
            <p className="text-gray-600 mb-4">
              Découvrez nos prestations de massage professionnelles, adaptées à vos besoins et vos envies.
              Chaque séance est personnalisée pour vous offrir le meilleur moment de détente possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Massages sur mesure adaptés à vos besoins
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Utilisation d'huiles essentielles de qualité
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#80a880] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  Salle de massage professionnelle et privée
                </p>
              </div>
            </div>
          </div>
          {/* Section image */}
          <div>
            <img 
              src={`${process.env.PUBLIC_URL}/images/ventouse.webp`}
              alt="Séance de massage"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {/* Section bouton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Link 
          to="/contact"
          className="inline-block bg-[#80a880] text-white px-8 py-4 rounded-lg hover:bg-[#668a66] transition-colors shadow-lg hover:shadow-xl"
        >
          <span className="text-xl font-bold">Réservez maintenant</span>
        </Link>
      </div>
    </div>
  );
};

export default Prestations;