import { Box, styled } from '@mui/material';
import React from 'react';
import visaCard from './../../svg/visa.svg';
import mastercard from './../../svg/mastercard.svg';

export type ICardType = {
  type: 'visa' | 'mastercard';
};

const StyledCardTypeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 71.5,
  height: 36.82,

  [theme.breakpoints.up('md')]: {
    width: 105,
  },
  svg: {
    width: 71.5,
    height: 36.82,
    [theme.breakpoints.up('md')]: {
      width: 105,
    },
  },
  'span,img': {
    width: '100% ',
    height: '100% ',
  },
}));

export const CardType = ({ type }: ICardType) => {
  return (
    <>
      {type === 'visa' && (
        <StyledCardTypeContainer className='visaCardType-container'>
          {/* eslint-disable-next-line */}
          <img src={visaCard} alt='visaCard' />
        </StyledCardTypeContainer>
      )}
      {type === 'mastercard' && (
        <StyledCardTypeContainer className='mastercardCardType-container'>
          {/* eslint-disable-next-line */}
          <img src={mastercard} alt='mastercard' />
        </StyledCardTypeContainer>
      )}
    </>
  );
};
