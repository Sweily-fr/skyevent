import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // S'exécute avant le rendu de la page
    const unlisten = () => {
      // Défilement instantané vers le haut
      window.scrollTo(0, 0);
      // Désactive le comportement de défilement fluide du navigateur
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    };

    // S'exécute avant le rendu
    unlisten();

    // Nettoyage
    return () => {
      window.removeEventListener('popstate', unlisten);
    };
  }, [pathname]);

  return null;
}
