import React, { useLayoutEffect } from 'react';
import OccasionTemplate from './OccasionTemplate';

const BabyShowerPage = () => {
  // Force le défilement en haut de la page lors du montage du composant, sans animation
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, []);

  const pageData = {
    title: "Baby Shower",
    subtitle: "Célébrez l'arrivée de votre bébé avec un événement inoubliable et des mets délicats",
    heroImage: "/images/DSC05372.jpg",
    infoBlocks: [
      {
        title: "Buffet sur mesure",
        text: "Nous créons un buffet adapté à vos envies et à votre thème, avec des options sucrées et salées qui raviront tous vos invités."
      },
      {
        title: "Décoration thématique",
        text: "Notre équipe peut s'occuper de la décoration complète de votre baby shower, en harmonie avec le thème choisi et les couleurs de votre événement."
      },
      {
        title: "Animation et service",
        text: "Profitez pleinement de votre événement grâce à notre service complet qui inclut le service à table et des animations adaptées à l'occasion."
      }
    ],
    mediaType: "image",
    mediaContent: "/images/DSC05372.jpg",
    carouselImages: [
      "/images/DSC05381.jpg",
      "/images/DSC05410.jpg",
      "/images/DSC05415.jpg",
      "/images/DSC05270.jpg"
    ],
    bannerImage: "/images/DSC05355.jpg",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} />;
};

export default BabyShowerPage;
