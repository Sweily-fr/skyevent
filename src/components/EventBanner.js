import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import StandardButton from './StandardButton';

const BannerContainer = styled.section`
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-color: #1a1a1a;
  color: white;
  padding: 100px 20px;
  text-align: center;
  margin: 0;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    padding: 80px 20px;
    background-attachment: scroll;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 20px;
`;

const Title = styled(motion.h2)`
  font-size: 3.5rem;
  margin: 0 auto 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 500; /* Réduit de 700 à 500 pour un rendu plus léger */
  letter-spacing: 3px;
  text-transform: uppercase;
  max-width: 900px;
  line-height: 1.2;
  position: relative;
  padding-bottom: 20px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background-color: #d4af37;
  }
  
  @media (max-width: 992px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    padding: 0 20px 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: #f0f0f0;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 20px;
  }
`;

// Styles pour les boutons sur mobile
const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const EventBanner = ({ title, subtitle, backgroundImage, buttonText = 'Planifiez maintenant', buttonLink = '/#contact' }) => {
  return (
    <BannerContainer backgroundImage={backgroundImage}>
      <ContentWrapper>
        <Title>{title || 'Organisez votre évènement avec nous !'}</Title>
        <Description>
          {subtitle || 'Découvrez nos services sur mesure pour faire de votre évènement un moment inoubliable. Notre équipe d\'experts est là pour vous accompagner à chaque étape.'}
        </Description>
        <ButtonContainer>
          <StandardButton
            to={buttonLink}
            darkBackground={true}
          >
            {buttonText}
          </StandardButton>
        </ButtonContainer>
      </ContentWrapper>
    </BannerContainer>
  );
};

export default EventBanner;
