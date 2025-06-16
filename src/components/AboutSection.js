import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import StandardButton from './StandardButton';

// Placeholder image - à remplacer par votre propre image
const aboutImageUrl = 'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';

const SectionContainer = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 50px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  
  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

// AboutButton remplacé par le composant StandardButton
const ButtonWrapper = styled.div`
  margin-top: 20px;
`;


const AboutSection = () => {
  return (
    <SectionContainer>
      <ImageContainer
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <AboutImage src={aboutImageUrl} alt="SkyEvent - Des sushis pour chaque occasion" />
      </ImageContainer>
      
      <ContentContainer>
        <SectionTitle>Des sushis pour chaque occasion</SectionTitle>
        <SectionText>
          Parce que chaque événement est unique, notre service traiteur événementiel crée des expériences sur mesure, 
          alliant saveurs raffinées, présentation élégante et service impeccable. Mariages, anniversaires ou événements 
          professionnels, nous sublimons vos réceptions avec créativité et savoir-faire.
        </SectionText>
        <SectionText>
          Chez SkyEvent, nos sushis sont l'œuvre de notre chef, un passionné de gastronomie japonaise. 
          Avec un savoir-faire unique et des années d'expérience, il marie tradition et créativité pour 
          vous offrir des créations aussi délicieuses que surprenantes.
        </SectionText>
        <ButtonWrapper>
          <StandardButton to="/notre-histoire" darkBackground={false}>En savoir plus sur nous</StandardButton>
        </ButtonWrapper>
      </ContentContainer>
    </SectionContainer>
  );
};

export default AboutSection;
