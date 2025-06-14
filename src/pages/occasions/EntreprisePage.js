import React from 'react';
import OccasionTemplate from './OccasionTemplate';

const EntreprisePage = () => {
  const pageData = {
    title: "Événements d'entreprise",
    subtitle: "Impressionnez vos clients et motivez vos équipes avec nos prestations traiteur professionnelles",
    heroImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    infoBlocks: [
      {
        title: "Cocktails d'affaires",
        text: "Nous proposons des formules adaptées à tous types d'événements professionnels, des petites réunions aux grandes conférences."
      },
      {
        title: "Repas d'entreprise",
        text: "Nos menus d'affaires sont conçus pour impressionner vos clients et partenaires, tout en respectant vos contraintes de temps et de budget."
      },
      {
        title: "Team building",
        text: "Nous organisons des activités culinaires originales pour renforcer la cohésion de vos équipes et créer des souvenirs mémorables."
      }
    ],
    mediaType: "image",
    mediaContent: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    carouselImages: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    bannerTitle: "Événements professionnels réussis",
    bannerSubtitle: "Contactez-nous pour organiser votre prochain événement d'entreprise",
    bannerImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} />;
};

export default EntreprisePage;
