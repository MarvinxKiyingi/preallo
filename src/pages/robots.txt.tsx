import { GetServerSideProps } from 'next';

function RobotsTxt() {
  // getServerSideProps will handle the text generation
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL || 'https://preallo.com';

  const robotsTxt = `User-agent: *
Allow: /

# Disallow auth pages from being indexed
Disallow: /auth/

# Sitemap location (dynamic)
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate'
  );
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

export default RobotsTxt;
