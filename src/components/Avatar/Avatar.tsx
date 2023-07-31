import React from 'react';
import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
  styled,
} from '@mui/material';

// Only include
type AvatarProps = Pick<
  MuiAvatarProps,
  'alt' | 'children' | 'src' | 'variant' | 'sx'
>;
export interface IAvatar extends AvatarProps {
  /** adjust avatar size for only when in mobile view  */
  avatarMobileSize?: string;
  /** adjust avatar size for only when in desktop view  */
  avatarDeskSize?: string;
}

const StyledAvatar = styled(MuiAvatar)<{ ownerState: IAvatar }>(
  ({ theme, ownerState }) => ({
    aspectRatio: '1/1',
    width: ownerState.avatarMobileSize
      ? ownerState.avatarMobileSize
      : theme.spacing(3),
    height: 'auto',

    [theme.breakpoints.up('md')]: {
      width: ownerState.avatarDeskSize
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
