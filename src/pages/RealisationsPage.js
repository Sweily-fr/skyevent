import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  padding-top: 80px;
`;

const HeroSection = styled.section`
  height: 400px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${realisationsImages.marque});
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
  margin-bottom: 50px;
  font-family: 'Playfair Display', serif;
  text-align: center;
`;

const RealisationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
`;

const RealisationCard = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const RealisationImage = styled.div`
  height: 250px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const RealisationContent = styled.div`
  padding: 20px;
`;

const RealisationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-family: 'Playfair Display', serif;
`;

const RealisationDescription = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

const RealisationLink = styled(Link)`
  display: inline-block;
  color: #333;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #333;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const RealisationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    </PageContainer>
  );
};

export default RealisationsPage;
