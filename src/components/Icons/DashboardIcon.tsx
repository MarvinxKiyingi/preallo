import React from 'react';
import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const DashboardIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props}>
      <circle cx='6.357' cy='6.357' r='2.357' />
      <circle cx='17.671' cy='6.357' r='2.357' />
      <circle cx='6.357' cy='17.643' r='2.357' />
      <circle cx='17.671' cy='17.643' r='2.357' />
    </SvgIcon>
  );
};

export default DashboardIcon;
