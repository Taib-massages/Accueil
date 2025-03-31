import React from 'react';
import { Link } from 'react-router-dom';

const Prestations = () => {
  const prestations = [
    {
      title: "Massage de corps tête aux pieds",
      description: "Découvrez ma prestation de massage professionnel, adaptées à vos besoins et vos envies. Chaque séance est personnalisée pour vous offrir le meilleur moment de détente possible.",
      price: "80€",
      duration: "1h",
      image: "/images/taib-massage.webp",
      benefits: [
        "Massages sur mesure adaptés à vos besoins",
        "Utilisation d'huiles essentielles de qualité",
        "Table de massage non fournie"
      ]
    },
    {
      title: "Réflexologie",
      description: "Découvrez ma prestation de massage réflexologue, discipline thérapeutique qui consiste à masser des \"points réflexes\" situés sur différentes parties du corps.",
      price: "60€",
      duration: "1h",
      image: "/images/Reflexologie.webp",
      benefits: [
        "Diminue le stress et l'anxiété",
        "Favorise la détente",
        "Améliore la qualité du sommeil"
      ]
    },
    {
      title: "Soins du visage",
      description: "Préservez et embelissez votre visage, option possible en complément de chaque massage",
      price: "30€",
      duration: "30min",
      image: "/images/soins.webp",
      benefits: [
        "Stimule la circulation sanguine et favorise la régénération cellulaire",
        "Utilisation de produits naturels de qualités",
        "Soulage les tensions du dos et beaucoup d'autres douleurs"
      ]
    },
    {
      title: "Massage aux Pierres Chaudes",
      description: "Découvrez un massage pour libérer les tensions et purifier le corps, relaxer les muscles en profondeur et favoriser l'oxygénation des tissus",
      price: "120€",
      duration: "1h15",
      image: "/images/Pierres-chaudes.webp",
      benefits: [
        "Favorise l'oxygénation des tissus",
        "Lutte contre le stress et la fatigue",
        "Génère une sensation de bien-être qui se prolonge longtemps après la séance"
      ]
    },
    {
      title: "Ventouses sèches",
      description: "Découvrez le massage professionnel à l'aide de ventouses, bénéfique pour la santé globale et qui traite efficacement les affections localisées et systémiques",
      price: "50€",
      duration: "1h",
      image: "/images/ventouse.webp",
      benefits: [
        "Circulation sanguine et/ou retour veineux paresseux",
        "Soigne la cellulite et la peau d'orange",
        "Soulage les maux de dos et migraines."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Section bannière */}
      <div className="relative h-[600px] w-full">
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

      {/* Sections des prestations */}
      {prestations.map((prestation, index) => (
        <div key={index} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section texte */}
            <div className={`flex flex-col justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h2 className="text-3xl font-bold text-[#5d795d] mb-4">{prestation.title}</h2>
              <p className="text-gray-600 mb-4">{prestation.description}</p>
              <div className="space-y-4">
                {prestation.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start">
                    <svg className="w-6 h-6 text-[#5d795d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
              {/* Section tarif */}
          <div className="mt-6 p-4 bg-[#f6e6d1] rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-[#5d795d]">Durée : {prestation.duration}</span>
              <span className="text-xl font-semibold text-[#5d795d]">Prix : {prestation.price}</span>
            </div>
          </div>
              <div className="mt-6 text-center">
                <Link 
                  to="/contact" 
                  state={{ prestation: prestation.title }}
                  className="inline-flex items-center justify-center px-6 w-full py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5d795d] hover:bg-[#4a654a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5d795d]"
                >
                  Réservez maintenant
                </Link>
              </div>
            </div>
            {/* Section image */}
            <div className={`relative aspect-[4/3] md:aspect-[3/2] ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <img 
                src={`${process.env.REACT_APP_PUBLIC_URL}${prestation.image}`}
                alt={prestation.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Prestations;