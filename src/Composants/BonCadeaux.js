import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO/SEO';

<SEO 
  title="Bons Cadeaux - Taib-massages"
  description="Offrez du bien-être avec nos bons cadeaux pour massages et cours de Pilates à Paris 18e"
  image="/images/taib-massage.webp"
  canonical="https://taib-massages.github.io/Accueil/cadeaux"
/>

const BonCadeaux = () => {
  const massages = [
    {
      id: 1,
      title: "Massage de corps tête aux pieds",
      duration: "1h",
      price: 80,
      description: "Un moment de détente complet ainsi qu'un soulagement de la douleur avec un massage aux huiles essentielles"
    },
    {
      id: 2,
      title: "Pierres chaudes",
      duration: "1h15",
      price: 120,
      description: "Un massage pour libérer les tensions et purifier le corps, relaxer les muscles en profondeur et favoriser l'oxygénation des tissus."
    },
    {
      id: 3,
      title: "Soins du visage",
      duration: "30 min",
      price: 30,
      description: "Préservez et embelissez votre visage, option disponible seule ou en complément de tous les massages"
    },
    {
        id: 4,
        title: "Réflexologie",
        duration: "1h",
        price: 60,
        description: "Un massage pour diminuer le stress et l'anxiété, favorise la détente et améliore la qualité du sommeil"
    },
    {
        id: 5,
        title: "Ventouses sèches",
        duration: "1h",
        price: 50,
        description: "Un massage pour améliorer votre circulation sanguine et soulager vos problèmes de dos"
    },
    {
        id: 6,
        title: "Cours de pilates Mat",
        duration: "1h",
        price: 110,
        description: "Une séance pour atténuer les douleurs en replaçant correctement le bassin et le dos, et améliorer la posture et l'équilibre"
    },
  ];

  return (
    <main className="bg-neutral-100 mt-8 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Bons Cadeaux</h1>
        <p className="text-xl text-gray-600">
          Offrez un moment de bien-être unique avec un bon cadeau Taib Massages
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-black mb-4">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="text-center">
            <div className="bg-neutral-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-black">1. Choisissez</h3>
              <p className="text-black">Sélectionnez le bon cadeau qui correspond à vos envies</p>
            </div>
          </article>
          <article className="text-center">
            <div className="bg-neutral-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-black">2. Commandez</h3>
              <p className="text-black">Passez votre commande en ligne en quelques clics</p>
            </div>
          </article>
          <article className="text-center">
            <div className="bg-neutral-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-black">3. Offrez</h3>
              <p className="text-black">Offrez un cadeau pour un moment de bien-être unique</p>
            </div>
          </article>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {massages.map((massage) => (
          <article 
            key={massage.id}
            className="bg-[#DCD6AE] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            aria-label={`Bon cadeau ${massage.title}`}
          >
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-black">{massage.title}</h3>
              <p className="text-gray-600">Durée : {massage.duration}</p>
            </div>
            <div className="text-center mb-6">
              <p className="text-2xl font-bold text-black">{massage.price}€</p>
            </div>
            <div className="text-center mb-4">
              <p className="text-gray-600">{massage.description}</p>
            </div>
            <div className="mt-6 text-center">
              <Link 
                to="/contact"
                state={{ 
                  prestation: massage.title,
                  cadeau: "C'est un cadeau" 
                }}
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-black transition-colors"
                title={`Commander le bon cadeau ${massage.title}`}
              >
                Commander
              </Link>
            </div>
          </article>
        ))}
      </section>

      

      {/* Section avantages */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-black mb-4">Pourquoi choisir nos bons cadeaux ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-neutral-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">Flexibilité</h3>
            <p className="text-gray-600">
              Choisissez parmi une large gamme de prestations pour trouver le bon cadeau parfait
            </p>
          </article>
          <article className="bg-neutral-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">Qualité</h3>
            <p className="text-gray-600">
              Des prestations de qualité réalisées par un professionnel expérimenté
            </p>
          </article>
          <article className="bg-neutral-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">Confort</h3>
            <p className="text-gray-600">
              Prestations à domicile pour plus de confort et de tranquillité
            </p>
          </article>
          <article className="bg-neutral-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">Sécurité</h3>
            <p className="text-gray-600">
              Paiement sécurisé et service client réactif
            </p>
          </article>
        </div>
      </section>

      {/* Section contact */}
      <section className="mt-12">
        <div className="bg-neutral-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-4">
            Questions ? Besoin d'aide ?
          </h3>
          <p className="text-gray-600 mb-4">
            Pour toute question sur nos bons cadeaux ou pour obtenir plus d'informations,
            n'hésitez pas à nous contacter.
          </p>
          <Link 
            to="/contact" 
            className="inline-block mt-4 text-black font-bold hover:text-gray-800"
            title="Contactez-nous pour plus d'informations sur les bons cadeaux"
          >
            Contactez-moi →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BonCadeaux;