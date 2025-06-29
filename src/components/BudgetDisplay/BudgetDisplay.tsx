import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { grey } from '../../styles/colors/grey';
import CurrencyFormat from 'react-currency-format';
import { useDaysLeft } from '../../utils/functions/daysLeft';
import { calculateProgressValue } from '../../utils/functions/calculateProgressValue';
import { calculateExpensePercentage } from '../../utils/functions/calculateExpensePercentage';
import { isGoalMet } from '../../utils/functions/isGoalMet';
import IndicatorGoalLabel from '../IndicatorGoalLabel/IndicatorGoalLabel';

export type IBudgetDisplay = {
  /** Input css string to change the background color  */
  bgColor?: string;
  /** Budget amount  */
  budget: number;
  differenceAsString: string;
  /** Salary the budget is based on   */
  salary: number;
  salaryAsString: string;
  /** The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100.  */
  progressValue?: number;
  variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query' | 'test';
  /** If true, progress will be visible   */
  hideProgressBar?: boolean;
  fullWidth?: boolean;
  /** Days until next salary   */
  daysUntilPayday?: number;
  needTotalValue: number;
  wantTotalValue: number;
  saveTotalValue: number;
  needGoalPercentage: number;
  wantGoalPercentage: number;
  saveGoalPercentage: number;
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

    '.linearProgress': {
      '&-container': {
        width: '100%',
        position: 'relative',

        span: {
          borderRadius: theme.spacing(),
        },
      },
      '&-need,&-want,&-save': {
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 0,
        right: 0,
      },
      '&-need': {
        '.MuiLinearProgress-bar': {
          backgroundColor: theme.palette.warning.light,
        },
      },
      '&-want': {
        '.MuiLinearProgress-bar': {
          backgroundColor: theme.palette.error.light,
        },
      },
      '&-save': {
        '.MuiLinearProgress-bar': {
          backgroundColor: theme.palette.success.light,
        },
      },
    },
  })
);

const BudgetBasedOnContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(),
  fontSize: theme.typography.overline.fontSize,

  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.overline.fontSize,
    gap: theme.spacing(),
  },

  '.need,.want,.save,.salaryTitleWrapper': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1 / 2),
    textTransform: 'none',
    lineHeight: '115%',
    color: theme.palette.grey[300],

    [theme.breakpoints.up('sm')]: {
      ...theme.typography.subtitle2,
      fontFamily: theme.typography.overline,
      fontWeight: 500,
      fontSize: theme.typography.button.fontSize,
      gap: theme.spacing(),
    },
  },

  '.salaryTitleWrapper': {
    '.salaryTitleContainer': {
      display: 'flex',
      gap: '4px',
    },

    '.salary': {
      display: 'contents',
      fontSize: theme.typography.overline.fontSize,
      lineHeight: '0',
      whiteSpace: ' nowrap',
      color: theme.palette.common.white,

      [theme.breakpoints.up('sm')]: {
        ...theme.typography.subtitle2,
        fontSize: theme.typography.button.fontSize,
      },
    },
  },
}));

export const BudgetDisplay = ({
  hideProgressBar = false,
  bgColor,
  fullWidth,
  daysUntilPayday = 25,
  budget,
  differenceAsString,
  salary,
  salaryAsString,
  progressValue = 100,
  variant = 'determinate',
  color = 'secondary',
  needTotalValue = 0,
  wantTotalValue = 0,
  saveTotalValue = 0,
  needGoalPercentage = 50,
  wantGoalPercentage = 30,
  saveGoalPercentage = 20,
  ...props
}: IBudgetDisplay & LinearProgressProps) => {
  const daysLeft = useDaysLeft(daysUntilPayday);

  const ownerState = {
    bgColor,
    fullWidth,
    budget,
    differenceAsString,
    salary,
    salaryAsString,
    daysUntilPayday,
    progressValue,
    color,
    needTotalValue,
    wantTotalValue,
    saveTotalValue,
    needGoalPercentage,
    wantGoalPercentage,
    saveGoalPercentage,
  };

  const needUiProgress = calculateProgressValue(needTotalValue, salary);
  const wantUiProgress = calculateProgressValue(
    needTotalValue + wantTotalValue,
    salary
  );
  const saveUiProgress = calculateProgressValue(
    needTotalValue + wantTotalValue + saveTotalValue,
    salary
  );
  const needPercentage = calculateExpensePercentage(needTotalValue, salary);
  const wantPercentage = calculateExpensePercentage(wantTotalValue, salary);
  const savePercentage = calculateExpensePercentage(saveTotalValue, salary);

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
          value={differenceAsString}
          displayType={'text'}
          thousandSeparator={' '}
          decimalSeparator={','}
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
            <Stack className='linearProgress-container'>
              <LinearProgress
                className='linearProgress-base'
                sx={{ height: 12 }}
                value={0}
                variant={variant}
                color={color}
                {...props}
              />
              <LinearProgress
                className='linearProgress-save'
                sx={{ height: 12 }}
                value={saveUiProgress.asNumber}
                variant={variant}
                color='success'
                {...props}
              />
              <LinearProgress
                className='linearProgress-want'
                sx={{ height: 12 }}
                value={wantUiProgress.asNumber}
                variant={variant}
                color='warning'
                {...props}
              />
              <LinearProgress
                className='linearProgress-need'
                sx={{ height: 12 }}
                value={needUiProgress.asNumber}
                variant={variant}
                color='error'
                {...props}
              />
            </Stack>
          )}

          {salary && (
            <BudgetBasedOnContainer>
              <Stack
                className='need'
                gap={'4px'}
                flexDirection={'row'}
                alignItems={'center'}
              >
                <IndicatorGoalLabel
                  name='Need'
                  sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}
                />

                <Typography
                  variant='subtitle2'
                  component={'span'}
                  sx={{ fontSize: 'inherit' }}
                  className={`percentage ${isGoalMet(
                    needGoalPercentage,
                    needPercentage.asNumber
                  )}`}
                >
                  {calculateExpensePercentage(needTotalValue, salary).asString}
                </Typography>
              </Stack>

              <Stack
                className='want'
                gap={'4px'}
                flexDirection={'row'}
                alignItems={'center'}
              >
                <IndicatorGoalLabel
                  name='Want'
                  sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}
                />
                <Typography
                  variant='subtitle2'
                  component={'span'}
                  sx={{ fontSize: 'inherit' }}
                  className={`percentage ${isGoalMet(
                    wantGoalPercentage,
                    wantPercentage.asNumber
                  )}`}
                >
                  {calculateExpensePercentage(wantTotalValue, salary).asString}
                </Typography>
              </Stack>

              <Stack
                className='save'
                gap={'4px'}
                flexDirection={'row'}
                alignItems={'center'}
              >
                <IndicatorGoalLabel
                  name='Save'
                  sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}
                />
                <Typography
                  variant='subtitle2'
                  component={'span'}
                  sx={{ fontSize: 'inherit' }}
                  className={`percentage ${isGoalMet(
                    saveGoalPercentage,
                    savePercentage.asNumber
                  )}`}
                >
                  {calculateExpensePercentage(saveTotalValue, salary).asString}
                </Typography>
              </Stack>

              <Typography className='salaryTitleWrapper' variant='overline'>
                <div className='salaryTitleContainer'>
                  <div>Salary:</div>

                  <CurrencyFormat
                    value={salaryAsString}
                    displayType={'text'}
                    thousandSeparator={' '}
                    decimalSeparator={','}
                    thousandSpacing={'3'}
                    renderText={(value) => (
                      <Typography className='salary' variant='subtitle2'>
                        {value}
                      </Typography>
                    )}
                  />
                </div>
              </Typography>
            </BudgetBasedOnContainer>
          )}
        </>
      )}
    </StyledBudgetDisplay>
  );
};
