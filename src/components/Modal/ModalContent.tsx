import { Box, DialogContent, DialogContentText, DialogTitle, Stack, styled, IconButton } from '@mui/material';

import { theme } from '../../styles/theme/muiTheme';
import { Button } from '../Button/Button';
import { PlusIcon, SuccessIcon, TrashIcon } from '../Icons';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';

type IModalContent = {
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
};

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: 600,
}));

export const ModalContent = ({
  title,
  description,
  onAgree,
  onAgreeLabel,
  onDisagree,
  onDisagreeLabel,
  remove,
  amountLabel,
  expenseLabel,
  categoryList,
}: IModalContent) => {
  return (
    <>
      <DialogContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box fontSize='3rem'>{remove ? <TrashIcon fontSize='inherit' /> : <SuccessIcon fontSize='inherit' />}</Box>

        <div>
          <IconButton sx={{ transform: 'rotate(135deg)' }}>
            <PlusIcon />
          </IconButton>
        </div>
      </DialogContent>

      <StyledDialogTitle id='alert-dialog-title'>{title}</StyledDialogTitle>

      <DialogContent>
        <DialogContentText sx={{ fontSize: '1rem' }} id='alert-dialog-description'>
          {description}
        </DialogContentText>
      </DialogContent>

      <DialogContent>
        <Stack spacing={2}>
          <Input label={amountLabel} type='number' fullWidth />
          <Input label={expenseLabel} type='text' fullWidth />
          <Select defaultValue={categoryList[0]} list={categoryList} textAlign='initial' fullWidth hasBorder />
        </Stack>
      </DialogContent>

      <Stack spacing={2} p={theme.spacing(0, 3)}>
        <Button component='button' onClick={onAgree} variant='contained' color={remove ? 'error' : 'secondary'}>
          {onAgreeLabel}
        </Button>
        <Button component='button' onClick={onDisagree} variant='contained' color='primary'>
          {onDisagreeLabel}
        </Button>
      </Stack>
    </>
  );
};
