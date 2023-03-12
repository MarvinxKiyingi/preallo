import { Box, LinearProgress, LinearProgressProps, styled, Typography } from '@mui/material';

export type IBudgetDisplay = {
  bgColor?: string;
  amount: number;
  progressValue: number;
  variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query';
  viewProgress?: boolean;
  fullWidth: boolean;
  days: number;
  centerWithTitle: boolean;
};

const StyledBudgetDisplay = styled(Box)<{ ownerState: IBudgetDisplay }>(({ theme, ownerState }) => ({
  backgroundColor: ownerState.bgColor ? ownerState.bgColor : theme.palette.primary.main,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(),
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  width: ownerState.fullWidth ? '100%' : 334,
  height: '100%',
  [theme.breakpoints.up('lg')]: {
    width: ownerState.fullWidth ? '100%' : 663,
  },

  '.textContainer': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: ownerState.centerWithTitle ? 'center' : 'initial',

    '.infoText': {
      color: theme.palette.text.secondary,
    },
    '.title': {
      color: theme.palette.text.secondary,
      ...theme.typography.subtitle1,
      fontWeight: 600,
      lineHeight: 'null',
    },

    '.amount': {
      ...theme.typography.h6,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },

  '.linearProgress-container': {
    width: '100%',
    span: {
      borderRadius: theme.spacing(),
    },
  },
}));

export const BudgetDisplay = ({
  viewProgress,
  bgColor,
  fullWidth,
  days,
  amount,
  progressValue,
  centerWithTitle,
  ...props
}: IBudgetDisplay & LinearProgressProps) => {
  const ownerState = {
    bgColor,
    fullWidth,
    amount,
    days,
    progressValue,
    centerWithTitle,
  };
  return (
    <StyledBudgetDisplay className='budgetDisplay-container' ownerState={ownerState} {...props}>
      <div className='textContainer'>
        <Typography className={centerWithTitle ? 'title' : 'infoText'} variant='caption'>
          {centerWithTitle ? 'Total' : `Left to spend, for the next ${days} days`}
        </Typography>
        <Typography className='amount' variant='h4'>{`${amount} kr`}</Typography>
      </div>

      {viewProgress && (
        <Box className='linearProgress-container'>
          <LinearProgress sx={{ height: 6 }} value={progressValue} {...props} />
        </Box>
      )}
    </StyledBudgetDisplay>
  );
};
