import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme/muiTheme';
import { HeadContainer } from '../components/Container/HeadContainer';
import { SessionProvider } from 'next-auth/react';
import ProtectedRoutes from '../utils/ProtectedRoutes';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <HeadContainer />
        <ProtectedRoutes>
          <Component {...pageProps} />
        </ProtectedRoutes>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
