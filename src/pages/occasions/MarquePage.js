import React from 'react';
import OccasionTemplate from './OccasionTemplate';

const MarquePage = () => {
  const pageData = {
    title: "Événements de marque",
    subtitle: "Renforcez l'image de votre marque avec des expériences culinaires exceptionnelles",
    heroImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
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
    mediaContent: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    carouselImages: [
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    bannerImage: "https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} />;
};

export default MarquePage;
