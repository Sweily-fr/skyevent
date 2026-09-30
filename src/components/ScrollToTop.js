import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Désactive le comportement de restauration de défilement du navigateur
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Défilement vers une ancre (ex: /#contact)
    if (hash) {
      let attempts = 0;
      let timer;
      const scrollToAnchor = () => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          const offset = window.innerWidth <= 768 ? 60 : 100;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        } else if (attempts++ < 20) {
          // La page n'est peut-être pas encore rendue
          timer = setTimeout(scrollToAnchor, 50);
        }
      };
      scrollToAnchor();
      return () => clearTimeout(timer);
    }

    // Défilement instantané vers le haut
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return null;
}
