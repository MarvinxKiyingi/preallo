import { styled, TextField, TextFieldProps } from '@mui/material';

const StyledMuiTextField = styled(TextField)(({ theme }) => ({
  '.MuiInputBase-root': {
    borderRadius: theme.spacing(1),
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '1.2rem',
  },
}));

export function Input({ children, ...props }: TextFieldProps) {
  return <StyledMuiTextField {...props}>{children}</StyledMuiTextField>;
}
