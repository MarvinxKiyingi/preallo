import { Box, styled } from '@mui/material';
import React from 'react';
import visaCard from './../../svg/visa.svg';
import mastercard from './../../svg/mastercard.svg';

export type ICardType = {
  cardType: 'visa' | 'mastercard';
};

const StyledCardTypeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 105,
  height: theme.spacing(5),

  'span,img': {
    width: '100% ',
    height: '100% ',
  },
}));

export const CardType = ({ cardType }: ICardType) => {
  return (
    <>
      {cardType === 'visa' && (
        <StyledCardTypeContainer className='visaCardType-container cardType'>
          {/* eslint-disable-next-line */}
          <img src={visaCard} alt='visaCard' />
        </StyledCardTypeContainer>
      )}
      {cardType === 'mastercard' && (
        <StyledCardTypeContainer className='mastercardCardType-container cardType'>
          {/* eslint-disable-next-line */}
          <img src={mastercard} alt='mastercard' />
        </StyledCardTypeContainer>
      )}
    </>
  );
};
