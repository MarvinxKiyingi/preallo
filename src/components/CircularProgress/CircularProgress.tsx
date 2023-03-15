import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
  Typography,
  Box,
  styled,
} from '@mui/material';

export interface IMuiCircularProgressProps extends MuiCircularProgressProps {
  value: number;
  thickness?: number;
  size?: number;
  circularProgressColor: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
  progressTextColor:
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
  circularProgressColorBg?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
}

const StyledCircularProgress = styled(Typography)(({ theme }) => ({
  '.circularProgress': {
    '&-progressText': {
      '&-text': {
        [theme.breakpoints.up('lg')]: {
          ...theme.typography.h1,
          fontWeight: 600,
        },
      },
    },
    '&-progressBackground': {
      position: 'absolute',
    },
  },
}));

export const CircularProgress = ({
  value,
  circularProgressColor,
  progressTextColor,
  circularProgressColorBg,
  ...props
}: IMuiCircularProgressProps) => {
  const hasValue = value ? value : 0;
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
        <Typography
          className='circularProgress-progressText-text'
          variant='caption'
          component='div'
          color={progressTextColor}
        >{`${Math.round(hasValue)}%`}</Typography>
      </Box>
    </StyledCircularProgress>
  );
};
