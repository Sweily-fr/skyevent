import React from 'react';
import OccasionTemplate from './OccasionTemplate';

const BaptemePage = () => {
  const pageData = {
    title: "Baptême",
    subtitle: "Célébrez ce moment sacré avec élégance et raffinement grâce à nos services de traiteur personnalisés",
    heroImage: "/images/DSC05415.jpg",
    infoBlocks: [
      {
        title: "Réception élégante",
        text: "Nous organisons une réception élégante et respectueuse de la tradition, avec un menu adapté à tous les âges et à tous les goûts."
      },
      {
        title: "Décoration thématique",
        text: "Notre équipe peut créer une décoration harmonieuse et délicate, parfaitement adaptée à l'esprit de la cérémonie."
      },
      {
        title: "Service attentionné",
        text: "Notre personnel discret et professionnel veille à ce que tous vos invités soient servis avec attention et bienveillance."
      }
    ],
    mediaType: "image",
    mediaContent: "/images/DSC05415.jpg",
    carouselImages: [
      "/images/DSC05381.jpg",
      "/images/DSC05410.jpg",
      "/images/DSC05270.jpg",
      "/images/DSC05372.jpg"
    ],
    bannerImage: "/images/DSC05355.jpg",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} />;
};

export default BaptemePage;
