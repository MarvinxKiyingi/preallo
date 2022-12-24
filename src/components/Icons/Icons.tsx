import { styled } from '@mui/material';
import React from 'react';
import * as SvgIcons from '.';
import { ISvgProps } from '../SvgIcon/SvgIcon';

const IconsContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  margin: '1rem',
});

export const Icons = (props: ISvgProps) => {
  return (
    <IconsContainer>
      {Object.entries(SvgIcons).map(([name, SvgIcon]) => (
        <SvgIcon key={name} {...props} />
      ))}
    </IconsContainer>
  );
};
