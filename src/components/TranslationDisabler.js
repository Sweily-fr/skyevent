import { useEffect } from 'react';

/**
 * Composant qui désactive la traduction automatique du navigateur
 * Version optimisée pour Brave et autres navigateurs
 */
const TranslationDisabler = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const applyTranslationDisabling = () => {
        // Désactiver sur l'élément HTML
        document.documentElement.setAttribute('translate', 'no');
        document.documentElement.setAttribute('lang', 'fr');
        document.documentElement.classList.add('notranslate');

        // Désactiver sur le body
        document.body.setAttribute('translate', 'no');
        document.body.classList.add('notranslate');

        // Désactiver sur le root
        const root = document.getElementById('root');
        if (root) {
          root.setAttribute('translate', 'no');
          root.classList.add('notranslate');
        }

        // Ajouter meta tag dynamiquement si manquant
        if (!document.querySelector('meta[name="google"][content="notranslate"]')) {
          const metaTag = document.createElement('meta');
          metaTag.name = 'google';
          metaTag.content = 'notranslate';
          document.head.appendChild(metaTag);
        }
      };

      // Appliquer immédiatement
      applyTranslationDisabling();

      // Réappliquer après un délai pour s'assurer que ça prend
      const timeouts = [
        setTimeout(applyTranslationDisabling, 100),
        setTimeout(applyTranslationDisabling, 500),
        setTimeout(applyTranslationDisabling, 1000)
      ];

      // Observer les changements DOM pour maintenir les attributs
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes') {
            // Réappliquer si les attributs sont modifiés
            applyTranslationDisabling();
          }
        });
      });

      // Observer les changements sur documentElement et body
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['translate', 'class', 'lang']
      });

      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['translate', 'class']
      });

      // Gestion spécifique des erreurs Brave translateDisabled
      const handleTranslationErrors = (event) => {
        if (event.message && 
            (event.message.includes('translateDisabled') || 
             event.message.includes('translation'))) {
          console.warn('Translation error suppressed:', event.message);
          event.preventDefault();
          event.stopPropagation();
          return true;
        }
        return false;
      };

      // Écouter les erreurs
      window.addEventListener('error', handleTranslationErrors, true);
      
      // Écouter les rejets de promesses non gérés
      window.addEventListener('unhandledrejection', (event) => {
        if (event.reason && 
            event.reason.toString().includes('translateDisabled')) {
          console.warn('Translation promise rejection suppressed');
          event.preventDefault();
        }
      });

      // Cleanup function
      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout));
        observer.disconnect();
        window.removeEventListener('error', handleTranslationErrors, true);
      };
    }
  }, []);

  return null;
};

export default TranslationDisabler;
