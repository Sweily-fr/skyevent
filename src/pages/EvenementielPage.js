import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import StandardButton, { ButtonContainer } from '../components/StandardButton'; // Ajout de l'import de ButtonContainer

// Placeholder images - à remplacer par vos propres images
const eventImages = {
  hero: '/images/DSC05294.jpg',
  event1: '/images/DSC05381.jpg',
  event2: '/images/DSC05410.jpg',
  event3: '/images/DSC05415.jpg',
  marque: '/images/DSC05381.jpg',
  entreprise: '/images/DSC05410.jpg',
  bapteme: '/images/DSC05415.jpg',
  babyShower: '/images/DSC05372.jpg',
  anniversaire: '/images/DSC05355.jpg',
  mariage: '/images/DSC05270.jpg'
};

const PageContainer = styled.div`
  min-height: 100vh;
  font-family: 'Playfair Display', serif;
  color: #1a1a1a;
  background-color: #ffffff; /* Fond blanc */
`;

const HeroSection = styled.section`
  height: 600px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${eventImages.hero});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 60px;
  padding: 0 20px;
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
  }`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 30px;
  max-width: 800px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 20px;
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
  margin-bottom: 30px;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: ${props => props.center ? 'center' : 'left'};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: ${props => props.center ? '50%' : '0'};
    transform: ${props => props.center ? 'translateX(-50%)' : 'none'};
    width: 40px;
    height: 1px;
    background-color: #d4af37; /* Couleur or subtile */
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: ${props => props.center ? '0 auto 60px' : '0 0 60px'};
  color: #666;
  text-align: ${props => props.center ? 'center' : 'left'};
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.8;
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
  position: relative;
  border: 1px solid #f0f0f0;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
  
  &:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 12px;
    right: -12px;
    bottom: -12px;
    border: 1px solid #d4af37;
    z-index: -1;
  }
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
  margin-bottom: 30px;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 1px;
  
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: #d4af37;
    margin-right: 15px;
  }
`;

// Ancien CTAButton remplacé par le composant StandardButton

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 50px;
  margin-top: 50px;
`;

const ServiceCard = styled(motion.div)`
  overflow: hidden;
  position: relative;
  border: 1px solid #f0f0f0;
  transition: all 0.4s ease;
  
  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    border: 1px solid #d4af37;
    z-index: -1;
    opacity: 0;
    transition: all 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    
    &:before {
      opacity: 1;
    }
  }
`;

const ServiceImage = styled.div`
  height: 300px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  filter: brightness(0.95);
  transition: all 0.5s ease;
  
  ${ServiceCard}:hover & {
    filter: brightness(1);
  }
`;

const ServiceContent = styled.div`
  padding: 30px;
  background-color: white;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ServiceDescription = styled.p`
  color: #666;
  margin-bottom: 25px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.6;
`;

const ServiceLink = styled(Link)`
  display: inline-block;
  color: #1a1a1a;
  font-weight: 300;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  padding-bottom: 5px;
  font-size: 0.9rem;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #d4af37;
    transform: scaleX(0.3);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
`;

const EvenementielPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    document.title = 'Événementiel - SkyEvent';
  }, []);

  const services = [
    {
      id: 'marque',
      title: 'Évènements de marque',
      description: 'Des expériences culinaires sur mesure pour valoriser votre marque et impressionner vos invités.',
      image: eventImages.marque,
      link: '/evenementiel/evenements-de-marque'
    },
    {
      id: 'entreprise',
      title: 'Évènements d\'entreprise',
      description: 'Sublimez vos événements professionnels avec nos prestations traiteur haut de gamme.',
      image: eventImages.entreprise,
      link: '/evenementiel/evenements-dentreprise'
    },
    {
      id: 'bapteme',
      title: 'Baptême',
      description: 'Célébrez ce moment important avec une offre gastronomique raffinée et personnalisée.',
      image: eventImages.bapteme,
      link: '/evenementiel/bapteme'
    },
    {
      id: 'babyShower',
      title: 'Baby Shower',
      description: 'Créez un moment de partage inoubliable avec nos délices adaptés à cette occasion spéciale.',
      image: eventImages.babyShower,
      link: '/evenementiel/baby-shower'
    },
    {
      id: 'anniversaire',
      title: 'Anniversaire',
      description: 'Marquez cette journée spéciale avec une expérience culinaire exceptionnelle.',
      image: eventImages.anniversaire,
      link: '/evenementiel/anniversaire'
    },
    {
      id: 'mariage',
      title: 'Mariage',
      description: 'Rendez votre jour J mémorable avec notre service traiteur élégant et personnalisé.',
      image: eventImages.mariage,
      link: '/evenementiel/mariage'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>Événementiel</HeroTitle>
        <HeroSubtitle>Créons ensemble des moments inoubliables</HeroSubtitle>
        <p style={{ maxWidth: '800px', margin: '0 auto 30px', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Découvrez nos services sur mesure pour des événements exceptionnels. 
          De l'idée à la réalisation, nous nous occupons de tout pour faire de votre événement un succès.
        </p>
        <ButtonContainer>
          <StandardButton to="/realisations" darkBackground={true}>
            Voir nos réalisations
          </StandardButton>
          <StandardButton to="/contact" darkBackground={true}>
            Demander un devis
          </StandardButton>
        </ButtonContainer>
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
            <ButtonContainer>
              <StandardButton to="/realisations" darkBackground={false}>Découvrir nos réalisations</StandardButton>
              <StandardButton to="/contact" darkBackground={false}>Nous contacter</StandardButton>
            </ButtonContainer>
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
        <SectionTitle center>Nos prestations événementielles</SectionTitle>
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
                <ServiceLink to={service.link}>Voir les détails</ServiceLink>
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
            <ButtonContainer>
              <StandardButton to="/realisations" darkBackground={false}>Voir nos réalisations</StandardButton>
              <StandardButton to="/contact" darkBackground={false}>Demander un devis</StandardButton>
            </ButtonContainer>
          </ContentContainer>
        </Grid>
      </Section>
      <ContactSection />
    </PageContainer>
  );
};

export default EvenementielPage;
