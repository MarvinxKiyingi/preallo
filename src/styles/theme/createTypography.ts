const largeTextSize = '1.2rem';
const normalTextSize = '1rem';
const smallTextSize = '0.833rem';

const headingFont = "'Chivo', sans-serif";
const bodyFont = "'Hind Vadodara', sans-serif";

export const createTypography = {
  h1: {
    fontWeight: 900,
    fontSize: '4.209rem',
    fontFamily: headingFont,
  },
  h2: {
    fontWeight: 900,
    fontSize: '3.158rem',
    fontFamily: headingFont,
  },
  h3: {
    fontSize: '2.369rem',
    fontWeight: 900,
    fontFamily: headingFont,
  },
  h4: {
    fontSize: '1.777rem',
    fontWeight: 900,
    fontFamily: headingFont,
  },
  h5: {
    fontSize: '1.333rem',
    fontWeight: 900,
    fontFamily: headingFont,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 900,
    fontFamily: headingFont,
  },
  allVariants: {
    letterSpacing: '0.060rem',
  },
  subtitle1: {
    fontWeight: 700,
    fontSize: '1.2rem',
    fontFamily: bodyFont,
  },
  textLargeBold: {
    fontWeight: 700,
    fontSize: largeTextSize,
    fontFamily: bodyFont,
  },
  textLargeSemiBold: {
    fontWeight: 600,
    fontSize: largeTextSize,
    fontFamily: bodyFont,
  },
  textLarge: {
    fontWeight: 400,
    fontSize: largeTextSize,
    fontFamily: bodyFont,
  },
  textNormalBold: {
    fontWeight: 700,
    fontSize: normalTextSize,
    fontFamily: bodyFont,
  },
  textNormalSemiBold: {
    fontWeight: 600,
    fontSize: normalTextSize,
    fontFamily: bodyFont,
  },
  textNormal: {
    fontWeight: 400,
    fontSize: normalTextSize,
    fontFamily: bodyFont,
  },
  textSmallBold: {
    fontWeight: 700,
    fontSize: smallTextSize,
    fontFamily: bodyFont,
  },
  textSmallSemiBold: {
    fontWeight: 600,
    fontSize: smallTextSize,
    fontFamily: bodyFont,
  },
  textSmall: {
    fontWeight: 400,
    fontSize: smallTextSize,
    fontFamily: bodyFont,
  },
};
