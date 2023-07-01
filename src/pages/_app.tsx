import '../styles/globals.css';
import { memo, useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme/muiTheme';
import { AuthContextProvider, useAuth } from '../utils/context/AuthContext';
import { useRouter } from 'next/router';
import { NextShield } from 'next-shield';
import { HeadContainer } from '../components/Container/HeadContainer';
import { auth } from '../utils/firebase/clientApp';
import { AppContextProvider } from '../utils/context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { currentUserLoading } = useAuth();
  const [isUser, setIsUser] = useState(true);
  const isPrivate = !router.pathname.includes('/auth/');

  //Check if there is a user, if not one will be redirected to the login page
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsUser(!!user);
    });

    return () => unsubscribe();
  }, [isUser]);

  return (
    <AuthContextProvider>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <NextShield
            isAuth={isUser}
            isLoading={currentUserLoading}
            router={router}
            privateRoutes={[`${isPrivate ? router.pathname : null}`]}
            publicRoutes={[
              '/auth/signup',
              '/auth/signin',
              '/auth/resetpassword',
            ]}
            accessRoute='/'
            loginRoute='/auth/signin'
            LoadingComponent={<p>Loading...</p>}
          >
            <HeadContainer />
            <Component {...pageProps} />
          </NextShield>
        </ThemeProvider>
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
