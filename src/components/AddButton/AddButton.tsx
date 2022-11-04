import { IconButton, IconButtonProps as MuiIconButtonProps, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { theme } from '../../styles/muiTheme';

// Only include
type IconButtonProps = Pick<MuiIconButtonProps, 'size' | 'color' | 'disableRipple' | 'disabled' | 'disableFocusRipple'>;

export interface IAddButtonProps extends IconButtonProps {
  fontSize?: string;
  hasBgColor?: boolean;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    fontSize: theme.spacing(5),
  },
}));

export const AddButton = ({ fontSize, hasBgColor, ...props }: IAddButtonProps) => {
  const iconButtonInlineStyling = {
    fontSize: fontSize ? fontSize : null,
    backgroundColor: hasBgColor ? theme.palette.common.white : null,
  };
  return (
    <StyledIconButton sx={iconButtonInlineStyling} {...props}>
      <AddIcon fontSize='inherit' />
    </StyledIconButton>
  );
};
