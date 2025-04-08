import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO/SEO';

<SEO 
  title="Page non trouvée - Taib-massages"
  description="La page que vous recherchez n'existe pas. Retournez à la page d'accueil ou contactez-nous."
  image="/images/og-image.png"
  canonical="https://taib-massages.github.io/Accueil/"
/>

const NotFound = () => {
  return (
    <main className="min-h-screen bg-neutral-100">
      {/* Section bannière */}
      <header className="relative h-[600px] w-full">
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-8xl font-bold mb-4">404</h1>
            <h2 className="text-3xl mb-8">Page non trouvée</h2>
            <p className="text-xl mb-8">La page que vous recherchez n'existe pas.</p>
            <div className="space-x-4">
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5d795d] hover:bg-[#4a654a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5d795d]"
                title="Retourner à la page d'accueil"
              >
                Retour à l'accueil
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5d795d] hover:bg-[#4a654a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5d795d]"
                title="Contacter Taib-massages"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Section liens utiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#f6e6d1] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#5d795d] mb-4">
            Pages utiles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-[#5d795d] mb-2">Nos services</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/prestations"
                    className="text-gray-600 hover:text-[#5d795d]"
                    title="Voir nos prestations de massage"
                  >
                    Prestations et prix
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/pilates"
                    className="text-gray-600 hover:text-[#5d795d]"
                    title="Découvrir nos cours de Pilates"
                  >
                    Cours de Pilates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#5d795d] mb-2">Informations</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/contact"
                    className="text-gray-600 hover:text-[#5d795d]"
                    title="Prendre rendez-vous"
                  >
                    Prendre rendez-vous
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cadeaux"
                    className="text-gray-600 hover:text-[#5d795d]"
                    title="Acheter un bon cadeau"
                  >
                    Bons cadeaux
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;