import { styled } from '@mui/material';
import { IChildren } from '../../model/IChildren';
import Background from './Background';

interface IAppContainer extends IChildren {
  /** Add css string to adjust the gird template column*/
  desktopColumns?: string;
}

const Container = styled('main')<{
  ownerState: IAppContainer;
}>(({ theme, ownerState }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3, 3, 0, 3),
  maxWidth: theme.breakpoints.values.xl,
  width: '100%',
  flex: 1,

  [theme.breakpoints.up('sm')]: {
    padding: 'unset',
  },

  [theme.breakpoints.up('md')]: {
    display: 'grid',
    padding: 'unset',
    gridTemplateColumns: ownerState.desktopColumns
      ? ownerState.desktopColumns
      : '0.4fr 1fr',
    margin: theme.spacing(6),
  },

  [theme.breakpoints.up('xl')]: {
    margin: theme.spacing(6, 'auto'),
  },
}));

const AppContainer = ({
  children,
  desktopColumns = '0.4fr 1fr',
}: IAppContainer) => {
  const ownerState = {
    children,
    desktopColumns,
  };
  return (
    <Background>
      <Container ownerState={ownerState}>{children}</Container>
    </Background>
  );
};

export default AppContainer;
