import { styled, BoxProps } from '@mui/material';
import React from 'react';

type ICard = BoxProps;
const CardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.accent,
  borderRadius: theme.spacing(2),
  flex: 1,
  boxShadow:
    '0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)',
}));

const CardContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(3),
  gap: theme.spacing(2),
  flex: 1,

  '.goal-wrapper': {
    gap: theme.spacing(2),
  },
  '.goal-content': {
    gap: theme.spacing(),
  },

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6, 8),

    '.goal-title': {
      ...theme.typography.h6,
    },
    '.goal-wrapper': {
      gap: theme.spacing(4),
    },
    '.goal-content': {
      gap: theme.spacing(3),
    },
  },
}));

export const GoalCard = ({ sx, children }: ICard) => {
  return (
    <CardContainer sx={sx}>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};
