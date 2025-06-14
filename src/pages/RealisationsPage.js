import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import EventBanner from '../components/EventBanner';

// Placeholder images - à remplacer par vos propres images
const realisationsImages = {
  marque: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  entreprise: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  bapteme: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  babyShower: 'https://images.unsplash.com/photo-1554342872-034a06541948?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  anniversaire: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  mariage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
};

const PageContainer = styled.div`
  min-height: 100vh;
  font-family: 'Playfair Display', serif;
  color: #1a1a1a;
  background-color: #ffffff; /* Fond blanc */
`;

const HeroSection = styled.section`
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${realisationsImages.marque});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 40px;
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
    letter-spacing: 3px;
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
  margin-bottom: 60px;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 1px;
    background-color: #d4af37; /* Couleur or subtile */
  }
`;

const RealisationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 50px;
  margin-top: 20px;
`;

const RealisationCard = styled(motion.div)`
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

const RealisationImage = styled.div`
  height: 300px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  filter: brightness(0.95);
  transition: all 0.5s ease;
  
  ${RealisationCard}:hover & {
    filter: brightness(1);
  }
`;

const RealisationContent = styled.div`
  padding: 30px;
  background-color: white;
`;

const RealisationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const RealisationDescription = styled.p`
  color: #666;
  margin-bottom: 25px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.6;
`;

const RealisationLink = styled(Link)`
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

const RealisationsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    document.title = 'Nos réalisations - SkyEvent';
  }, []);

  const realisations = [
    {
      id: 'marque',
      title: 'Évènements de marque',
      description: 'Des expériences culinaires sur mesure pour valoriser votre marque et impressionner vos invités.',
      image: realisationsImages.marque,
      link: '/realisations/evenements-de-marque'
    },
    {
      id: 'entreprise',
      title: 'Évènements d\'entreprise',
      description: 'Sublimez vos événements professionnels avec nos prestations traiteur haut de gamme.',
      image: realisationsImages.entreprise,
      link: '/realisations/evenements-dentreprise'
    },
    {
      id: 'bapteme',
      title: 'Baptême',
      description: 'Célébrez ce moment important avec une offre gastronomique raffinée et personnalisée.',
      image: realisationsImages.bapteme,
      link: '/realisations/bapteme'
    },
    {
      id: 'babyShower',
      title: 'Baby Shower',
      description: 'Créez un moment de partage inoubliable avec nos délices adaptés à cette occasion spéciale.',
      image: realisationsImages.babyShower,
      link: '/realisations/baby-shower'
    },
    {
      id: 'anniversaire',
      title: 'Anniversaire',
      description: 'Marquez cette journée spéciale avec une expérience culinaire exceptionnelle.',
      image: realisationsImages.anniversaire,
      link: '/realisations/anniversaire'
    },
    {
      id: 'mariage',
      title: 'Mariage',
      description: 'Rendez votre jour J mémorable avec notre service traiteur élégant et personnalisé.',
      image: realisationsImages.mariage,
      link: '/realisations/mariage'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <div>
          <HeroTitle>Nos réalisations</HeroTitle>
        </div>
      </HeroSection>
      
      <Section>
        <SectionTitle>Découvrez nos plus belles réalisations</SectionTitle>
        
        <RealisationsGrid>
          {realisations.map((realisation, index) => (
            <RealisationCard
              key={realisation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <RealisationImage src={realisation.image} />
              <RealisationContent>
                <RealisationTitle>{realisation.title}</RealisationTitle>
                <RealisationDescription>{realisation.description}</RealisationDescription>
                <RealisationLink to={realisation.link}>Voir les détails</RealisationLink>
              </RealisationContent>
            </RealisationCard>
          ))}
        </RealisationsGrid>
      </Section>
      <ContactSection />
      <EventBanner />
    </PageContainer>
  );
};

export default RealisationsPage;
