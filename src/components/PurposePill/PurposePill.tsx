import { IPurpose } from '@/model/IPurpose';
import { styled } from '@mui/material';
import React from 'react';

export type IBudgetDisplay = {
  className: string;
  text: IPurpose;
};

const Pill = styled('span')(({ theme }) => ({
  display: 'flex',
  width: 'fit-content',
  padding: '4px 12px',
  borderRadius: theme.spacing(2),
  ...theme.typography.overline,
  fontSize: theme.spacing(),

  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.overline.fontSize,
  },

  '&.need': {
    backgroundColor: theme.palette.warning.light,
  },
  '&.want': {
    backgroundColor: theme.palette.error.light,
  },
  '&.save': {
    backgroundColor: theme.palette.success.light,
  },
}));

export const PurposePill = ({ text, className }: IBudgetDisplay) => {
  return <Pill className={className}>{text}</Pill>;
};
