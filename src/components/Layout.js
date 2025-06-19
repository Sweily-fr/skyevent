import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import EventBanner from './EventBanner';
import { BANNER_TITLE, BANNER_SUBTITLE, BANNER_BACKGROUND } from '../utils/constants';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 120px; /* Hauteur du header par défaut */
  
  @media (max-width: 768px) {
    padding-top: 60px; /* Ajustement pour mobile - correspond exactement à la hauteur de la navbar */
  }
`;

// Composant de mise en page partagé pour toutes les pages
const Layout = ({ children, showBanner = true }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      {showBanner && (
        <EventBanner 
          title={BANNER_TITLE}
          subtitle={BANNER_SUBTITLE}
          backgroundImage={BANNER_BACKGROUND}
        />
      )}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
