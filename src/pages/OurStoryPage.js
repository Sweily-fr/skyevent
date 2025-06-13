import React from 'react';
import styled from 'styled-components';
import OurStorySection from '../components/OurStorySection';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  width: 100%;
`;

const AdditionalContent = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-family: 'Playfair Display', serif;
  text-align: center;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 50px;
`;

const GridItem = styled.div`
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
`;

const ItemText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

const OurStoryPage = () => {
  return (
    <PageContainer>
      <OurStorySection />
      
      <AdditionalContent>
        <SectionTitle>Notre Savoir-Faire</SectionTitle>
        <ContentGrid>
          <GridItem>
            <ItemTitle>Qualité Premium</ItemTitle>
            <ItemText>
              Nous sélectionnons uniquement les ingrédients les plus frais et de la plus haute qualité. 
              Notre poisson est livré quotidiennement et nos légumes sont soigneusement choisis auprès 
              de producteurs locaux pour garantir une fraîcheur incomparable.
            </ItemText>
          </GridItem>
          
          <GridItem>
            <ItemTitle>Créativité</ItemTitle>
            <ItemText>
              Notre équipe de chefs passionnés allie techniques traditionnelles japonaises et 
              innovations culinaires pour créer des compositions uniques qui surprendront vos invités 
              tant par leur goût que par leur présentation.
            </ItemText>
          </GridItem>
          
          <GridItem>
            <ItemTitle>Service Personnalisé</ItemTitle>
            <ItemText>
              Chaque événement est unique, c'est pourquoi nous travaillons étroitement avec vous pour 
              créer un menu sur mesure qui correspond parfaitement à vos attentes et aux besoins de 
              votre événement.
            </ItemText>
          </GridItem>
        </ContentGrid>
      </AdditionalContent>
      
      <Footer />
    </PageContainer>
  );
};

export default OurStoryPage;
