import '../styles/globals.css';
import { memo, useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme/muiTheme';
import { useRouter } from 'next/router';
import { HeadContainer } from '../components/Container/HeadContainer';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <HeadContainer />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
