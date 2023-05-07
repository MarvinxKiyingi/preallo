import React from 'react';
import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
  styled,
} from '@mui/material';

// Only include
type AvatarProps = Pick<MuiAvatarProps, 'alt' | 'children' | 'src' | 'variant'>;
export interface IAvatar extends AvatarProps {
  /** adjust avatar size for only when in mobile view  */
  avatarMobileSize?: string;
  /** adjust avatar size for only when in desktop view  */
  avatarDeskSize?: string;
}

const StyledAvatar = styled(MuiAvatar)<{ ownerState: IAvatar }>(
  ({ theme, ownerState }) => ({
    width: ownerState.avatarMobileSize
      ? ownerState.avatarMobileSize
      : theme.spacing(3),
    height: ownerState.avatarMobileSize
      ? ownerState.avatarMobileSize
      : theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      width: ownerState.avatarDeskSize
        ? ownerState.avatarDeskSize
        : theme.spacing(6),
      height: ownerState.avatarDeskSize
        ? ownerState.avatarDeskSize
        : theme.spacing(6),
    },
  })
);

export const Avatar = ({
  avatarMobileSize = '24px',
  avatarDeskSize = '48px',
  ...props
}: IAvatar) => {
  console.log('avatarDeskSize', avatarDeskSize);
  const ownerState = {
    avatarMobileSize,
    avatarDeskSize,
  };
  return (
    <StyledAvatar
      className='avatar-container'
      ownerState={ownerState}
      {...props}
    />
  );
};
