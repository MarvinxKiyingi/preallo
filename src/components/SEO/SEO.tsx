import Head from 'next/head';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noIndex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Preallo - Personal Finance Management Made Simple',
  description = "Manage your personal finances with Preallo's intuitive dashboard. Track expenses, set budgets, and achieve your financial goals with real-time insights.",
  canonical,
  ogImage = `${
    process.env.NEXT_PUBLIC_NEXTAUTH_URL || 'https://preallo.com'
  }/OG-IMAGE.jpg`,
  ogType = 'website',
  keywords = 'personal finance, budgeting, expense tracking, financial planning, money management, budget app, finance app, expense manager',
  noIndex = false,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL || 'https://preallo.com';
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullTitle = title.length > 65 ? title.substring(0, 62) + '...' : title;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name='title' content={fullTitle} />
      <meta name='description' content={description} />

      {/* Canonical URL */}
      <link rel='canonical' href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={ogType} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={canonicalUrl} />
      <meta property='twitter:title' content={fullTitle} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name='keywords' content={keywords} />
      <meta
        name='robots'
        content={noIndex ? 'noindex, nofollow' : 'index, follow'}
      />
    </Head>
  );
};
