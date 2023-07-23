import '../styles/globals.css';
import { memo, useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme/muiTheme';
import { useRouter } from 'next/router';
import { HeadContainer } from '../components/Container/HeadContainer';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <HeadContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
