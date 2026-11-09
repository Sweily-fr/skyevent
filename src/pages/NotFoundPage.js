import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import StandardButton from '../components/StandardButton';

const Container = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 16px;
  font-family: 'Poppins', sans-serif;
  color: #1a1a1a;
`;

const Code = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 5rem;
  line-height: 1;
  color: #d4af37;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Text = styled.p`
  max-width: 520px;
  margin-bottom: 35px;
  line-height: 1.7;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const NotFoundPage = () => (
  <Container>
    <SEO
      path="/404"
      noindex
      title="Page introuvable | SkyEvent"
      description="Cette page n'existe pas ou a été déplacée."
    />
    <Code>404</Code>
    <Title>Page introuvable</Title>
    <Text>
      La page que vous recherchez n'existe pas ou a été déplacée.
      Découvrez nos prestations de traiteur événementiel ou contactez-nous.
    </Text>
    <Buttons>
      <StandardButton to="/">Retour à l'accueil</StandardButton>
      <StandardButton to="/realisations">Nos réalisations</StandardButton>
      <StandardButton to="/#contact">Nous contacter</StandardButton>
    </Buttons>
  </Container>
);

export default NotFoundPage;
