import { Box, styled, Typography } from '@mui/material';
import { ExpenceIcon } from '../Icons';

type IExpenseProps = {
  bgColor?: string;
  title?: string;
  date?: string;
  amount?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
};

const StyledExpense = styled(Box)<{ ownerState: IExpenseProps }>(({ theme, ownerState }) => ({
  backgroundColor: ownerState.bgColor ? ownerState.bgColor : theme.palette.background.secondary,
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  height: ownerState.fullHeight ? '100%' : undefined,
  width: ownerState.fullWidth ? '100%' : 334,
  '.iconContainer': {
    backgroundColor: theme.palette.primary.secondary,
    color: theme.palette.common.white,
    display: 'flex',
    aspectRatio: '1/1',
    maxWidth: 48,
    width: '100%',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.textContainer': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0, 1, 2),

    '.expenseInfoContainer': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(0.5),
    },

    '.price': {
      fontWeight: 600,
    },
  },
}));

export const Expense = ({ bgColor, fullHeight, fullWidth, title, date, amount, ...props }: IExpenseProps) => {
  const ownerState = {
    bgColor,
    fullHeight,
    fullWidth,
  };
  return (
    <StyledExpense className='expenseButtonContainer' ownerState={ownerState} {...props}>
      <div className='iconContainer'>
        <ExpenceIcon />
      </div>
      <div className='textContainer'>
        <div className='expenseInfoContainer'>
          <Typography className='expense' variant='textNormalBold'>
            {title}
          </Typography>
          <Typography className='date' variant='textSmall'>
            {date}
          </Typography>
        </div>
        <div>
          <Typography className='price' variant='h6'>
            {`${amount} kr`}
          </Typography>
        </div>
      </div>
    </StyledExpense>
  );
};
