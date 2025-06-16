import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';

// Placeholder images - à remplacer par vos propres images
const realisationsImages = [
  '/images/DSC05381.jpg',
  '/images/DSC05410.jpg',
  '/images/DSC05415.jpg',
  '/images/DSC05372.jpg',
  '/images/DSC05355.jpg',
  '/images/DSC05270.jpg',
  // Ajoutez plus d'images pour un vrai effet de scroll infini
  '/images/DSC05381.jpg',
  '/images/DSC05410.jpg',
  '/images/DSC05415.jpg',
  '/images/DSC05372.jpg',
  '/images/DSC05355.jpg',
  '/images/DSC05270.jpg'
];

const PageContainer = styled.div`
  min-height: 100vh;
  font-family: 'Playfair Display', serif;
  color: #1a1a1a;
  background-color: #ffffff; /* Fond blanc */
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${realisationsImages[0]});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 3px;
  }
`;

const Section = styled.section`
  padding: 100px 40px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 1px;
    background-color: #d4af37; /* Couleur or subtile */
  }
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 60px;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 1px;
    background-color: #d4af37; /* Couleur or subtile */
  }
`;

const RealisationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const RealisationCard = styled(motion.div)`
  overflow: hidden;
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;
  transition: all 0.4s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const RealisationImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  
  ${RealisationCard}:hover & {
    transform: scale(1.05);
  }
`;

const LoadMoreButton = styled.button`
  background-color: transparent;
  border: 1px solid #d4af37;
  color: #1a1a1a;
  padding: 12px 30px;
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 40px auto 0;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #d4af37;
    color: white;
  }
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const RealisationsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    document.title = 'Nos réalisations - SkyEvent';
  }, []);
  
  const [visibleImages, setVisibleImages] = useState(9); // Nombre d'images initialement visibles
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gridRef = useRef(null);
  
  // Fonction pour charger plus d'images
  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 6, realisationsImages.length));
  };
  
  // Ouvrir l'image en modal
  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Empêcher le scroll du body
  };
  
  // Fermer le modal
  const closeImageModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Réactiver le scroll du body
  };

  return (
    <PageContainer>
      <HeroSection>
        <div>
          <HeroTitle>Nos réalisations</HeroTitle>
        </div>
      </HeroSection>
      
      <Section>
        <SectionTitle>Découvrez nos plus belles réalisations</SectionTitle>
        
        <RealisationsGrid ref={gridRef}>
          {realisationsImages.slice(0, visibleImages).map((imageSrc, index) => (
            <RealisationCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index % 6 * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => openImageModal(imageSrc)}
            >
              <RealisationImage src={imageSrc} />
            </RealisationCard>
          ))}
        </RealisationsGrid>
        
        {visibleImages < realisationsImages.length && (
          <LoadMoreButton onClick={loadMoreImages}>
            Voir plus de réalisations
          </LoadMoreButton>
        )}
        
        <ImageModal isOpen={isModalOpen} onClick={closeImageModal}>
          <CloseButton onClick={closeImageModal}>×</CloseButton>
          {selectedImage && <ModalImage src={selectedImage} />}
        </ImageModal>
      </Section>
      <ContactSection />
    </PageContainer>
  );
};

export default RealisationsPage;
