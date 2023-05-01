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
  /** list of chosen items*/
  list: string[];
  onClick?: () => void;
  textAlign?: 'initial' | 'center';
  bgColor?: string | 'initial' | 'white';
  /** if `"true"`, a box shadow will be applied to component */
  boxShadow?: boolean;
  /** if `"false"`, there won't be a border applied to component */
  hasBorder?: boolean;
}

const StyledMuiSelect = styled(MuiSelect)<{ ownerState: IFormControlProps }>(
  ({ theme, ownerState }) => ({
    borderRadius: theme.spacing(1),
    textAlign: ownerState.textAlign ? ownerState.textAlign : 'center',
    bgcolor: ownerState.bgColor ? ownerState.bgColor : 'initial',
    '.MuiOutlinedInput-notchedOutline': {
      border: ownerState.hasBorder ? null : 'unset',
      boxShadow: ownerState.boxShadow
        ? '0px 4px 4px rgba(0, 0, 0, 0.03), 0px -2.81px 7.51px rgba(0, 0, 0, 0.03);'
        : null,
    },
    backgroundColor: ownerState.bgColor ? ownerState.bgColor : 'initial',
  })
);

const StyledMuiMenuItem = styled(MuiMenuItem)<{
  ownerState: IFormControlProps;
}>(({ ownerState }) => ({
  justifyContent: ownerState.textAlign ? ownerState.textAlign : 'center',
  paddingRight: '32px',
  backgroundColor: ownerState.bgColor ? ownerState.bgColor : 'initial',
}));

export function Select({
  list,
  textAlign = 'center',
  bgColor = 'initial',
  boxShadow,
  hasBorder = true,
  ...props
}: IFormControlProps) {
  const ownerState = {
    list,
    textAlign,
    bgColor,
    boxShadow,
    hasBorder,
  };

  return (
    <StyledMuiSelect
      className='select-container'
      ownerState={ownerState}
      {...props}
    >
      {list &&
        list.map((value, idx) => (
          <StyledMuiMenuItem key={idx} value={value} ownerState={ownerState}>
            {value}
          </StyledMuiMenuItem>
        ))}
    </StyledMuiSelect>
  );
}
