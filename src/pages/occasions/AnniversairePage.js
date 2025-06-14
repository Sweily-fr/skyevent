import React from 'react';
import OccasionTemplate from './OccasionTemplate';

const AnniversairePage = () => {
  const pageData = {
    title: "Anniversaire",
    subtitle: "Rendez votre journée spéciale encore plus mémorable avec nos services de traiteur sur mesure",
    heroImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
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
    mediaContent: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    carouselImages: [
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    bannerImage: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} />;
};

export default AnniversairePage;
