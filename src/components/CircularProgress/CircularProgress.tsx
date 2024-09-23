import { calculateProgressValue } from '../../utils/functions/calculateProgressValue';
import { calculateExpensePercentage } from '../../utils/functions/calculateExpensePercentage';
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
  Typography,
  Box,
  styled,
  Stack,
} from '@mui/material';
import CurrencyFormat from 'react-currency-format';
import { theme } from '../../styles/theme/muiTheme';
import { isGoalMet } from '../../utils/functions/isGoalMet';

export type IMuiCircularProgressProps = MuiCircularProgressProps & {
  /** Percentage value */
  percentageValue: number;
  /** Circle thickness */
  thickness: number;
  /** Circle size */
  progressTextColor?:
    | 'common.white'
    | 'common.black'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | string;
  /** View percentage of progress or a custom version where it shows indicators and the salary the progress is based on */
  innerContent: 'percentage' | 'indicators';
  salaryAsString?: string;
  salary: number;
  needTotalValue: number;
  wantTotalValue: number;
  saveTotalValue: number;
  needGoalPercentage: number;
  wantGoalPercentage: number;
  saveGoalPercentage: number;
};

type ICircularProgress = {
  size: string | number | undefined;
};

const StyledCircularProgress = styled(Typography)<{
  ownerState: ICircularProgress;
}>(({ theme, ownerState }) => ({
  position: 'relative',
  display: 'inline-flex',
  minWidth: `${ownerState.size}px`,
  minHeight: `${ownerState.size}px`,

  '.circularProgress': {
    '&-progressText': {
      '&-container': {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '&-text': {
        ...theme.typography.h1,
        fontWeight: 600,
      },
    },
    '&-progressBackground': {
      color: 'rgb(195, 178, 255)',
    },
    '&-progressBackground, &-save, &-want, &-need': {
      position: 'absolute',
      zIndex: '1',
      minWidth: `${ownerState.size}px `,
      minHeight: `${ownerState.size}px `,
    },
    '&-save': {
      color: theme.palette.success.light,
    },
    '&-want': {
      color: theme.palette.error.light,
    },
    '&-need': {
      color: theme.palette.warning.light,
    },
    '&-progressDetails': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(),

      '.budget, .salary': {
        '.title, .need, .want, .save': {
          display: 'flex',
          gap: theme.spacing(),
          alignItems: 'center',

          '&:before': {
            content: '""',
            display: 'flex',
            width: theme.spacing(),
            height: theme.spacing(),
            borderRadius: '50%',
          },

          [theme.breakpoints.up('lg')]: {
            ...theme.typography.body1,
          },
        },
        '.title': {
          '&:before': {
            backgroundColor: 'rgb(195, 178, 255)',
          },
        },
        '.need': {
          '&:before': {
            backgroundColor: theme.palette.warning.light,
          },
        },
        '.want': {
          '&:before': {
            backgroundColor: theme.palette.error.light,
          },
        },
        '.save': {
          '&:before': {
            backgroundColor: theme.palette.success.light,
          },
        },
        '.amount': {
          ...theme.typography.body1,
          fontWeight: 700,
        },
      },
      '.salary': {
        alignSelf: 'center',
      },
      '.result': {
        ...theme.typography.body2,
        fontWeight: 700,
      },
      '.separator': {
        border: '1px solid',
      },
      '.percentage': {
        '&-container': {
          display: 'flex',
          gap: theme.spacing(1),

          [theme.breakpoints.up('lg')]: {
            gap: theme.spacing(2),
          },
        },
      },
      '.goal': {
        '.green': {
          color: theme.palette.success.main,
        },
        '.red': {
          color: theme.palette.error.main,
        },
      },
    },
  },
}));

export const CircularProgress = ({
  percentageValue,
  progressTextColor = 'primary',
  innerContent = 'percentage',
  salaryAsString,
  size,
  salary,
  needTotalValue = 0,
  wantTotalValue = 0,
  saveTotalValue = 0,
  needGoalPercentage = 50,
  wantGoalPercentage = 30,
  saveGoalPercentage = 20,
  ...props
}: IMuiCircularProgressProps) => {
  const hasValue = percentageValue ? percentageValue : 0;
  const ownerState = {
    size,
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

  const renderProgressDetail = (
    title: string,
    percentage: number,
    goal: number
  ) => (
    <Typography variant='body2'>
      <Stack gap='4px' flexDirection='row'>
        <Typography component='span'>{title}:</Typography>
        <Typography
          component='span'
          className={`result ${isGoalMet(goal, percentage)}`}
        >{`${goal}%`}</Typography>
      </Stack>
    </Typography>
  );

  const renderBudgetDetail = (
    label: string,
    percentage: string,
    className: string
  ) => (
    <Typography className={className} variant='body2'>
      <Stack gap='4px' flexDirection='row'>
        <Typography component='span'>{label}:</Typography>
        <Typography component='span' className='result'>
          {percentage}
        </Typography>
      </Stack>
    </Typography>
  );

  return (
    <StyledCircularProgress
      className='circularProgress-container'
      ownerState={ownerState}
    >
      <MuiCircularProgress
        className='circularProgress-progressBackground'
        variant='determinate'
        value={100}
        color={'inherit'}
        {...props}
      />
      <MuiCircularProgress
        className='circularProgress-save'
        variant='determinate'
        value={saveUiProgress.asNumber}
        color={'success'}
        {...props}
      />
      <MuiCircularProgress
        className='circularProgress-want'
        variant='determinate'
        value={wantUiProgress.asNumber}
        color={'error'}
        {...props}
      />
      <MuiCircularProgress
        className='circularProgress-need'
        variant='determinate'
        value={needUiProgress.asNumber}
        color={'warning'}
        {...props}
      />

      <Box className='circularProgress-progressText-container'>
        {innerContent === 'percentage' ? (
          <Typography
            className='circularProgress-progressText-text'
            variant='caption'
            component='div'
            color={progressTextColor}
          >{`${Math.round(hasValue)}%`}</Typography>
        ) : (
          <div className='circularProgress-progressDetails'>
            <div className='salary'>
              <Stack
                flexDirection={'row'}
                gap={theme.spacing(1 / 2)}
                alignItems={'center'}
              >
                <Typography
                  className='title'
                  variant='body2'
                  color={progressTextColor}
                >
                  Salary:
                </Typography>
                {salaryAsString && (
                  <CurrencyFormat
                    value={salaryAsString}
                    displayType={'text'}
                    thousandSeparator={' '}
                    decimalSeparator={','}
                    thousandSpacing={'3'}
                    renderText={(value) => (
                      <Typography className='amount' color={progressTextColor}>
                        {value}
                      </Typography>
                    )}
                  />
                )}
              </Stack>
            </div>

            <div className='percentage-container'>
              <div className='goal'>
                {renderProgressDetail(
                  'Goal',
                  needPercentage.asNumber,
                  needGoalPercentage
                )}
                {renderProgressDetail(
                  'Goal',
                  wantPercentage.asNumber,
                  wantGoalPercentage
                )}
                {renderProgressDetail(
                  'Goal',
                  savePercentage.asNumber,
                  saveGoalPercentage
                )}
              </div>

              <span className='separator' />

              <div className='budget'>
                {renderBudgetDetail('Need', needPercentage.asString, 'need')}
                {renderBudgetDetail('Want', wantPercentage.asString, 'want')}
                {renderBudgetDetail('Save', savePercentage.asString, 'save')}
              </div>
            </div>
          </div>
        )}
      </Box>
    </StyledCircularProgress>
  );
};
