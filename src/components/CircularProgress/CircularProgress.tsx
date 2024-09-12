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
};

type ICircularProgress = {
  size: string | number | undefined;
};

const StyledCircularProgress = styled(Typography)<{
  ownerState: ICircularProgress;
}>(({ theme, ownerState }) => ({
  '.circularProgress': {
    '&-progressText': {
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
      gap: theme.spacing(2),

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
          fontSize: theme.typography.body2.fontSize,
          [theme.breakpoints.up('lg')]: {
            fontSize: theme.typography.body1.fontSize,
          },
        },
      },
      '.salary': {
        alignSelf: 'center',
      },
      '.separator': {
        border: '1px solid',
      },
      '.budget': {
        '.title': {
          '&:before': {
            backgroundColor: theme.palette.primary.main,
          },
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
  needTotalValue,
  wantTotalValue,
  saveTotalValue,
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
  return (
    <StyledCircularProgress
      className='circularProgress-container'
      sx={{
        position: 'relative',
        display: 'inline-flex',
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
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

      <Box
        className='circularProgress-progressText-container'
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
              <div>
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
                      <Typography
                        className='amount'
                        variant='subtitle2'
                        color={progressTextColor}
                      >
                        {value}
                      </Typography>
                    )}
                  />
                )}
              </div>
            </div>

            <span className='separator' />

            <div className='budget'>
              <Typography className='need' variant='body2'>
                <Stack gap={'4px'} flexDirection={'row'}>
                  <Typography variant='body2' component={'span'}>
                    Need:
                  </Typography>
                  <Typography
                    variant='body2'
                    component={'span'}
                    sx={{ fontWeight: '700' }}
                  >
                    {
                      calculateExpensePercentage(salary, needTotalValue)
                        .asString
                    }
                  </Typography>
                </Stack>
              </Typography>

              <Typography className='want' variant='body2'>
                <Stack gap={'4px'} flexDirection={'row'}>
                  <Typography variant='body2' component={'span'}>
                    Want:
                  </Typography>
                  <Typography
                    variant='body2'
                    component={'span'}
                    sx={{ fontWeight: '700' }}
                  >
                    {
                      calculateExpensePercentage(salary, wantTotalValue)
                        .asString
                    }
                  </Typography>
                </Stack>
              </Typography>

              <Typography className='save' variant='body2'>
                <Stack gap={'4px'} flexDirection={'row'}>
                  <Typography variant='body2' component={'span'}>
                    Save:
                  </Typography>
                  <Typography
                    variant='body2'
                    component={'span'}
                    sx={{ fontWeight: '700' }}
                  >
                    {
                      calculateExpensePercentage(salary, saveTotalValue)
                        .asString
                    }
                  </Typography>
                </Stack>
              </Typography>
            </div>
          </div>
        )}
      </Box>
    </StyledCircularProgress>
  );
};
