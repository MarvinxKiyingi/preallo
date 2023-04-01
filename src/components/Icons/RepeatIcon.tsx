import React from 'react';
import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const RepeatIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props}>
      <path d='M17.887 10.928h5.898a.374.374 0 0 1 .288.614l-2.95 3.54a.374.374 0 0 1-.576 0l-2.948-3.54a.375.375 0 0 1 .288-.614Zm-16.5 3h5.898a.376.376 0 0 0 .288-.616l-2.95-3.54a.375.375 0 0 0-.575 0l-2.95 3.54a.375.375 0 0 0 .289.616Z' />
      <path
        fillRule='evenodd'
        d='M12.585 4.927A7.483 7.483 0 0 0 6.8 7.654.75.75 0 1 1 5.644 6.7a9.003 9.003 0 0 1 15.817 4.228h-1.525a7.503 7.503 0 0 0-7.35-6Zm-7.35 9a7.503 7.503 0 0 0 13.136 3.274.751.751 0 1 1 1.157.953A9.002 9.002 0 0 1 3.71 13.928h1.526Z'
        clipRule='evenodd'
      />
    </SvgIcon>
  );
};

export default RepeatIcon;
