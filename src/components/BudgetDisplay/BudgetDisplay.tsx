import {
  Box,
  LinearProgress,
  LinearProgressProps,
  styled,
  Typography,
} from '@mui/material';
import { grey } from '../../styles/colors/grey';

export type IBudgetDisplay = {
  bgColor?: string;
  amount: number;
  progressValue?: number;
  variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query';
  viewProgress?: boolean;
  fullWidth: boolean;
  days: number;
  version: 'primary' | 'secondary';
  title?: string;
};

const StyledBudgetDisplay = styled(Box)<{ ownerState: IBudgetDisplay }>(
  ({ theme, ownerState }) => ({
    backgroundColor: ownerState.bgColor
      ? ownerState.bgColor
      : theme.palette.primary.main,
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

      '.infoText': {
        color: grey.light[500],
      },
      '.title': {
        color: theme.palette.text.secondary,
        ...theme.typography.subtitle1,
        fontWeight: 600,
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
  })
);

const StyledSecondaryBudgetDisplay = styled(Box)(({ theme }) => ({
  '.title': {
    fontWeight: 600,
  },

  '.textContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '.infoText': {
      color: grey.shades[600],
    },

    '.amount': {
      ...theme.typography.h5,
      fontWeight: 700,
      textTransform: 'uppercase',
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
  version,
  title,
  ...props
}: IBudgetDisplay & LinearProgressProps) => {
  const ownerState = {
    bgColor,
    fullWidth,
    amount,
    days,
    progressValue,
    version,
    title,
  };
  return (
    <>
      {version === 'secondary' ? (
        <StyledSecondaryBudgetDisplay
          className='budgetDisplay-secondary'
          {...props}
        >
          <Typography className='title' variant='h4'>
            {title}
          </Typography>

          <div className='textContainer'>
            <Typography className={'infoText'} variant='body1'>
              {`Left to spend, for the next ${days} days`}
            </Typography>
            <Typography
              className='amount'
              variant='h5'
            >{`${amount} kr`}</Typography>
          </div>
        </StyledSecondaryBudgetDisplay>
      ) : (
        <StyledBudgetDisplay
          className='budgetDisplay-primary'
          ownerState={ownerState}
          {...props}
        >
          <div className='textContainer'>
            <Typography className={'infoText'} variant='caption'>
              {`Left to spend, for the next ${days} days`}
            </Typography>
            <Typography
              className='amount'
              variant='h4'
            >{`${amount} kr`}</Typography>
          </div>

          {viewProgress && (
            <Box className='linearProgress-container'>
              <LinearProgress
                sx={{ height: 6 }}
                value={progressValue}
                {...props}
              />
            </Box>
          )}
        </StyledBudgetDisplay>
      )}
    </>
  );
};
