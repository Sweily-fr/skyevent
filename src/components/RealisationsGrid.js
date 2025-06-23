import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import StandardButton from './StandardButton';

// Images des réalisations - Optimisées pour le chargement
const realisationImages = {
  realisation1: '/images/DSC05266.jpg',
  realisation2: '/images/DSC05275.jpg',
  realisation3: '/images/DSC05278.jpg',
  realisation4: '/images/DSC05281.jpg',
  realisation5: '/images/DSC05287-2.jpg',
  realisation6: '/images/DSC05289.jpg'
  // Suppression des images non utilisées pour réduire le chargement
};

const SectionContainer = styled.section`
  padding: 100px 40px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem !important;
  text-align: center !important;
  margin-bottom: 20px !important;
  font-family: 'Inter', sans-serif !important;
  font-weight: 700 !important;
  letter-spacing: 3px !important;
  text-transform: uppercase !important;
  margin-bottom: 40px !important;
  line-height: 1.3 !important;
  
  @media (max-width: 768px) {
    font-size: 1.8rem !important;
    margin-bottom: 25px !important;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  color: #666;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const RealisationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const RealisationCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  border: 1px solid #f0f0f0;
  
  /* Désactiver les animations sur mobile et simplifier les effets */
  @media (min-width: 769px) {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    will-change: transform;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
    }
  }
`;

const RealisationImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  
  /* Simplifier l'effet de zoom pour de meilleures performances */
  @media (min-width: 769px) {
    transition: transform 0.3s ease;
    
    ${RealisationCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const RealisationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${RealisationCard}:hover & {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const RealisationTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  
  ${RealisationCard}:hover & {
    transform: translateY(-5px);
  }
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

// ViewAllButton remplacé par le composant StandardButton
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 0;
  
  & > a {
    white-space: nowrap;
    font-size: 1rem;
    padding: 12px 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  @media (max-width: 768px) {
    & > a {
      width: 100%;
      max-width: 280px;
      text-align: center;
      padding: 10px 20px;
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
  }
`;

const RealisationsGridComponent = memo(({ limit }) => {
  const realisations = [
    {
      id: 'realisation1',
      title: 'Mariage élégant',
      image: realisationImages.realisation1,
      link: '/realisations/mariage-elegant'
    },
    {
      id: 'realisation2',
      title: 'Soirée d\'entreprise',
      image: realisationImages.realisation2,
      link: '/realisations/soiree-entreprise'
    },
    {
      id: 'realisation3',
      title: 'Anniversaire VIP',
      image: realisationImages.realisation3,
      link: '/realisations/anniversaire-vip'
    },
    {
      id: 'realisation4',
      title: 'Lancement de produit',
      image: realisationImages.realisation4,
      link: '/realisations/lancement-produit'
    },
    {
      id: 'realisation5',
      title: 'Baby shower chic',
      image: realisationImages.realisation5,
      link: '/realisations/baby-shower-chic'
    },
    {
      id: 'realisation6',
      title: 'Baptême traditionnel',
      image: realisationImages.realisation6,
      link: '/realisations/bapteme-traditionnel'
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Découvrez nos plus belles réalisations</SectionTitle>
      <SectionSubtitle>
        Explorez notre galerie d'événements exceptionnels où l'art culinaire japonais rencontre l'élégance française
      </SectionSubtitle>
      
      <RealisationsGrid>
        {realisations.map((realisation, index) => (
          <RealisationCard
            key={realisation.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: Math.min(index * 0.03, 0.15), // Réduire encore plus le délai
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <RealisationImage src={realisation.image} />
            <RealisationOverlay>
              <RealisationTitle>{realisation.title}</RealisationTitle>
            </RealisationOverlay>
          </RealisationCard>
        ))}
      </RealisationsGrid>
      
      <ButtonContainer>
        <StandardButton to="/realisations" darkBackground={false}>
          Voir toutes nos réalisations
        </StandardButton>
      </ButtonContainer>
    </SectionContainer>
  );
});

export default RealisationsGridComponent;
