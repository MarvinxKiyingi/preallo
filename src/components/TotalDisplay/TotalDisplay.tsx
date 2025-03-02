import { formatNumberWithDecimal } from '../../utils/functions/formatNumberWithDecimal';
import { Box, BoxProps, styled, Typography } from '@mui/material';
import CurrencyFormat from 'react-currency-format';

export type ITotalDisplay = BoxProps & {
  /** Total as string  */
  total: number;
};

const StyledTotalDisplay = styled(Box)<{ ownerState: ITotalDisplay }>(
  () => ({})
);

const StyledTotal = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  ...theme.typography.h4,

  [theme.breakpoints.up('sm')]: {
    ...theme.typography.h2,
  },
}));

export const TotalDisplay = ({ total, ...props }: ITotalDisplay) => {
  const ownerState = {
    total,
  };

  return (
    <StyledTotalDisplay
      className='totalDisplay'
      ownerState={ownerState}
      {...props}
    >
      <StyledTotal className='total'>
        <CurrencyFormat
          value={total}
          displayType={'text'}
          thousandSeparator={' '}
          decimalSeparator={','}
          thousandSpacing={'3'}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      </StyledTotal>
    </StyledTotalDisplay>
  );
};
