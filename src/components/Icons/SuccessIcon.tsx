import React from 'react';
import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const SuccessIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props} sx={{ color: 'transparent' }}>
      <rect x='2' y='2' width='20' height='20' rx='10' fill='#D1FADF' />

      <path
        d='M10.125 12L11.375 13.25L13.875 10.75M16.1667 12C16.1667 14.3012 14.3012 16.1666 12 16.1666C9.69882 16.1666 7.83334 14.3012 7.83334 12C7.83334 9.69879 9.69882 7.83331 12 7.83331C14.3012 7.83331 16.1667 9.69879 16.1667 12Z'
        stroke='#039855'
        stroke-width='0.833333'
        stroke-linecap='round'
        stroke-linejoin='round'
      />

      <rect x='2' y='2' width='20' height='20' rx='10' stroke='#ECFDF3' stroke-width='3.33333' />
    </SvgIcon>
  );
};

export default SuccessIcon;
