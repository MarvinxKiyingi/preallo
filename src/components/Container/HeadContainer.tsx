import Head from 'next/head';
import React from 'react';

export const HeadContainer = () => {
  return (
    <Head>
      <title>Xcost</title>
      <meta
        name='description'
        content='A webb-app created to help in keeping your finance in check. Spreadsheet no more! Xcost gets the job done in a more elegant way.'
      />
      <meta name='theme-color' content='#F7F6F8' />
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
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
    </Head>
  );
};
