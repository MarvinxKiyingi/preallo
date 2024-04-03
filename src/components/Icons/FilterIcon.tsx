import React from 'react';
import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const FilterIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props}>
      <path d='M22 7.333H2a.667.667 0 1 0 0 1.334h20a.667.667 0 1 0 0-1.334Zm-3.333 4H5.333a.667.667 0 0 0 0 1.334h13.334a.667.667 0 0 0 0-1.334Zm-3.334 4H8.667a.667.667 0 0 0 0 1.334h6.666a.667.667 0 0 0 0-1.334Z' />
    </SvgIcon>
  );
};

export default FilterIcon;
