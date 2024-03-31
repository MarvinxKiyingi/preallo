import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
  Typography,
  Box,
  styled,
} from '@mui/material';
import CurrencyFormat from 'react-currency-format';

export type IMuiCircularProgressProps = MuiCircularProgressProps & {
  /** Percentage value */
  percentageValue: number;
  /** Circle thickness */
  thickness: number;
  /** Circle size */
  circularProgressColor?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
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
  circularProgressColorBg?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
  /** View percentage of progress or a custom version where it shows indicators and the salary the progress is based on */
  innerContent: 'percentage' | 'indicators';
  salaryAsString?: string;
};

const StyledCircularProgress = styled(Typography)(({ theme }) => ({
  '.circularProgress': {
    '&-progressText': {
      '&-text': {
        ...theme.typography.h1,
        fontWeight: 600,
      },
    },
    '&-progressBackground': {
      position: 'absolute',
    },
    '&-progressDetails': {
      display: 'flex',
      gap: theme.spacing(2),

      '.budget, .salary': {
        '.title': {
          display: 'flex',
          gap: theme.spacing(),
          alignItems: 'center',

          '&:before': {
            content: '""',
            display: 'flex',
            width: theme.spacing(),
            height: theme.spacing(),
            borderRadius: '50%',
            backgroundColor: theme.palette.secondary.main,
          },
        },
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
        '.amount': {
          fontSize: '14px',
          [theme.breakpoints.up('lg')]: {
            fontSize: theme.spacing(2),
          },
        },
      },
    },
  },
}));

export const CircularProgress = ({
  percentageValue,
  circularProgressColor = 'primary',
  progressTextColor = 'primary',
  circularProgressColorBg = 'secondary',
  innerContent = 'percentage',
  salaryAsString,
  ...props
}: IMuiCircularProgressProps) => {
  const hasValue = percentageValue ? percentageValue : 0;
  return (
    <StyledCircularProgress
      className='circularProgress-container'
      sx={{ position: 'relative', display: 'inline-flex' }}
    >
      <MuiCircularProgress
        className='circularProgress-circularProgress'
        variant='determinate'
        value={hasValue}
        color={circularProgressColor}
        {...props}
        sx={{ zIndex: 1 }}
      />

      {/* Visible only of there is a background */}
      {circularProgressColorBg && (
        <MuiCircularProgress
          className='circularProgress-progressBackground'
          variant='determinate'
          value={100}
          color={circularProgressColorBg}
          {...props}
        />
      )}

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
              <Typography
                className='title'
                variant='body2'
                color={progressTextColor}
              >
                Budget
              </Typography>
            </div>
          </div>
        )}
      </Box>
    </StyledCircularProgress>
  );
};
