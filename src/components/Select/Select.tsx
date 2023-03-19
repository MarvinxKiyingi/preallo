import {
  FormControl as MuiFormControl,
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  FormControlProps as MuiFormControlProps,
  styled,
  FormControlPropsSizeOverrides,
} from '@mui/material';
import { SelectProps } from '@mui/material/Select';
import { OverridableStringUnion } from '@mui/types';

type FormControlProps = Pick<MuiFormControlProps, 'fullWidth' | 'size'>;

export interface IFormControlProps extends FormControlProps, SelectProps {
  fullWidth?: boolean;
  list: string[];
  onClick?: () => void;
  variant?: 'standard' | 'outlined' | 'filled';
  size?: OverridableStringUnion<'small' | 'medium', FormControlPropsSizeOverrides>;
  textAlign?: 'initial' | 'center';
  bgColor?: string | 'initial' | 'white';
  boxShadow?: boolean;
  hasBorder?: boolean;
}

const StyledMuiSelect = styled(MuiSelect)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  textAlign: 'center',
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.2rem',
  },
}));

const StyledMuiMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  justifyContent: 'center',
  paddingRight: '32px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.2rem',
  },
}));

export function Select({
  fullWidth,
  size,
  list,
  textAlign,
  bgColor,
  boxShadow,
  hasBorder,
  ...props
}: IFormControlProps) {
  const boxShadowStyles = '0px 4px 4px rgba(0, 0, 0, 0.03), 0px -2.81px 7.51px rgba(0, 0, 0, 0.03);';

  const selectInlineStyling = {
    textAlign: textAlign,
    bgcolor: bgColor,
    '.MuiOutlinedInput-notchedOutline': {
      border: hasBorder ? null : 'unset',
      boxShadow: boxShadow ? boxShadowStyles : null,
    },
  };

  const menuInlineStyling = {
    justifyContent: textAlign,
    bgcolor: bgColor,
  };

  return (
    <MuiFormControl fullWidth={fullWidth} size={size}>
      <StyledMuiSelect className='select-container' {...props} sx={selectInlineStyling}>
        {list &&
          list.map((value, idx) => (
            <StyledMuiMenuItem key={idx} value={value} sx={menuInlineStyling}>
              {value}
            </StyledMuiMenuItem>
          ))}
      </StyledMuiSelect>
    </MuiFormControl>
  );
}
