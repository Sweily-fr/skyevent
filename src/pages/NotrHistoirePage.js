import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import OurStorySection from '../components/OurStorySection';
import ContactSection from '../components/ContactSection';

// Images luxueuses pour le design inspiré de Louis Vuitton
const chefImage = 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
const teamImage1 = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
const teamImage2 = 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
const experienceImage = 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
const parallaxImage = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';


const PageContainer = styled.div`
  min-height: 100vh;
  font-family: 'Playfair Display', serif;
  color: #1a1a1a;
  background-color: #f8f5f1; /* Fond légèrement beige pour un aspect luxueux */
`;

const FullWidthSection = styled.section`
  width: 100%;
  padding: 0;
  margin: 80px 0;
  position: relative;
  height: 600px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 400px;
    margin: 60px 0;
  }
`;

const FullWidthImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const OverlayTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const OverlayText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;



const Section = styled.section`
  padding: 120px 40px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 30px;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  text-align: ${props => props.center ? 'center' : 'left'};
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: ${props => props.center ? '50%' : '0'};
    transform: ${props => props.center ? 'translateX(-50%)' : 'none'};
    width: ${props => props.center ? '100px' : '60px'};
    height: 1px;
    background-color: #1a1a1a;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 30px;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.5px;
  font-family: 'Poppins', sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || '1fr 1fr'};
  gap: 80px;
  align-items: center;
  margin: 80px 0;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
    margin: 60px 0;
  }
`;

const ImageContainer = styled(motion.div)`
  overflow: hidden;
  box-shadow: none;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 1px solid #d4c9b6;
    z-index: -1;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  filter: saturate(0.9) brightness(1.05); /* Légère modification pour un aspect plus luxueux */
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 60px;
  margin-top: 80px;
`;

const TeamMember = styled(motion.div)`
  overflow: hidden;
  box-shadow: none;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: -15px;
    bottom: -15px;
    border: 1px solid #d4c9b6;
    z-index: -1;
  }
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TeamMemberInfo = styled.div`
  padding: 20px;
`;

const TeamMemberName = styled.h3`
  margin: 0 0 10px 0;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 1.4rem;
`;

const TeamMemberRole = styled.p`
  margin: 0;
  color: #666;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

const NotrHistoirePage = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    document.title = 'Notre histoire - SkyEvent';
  }, []);

  return (
    <PageContainer>
      <OurStorySection />
      
      <Section>
        <Grid>
          <div>
            <SectionTitle>L'Excellence</SectionTitle>
            <SectionText>
              Appréciez l'élégance dans les moindres détails avec nos assiettes sophistiquées, 
              soigneusement dressées pour éveiller vos papilles. Parfait pour vos repas en tête-à-tête, 
              vos dîners privés ou vos réceptions select.
            </SectionText>
            <SectionText>
              Appréciez l'élégance dans les moindres détails avec nos assiettes sophistiquées, 
              soigneusement dressées pour éveiller vos papilles. Parfait pour vos repas en tête-à-tête, 
              vos dîners privés ou vos réceptions select.
            </SectionText>
          </div>
          <ImageContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <StyledImage src={experienceImage} alt="Notre expérience" />
          </ImageContainer>
        </Grid>
      </Section>
      
      <Section>
        <Grid>
          <ImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <StyledImage src={chefImage} alt="Notre Chef Cuistot" />
          </ImageContainer>
          <div>
            <SectionTitle>Le Savoir-Faire</SectionTitle>
            <SectionText>
              Chez SkyEvent, nos sushis sont l'œuvre de notre chef, un passionné de gastronomie japonaise. 
              Avec un savoir-faire unique et des années d'expérience, il marie tradition et créativité pour 
              vous offrir des créations aussi délicieuses que surprenantes.
            </SectionText>
            <SectionText>
              Chaque ingrédient est sélectionné avec soin, chaque plat est pensé comme une œuvre d'art. 
              Sa philosophie : fraîcheur, qualité et précision pour éveiller vos sens à chaque bouchée.
            </SectionText>
            <SectionText>
              Laissez-vous tenter par l'univers savoureux de notre chef, où chaque détail compte.
            </SectionText>
          </div>
        </Grid>
      </Section>
      
      <Section>
        <SectionTitle center>Notre Maison</SectionTitle>
        <SectionText>
          Appréciez l'élégance dans les moindres détails avec nos assiettes sophistiquées, 
          soigneusement dressées pour éveiller vos papilles. Parfait pour vos repas en tête-à-tête, 
          vos dîners privés ou vos réceptions select.
        </SectionText>
        <SectionText>
          Appréciez l'élégance dans les moindres détails avec nos assiettes sophistiquées, 
          soigneusement dressées pour éveiller vos papilles. Parfait pour vos repas en tête-à-tête, 
          vos dîners privés ou vos réceptions select.
        </SectionText>
        
        <TeamGrid>
          <TeamMember
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <TeamMemberImage src={teamImage1} alt="Membre de l'équipe" />
            <TeamMemberInfo>
              <TeamMemberName>Alexandre Dubois</TeamMemberName>
              <TeamMemberRole>Chef Sushi Master</TeamMemberRole>
            </TeamMemberInfo>
          </TeamMember>
          
          <TeamMember
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <TeamMemberImage src={teamImage2} alt="Membre de l'équipe" />
            <TeamMemberInfo>
              <TeamMemberName>Sophie Martin</TeamMemberName>
              <TeamMemberRole>Responsable Événementiel</TeamMemberRole>
            </TeamMemberInfo>
          </TeamMember>
          
          <TeamMember
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <TeamMemberImage src={teamImage1} alt="Membre de l'équipe" />
            <TeamMemberInfo>
              <TeamMemberName>Thomas Leroy</TeamMemberName>
              <TeamMemberRole>Chef de Cuisine</TeamMemberRole>
            </TeamMemberInfo>
          </TeamMember>
        </TeamGrid>
      </Section>
      <FullWidthSection>
        <FullWidthImage src={parallaxImage} alt="Gastronomie de luxe" />
        <OverlayContent>
          <OverlayTitle>L'Art de la Table</OverlayTitle>
          <OverlayText>Une expérience culinaire d'exception</OverlayText>
        </OverlayContent>
      </FullWidthSection>
      
      <ContactSection />
    </PageContainer>
  );
};

export default NotrHistoirePage;
