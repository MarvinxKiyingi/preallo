import React from 'react';
import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const SubscriptionsIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props}>
      <path d='M18.23 2.56h-12v2h12v-2Zm-14 4h16v2h-16v-2Zm-2 4h20v12h-20v-12Zm18 10v-8h-16v8h16Z' />
    </SvgIcon>
  );
};

export default SubscriptionsIcon;
