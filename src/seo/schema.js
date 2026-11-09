// Données SEO partagées entre l'application (SEO.js) et le script de build
// (scripts/prerender.js). Écrit en CommonJS pour être lisible par Node sans transpilation.
const site = require('./site.json');
const pages = require('./pages.json');

const BREADCRUMB_LABELS = {
  '/notre-histoire': 'Notre histoire',
  '/realisations': 'Réalisations'
};

const absoluteUrl = (path) => (path.startsWith('http') ? path : `${site.siteUrl}${path}`);

const canonicalUrl = (path) => (path === '/' ? `${site.siteUrl}/` : `${site.siteUrl}${path}`);

// Métadonnées complètes d'une page (title, description, canonical, image…)
const getPageMeta = (path) => {
  const page = pages[path] || {};
  const image = page.image || site.defaultImage;
  return {
    path,
    title: page.title || pages['/'].title,
    description: page.description || pages['/'].description,
    h1: page.h1,
    canonical: canonicalUrl(path),
    image: absoluteUrl(image),
    imageIsDefault: !page.image,
    imageWidth: page.image ? undefined : site.defaultImageWidth,
    imageHeight: page.image ? undefined : site.defaultImageHeight
  };
};

// Fil d'Ariane : Accueil > Réalisations > Mariage
const buildBreadcrumb = (path) => {
  const segments = path.split('/').filter(Boolean);
  const items = [{ name: 'Accueil', url: canonicalUrl('/') }];
  let current = '';
  segments.forEach((segment) => {
    current += `/${segment}`;
    const label = BREADCRUMB_LABELS[current] || (pages[current] && pages[current].h1) || segment;
    items.push({ name: label, url: canonicalUrl(current) });
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

// Liste des blocs JSON-LD à injecter pour une page
const buildJsonLd = (path) => {
  const blocks = [site.business];
  if (path === '/') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: site.siteName,
      url: canonicalUrl('/'),
      inLanguage: 'fr-FR',
      publisher: { '@id': site.business['@id'] }
    });
  } else if (pages[path]) {
    blocks.push(buildBreadcrumb(path));
  }
  return blocks;
};

module.exports = { site, pages, getPageMeta, buildJsonLd, canonicalUrl };
