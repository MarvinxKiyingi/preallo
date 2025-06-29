import React from 'react';
import { Box, BoxProps, Stack, styled, Typography } from '@mui/material';
import { theme } from '../../styles/theme/muiTheme';
import { IStatus } from '@/model/IStatus';

export type IStatusBadge = BoxProps & {
  /** Indicates payment status */
  status?: IStatus;
};

const StyledStatusBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'start',
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

const statusMap: Record<IStatus, { label: string; className: string }> = {
  Pending: { label: 'Pending', className: 'pending' },
  AutoPay: { label: 'Auto Pay', className: 'autoPay' },
  Paid: { label: 'Paid', className: 'paid' },
};

const Badge = ({ name, className }: { name: string; className: string }) => (
  <Stack
    flexDirection='row'
    alignItems='center'
    gap={theme.spacing(1 / 2)}
    className={className}
  >
    <Indicator className='indicator' />
    <Typography component='p' variant='caption'>
      {name}
    </Typography>
  </Stack>
);

export const StatusBadge = ({ status, ...props }: IStatusBadge) => {
  if (!status || !statusMap[status]) return null;
  const { label, className } = statusMap[status];

  return (
    <StyledStatusBadge className='StatusBadge-container' {...props}>
      <Badge name={label} className={className} />
    </StyledStatusBadge>
  );
};
