import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder images - à remplacer par vos propres images
const serviceImages = {
  marque: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  entreprise: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  bapteme: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  babyShower: 'https://images.unsplash.com/photo-1554342872-034a06541948?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  anniversaire: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  mariage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
};

const SectionContainer = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px;
  color: #666;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

const ServiceLink = styled(Link)`
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

const ServicesSection = () => {
  const services = [
    {
      id: 'marque',
      title: 'Évènements de marque',
      description: 'Des expériences culinaires sur mesure pour valoriser votre marque et impressionner vos invités.',
      image: serviceImages.marque,
      link: '/realisations/evenements-de-marque'
    },
    {
      id: 'entreprise',
      title: 'Évènements d\'entreprise',
      description: 'Sublimez vos événements professionnels avec nos prestations traiteur haut de gamme.',
      image: serviceImages.entreprise,
      link: '/realisations/evenements-dentreprise'
    },
    {
      id: 'bapteme',
      title: 'Baptême',
      description: 'Célébrez ce moment important avec une offre gastronomique raffinée et personnalisée.',
      image: serviceImages.bapteme,
      link: '/realisations/bapteme'
    },
    {
      id: 'babyShower',
      title: 'Baby Shower',
      description: 'Créez un moment de partage inoubliable avec nos délices adaptés à cette occasion spéciale.',
      image: serviceImages.babyShower,
      link: '/realisations/baby-shower'
    },
    {
      id: 'anniversaire',
      title: 'Anniversaire',
      description: 'Marquez cette journée spéciale avec une expérience culinaire exceptionnelle.',
      image: serviceImages.anniversaire,
      link: '/realisations/anniversaire'
    },
    {
      id: 'mariage',
      title: 'Mariage',
      description: 'Rendez votre jour J mémorable avec notre service traiteur élégant et personnalisé.',
      image: serviceImages.mariage,
      link: '/realisations/mariage'
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Découvrez nos services évènementiels</SectionTitle>
      <SectionSubtitle>
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
              <ServiceLink to={service.link}>En savoir plus</ServiceLink>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </SectionContainer>
  );
};

export default ServicesSection;
