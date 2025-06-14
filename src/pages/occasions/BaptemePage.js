import React from 'react';
import OccasionTemplate from './OccasionTemplate';

const BaptemePage = () => {
  const pageData = {
    title: "Baptême",
    subtitle: "Célébrez ce moment sacré avec élégance et raffinement grâce à nos services de traiteur personnalisés",
    heroImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
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
    mediaContent: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    carouselImages: [
      "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    bannerImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} />;
};

export default BaptemePage;
