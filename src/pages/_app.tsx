import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme/muiTheme';
import { AuthContexProvider } from '../utils/context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContexProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthContexProvider>
  );
}

export default MyApp;
