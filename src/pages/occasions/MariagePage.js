import React from 'react';
import OccasionTemplate from './OccasionTemplate';

const MariagePage = () => {
  const pageData = {
    title: "Mariage",
    subtitle: "Faites de votre jour le plus beau un moment inoubliable avec notre service traiteur d'exception",
    heroImage: "/images/DSC05270.jpg",
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
    mediaContent: "/videos/IMG_0725.MP4",
    carouselImages: [
      "/images/DSC05270.jpg",
      "/images/DSC05275.jpg",
      "/images/DSC05278.jpg",
      "/images/DSC05281.jpg",
      "/images/DSC05287.jpg",
      "/images/DSC05289.jpg"
    ],
    bannerImage: "/images/DSC05355.jpg",
    useVideo: true
  };

  return <OccasionTemplate {...pageData} occasionType="mariage" />;
};

export default MariagePage;
