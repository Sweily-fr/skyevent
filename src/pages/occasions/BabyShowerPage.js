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
    heroImage: "https://images.unsplash.com/photo-1554342872-034a06541948?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
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
    mediaContent: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    carouselImages: [
      "https://images.unsplash.com/photo-1566740013712-556707becfdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1569072712109-6206fa3505b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1574271143515-5cddf8da19be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    bannerImage: "https://images.unsplash.com/photo-1522673999312-9ef6873f0681?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} />;
};

export default BabyShowerPage;
