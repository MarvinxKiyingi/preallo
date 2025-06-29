export interface SitemapPage {
  path: string;
  lastmod?: string;
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
}

export const generateSitemapData = (): SitemapPage[] => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  const staticPages: SitemapPage[] = [
    {
      path: '/',
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      path: '/profile',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      path: '/settings/goal',
      changefreq: 'weekly',
      priority: 0.7,
    },
    {
      path: '/settings/recurring',
      changefreq: 'weekly',
      priority: 0.7,
    },
    {
      path: '/settings/subscriptions',
      changefreq: 'weekly',
      priority: 0.7,
    },
  ];

  const dynamicPages: SitemapPage[] = [];

  // Generate month pages for current and next year
  [currentYear, nextYear].forEach((year) => {
    months.forEach((month) => {
      dynamicPages.push({
        path: `/month/${month}-${year}`,
        changefreq: 'daily',
        priority: 0.9,
      });
    });
  });

  return [...staticPages, ...dynamicPages];
};

export const generateSitemapXML = (
  pages: SitemapPage[],
  baseUrl: string
): string => {
  const currentDate = new Date().toISOString();

  const xmlPages = pages
    .map((page) => {
      const lastmod = page.lastmod || currentDate;
      const changefreq = page.changefreq || 'weekly';
      const priority = page.priority || 0.5;

      return `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlPages}
</urlset>`;
};
