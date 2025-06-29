import { GetServerSideProps } from 'next';
import {
  generateSitemapData,
  generateSitemapXML,
} from '../utils/functions/generateSitemap';

const EXTERNAL_DATA_URL =
  process.env.NEXT_PUBLIC_NEXTAUTH_URL || 'https://preallo.com';

function SiteMap() {
  // getServerSideProps will handle the XML generation
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    // Generate sitemap data
    const pages = generateSitemapData();

    // Generate the XML sitemap
    const sitemap = generateSitemapXML(pages, EXTERNAL_DATA_URL);

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate'
    );
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error('Error generating sitemap:', error);

    // Return a basic sitemap if there's an error
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${EXTERNAL_DATA_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate'
    );
    res.write(fallbackSitemap);
    res.end();

    return {
      props: {},
    };
  }
};

export default SiteMap;
