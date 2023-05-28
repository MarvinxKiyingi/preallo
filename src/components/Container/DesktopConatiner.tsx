import { styled } from '@mui/material';
import React from 'react';
import { IChildren } from '../../model/IChildren';

interface IAppContainer extends IChildren {
  /** Add css string to adjust the gird template column*/
  desktopColumns?: string;
}

const StyledDesktopContainer = styled('div')<{
  ownerState: IAppContainer;
}>(({ theme, ownerState }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: ownerState.desktopColumns
      ? ownerState.desktopColumns
      : '0.4fr 1fr',
    height: '100%',
  },
}));
const DesktopContainer = ({
  children,
  desktopColumns = '0.4fr 1fr',
}: IAppContainer) => {
  const ownerState = {
    children,
    desktopColumns,
  };
  return (
    <StyledDesktopContainer className='hello' ownerState={ownerState}>
      {children}
    </StyledDesktopContainer>
  );
};

export default DesktopContainer;
