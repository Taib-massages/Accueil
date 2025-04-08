import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO/SEO';

<SEO 
  title="Cours de Pilates - Taib-massages"
  description="Cours de Pilates Mat à domicile à Paris 18e pour améliorer votre posture et votre bien-être"
  image="/images/Pilates-header.webp"
  canonical="https://taib-massages.github.io/Accueil/pilates"
/>

const Pilates = () => {
  return (
    <main className="min-h-screen bg-neutral-100">
      {/* Section image en haut */}
      <header className="relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[600px]">
        <img 
          src={`${process.env.REACT_APP_PUBLIC_URL}/images/Pilates-header.webp`}
          alt="Cours de Pilates Mat à domicile à Paris 18e"
          className="w-full h-full object-contain sm:object-cover transform sm:transform-none translate-y-[30px] sm:translate-y-0"
          loading="lazy"
          width="1920"
          height="600"
        />
      </header>

      {/* Section texte */}
      <section className="bg-neutral-100 mx-auto mt-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-4">
            Découvrez mes cours de Pilates Mat à domicile pour améliorer votre posture et votre bien-être. <br></br>Suivit d'un massage pour se détendre ! 
          </p>
        </div>
      </section>

      {/* Section explicative */}
      <section className="bg-[#f6e6d1] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section texte */}
          <article className="bg-[#f6e6d1] p-8">
            <h2 className="text-2xl font-bold text-[#5d795d] mb-4">Le Pilates Mat, une pratique complète</h2>
            <p className="text-gray-600 mb-4">
              Le Pilates Mat est une méthode d'exercice physique et mental qui vise à améliorer la force, la flexibilité et la posture.
              Créé par Joseph Pilates au début du 20e siècle, cette pratique se concentre sur le renforcement du "Powerhouse" (ou "centre de force"),
              qui comprend le tronc, les hanches et le pelvis.
            </p>
            <p className="text-gray-600 mb-4">
              Mes cours à domiciles sont adaptés à tous les niveaux, des débutants aux pratiquants expérimentés. Que vous souhaitiez améliorer votre posture,
              renforcer votre corps ou simplement vous détendre, le Pilates Mat est une pratique complète qui vous apportera de nombreux bénéfices.
            </p>
            <p className="text-gray-600">
              Le cours comprend la définition des objectifs individuels (souplesse, silhouette, renforcement musculaire) et l'élaboration d'un programme sur mesure,
              réévalué au fil des séances et de vos progressions.
              <br></br>Le cours est suivi d'un massage pour détendre le corps après l'effort.
            </p>
          </article>

          {/* Section image */}
          <div>
            <img 
              src={`${process.env.REACT_APP_PUBLIC_URL}/images/Pilates.webp`}
              alt="Exercice de Pilates Mat à domicile"
              className="w-full shadow-md"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>

      {/* Section icônes */}
      <section className="bg-neutral-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Chronomètre */}
          <article className="text-center">
            <div className="w-20 h-20 mx-auto bg-[#5d795d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">1h</h3>
            <p className="text-gray-600 text-sm">Durée du cours</p>
          </article>

          {/* Posture */}
          <article className="text-center">
            <div className="w-20 h-20 mx-auto bg-[#5d795d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Amélioration de la posture</h3>
            <p className="text-gray-600 text-sm">Gardez votre dos droit</p>
          </article>

          {/* Renforcement */}
          <article className="text-center">
            <div className="w-20 h-20 mx-auto bg-[#5d795d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Renforcement musculaire</h3>
            <p className="text-gray-600 text-sm">Renforcement de la ceinture abdominale</p>
          </article>

          {/* Bien-être */}
          <article className="text-center">
            <div className="w-20 h-20 mx-auto bg-[#5d795d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Bien-être</h3>
            <p className="text-gray-600 text-sm">Massage inclus</p>
          </article>
        </div>
      </section>

      {/* Section contact */}
      <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#f6e6d1] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#5d795d] mb-4">
            Prendre rendez-vous
          </h3>
          <p className="text-gray-600 mb-4">
            Pour prendre rendez-vous ou obtenir plus d'informations sur nos cours de Pilates,
            n'hésitez pas à nous contacter.
          </p>
          <div className="bg-[#f6e6d1] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <Link 
            to="/contact"
            state={{ prestation: "Cours de Pilates Mat" }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5d795d] hover:bg-[#4a654a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5d795d]"
          >
            Réservez maintenant
          </Link>
        </div>
      </div>
        </div>
      </section>
    </main>
  );
};

export default Pilates;