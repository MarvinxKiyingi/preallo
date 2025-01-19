import React from 'react';
import { Stack, styled, Typography } from '@mui/material';
import { theme } from '../../styles/theme/muiTheme';
import { toCamelCase } from '../../utils/functions/toCamelCase';

export type IStatusBadge = {
  /** Indicates the default payment state */
  pending?: boolean;
  /** Indicates whether the payment is scheduled for a specific date */
  autoPay?: boolean;
  /** Indicates whether the payment has been completed */
  paid?: boolean;
};

const StyledStatusBadge = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(),

  '.pending': {
    color: theme.palette.grey[400],

    '& .indicator': {
      backgroundColor: theme.palette.grey[600],
    },
  },
  '.autoPay': {
    color: theme.palette.info.light,

    '& .indicator': {
      backgroundColor: theme.palette.info.main,
    },
  },
  '.paid': {
    color: theme.palette.success.light,

    '& .indicator': {
      backgroundColor: theme.palette.success.main,
    },
  },
}));

const Indicator = styled('div')(({ theme }) => ({
  display: 'flex',
  width: theme.spacing(),
  height: theme.spacing(),
  borderRadius: '50%',
}));

const Badge = ({ name }: { name: string }) => {
  const transformedName = toCamelCase(name);

  return (
    <Stack
      flexDirection='row'
      alignItems={'center'}
      gap={theme.spacing(1 / 2)}
      className={transformedName}
    >
      <Indicator className='indicator' />
      <Typography component={'p'} variant='caption'>
        {name}
      </Typography>
    </Stack>
  );
};

export const StatusBadge = ({
  pending = true,
  autoPay,
  paid,
}: IStatusBadge) => {
  return (
    <StyledStatusBadge className='StatusBadge-container'>
      {pending && <Badge name={'Pending'} />}
      {autoPay && <Badge name={'Auto Pay'} />}
      {paid && <Badge name={'Paid'} />}
    </StyledStatusBadge>
  );
};
