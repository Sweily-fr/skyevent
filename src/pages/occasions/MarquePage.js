import React from 'react';
import SEO from '../../components/SEO';
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
    mediaContent: "/videos/IMG_0737.MP4",
    carouselImages: [
      "/images/DSC05381.jpg",
      "/images/DSC05383.jpg",
      "/images/DSC05384-2.jpg",
      "/images/DSC05385-2.jpg",
      "/images/DSC05384.jpg",
      "/images/DSC05385.jpg"
    ],
    bannerImage: "/images/DSC05355.jpg",
    useVideo: true
  };

  return (
    <>
      <SEO 
        title="Événements de Marque sur Mesure"
        description="Renforcez l'image de votre marque avec des expériences culinaires exceptionnelles. Lancements produits, événements VIP et activations de marque mémorables."
        path="/evenement-marque"
        image="/images/DSC05381.jpg"
      />
      <OccasionTemplate {...pageData} occasionType="marque" />
    </>
  );
};

export default MarquePage;
