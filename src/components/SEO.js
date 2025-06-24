import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, path, image = '/images/Sky-Event-.webp' }) => {
  const siteUrl = 'https://skyevent.fr';
  const fullUrl = `${siteUrl}${path || ''}`;
  const defaultTitle = 'SkyEvent - Traiteur Événementiel Sur Mesure';
  const defaultDescription = 'SkyEvent - Traiteur événementiel sur mesure pour vos mariages, anniversaires et événements d\'entreprise. Créons ensemble des moments inoubliables.';

  return (
    <Helmet>
      <title>{title ? `${title} | SkyEvent` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title ? `${title} | SkyEvent` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title ? `${title} | SkyEvent` : defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
