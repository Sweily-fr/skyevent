import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import OurStorySection from '../components/OurStorySection';

// Placeholder images - à remplacer par vos propres images
const chefImage = 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
const teamImage1 = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
const teamImage2 = 'https://images.unsplash.com/photo-1581299894340-05b7efe78ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
const experienceImage = 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';

const PageContainer = styled.div`
  min-height: 100vh;
`;



const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  text-align: ${props => props.center ? 'center' : 'left'};
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || '1fr 1fr'};
  gap: 50px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled(motion.div)`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const TeamMember = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
`;

const TeamMemberRole = styled.p`
  margin: 0;
  color: #666;
`;

const NotrHistoirePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Notre histoire - SkyEvent';
  }, []);

  return (
    <PageContainer>
      <OurStorySection />
      
      <Section>
        <Grid>
          <div>
            <SectionTitle>Notre expérience</SectionTitle>
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
            <SectionTitle>Notre Chef Cuistot : le maestro des saveurs</SectionTitle>
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
        <SectionTitle center>Notre Équipe : la passion au cœur de SkyEvent</SectionTitle>
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
    </PageContainer>
  );
};

export default NotrHistoirePage;
