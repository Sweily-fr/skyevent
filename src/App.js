import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NotrHistoirePage from './pages/NotrHistoirePage';
import EvenementielPage from './pages/EvenementielPage';
import RealisationsPage from './pages/RealisationsPage';
import BabyShowerPage from './pages/occasions/BabyShowerPage';
import AnniversairePage from './pages/occasions/AnniversairePage';
import BaptemePage from './pages/occasions/BaptemePage';
import MariagePage from './pages/occasions/MariagePage';
import EntreprisePage from './pages/occasions/EntreprisePage';
import MarquePage from './pages/occasions/MarquePage';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  /* Styles pour empêcher le défilement horizontal sans casser l'effet sticky */
  html, body {
    width: 100%;
    max-width: 100%;
    position: relative;
  }
  
  /* Styles spécifiques pour iOS */
  @supports (-webkit-touch-callout: none) {
    html, body {
      width: 100%;
      position: relative;
    }
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: #333;
    background-color: #fff;
    line-height: 1.5;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
  }
  
  /* Fix pour les éléments qui pourraient causer un défilement horizontal */
  #root {
    width: 100%;
    max-width: 100%;
  }
`;

// Les styles de conteneur ont été déplacés vers le composant Layout

function App() {
  // Effet pour corriger le défilement horizontal sur iOS sans casser l'effet sticky
  React.useEffect(() => {
    // Fonction pour s'assurer que la largeur est correctement définie
    const fixHorizontalScroll = () => {
      document.documentElement.style.width = '100%';
      document.documentElement.style.maxWidth = '100%';
      document.body.style.width = '100%';
      document.body.style.maxWidth = '100%';
    };
    
    // Appliquer immédiatement et lors des changements de taille
    fixHorizontalScroll();
    window.addEventListener('resize', fixHorizontalScroll);
    
    return () => {
      window.removeEventListener('resize', fixHorizontalScroll);
    };
  }, []);
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notre-histoire" element={<NotrHistoirePage />} />
            <Route path="/evenementiel" element={<EvenementielPage />} />
            <Route path="/realisations" element={<RealisationsPage />} />
            
            {/* Routes pour les pages d'occasions */}
            <Route path="/realisations/baby-shower" element={<BabyShowerPage />} />
            <Route path="/realisations/anniversaire" element={<AnniversairePage />} />
            <Route path="/realisations/bapteme" element={<BaptemePage />} />
            <Route path="/realisations/mariage" element={<MariagePage />} />
            <Route path="/realisations/evenements-dentreprise" element={<EntreprisePage />} />
            <Route path="/realisations/evenements-de-marque" element={<MarquePage />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
