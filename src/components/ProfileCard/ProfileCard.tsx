import { styled, BoxProps } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Button } from '../Button/Button';

type ICard = BoxProps & {
  title: string;
};
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
  maxWidth: '90%',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '80%',
    padding: theme.spacing(3, 0),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,

  [theme.breakpoints.up('sm')]: {
    ...theme.typography.h6,
    fontWeight: 600,
  },
})) as typeof Typography;

const Description = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    ...theme.typography.body1,
  },
})) as typeof Typography;

export const ProfileCard = ({ title, sx }: ICard) => {
  return (
    <CardContainer sx={sx}>
      <CardContent>
        <Title variant='body1' component='h1'>
          {title}
        </Title>

        <Description variant='caption'>
          Once added here, the total amount will be subtracted from your
          remaining budget.
        </Description>

        <Button sx={{ maxHeight: 48 }} variant='contained'>
          Edit
        </Button>
      </CardContent>
    </CardContainer>
  );
};
