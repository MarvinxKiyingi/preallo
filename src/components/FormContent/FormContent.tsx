import {
  Box,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  styled,
  IconButton,
  TextField,
} from '@mui/material';

import { Button } from '../Button/Button';
import { InfoIcon, PlusIcon, SuccessIcon, TrashIcon } from '../Icons';
import { Select } from '../Select/Select';

export type IModalContent = {
  variant: 'amount' | 'expense' | 'all';
  add?: boolean;
  edit?: boolean;
  remove?: boolean;
  title: string;
  description?: string;
  onAgree?: () => void;
  onAgreeLabel: string;
  onDisagree?: () => void;
  onDisagreeLabel: string;
  amountLabel?: string;
  expenseLabel?: string;
  categoryList: string[];
  register?: (
    name: string,
    RegisterOptions?: any
  ) => {
    onChange: (e: any) => void;
    onBlur: (e: any) => void;
    name: string;
    ref: any;
  };
};

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: 600,
}));

export const FormContent = ({
  title,
  description,
  onAgree,
  onAgreeLabel,
  onDisagree,
  onDisagreeLabel,
  add,
  edit,
  remove,
  amountLabel,
  expenseLabel,
  categoryList,
  register,
  variant,
}: IModalContent) => {
  return (
    <>
      <DialogContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box fontSize='3rem'>
          {add && <SuccessIcon fontSize='inherit' />}
          {edit && <InfoIcon fontSize='inherit' />}
          {remove && <TrashIcon fontSize='inherit' />}
        </Box>

        <div>
          <IconButton sx={{ transform: 'rotate(135deg)' }}>
            <PlusIcon />
          </IconButton>
        </div>
      </DialogContent>

      <StyledDialogTitle id='alert-dialog-title'>{title}</StyledDialogTitle>

      <DialogContent>
        <DialogContentText
          sx={{ fontSize: '1rem' }}
          id='alert-dialog-description'
        >
          {description}
        </DialogContentText>
      </DialogContent>

      <DialogContent>
        <Stack spacing={2}>
          {variant == 'amount' && (
            <TextField
              {...(register ? register('amount') : { name: 'amount' })}
              label={amountLabel}
              type='number'
              fullWidth
            />
          )}

          {variant === 'expense' && (
            <TextField
              {...(register ? register('expense') : { name: 'expense' })}
              label={expenseLabel}
              type='text'
              fullWidth
            />
          )}

          {variant === 'all' && (
            <>
              <TextField
                {...(register ? register('amount') : { name: 'amount' })}
                label={amountLabel}
                type='number'
                fullWidth
              />
              <TextField
                {...(register ? register('expense') : { name: 'expense' })}
                label={expenseLabel}
                type='text'
                fullWidth
              />
              <Select
                {...(register ? register('category') : { name: 'category' })}
                defaultValue={categoryList[0]}
                list={categoryList}
                textAlign='initial'
                fullWidth
                hasBorder
              />
            </>
          )}
        </Stack>
      </DialogContent>

      <DialogContent>
        <Stack spacing={2}>
          <Button
            type='submit'
            component='button'
            onClick={onAgree}
            variant='contained'
            color={remove ? 'error' : 'secondary'}
          >
            {onAgreeLabel}
          </Button>
          <Button
            component='button'
            onClick={onDisagree}
            variant='contained'
            color='primary'
          >
            {onDisagreeLabel}
          </Button>
        </Stack>
      </DialogContent>
    </>
  );
};
