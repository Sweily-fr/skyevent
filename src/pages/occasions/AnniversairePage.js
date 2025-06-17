import React from 'react';
import OccasionTemplate from './OccasionTemplate';

const AnniversairePage = () => {
  const pageData = {
    title: "Anniversaire",
    subtitle: "Rendez votre journée spéciale encore plus mémorable avec nos services de traiteur sur mesure",
    heroImage: "/images/DSC05355.jpg",
    infoBlocks: [
      {
        title: "Menus personnalisés",
        text: "Nous créons des menus adaptés à vos goûts et à vos envies, qu'il s'agisse d'un buffet décontracté ou d'un dîner élégant à plusieurs services."
      },
      {
        title: "Gâteaux d'exception",
        text: "Nos pâtissiers créent des gâteaux d'anniversaire uniques et délicieux, parfaitement adaptés au thème de votre célébration."
      },
      {
        title: "Service complet",
        text: "De la mise en place à la vaisselle, notre équipe s'occupe de tout pour que vous puissiez profiter pleinement de votre journée spéciale."
      }
    ],
    mediaType: "video",
    mediaContent: "/images/DSC05355.jpg",
    carouselImages: [
      "/images/DSC05355.jpg",
      "/images/DSC05351.jpg",
      "/images/DSC05340.jpg",
      "/images/DSC05338.jpg",
      "/images/DSC05336.jpg",
      "/images/DSC05335.jpg"
    ],
    bannerImage: "/images/DSC05270.jpg",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} occasionType="anniversaire" />;
};

export default AnniversairePage;
