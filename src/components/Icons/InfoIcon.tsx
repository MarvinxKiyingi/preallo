import React from 'react';
import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const InfoIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props} sx={{ color: 'transparent' }}>
      <path
        fill='#CCEDFF'
        d='M22.286 12C22.286 6.32 17.68 1.714 12 1.714S1.714 6.32 1.714 12 6.319 22.286 12 22.286c5.68 0 10.286-4.605 10.286-10.286Z'
      />
      <path
        fill='#0284CA'
        d='M11.486 9.429h1.028v1.028h-1.028V9.43Zm0 2.057h1.028v3.085h-1.028v-3.085ZM12 6.857A5.145 5.145 0 0 0 6.857 12 5.145 5.145 0 0 0 12 17.143 5.145 5.145 0 0 0 17.143 12 5.145 5.145 0 0 0 12 6.857Zm0 9.257A4.12 4.12 0 0 1 7.886 12 4.12 4.12 0 0 1 12 7.886 4.12 4.12 0 0 1 16.114 12 4.12 4.12 0 0 1 12 16.114Z'
      />
      <path
        stroke='#E6F6FF'
        stroke-width='3.429'
        d='M22.286 12C22.286 6.32 17.68 1.714 12 1.714S1.714 6.32 1.714 12 6.319 22.286 12 22.286c5.68 0 10.286-4.605 10.286-10.286Z'
      />
    </SvgIcon>
  );
};

export default InfoIcon;
