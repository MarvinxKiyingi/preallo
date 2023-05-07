import { styled } from '@mui/material';
import { IChildren } from '../../model/IChildren';

interface IContainer extends IChildren {
  /** Add css string to adjust the gird template column*/
  desktopColumns?: string;
}

const StyledContainer = styled('main')<{
  ownerState: IContainer;
}>(({ theme, ownerState }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3, 3, 0, 3),

  [theme.breakpoints.up('sm')]: {
    padding: 'unset',
  },

  [theme.breakpoints.up('md')]: {
    height: '100vh',
    display: 'grid',
    padding: 'unset',
    gridTemplateColumns: ownerState.desktopColumns
      ? ownerState.desktopColumns
      : '0.4fr 1fr',
  },
}));

const Container = ({ children, desktopColumns = '0.4fr 1fr' }: IContainer) => {
  const ownerState = {
    children,
    desktopColumns,
  };
  return <StyledContainer ownerState={ownerState}>{children}</StyledContainer>;
};

export default Container;
