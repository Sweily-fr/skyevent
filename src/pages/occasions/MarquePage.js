import React from 'react';
import OccasionTemplate from './OccasionTemplate';

const MarquePage = () => {
  const pageData = {
    title: "Événements de marque",
    subtitle: "Renforcez l'image de votre marque avec des expériences culinaires exceptionnelles",
    heroImage: "/images/DSC05381.jpg",
    infoBlocks: [
      {
        title: "Lancement de produit",
        text: "Nous créons des concepts culinaires innovants qui mettent en valeur votre produit et marquent l'esprit de vos invités."
      },
      {
        title: "Activation de marque",
        text: "Nos prestations sur mesure renforcent l'identité de votre marque et créent une expérience immersive pour votre public cible."
      },
      {
        title: "Événements VIP",
        text: "Nous concevons des expériences gastronomiques exclusives pour vos clients privilégiés et vos partenaires stratégiques."
      }
    ],
    mediaType: "image",
    mediaContent: "/images/DSC05381.jpg",
    carouselImages: [
      "/images/DSC05410.jpg",
      "/images/DSC05415.jpg",
      "/images/DSC05372.jpg",
      "/images/DSC05270.jpg"
    ],
    bannerImage: "/images/DSC05355.jpg",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} />;
};

export default MarquePage;
