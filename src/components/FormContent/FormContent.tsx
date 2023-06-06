import {
  Box,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  styled,
  TextField,
} from '@mui/material';

import { Button } from '../Button/Button';
import { InfoIcon, PlusIcon, SuccessIcon, TrashIcon } from '../Icons';
import { Select } from '../Select/Select';
import { IconButton } from '../IconButton/IconButton';
import { IIconButtonProps } from '../IconButton/IconButton';

export type IModalContent = {
  variant: 'amount' | 'expense' | 'category' | 'all';
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
    // eslint-disable-next-line no-unused-vars
    name: string,
    // eslint-disable-next-line no-unused-vars
    RegisterOptions?: any
  ) => {
    onChange: () => void;
    onBlur: () => void;
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
  onClick,
  ...props
}: IModalContent & IIconButtonProps) => {
  return (
    <>
      <DialogContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box fontSize='3rem'>
          {add && <SuccessIcon fontSize='inherit' />}
          {edit && <InfoIcon fontSize='inherit' />}
          {remove && <TrashIcon fontSize='inherit' />}
        </Box>

        <div>
          <IconButton
            sx={{ transform: 'rotate(135deg)' }}
            color='inherit'
            onClick={onClick}
            {...props}
          >
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
          {variant === 'category' && (
            <Select
              {...(register ? register('category') : { name: 'category' })}
              defaultValue={categoryList[0]}
              list={categoryList}
              textAlign='initial'
              fullWidth
              hasBorder
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
            onClick={onAgree}
            variant='contained'
            color={remove ? 'error' : 'secondary'}
          >
            {onAgreeLabel}
          </Button>
          <Button onClick={onDisagree} variant='contained' color='primary'>
            {onDisagreeLabel}
          </Button>
        </Stack>
      </DialogContent>
    </>
  );
};
