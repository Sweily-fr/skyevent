import React from 'react';
import { Helmet } from 'react-helmet-async';
import { site, getPageMeta, buildJsonLd } from '../seo/schema';

/**
 * Balises SEO d'une page. Les textes (title, description, image) sont centralisés
 * dans src/seo/pages.json : il suffit de passer le chemin de la page.
 * Les mêmes balises sont écrites dans le HTML statique au build (scripts/prerender.js).
 */
const SEO = ({ path = '/', noindex = false, title: titleOverride, description: descriptionOverride }) => {
  const meta = getPageMeta(path);
  const title = titleOverride || meta.title;
  const description = descriptionOverride || meta.description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      {!noindex && <link rel="canonical" href={meta.canonical} />}

      {/* Open Graph / Facebook / WhatsApp / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={site.siteName} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={meta.image} />
      {meta.imageWidth && <meta property="og:image:width" content={String(meta.imageWidth)} />}
      {meta.imageHeight && <meta property="og:image:height" content={String(meta.imageHeight)} />}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={meta.image} />

      {/* Données structurées */}
      {!noindex && buildJsonLd(path).map((block, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(block)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
