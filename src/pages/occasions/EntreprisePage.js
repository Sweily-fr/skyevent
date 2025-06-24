import React from 'react';
import SEO from '../../components/SEO';
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
    mediaContent: "/videos/IMG_0722.MP4",
    carouselImages: [
      "/images/DSC05410.jpg",
      "/images/DSC05361.jpg",
      "/images/DSC05363.jpg",
      "/images/DSC05374.jpg",
      "/images/DSC05377.jpg",
      "/images/DSC05379.jpg"
    ],
    bannerTitle: "Événements professionnels réussis",
    bannerSubtitle: "Contactez-nous pour organiser votre prochain événement d'entreprise",
    bannerImage: "/images/DSC05355.jpg",
    useVideo: true
  };

  return (
    <>
      <SEO 
        title="Traiteur Événements d'Entreprise"
        description="Services traiteur professionnels pour vos événements d'entreprise. Cocktails d'affaires, séminaires et team building culinaires sur mesure."
        path="/evenement-entreprise"
        image="/images/DSC05410.jpg"
      />
      <OccasionTemplate {...pageData} occasionType="entreprise" />
    </>
  );
};

export default EntreprisePage;
