import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Taib-massages - Spécialiste de bien-être", 
  description = "Taib, masseur de bien-être spécialisé en massages, pierres chaudes, ventouses, réflexologie et cours de Pilates à Paris 18e. Réservez votre séance en ligne.", 
  image = "/images/og-image.png",
  type = "website",
  url = "https://taib-massages.github.io/Accueil/"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
};

export default SEO;