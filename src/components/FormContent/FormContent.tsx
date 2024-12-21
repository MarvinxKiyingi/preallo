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
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IModalForm } from '../../model/IModalForm';
import { theme } from '../../styles/theme/muiTheme';
import { IGoal } from '../../model/IGoal';

export type IModalContent = {
  variant: 'amount' | 'expense' | 'select' | 'all' | 'addMonth' | 'addExpense';
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
  selectList?: string[];
  selectLabelTwo?: string;
  selectListTwo?: string[];
  goal?: IGoal;
  register?: UseFormRegister<IModalForm>;
  errors?: FieldErrors<IModalForm>;
};

const ContentWrapper = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(3),
  padding: theme.spacing(2),

  '& .MuiDialogContent-root': {
    padding: '0px',
  },

  '& > :nth-child(2)': {
    padding: theme.spacing(0, 1),
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: 600,
  padding: '0px',
}));

const Goal = styled(Stack)(({ theme }) => ({
  '.label-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(),

    ' .need, .want, .save': {
      display: 'flex',
      width: theme.spacing(),
      height: theme.spacing(),
      borderRadius: '50%',
    },
    '.need': {
      backgroundColor: theme.palette.warning.light,
    },
    '.want': {
      backgroundColor: theme.palette.error.light,
    },
    '.save': {
      backgroundColor: theme.palette.success.light,
    },
  },
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
  selectLabelTwo,
  selectList,
  selectListTwo,
  goal,
  variant,
  onClick,
  register,
  errors,
  ...props
}: IModalContent & IIconButtonProps) => {
  const percentageList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const renderLabelContainer = (className: string, name: string) => (
    <div className='label-container'>
      <span className={className}></span>
      <span>{name}</span>
    </div>
  );
  return (
    <ContentWrapper>
      <DialogContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack fontSize='3rem'>
          {add && <SuccessIcon fontSize='inherit' />}
          {edit && <InfoIcon fontSize='inherit' />}
          {remove && <TrashIcon fontSize='inherit' />}
        </Stack>

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

      <Stack gap={theme.spacing(2)}>
        <StyledDialogTitle id='alert-dialog-title'>{title}</StyledDialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ fontSize: '1rem' }}
            id='alert-dialog-description'
          >
            {description}
          </DialogContentText>
        </DialogContent>
      </Stack>

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
              {selectList?.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )}

          {variant == 'addMonth' && (
            <>
              <Goal
                className='goal'
                flexDirection={'row'}
                gap={theme.spacing(1 / 2)}
                padding={theme.spacing(8, 0, 0)}
              >
                <TextField
                  select
                  fullWidth
                  error={!!errors?.needPercentage}
                  helperText={
                    errors?.needPercentage ? errors.needPercentage?.message : ''
                  }
                  label={renderLabelContainer('need', 'Need')}
                  defaultValue={goal?.needPercentage}
                  {...(register
                    ? register('needPercentage')
                    : { name: 'needPercentage' })}
                >
                  {percentageList?.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      defaultValue={goal?.needPercentage}
                    >
                      {`${option}%`}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  fullWidth
                  error={!!errors?.wantPercentage}
                  helperText={
                    errors?.wantPercentage ? errors.wantPercentage?.message : ''
                  }
                  label={renderLabelContainer('want', 'Want')}
                  defaultValue={goal?.wantPercentage}
                  {...(register
                    ? register('wantPercentage')
                    : { name: 'wantPercentage' })}
                >
                  {percentageList?.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      defaultValue={goal?.wantPercentage}
                    >
                      {`${option}%`}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  fullWidth
                  error={!!errors?.savePercentage}
                  helperText={
                    errors?.savePercentage ? errors.savePercentage?.message : ''
                  }
                  label={renderLabelContainer('save', 'Save')}
                  defaultValue={goal?.savePercentage}
                  {...(register
                    ? register('savePercentage')
                    : { name: 'savePercentage' })}
                >
                  {percentageList?.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      defaultValue={goal?.savePercentage}
                    >
                      {`${option}%`}
                    </MenuItem>
                  ))}
                </TextField>
              </Goal>
              <TextField
                select
                fullWidth
                error={!!errors?.selected}
                helperText={errors?.selected ? errors.selected?.message : ''}
                label={selectLabel}
                {...(register ? register('selected') : { name: 'selected' })}
              >
                {selectList?.map((option) => (
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
          {variant == 'addExpense' && (
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
                {selectList?.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                error={!!errors?.selectedTwo}
                helperText={
                  errors?.selectedTwo ? errors.selectedTwo?.message : ''
                }
                label={selectLabelTwo}
                {...(register
                  ? register('selectedTwo')
                  : { name: 'selectedTwo' })}
              >
                {selectListTwo?.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
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
                {selectList?.map((option) => (
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
        <Stack spacing={'12px'}>
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
    </ContentWrapper>
  );
};
