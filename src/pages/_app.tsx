import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme/muiTheme';
import { AuthContexProvider } from '../utils/context/AuthContext';
import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoutes';
import { useRouter } from 'next/router';

const noAuthRequired = ['/auth/signin', '/auth/signup', '/auth/resetPassword'];
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthContexProvider>
      <ThemeProvider theme={theme}>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoutes>
            <Component {...pageProps} />
          </ProtectedRoutes>
        )}
      </ThemeProvider>
    </AuthContexProvider>
  );
}

export default MyApp;
