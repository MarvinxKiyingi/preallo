import {
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  FormControlProps as MuiFormControlProps,
  styled,
} from '@mui/material';
import { SelectProps } from '@mui/material/Select';

type FormControlProps = Pick<MuiFormControlProps, 'fullWidth' | 'size'>;

export interface IFormControlProps extends FormControlProps, SelectProps {
  fullWidth?: boolean;
  list: string[];
  onClick?: () => void;
  variant?: 'standard' | 'outlined' | 'filled';
  textAlign?: 'initial' | 'center';
  bgColor?: string | 'initial' | 'white';
  boxShadow?: boolean;
  hasBorder?: boolean;
}

const StyledMuiSelect = styled(MuiSelect)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  textAlign: 'center',
}));

const StyledMuiMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  justifyContent: 'center',
  paddingRight: '32px',
}));

export function Select({ list, textAlign, bgColor, boxShadow, hasBorder, ...props }: IFormControlProps) {
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
    <>
      <StyledMuiSelect className='select-container' {...props} sx={selectInlineStyling}>
        {list &&
          list.map((value, idx) => (
            <StyledMuiMenuItem key={idx} value={value} sx={menuInlineStyling}>
              {value}
            </StyledMuiMenuItem>
          ))}
      </StyledMuiSelect>
    </>
  );
}
