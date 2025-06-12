import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder images - à remplacer par vos propres images
const eventImages = {
  hero: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  event1: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  event2: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  event3: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
};

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
`;

const HeroSection = styled.section`
  height: 400px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${eventImages.hero});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
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

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: ${props => props.center ? '0 auto 50px' : '0 0 50px'};
  color: #666;
  text-align: ${props => props.center ? 'center' : 'left'};
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

const ContentContainer = styled.div``;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  &:before {
    content: '✓';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #f0f0f0;
    border-radius: 50%;
    margin-right: 15px;
    color: #333;
    font-weight: bold;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #333;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #555;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ServiceCard = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const ServiceContent = styled.div`
  padding: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-family: 'Playfair Display', serif;
`;

const ServiceDescription = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

const EvenementielPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Événementiel - SkyEvent';
  }, []);

  const services = [
    {
      id: 1,
      title: 'Menu personnalisé',
      description: 'Des menus sur mesure adaptés à votre événement et à vos préférences.',
      image: eventImages.event1
    },
    {
      id: 2,
      title: 'Service complet',
      description: 'Du personnel qualifié pour assurer un service impeccable lors de votre événement.',
      image: eventImages.event2
    },
    {
      id: 3,
      title: 'Décoration thématique',
      description: 'Des options de décoration pour créer une ambiance parfaitement adaptée à votre événement.',
      image: eventImages.event3
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <div>
          <HeroTitle>Événementiel</HeroTitle>
        </div>
      </HeroSection>
      
      <Section>
        <Grid>
          <ContentContainer>
            <SectionTitle>Des sushis pour chaque occasion</SectionTitle>
            <SectionText>
              Parce que chaque événement est unique, notre service traiteur événementiel crée des expériences sur mesure, 
              alliant saveurs raffinées, présentation élégante et service impeccable. Mariages, anniversaires ou événements 
              professionnels, nous sublimons vos réceptions avec créativité et savoir-faire.
            </SectionText>
            <FeaturesList>
              <FeatureItem>Personnalisation des menus</FeatureItem>
              <FeatureItem>Art de la présentation</FeatureItem>
              <FeatureItem>Expérience client complète</FeatureItem>
              <FeatureItem>Flexibilité pour tous types d'événements</FeatureItem>
            </FeaturesList>
            <CTAButton to="/realisations">Découvrir nos réalisations</CTAButton>
          </ContentContainer>
          <ImageContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <StyledImage src={eventImages.event1} alt="Événementiel SkyEvent" />
          </ImageContainer>
        </Grid>
      </Section>
      
      <Section>
        <SectionTitle center>Nos services événementiels</SectionTitle>
        <SectionSubtitle center>
          Que vous planifiez une célébration intime ou un grand événement, nous sommes à vos côtés pour prendre soin de chaque détail.
        </SectionSubtitle>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ServiceImage src={service.image} />
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>
      
      <Section>
        <Grid>
          <ImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <StyledImage src={eventImages.event2} alt="Événementiel SkyEvent" />
          </ImageContainer>
          <ContentContainer>
            <SectionTitle>Pourquoi choisir SkyEvent ?</SectionTitle>
            <SectionText>
              Chez SkyEvent, nous comprenons que chaque événement est unique et mérite une attention particulière. 
              Notre équipe de professionnels passionnés s'engage à créer des expériences culinaires mémorables qui 
              dépasseront vos attentes.
            </SectionText>
            <SectionText>
              De la conception du menu à la présentation finale, nous prenons soin de chaque détail pour que votre 
              événement soit un succès. Notre flexibilité et notre créativité nous permettent de nous adapter à tous 
              types d'occasions, qu'il s'agisse d'un mariage intime ou d'un grand événement d'entreprise.
            </SectionText>
            <CTAButton to="/realisations">Voir nos réalisations</CTAButton>
          </ContentContainer>
        </Grid>
      </Section>
    </PageContainer>
  );
};

export default EvenementielPage;
