import React from 'react';
import OccasionTemplate from './OccasionTemplate';

const EntreprisePage = () => {
  const pageData = {
    title: "Événements d'entreprise",
    subtitle: "Impressionnez vos clients et motivez vos équipes avec nos prestations traiteur professionnelles",
    heroImage: "/images/DSC05410.jpg",
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
    mediaContent: "/images/DSC05410.jpg",
    carouselImages: [
      "/images/DSC05381.jpg",
      "/images/DSC05270.jpg",
      "/images/DSC05415.jpg",
      "/images/DSC05372.jpg"
    ],
    bannerTitle: "Événements professionnels réussis",
    bannerSubtitle: "Contactez-nous pour organiser votre prochain événement d'entreprise",
    bannerImage: "/images/DSC05355.jpg",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} />;
};

export default EntreprisePage;
