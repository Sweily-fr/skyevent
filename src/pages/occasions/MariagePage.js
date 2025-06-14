import React from 'react';
import OccasionTemplate from './OccasionTemplate';

const MariagePage = () => {
  const pageData = {
    title: "Mariage",
    subtitle: "Faites de votre jour le plus beau un moment inoubliable avec notre service traiteur d'exception",
    heroImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    infoBlocks: [
      {
        title: "Menu gastronomique",
        text: "Nous créons des menus raffinés et personnalisés, adaptés à vos goûts et à votre budget, pour ravir tous vos invités."
      },
      {
        title: "Décoration florale",
        text: "Notre équipe peut s'occuper de toute la décoration florale de votre mariage, des bouquets aux centres de table, dans le respect de votre thème."
      },
      {
        title: "Service premium",
        text: "Notre personnel expérimenté assure un service impeccable tout au long de votre réception, pour que vous puissiez profiter pleinement de votre journée."
      }
    ],
    mediaType: "video",
    mediaContent: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    carouselImages: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    bannerImage: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} />;
};

export default MariagePage;
