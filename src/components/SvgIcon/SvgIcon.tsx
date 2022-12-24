import React from 'react';
import { SvgIcon as MuiSvgIcon, SvgIconProps } from '@mui/material';

export type IMuiSvgIconProps = Pick<SvgIconProps, 'children' | 'color' | 'fontSize' | 'sx' | 'viewBox'>;

export interface ISvgProps extends IMuiSvgIconProps {
  logoIconColor?: string;
  className?: string;
}

export const SvgIcon = ({ children, ...props }: IMuiSvgIconProps) => {
  return <MuiSvgIcon {...props}>{children}</MuiSvgIcon>;
};
