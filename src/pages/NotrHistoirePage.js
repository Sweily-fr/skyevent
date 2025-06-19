import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import OurStorySection from '../components/OurStorySection';
import ContactSection from '../components/ContactSection';

// Images uniques pour chaque section
const chefImage = '/images/DSC05270.jpg';
const teamImage1 = '/images/DSC05381.jpg';
const teamImage2 = '/images/DSC05384.jpg';
const teamImage3 = '/images/DSC05385.jpg';
const experienceImage = '/images/DSC05354.jpg';
const parallaxImage = '/images/DSC05297.jpg';


const PageContainer = styled.div`
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  color: #1a1a1a;
  background-color: #ffffff; /* Fond blanc */
`;

const FullWidthSection = styled.section`
  width: 100%;
  padding: 0;
  margin: 80px 0;
  position: relative;
  height: 80vh;
  min-height: 500px;
  overflow: hidden;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.bgImage || 'none'});
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 60vh;
    min-height: 400px;
    margin: 60px 0;
    background-attachment: scroll;
  }
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
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const OverlayText = styled.p`
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
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
  font-family: 'Inter', sans-serif;
  font-weight: 700;
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
            <TeamMemberImage src={teamImage3} alt="Membre de l'équipe" />
            <TeamMemberInfo>
              <TeamMemberName>Thomas Leroy</TeamMemberName>
              <TeamMemberRole>Chef de Cuisine</TeamMemberRole>
            </TeamMemberInfo>
          </TeamMember>
        </TeamGrid>
      </Section>
      <FullWidthSection 
        bgImage={parallaxImage}
        data-aos="fade"
        data-aos-duration="1000"
      >
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
