import { useMediaQuery } from '@mui/material';
import React from 'react';
import { theme } from '../../styles/theme/muiTheme';
import { IChildren } from '../../model/IChildren';

/** Don't render component if not on mobile.
 * Added to reduce the flashing of other components while in desktop view
 */

const MobileWrapper = ({ children }: IChildren) => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );
  if (isDesktop) return null;
  return <>{children}</>;
};

export default MobileWrapper;
