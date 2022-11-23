import { IconButton, IconButtonProps as MuiIconButtonProps, styled } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';

// Only include
type IconButtonProps = Pick<MuiIconButtonProps, 'size' | 'color' | 'disableRipple' | 'disabled'>;

export interface IAddButtonProps extends IconButtonProps {
  fontSizeMobile?: string;
  fontSizeDesktop?: string;
  hasBgColor?: boolean;
  onClick?: () => void;
}

export const RenewButton = ({ fontSizeMobile, fontSizeDesktop, hasBgColor, ...props }: IAddButtonProps) => {
  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: hasBgColor ? theme.palette.common.white : 'transparent',
    fontSize: fontSizeMobile ? fontSizeMobile : theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: fontSizeDesktop ? fontSizeDesktop : theme.spacing(6),
    },
  }));

  return (
    <StyledIconButton {...props}>
      <AutorenewIcon fontSize='inherit' />
    </StyledIconButton>
  );
};
