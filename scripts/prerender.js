#!/usr/bin/env node
/**
 * Exécuté automatiquement après `npm run build` (script "postbuild").
 *
 * Le site est une application React rendue dans le navigateur : le HTML envoyé
 * par le serveur est vide. Les robots qui n'exécutent pas JavaScript (Facebook,
 * WhatsApp, LinkedIn, IA…) ne voyaient donc qu'une page vierge, avec le même
 * titre partout. Ce script génère, pour chaque page du site :
 *   - build/<page>.html (servi en /<page> grâce à cleanUrls dans vercel.json) avec son title, sa description, sa canonical,
 *     ses balises Open Graph et ses données structurées (JSON-LD) ;
 *   - un contenu <noscript> (titre, description, liens) lisible sans JavaScript ;
 * ainsi que build/sitemap.xml.
 *
 * Les balises portent l'attribut data-prerender : src/index.js les supprime au démarrage
 * de l'application, puis React Helmet les recrée (évite les doublons).
 */
const fs = require('fs');
const path = require('path');
const { site, pages, getPageMeta, buildJsonLd, canonicalUrl } = require('../src/seo/schema');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const TEMPLATE_PATH = path.join(BUILD_DIR, 'index.html');

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Empêche la fermeture prématurée du <script> JSON-LD
const safeJson = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

const buildHeadTags = (meta, routePath) => {
  const tags = [
    `<meta name="description" content="${escapeHtml(meta.description)}">`,
    `<link rel="canonical" href="${escapeHtml(meta.canonical)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:locale" content="fr_FR">`,
    `<meta property="og:site_name" content="${escapeHtml(site.siteName)}">`,
    `<meta property="og:url" content="${escapeHtml(meta.canonical)}">`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}">`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}">`,
    `<meta property="og:image" content="${escapeHtml(meta.image)}">`,
    meta.imageWidth && `<meta property="og:image:width" content="${meta.imageWidth}">`,
    meta.imageHeight && `<meta property="og:image:height" content="${meta.imageHeight}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}">`,
    `<meta name="twitter:image" content="${escapeHtml(meta.image)}">`,
    ...buildJsonLd(routePath).map((block) => `<script type="application/ld+json">${safeJson(block)}</script>`)
  ].filter(Boolean);

  // data-prerender : retirées par src/index.js au démarrage de l'app (React Helmet prend le relais)
  return tags.map((tag) => tag.replace(/^<(\w+)/, '<$1 data-prerender')).join('');
};

const buildNoscript = (meta) => {
  const links = Object.entries(pages)
    .map(([routePath, page]) => `<li><a href="${routePath}">${escapeHtml(page.h1)}</a></li>`)
    .join('');
  return (
    `<header><p><a href="/">SkyEvent</a></p></header>` +
    `<main><h1>${escapeHtml(meta.h1 || meta.title)}</h1>` +
    `<p>${escapeHtml(meta.description)}</p>` +
    `<nav aria-label="Pages du site"><ul>${links}</ul></nav></main>` +
    `<footer><p>Contact : <a href="mailto:${site.business.email}">${site.business.email}</a> – ` +
    `<a href="tel:${site.business.telephone}">06 79 15 96 15</a></p></footer>`
  );
};

const renderPage = (template, routePath) => {
  const meta = getPageMeta(routePath);
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  html = html.replace('</head>', `${buildHeadTags(meta, routePath)}</head>`);
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript>${buildNoscript(meta)}</noscript>`);

  return html;
};

const buildSitemap = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = Object.entries(pages)
    .map(
      ([routePath, page]) =>
        `  <url>\n    <loc>${canonicalUrl(routePath)}</loc>\n    <lastmod>${lastmod}</lastmod>\n` +
        `    <priority>${page.priority || '0.5'}</priority>\n  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

const main = () => {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`[prerender] ${TEMPLATE_PATH} introuvable : lancez d'abord le build.`);
    process.exit(1);
  }
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

  Object.keys(pages).forEach((routePath) => {
    const outFile = routePath === '/' ? TEMPLATE_PATH : path.join(BUILD_DIR, `${routePath}.html`);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, renderPage(template, routePath));
    console.log(`[prerender] ${routePath}`);
  });

  fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), buildSitemap());
  console.log(`[prerender] sitemap.xml (${Object.keys(pages).length} URL)`);
};

main();
