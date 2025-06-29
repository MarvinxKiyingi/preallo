import Head from 'next/head';
import React from 'react';

export const HeadContainer = () => {
  const baseUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL || 'https://preallo.com';

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Preallo - Personal Finance Management Made Simple</title>
      <meta
        name='title'
        content='Preallo - Personal Finance Management Made Simple'
      />
      <meta
        name='description'
        content="Manage your personal finances with Preallo's intuitive dashboard. Track expenses, set budgets, and achieve your financial goals with real-time insights."
      />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={baseUrl} />
      <meta
        property='og:title'
        content='Preallo - Personal Finance Management Made Simple'
      />
      <meta
        property='og:description'
        content="Manage your personal finances with Preallo's intuitive dashboard. Track expenses, set budgets, and achieve your financial goals with real-time insights."
      />
      <meta property='og:image' content={`${baseUrl}/OG-IMAGE.jpg`} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={baseUrl} />
      <meta
        property='twitter:title'
        content='Preallo - Personal Finance Management Made Simple'
      />
      <meta
        property='twitter:description'
        content="Manage your personal finances with Preallo's intuitive dashboard. Track expenses, set budgets, and achieve your financial goals with real-time insights."
      />
      <meta property='twitter:image' content={`${baseUrl}/OG-IMAGE.jpg`} />

      {/* Additional SEO Meta Tags */}
      <meta
        name='keywords'
        content='personal finance, budgeting, expense tracking, financial planning, money management, budget app, finance app, expense manager'
      />
      <meta name='author' content='Preallo' />
      <meta name='robots' content='index, follow' />
      <meta name='language' content='English' />
      <meta name='revisit-after' content='7 days' />

      {/* Theme and Icons */}
      <meta name='theme-color' content='#F7F6F8' />
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/manifest.json' />

      {/* Viewport */}
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1'
      />
    </Head>
  );
};
