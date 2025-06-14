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
`;

// Les styles de conteneur ont été déplacés vers le composant Layout

function App() {
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
