import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BannerContainer = styled.section`
  background-color: #000000;
  color: white;
  padding: 60px 20px;
  text-align: center;
  margin: 0;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 30px;
  line-height: 1.6;
`;

const CtaButton = styled(motion.button)`
  background-color: white;
  color: #2c3e50;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const EventBanner = () => {
  return (
    <BannerContainer>
      <ContentWrapper>
        <Title>Organisez votre évènement avec nous !</Title>
        <Description>
          Découvrez nos services sur mesure pour faire de votre évènement un moment inoubliable.
          Notre équipe d'experts est là pour vous accompagner à chaque étape.
        </Description>
        <CtaButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Planifiez maintenant
        </CtaButton>
      </ContentWrapper>
    </BannerContainer>
  );
};

export default EventBanner;
