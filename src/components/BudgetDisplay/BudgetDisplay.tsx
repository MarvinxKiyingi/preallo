import { Box, LinearProgress, LinearProgressProps, styled, Typography } from '@mui/material';

export type IBudgetDisplay = {
  bgColor?: string;
  value?: number;
  variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query';
  viewProgress?: boolean;
  fullWidth: boolean;
};

const StyledBudgetDisplay = styled(Box)<{ ownerState: IBudgetDisplay }>(({ theme, ownerState }) => ({
  backgroundColor: ownerState.bgColor ? ownerState.bgColor : theme.palette.primary.secondary,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(),
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  width: ownerState.fullWidth ? '100%' : 334,
  height: 54,
  [theme.breakpoints.up('lg')]: {
    width: ownerState.fullWidth ? '100%' : 663,
  },

  '.textContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    alignItems: 'center',

    '.title': {
      [theme.breakpoints.up('lg')]: {
        ...theme.typography.h5,
        fontWeight: 600,
      },
    },

    '.amount': {
      fontWeight: 600,
      [theme.breakpoints.up('lg')]: {
        ...theme.typography.h3,
        fontWeight: 600,
      },
    },
  },

  '.linearProgress-container': {
    width: '100%',
    span: {
      borderRadius: theme.spacing(),
    },
  },
}));

export const BudgetDisplay = ({ viewProgress, bgColor, fullWidth, color, ...props }: IBudgetDisplay & LinearProgressProps) => {
  const ownerState = {
    bgColor,
    fullWidth,
  };
  return (
    <StyledBudgetDisplay className='budgetDisplay-container' ownerState={ownerState} {...props}>
      <div className='textContainer'>
        <Typography className='title' variant='textNormal'>
          Budget for October
        </Typography>
        <Typography className='amount' variant='h4'>{`${'-2,478'} kr`}</Typography>
      </div>
      {/* {viewProgress && <LinearProgress color={color ? color : 'inherit'} {...props} />} */}
      {viewProgress && (
        <Box className='linearProgress-container'>
          <LinearProgress color={color ? color : 'inherit'} {...props} />
        </Box>
      )}
    </StyledBudgetDisplay>
  );
};
