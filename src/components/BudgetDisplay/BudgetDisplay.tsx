import { useMemo } from 'react';
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
  /** Budget amount  */
  budget: number;
  /** Salary the budget is based on   */
  salary?: number;
  /** The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100.  */
  progressValue?: number;
  variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query' | 'test';
  /** If true, progress will be visible   */
  hideProgressBar?: boolean;
  fullWidth?: boolean;
  /** Days until next salary   */
  daysUntilPayday?: number;
  salaryTitle?: string;
};

const StyledBudgetDisplay = styled(Box)<{ ownerState: IBudgetDisplay }>(
  ({ theme, ownerState }) => ({
    backgroundColor: ownerState.bgColor
      ? ownerState.bgColor
      : theme.palette.primary.main,
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
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
        textTransform: 'unset',

        [theme.breakpoints.up('sm')]: {
          ...theme.typography.body2,
        },
      },
      '.budget': {
        [theme.breakpoints.up('sm')]: {
          ...theme.typography.h3,
          fontWeight: 600,
        },
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
        [theme.breakpoints.up('sm')]: {
          ...theme.typography.h3,
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

const BudgetBasedOnContainer = styled(Box)(({ theme }) => ({
  '>:first-of-type': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(),

    '&:before': {
      content: '""',
      display: 'flex',
      width: theme.spacing(),
      height: theme.spacing(),
      borderRadius: '50%',
      backgroundColor: 'rgb(195, 178, 255)',
    },
  },

  '.salaryTitle': {
    textTransform: 'none',
    lineHeight: '115%',

    [theme.breakpoints.up('sm')]: {
      ...theme.typography.body2,
    },
  },
  '.salary': {
    fontSize: theme.typography.overline.fontSize,
    lineHeight: '0',

    [theme.breakpoints.up('sm')]: {
      ...theme.typography.subtitle2,
      fontSize: theme.typography.button.fontSize,
    },
  },
}));

export const BudgetDisplay = ({
  hideProgressBar = false,
  bgColor,
  fullWidth,
  daysUntilPayday = 25,
  budget,
  salary,
  progressValue = 100,
  salaryTitle = 'Salary:',
  variant = 'determinate',
  color = 'secondary',
  ...props
}: IBudgetDisplay & LinearProgressProps) => {
  const today = useMemo(() => new Date(), []);

  const daysLeft = useMemo(() => {
    return daysUntilPayday - today.getDate();
  }, [daysUntilPayday, today]);

  const ownerState = {
    bgColor,
    fullWidth,
    budget,
    salary,
    daysUntilPayday,
    progressValue,
    salaryTitle,
    color,
  };
  return (
    <StyledBudgetDisplay
      className='budgetDisplay'
      ownerState={ownerState}
      {...props}
    >
      <div className='textContainer'>
        {daysUntilPayday > 0 && (
          <Typography className='infoText' variant='overline'>
            {`Left to spend, for the next ${daysLeft} days`}
          </Typography>
        )}
        <CurrencyFormat
          value={budget}
          displayType={'text'}
          thousandSeparator={' '}
          decimalSeparator=','
          thousandSpacing={'3'}
          renderText={(value) => (
            <Typography className='budget' variant='h4'>
              {value}
            </Typography>
          )}
        />
      </div>

      {salary && (
        <>
          {!hideProgressBar && (
            <div className='linearProgress-container'>
              <LinearProgress
                sx={{ height: 12 }}
                value={progressValue}
                variant={variant}
                color={color}
                {...props}
              />
            </div>
          )}

          {salary && (
            <BudgetBasedOnContainer ownerState={ownerState}>
              <Typography className='salaryTitle' variant='overline'>
                <div>{salaryTitle}</div>

                <CurrencyFormat
                  value={salary}
                  displayType={'text'}
                  thousandSeparator={' '}
                  decimalSeparator=','
                  thousandSpacing={'3'}
                  renderText={(value) => (
                    <Typography className='salary' variant='subtitle2'>
                      {value}
                    </Typography>
                  )}
                />
              </Typography>
            </BudgetBasedOnContainer>
          )}
        </>
      )}
    </StyledBudgetDisplay>
  );
};
