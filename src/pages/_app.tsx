import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme/muiTheme';
import { AuthContextProvider } from '../utils/context/AuthContext';
import { useRouter } from 'next/router';
import { NextShield } from 'next-shield';
import { HeadContainer } from '../components/Container/HeadContainer';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPrivate = !router.pathname.includes('/auth/');

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <NextShield
          isAuth={false}
          isLoading={false}
          router={router}
          privateRoutes={[`${isPrivate ? router.pathname : null}`]}
          publicRoutes={['/auth/signup', '/auth/signin', '/auth/resetpassword']}
          accessRoute='/'
          loginRoute='/auth/signin'
          LoadingComponent={<p>Loading...</p>}
        >
          <HeadContainer />
          <Component {...pageProps} />
        </NextShield>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
