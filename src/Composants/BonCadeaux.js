import React from 'react';
import { Link } from 'react-router-dom';

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
      title: "Soins du visage et réflexologie plantaire",
      duration: "1h15",
      price: 110,
      description: "Préservez et embelissez votre visage, suivit d'un massage plantaire pour libérer le stress et dynamiser l'organisme"
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
        title: "Ventouses",
        duration: "1h",
        price: 50,
        description: "Un massage pour améliorer votre circulation sanguine et soulager vos problèmes de dos"
    },
    {
        id: 6,
        title: "Cours de pilates et massage",
        duration: "1h30",
        price: 110,
        description: "Une séance pour atténuer les douleurs en replaçant correctement le bassin et le dos, et améliorer la posture et l'équilibre"
    },
  ];

  return (
    <div className="bg-[#f6e6d1] mt-12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bons Cadeaux</h1>
        <p className="text-xl text-gray-600">
          Offrez un moment de bien-être unique avec un bon cadeau Taib Massages
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {massages.map((massage) => (
          <div 
            key={massage.id}
            className="bg-neutral-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{massage.title}</h3>
              <p className="text-gray-600">{massage.duration}</p>
            </div>
            <div className="text-center mb-6">
              <p className="text-2xl font-bold text-[#80a880]">{massage.price}€</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600">{massage.description}</p>
            </div>
            <div className="mt-6 text-center">
              <Link 
                to="/contact"
                className="inline-block bg-[#80a880] text-white px-6 py-2 rounded-md hover:bg-[#668a66] transition-colors"
              >
                Commander
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-[#80a880] p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">1. Choisissez</h3>
              <p className="text-gray-100">Sélectionnez le massage de votre choix</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-[#80a880] p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">2. Commandez</h3>
              <p className="text-gray-100">Contactez-nous pour passer votre commande</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-[#80a880] p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">3. Offrez</h3>
              <p className="text-gray-100">Offrez le bon cadeau à votre proche</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonCadeaux;