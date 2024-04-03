import { styled, BoxProps } from '@mui/material';
import { IChildren } from '../../model/IChildren';

const Content = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(8,1fr)',

  [theme.breakpoints.up('lg')]: {
    gridTemplateRows: 'repeat(10,1fr)',
    gap: theme.spacing(3),
  },
}));

const RightGridContentContainer = ({ children, sx }: IChildren & BoxProps) => {
  return <Content sx={sx}>{children}</Content>;
};

export default RightGridContentContainer;
