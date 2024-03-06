import {
  Box,
  LinearProgress,
  LinearProgressProps,
  styled,
  Typography,
} from '@mui/material';
import { grey } from '../../styles/colors/grey';
import CurrencyFormat from 'react-currency-format';

export type IBudgetDisplay = {
  /** Input css string to change the background color  */
  bgColor?: string;
  /** Budget amount amount  */
  amount: number;
  /** The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100.  */
  progressValue?: number;
  variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query';
  /** If true, progress will be visible   */
  viewProgress?: boolean;
  fullWidth?: boolean;
  /** Days until next salary   */
  days?: number;
  /** If `"secondary"`, the budget display will change to a more simpler appearance   */
  version?: 'primary' | 'secondary';
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

        [theme.breakpoints.up('sm')]: {
          ...theme.typography.h6,
          fontWeight: 600,
        },
      },

      '.amount': {
        ...theme.typography.h6,
        fontWeight: 700,
        textTransform: 'uppercase',

        [theme.breakpoints.up('sm')]: {
          ...theme.typography.h5,
          fontWeight: 700,
        },
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
  viewProgress = false,
  bgColor,
  fullWidth,
  days = 0,
  amount,
  progressValue = 100,
  version = 'primary',
  title,
  variant = 'determinate',
  color = 'secondary',
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
    color,
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
            {days > 0 && (
              <Typography className={'infoText'} variant='body1'>
                {`Left to spend, for the next ${days} days`}
              </Typography>
            )}
            <CurrencyFormat
              value={amount}
              displayType={'text'}
              thousandSeparator={' '}
              decimalSeparator=','
              thousandSpacing={'3'}
              suffix={' kr'}
              renderText={(value) => (
                <Typography className='amount' variant='h5'>
                  {value}
                </Typography>
              )}
            />
          </div>
        </StyledSecondaryBudgetDisplay>
      ) : (
        <StyledBudgetDisplay
          className='budgetDisplay-primary'
          ownerState={ownerState}
          {...props}
        >
          <div className='textContainer'>
            <CurrencyFormat
              value={amount}
              displayType={'text'}
              thousandSeparator={' '}
              decimalSeparator=','
              thousandSpacing={'3'}
              suffix={' kr'}
              renderText={(value) => (
                <Typography className='amount' variant='h4'>
                  {value}
                </Typography>
              )}
            />

            {days > 0 && (
              <Typography className={'infoText'} variant='caption'>
                {`Left to spend, for the next ${days} days`}
              </Typography>
            )}
          </div>

          {viewProgress && (
            <Box className='linearProgress-container'>
              <LinearProgress
                sx={{ height: 6 }}
                value={progressValue}
                variant={variant}
                color={color}
                {...props}
              />
            </Box>
          )}
        </StyledBudgetDisplay>
      )}
    </>
  );
};
