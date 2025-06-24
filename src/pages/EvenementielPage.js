import React, { useEffect } from 'react';
import SEOSchema from '../components/SEOSchema';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import StandardButton, { ButtonContainer } from '../components/StandardButton'; // Ajout de l'import de ButtonContainer

// Images des différents types d'événements
const eventImages = {
  marque: '/images/DSC05297.jpg',
  entreprise: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  bapteme: '/images/DSC05354.jpg',
  babyShower: '/images/DSC05351.jpg',
  anniversaire: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  mariage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  hero: '/images/DSC05294.jpg',
  event1: '/images/DSC05381.jpg',
  event2: '/images/DSC05410.jpg',
  event3: '/images/DSC05415.jpg'
};

const PageContainer = styled.div`
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  color: #1a1a1a;
  background-color: #ffffff;
  line-height: 1.6;
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
  font-size: 3.5rem !important;
  font-family: 'Inter', sans-serif !important;
  font-weight: 600 !important;
  letter-spacing: 2px !important;
  text-transform: uppercase !important;
  margin-bottom: 20px !important;
  line-height: 1.2 !important;
  
  @media (max-width: 768px) {
    font-size: 1.8rem !important;
    line-height: 1.3 !important;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  margin: 0 auto 30px;
  max-width: 800px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
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
  font-size: 2.5rem !important;
  margin: 0 auto 30px !important;
  padding: 0 20px !important;
  font-family: 'Inter', sans-serif !important;
  font-weight: 600 !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
  text-align: center !important;
  position: relative !important;
  color: #1a1a1a !important;
  line-height: 1.3 !important;
  display: block;
  width: 100%;
  
  @media (max-width: 768px) {
    font-size: 1.5rem !important;
    line-height: 1.3 !important;
    margin-bottom: 20px !important;
  }
  

`;

const SectionSubtitle = styled.p`
  font-size: 1.15rem;
  font-family: 'Poppins', sans-serif;
  max-width: 700px;
  margin: ${props => props.center ? '0 auto 60px' : '0 0 60px'};
  color: #444;
  text-align: ${props => props.center ? 'center' : 'left'};
  font-weight: 400;
  line-height: 1.7;
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
  
  /* Optimisation pour iOS */
  will-change: transform;
  -webkit-transform: translateZ(0);
  
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
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const ServiceCard = styled(motion.div)`
  overflow: hidden;
  position: relative;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  
  /* Utiliser will-change pour optimiser les performances */
  will-change: transform;
  
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
  }
  
  /* Styles spécifiques pour iOS/Safari */
  @supports (-webkit-touch-callout: none) {
    /* Désactiver la transition de transform pour éviter les sauts */
    transition: none;
    
    &:hover:before {
      opacity: 1;
      transition: opacity 0.4s ease;
    }
  }
  
  /* Styles pour les autres navigateurs */
  @supports not (-webkit-touch-callout: none) {
    transition: transform 0.4s ease;
    
    &:before {
      transition: opacity 0.4s ease;
    }
    
    &:hover {
      transform: translateY(-5px);
      
      &:before {
        opacity: 1;
      }
    }
  }
`;

const ServiceImage = styled.div`
  height: 300px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  filter: brightness(0.95);
  
  /* Utiliser will-change pour optimiser le rendu */
  will-change: filter;
  
  /* Styles spécifiques pour iOS/Safari */
  @supports (-webkit-touch-callout: none) {
    /* Pas de transition pour éviter les sauts */
    transition: none;
    
    ${ServiceCard}:hover & {
      filter: brightness(1);
    }
  }
  
  /* Styles pour les autres navigateurs */
  @supports not (-webkit-touch-callout: none) {
    transition: filter 0.5s ease;
    
    ${ServiceCard}:hover & {
      filter: brightness(1);
    }
  }
`;

const ServiceContent = styled.div`
  padding: 30px;
  background-color: white;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem !important;
  margin-bottom: 15px !important;
  font-family: 'Inter', sans-serif !important;
  font-weight: 500 !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
  color: #1a1a1a !important;
  line-height: 1.4 !important;
  
  @media (max-width: 768px) {
    font-size: 1.15rem !important;
    line-height: 1.4 !important;
    margin-bottom: 12px !important;
  }
`;

const ServiceDescription = styled.p`
  color: #444;
  margin-bottom: 25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 0.3px;
  line-height: 1.7;
  font-size: 0.95rem;
`;

const ServiceLink = styled(Link)`
  display: inline-block;
  color: #1a1a1a;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  padding-bottom: 5px;
  font-size: 0.85rem;
  transition: color 0.3s ease;
  
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
  const navigate = useNavigate();
  
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
      id: 'babyShower',
      title: 'Baby Shower',
      description: 'Créez un moment de partage inoubliable avec nos délices adaptés à cette occasion spéciale.',
      image: eventImages.babyShower,
      link: '/realisations/baby-shower'
    },
    {
      id: 'anniversaire',
      title: 'Anniversaire',
      description: 'Marquez cette journée spéciale avec une expérience culinaire exceptionnelle.',
      image: eventImages.anniversaire,
      link: '/realisations/anniversaire'
    },
    {
      id: 'bapteme',
      title: 'Baptême',
      description: 'Célébrez ce moment important avec une offre gastronomique raffinée et personnalisée.',
      image: eventImages.bapteme,
      link: '/realisations/bapteme'
    },
    {
      id: 'mariage',
      title: 'Mariage',
      description: 'Rendez votre jour J mémorable avec notre service traiteur élégant et personnalisé.',
      image: eventImages.mariage,
      link: '/realisations/mariage'
    },
    {
      id: 'entreprise',
      title: 'Évènement d\'entreprise',
      description: 'Sublimez vos événements professionnels avec nos prestations traiteur haut de gamme.',
      image: eventImages.entreprise,
      link: '/realisations/evenements-dentreprise'
    },
    {
      id: 'marque',
      title: 'Évènement de marque',
      description: 'Des expériences culinaires sur mesure pour valoriser votre marque et impressionner vos invités.',
      image: eventImages.marque,
      link: '/realisations/evenements-de-marque'
    }
  ];

  return (
    <PageContainer>
      <SEOSchema 
        pageType="ServicePage" 
        pageName="Nos Services Événementiels | SkyEvent - Traiteur Événementiel" 
        pageDescription="Découvrez nos services de traiteur événementiel sur mesure pour tous types d'événements : mariages, baptêmes, anniversaires, événements d'entreprise et de marque." 
        pageUrl="https://skyevent.fr/evenementiel" 
        pageImage="/images/DSC05294.jpg" 
      />
      <HeroSection>
        <HeroTitle>Événementiel</HeroTitle>
        <HeroSubtitle>
          Découvrez nos services sur mesure pour des événements exceptionnels. 
          De l'idée à la réalisation, nous nous occupons de tout pour faire de votre événement un succès.
        </HeroSubtitle>
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
              onClick={() => navigate(service.link, { replace: true })}
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
