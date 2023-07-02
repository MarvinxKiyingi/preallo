import {
  Box,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Stack,
  styled,
} from '@mui/material';

import TextField from '@mui/material/TextField';
import { Button } from '../Button/Button';
import { InfoIcon, PlusIcon, SuccessIcon, TrashIcon } from '../Icons';
import { IconButton } from '../IconButton/IconButton';
import { IIconButtonProps } from '../IconButton/IconButton';
import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { IModalForm } from '../../model/IModalForm';

export type IModalContent = {
  variant: 'amount' | 'expense' | 'select' | 'all' | 'addMonth';
  add?: boolean;
  edit?: boolean;
  remove?: boolean;
  title: string;
  description?: string;
  onAgreeLabel: string;
  onDisagree?: () => void;
  onDisagreeLabel: string;
  amountLabel?: string;
  expenseLabel?: string;
  selectLabel?: string;
  selectList: string[];
  register?: UseFormRegister<IModalForm>;
  errors?: FieldErrors<IModalForm>;
};

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: 600,
}));

export const FormContent = ({
  title,
  description,
  onAgreeLabel,
  onDisagree,
  onDisagreeLabel,
  add,
  edit,
  remove,
  amountLabel,
  expenseLabel,
  selectLabel,
  selectList,
  variant,
  onClick,
  register,
  errors,
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
              fullWidth
              type='number'
              error={!!errors?.amount}
              helperText={errors?.amount ? errors.amount?.message : ''}
              label={amountLabel}
              {...(register ? register('amount') : { name: 'amount' })}
            />
          )}

          {variant === 'expense' && (
            <TextField
              fullWidth
              type='text'
              error={!!errors?.expense}
              helperText={errors?.expense ? errors.expense?.message : ''}
              label={expenseLabel}
              {...(register ? register('expense') : { name: 'expense' })}
            />
          )}
          {variant === 'select' && (
            <TextField
              select
              fullWidth
              error={!!errors?.selected}
              helperText={errors?.selected ? errors.selected?.message : ''}
              label={selectLabel}
              {...(register ? register('selected') : { name: 'selected' })}
            >
              {selectList.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )}

          {variant == 'addMonth' && (
            <>
              <TextField
                select
                fullWidth
                error={!!errors?.selected}
                helperText={errors?.selected ? errors.selected?.message : ''}
                label={selectLabel}
                {...(register ? register('selected') : { name: 'selected' })}
              >
                {selectList.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                type='number'
                error={!!errors?.amount}
                helperText={errors?.amount ? errors.amount?.message : ''}
                label={amountLabel}
                {...(register ? register('amount') : { name: 'amount' })}
              />
            </>
          )}

          {variant === 'all' && (
            <>
              <TextField
                fullWidth
                type='number'
                error={!!errors?.amount}
                helperText={errors?.amount ? errors.amount?.message : ''}
                label={amountLabel}
                {...(register ? register('amount') : { name: 'amount' })}
              />
              <TextField
                fullWidth
                type='text'
                error={!!errors?.expense}
                helperText={errors?.expense ? errors.expense?.message : ''}
                label={expenseLabel}
                {...(register ? register('expense') : { name: 'expense' })}
              />
              <TextField
                select
                fullWidth
                error={!!errors?.selected}
                helperText={errors?.selected ? errors.selected?.message : ''}
                label={selectLabel}
                {...(register ? register('selected') : { name: 'selected' })}
              >
                {selectList.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </>
          )}
        </Stack>
      </DialogContent>

      <DialogContent>
        <Stack spacing={2}>
          <Button
            type='submit'
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
