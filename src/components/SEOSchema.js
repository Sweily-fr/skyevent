import { useEffect } from 'react';

/**
 * Composant SEOSchema qui génère le JSON-LD pour le SEO
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.pageType - Type de page (HomePage, AboutPage, ServicePage, etc.)
 * @param {string} props.pageName - Nom de la page
 * @param {string} props.pageDescription - Description de la page
 * @param {string} props.pageUrl - URL complète de la page
 * @param {string} props.pageImage - URL de l'image principale de la page (optionnel)
 * @returns {JSX.Element} - Composant qui injecte le JSON-LD dans le head
 */
const SEOSchema = ({ 
  pageType = 'WebPage', 
  pageName = 'SkyEvent - Traiteur Événementiel Sur Mesure', 
  pageDescription = 'Créez des moments inoubliables avec nos services traiteur sur-mesure. Que ce soit pour un mariage, une réception privée ou un événement professionnel, nous vous accompagnons pour faire de votre projet une réussite totale.', 
  pageUrl = 'https://skyevent.fr', 
  pageImage = '/images/DSC05325.jpg' 
}) => {

  // Fonction pour injecter le JSON-LD dans le head
  useEffect(() => {
    // Supprimer les anciens scripts JSON-LD s'ils existent
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    // Données de base de l'organisation
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SkyEvent",
      "url": "https://skyevent.fr",
      "logo": "https://skyevent.fr/images/Sky-Event-.webp",
      "description": "SkyEvent est un traiteur événementiel sur mesure proposant des services de haute qualité pour tous types d'événements : mariages, baptêmes, anniversaires, événements d'entreprise et événements de marque.",
      "email": "contact@skyevent.fr",
      "telephone": "+33 1 23 45 67 89",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Avenue des Champs-Élysées",
        "addressLocality": "Paris",
        "postalCode": "75008",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.instagram.com/skyevent.fr/"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "16:00"
        }
      ]
    };

    // Données de la page courante
    const pageData = {
      "@context": "https://schema.org",
      "@type": pageType,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": pageUrl
      },
      "headline": pageName,
      "description": pageDescription,
      "image": `https://skyevent.fr${pageImage}`,
      "author": {
        "@type": "Organization",
        "name": "SkyEvent"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SkyEvent",
        "logo": {
          "@type": "ImageObject",
          "url": "https://skyevent.fr/images/Sky-Event-.webp"
        }
      },
      "datePublished": "2023-01-01T08:00:00+01:00",
      "dateModified": new Date().toISOString()
    };

    // Données spécifiques pour les services (si la page est de type ServicePage)
    const servicesData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Traiteur Événementiel",
      "provider": {
        "@type": "Organization",
        "name": "SkyEvent"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 48.8566,
          "longitude": 2.3522
        },
        "geoRadius": "100000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services Traiteur",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mariages"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Événements d'entreprise"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Événements de marque"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Baptêmes"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Baby Showers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Anniversaires"
            }
          }
        ]
      }
    };

    // Données pour les avis clients (à compléter avec de vrais avis)
    const reviewsData = {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "SkyEvent"
      },
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "87"
    };
    
    // Créer et ajouter le script pour les données de l'organisation
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(organizationData);
    document.head.appendChild(orgScript);
    
    // Créer et ajouter le script pour les données de la page
    const pageScript = document.createElement('script');
    pageScript.type = 'application/ld+json';
    pageScript.textContent = JSON.stringify(pageData);
    document.head.appendChild(pageScript);
    
    // Ajouter le script pour les services si c'est une page de service
    if (pageType === 'ServicePage') {
      const servicesScript = document.createElement('script');
      servicesScript.type = 'application/ld+json';
      servicesScript.textContent = JSON.stringify(servicesData);
      document.head.appendChild(servicesScript);
    }
    
    // Créer et ajouter le script pour les avis
    const reviewsScript = document.createElement('script');
    reviewsScript.type = 'application/ld+json';
    reviewsScript.textContent = JSON.stringify(reviewsData);
    document.head.appendChild(reviewsScript);
    
    // Nettoyer les scripts lors du démontage du composant
    return () => {
      document.querySelectorAll('script[type="application/ld+json"]').forEach(script => script.remove());
    };
  }, [pageType, pageUrl, pageName, pageDescription, pageImage]); // Dépendances pour recréer les scripts si ces props changent
  
  // Ce composant ne rend rien visuellement
  return null;
};

export default SEOSchema;
