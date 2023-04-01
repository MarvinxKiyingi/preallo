
import { Chivo, Hind_Vadodara } from 'next/font/google';
const chivo = Chivo({ subsets: ['latin'] });
const hindVadodara = Hind_Vadodara({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const headingFont = chivo.style.fontFamily;
const bodyFont = hindVadodara.style.fontFamily;

export const createTypography = {
  fontFamily: bodyFont,
  h1: {
    fontFamily: headingFont,
    fontWeight: 700,
    fontSize: '5rem',
    lineHeight: '120%',
  },
  h2: {
    fontFamily: headingFont,
    fontWeight: 700,
    fontSize: '3.813rem',
    lineHeight: '120%',
  },
  h3: {
    fontFamily: headingFont,
    fontWeight: 700,
    fontSize: '2.938rem',
    lineHeight: '120%',
  },
  h4: {
    fontFamily: headingFont,
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: '120%',
  },
  h5: {
    fontFamily: headingFont,
    fontWeight: 700,
    fontSize: '1.688rem',
    lineHeight: '120%',
  },
  h6: {
    fontFamily: headingFont,
    fontWeight: 700,
    fontSize: '1.313rem',
    lineHeight: '120%',
  },
  subtitle1: {
    fontFamily: headingFont,
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '120%',
  },
  subtitle2: {
    fontFamily: headingFont,
    fontSize: '0.75rem',
    fontWeight: 600,
    lineHeight: '120%',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  button: {
    fontSize: '0.875rem',
  },
  caption: {
    fontSize: '0.75rem',
  },
  overline: {
    fontSize: '0.625',
  },
};
