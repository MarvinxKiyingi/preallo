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
import { useForm } from 'react-hook-form';

export type IModalContent = {
  variant: 'amount' | 'expense' | 'category' | 'all';
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
  categoryList: string[];
  // register?: UseFormRegister<IModalForm>;
  // errors?: FieldErrors<IModalForm>;
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
  categoryList,
  variant,
  onClick,
  ...props
}: IModalContent & IIconButtonProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submitFormContentHandler = (data: any) =>
    alert(JSON.stringify(data, null, 4));
  return (
    <form onSubmit={handleSubmit(submitFormContentHandler)}>
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
              label={amountLabel}
              {...register('amount')}
            />
          )}

          {variant === 'expense' && (
            <TextField
              fullWidth
              type='text'
              error={!!errors?.expense}
              label={expenseLabel}
              {...register('expense')}
            />
          )}
          {variant === 'category' && (
            <TextField
              select
              fullWidth
              defaultValue={''}
              label='Category'
              {...register('category')}
            >
              {categoryList.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )}

          {variant === 'all' && (
            <>
              <TextField
                fullWidth
                type='number'
                error={!!errors?.amount}
                label={amountLabel}
                {...register('amount')}
              />
              <TextField
                fullWidth
                type='text'
                error={!!errors?.expense}
                label={expenseLabel}
                {...register('expense')}
              />
              <TextField
                select
                fullWidth
                defaultValue={''}
                label='Category'
                {...register('category')}
              >
                {categoryList.map((option) => (
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
    </form>
  );
};
