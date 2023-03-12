import React from 'react';
import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const MonthIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props}>
      <path d='M19.012 4.722h-2v-1a1 1 0 1 0-2 0v1h-6v-1a1 1 0 0 0-2 0v1h-2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-7h16v7Zm0-9h-16v-3a1 1 0 0 1 1-1h2v1a1 1 0 1 0 2 0v-1h6v1a1 1 0 0 0 2 0v-1h2a1 1 0 0 1 1 1v3Z' />
    </SvgIcon>
  );
};

export default MonthIcon;
