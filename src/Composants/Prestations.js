import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO/SEO';

<SEO 
  title="Prestations - Taib-massages"
  description="Découvrez nos prestations de massage, réflexologie et cours de Pilates à Paris 18e"
  image="/images/presta-banner.webp"
  canonical="https://taib-massages.github.io/Accueil/prestations"
/>

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
      description: "Préservez et embelissez votre visage, option possible seule ou en complément de chaque massage",
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
    <main className="min-h-screen bg-neutral-100">
      {/* Section bannière */}
      {/* <header className="relative h-[600px] w-full">
        <img 
          src={`${process.env.REACT_APP_PUBLIC_URL}/images/presta-banner.webp`}
          alt="Mes prestations de massage et Pilates à Paris 18e"
          className="w-full h-full object-cover"
          loading="lazy"
          width="1920"
          height="600"
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-neutral-100 text-center relative top-40">
            Mes Prestations
          </h1>
        </div>
      </header> */}

      {/* Sections des prestations */}
      {prestations.map((prestation, index) => (
        <article key={index} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section texte */}
            <div className={`flex flex-col justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h2 className="text-3xl font-bold text-black mb-4">{prestation.title}</h2>
              <p className="text-gray-600 mb-4 text-justify">{prestation.description}</p>
              <div className="space-y-4">
                {prestation.benefits.map((benefit, benefitIndex) => (
                  <p key={benefitIndex} className="text-gray-600">• {benefit}</p>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#DCD6AE] rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-black">Durée : {prestation.duration}</span>
              <span className="text-xl font-semibold text-black">Prix : {prestation.price}</span>
            </div>
            </div>
            <div className="mt-4 text-center">
              <Link 
                to="/contact" 
                state={{ prestation: prestation.title }}
                className="inline-flex items-center justify-center px-6 w-full py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                title={`Réserver une séance de ${prestation.title}`}
              >
                Réserver maintenant
              </Link>
            </div>
            </div>

            {/* Section image */}
            <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <img 
                src={`${process.env.REACT_APP_PUBLIC_URL}${prestation.image}`}
                alt={`${prestation.title} - ${prestation.description}`}
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>

          {/* Section tarif et réservation */}
          
        </article>
      ))}

    
    </main>
  );
};

export default Prestations;