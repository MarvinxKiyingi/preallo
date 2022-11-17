import { IconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { theme } from '../../styles/muiTheme';

// Only include
type IconButtonProps = Pick<MuiIconButtonProps, 'size' | 'color' | 'disableRipple' | 'disabled' | 'disableFocusRipple'>;

export interface IAddButtonProps extends IconButtonProps {
  fontSizeMobile?: string;
  fontSizeDesktop?: string;
  hasBgColor?: boolean;
}

export const AddButton = ({ fontSizeMobile, fontSizeDesktop, hasBgColor, ...props }: IAddButtonProps) => {
  const iconButtonInlineStyling = {
    fontSize: fontSizeMobile ? fontSizeMobile : theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: fontSizeDesktop ? fontSizeDesktop : theme.spacing(6),
    },
    backgroundColor: hasBgColor ? theme.palette.common.white : null,
  };
  return (
    <IconButton sx={iconButtonInlineStyling} {...props}>
      <AddIcon fontSize='inherit' />
    </IconButton>
  );
};
