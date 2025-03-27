import React from 'react';
import { Link } from 'react-router-dom';

const Pilates = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Section image en haut */}
      <div className="relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[600px] ">
        <img 
          src={`${process.env.REACT_APP_PUBLIC_URL}/images/Pilates-header.webp`}
          alt="Cours de Pilates"
          className="w-full h-full object-contain sm:object-cover transform sm:transform-none translate-y-[30px] sm:translate-y-0"
        />
      </div>

      {/* Section texte */}
      <div className="bg-neutral-100 mx-auto mt-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-4">
            Découvrez nos cours de Pilates pour améliorer votre posture et votre bien-être. <br></br>Suivit d'un massage pour se détendre ! 
          </p>
        </div>
      </div>

      {/* Section explicative */}
      <div className="bg-[#f6e6d1] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section texte */}
          <div className="bg-[#f6e6d1] p-8 ">
            <h2 className="text-2xl font-bold text-[#5d795d] mb-4">Le Pilates, une pratique complète</h2>
            <p className="text-gray-600 mb-4">
              Le Pilates est une méthode d'exercice physique et mental qui vise à améliorer la force, la flexibilité et la posture.
              Créé par Joseph Pilates au début du 20e siècle, cette pratique se concentre sur le renforcement du "Powerhouse" (ou "centre de force"),
              qui comprend le tronc, les hanches et le pelvis.
            </p>
            <p className="text-gray-600">
              Mes cours sont adaptés à tous les niveaux, des débutants aux pratiquants expérimentés. Que vous souhaitiez améliorer votre posture,
              renforcer votre corps ou simplement vous détendre, le Pilates est une pratique complète qui vous apportera de nombreux bénéfices.
              <br></br>Le cours est suivit d'un massage pour détendre le corps après l'effort.
            </p>
          </div>
          {/* Section image */}
          <div>
            <img 
              src={`${process.env.REACT_APP_PUBLIC_URL}/images/Pilates.webp`}
              alt="Exercice de Pilates"
              className="w-full shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Section bouton de réservation */}
      <div className="bg-neutral-100 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <Link 
            to="/contact"
            state={{ prestation: "Cours de Pilates" }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5d795d] hover:bg-[#4a654a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5d795d]"
          >
            Réservez maintenant
          </Link>
        </div>
      </div>

      {/* Section icônes */}
      <div className="bg-neutral-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Chronomètre */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-[#5d795d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">1h30</h3>
          </div>
          {/* Posture */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-[#5d795d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Amélioration de la posture</h3>
          </div>
          {/* Renforcement */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-[#5d795d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Renforcement des muscles profonds</h3>
          </div>
          {/* Taille */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-[#5d795d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Effet taille fine</h3>
          </div>
        </div>
      </div>

      {/* Section bouton */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Link 
          to="/contact"
          className="inline-block bg-[#5d795d] text-white px-8 py-4 rounded-lg hover:bg-[#7da37d] transition-colors shadow-lg hover:shadow-xl"
        >
          <span className="text-xl font-bold">Inscrivez-vous</span>
        </Link>
      </div>
    </div>
  );
};

export default Pilates;