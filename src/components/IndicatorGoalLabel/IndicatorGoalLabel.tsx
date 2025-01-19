import React from 'react';
import { Box, BoxProps, styled, Typography } from '@mui/material';
import { toCamelCase } from '../../utils/functions/toCamelCase';

type PickedBoxProps = Pick<BoxProps, 'sx'>;

type IndicatorGoalLabelProps = PickedBoxProps & {
  name: string;
  showColon?: boolean;
};

const IndicatorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(),

  '.need': {
    backgroundColor: theme.palette.warning.light,
  },
  '.want': {
    backgroundColor: theme.palette.error.light,
  },
  '.save': {
    backgroundColor: theme.palette.success.light,
  },
}));

const Indicator = styled('div')(({ theme }) => ({
  display: 'flex',
  width: theme.spacing(),
  height: theme.spacing(),
  borderRadius: '50%',
}));

const IndicatorGoalLabel: React.FC<IndicatorGoalLabelProps> = ({
  sx,
  name,
  showColon = true,
}) => {
  const transformedNameToCamelCase = toCamelCase(name);
  return (
    <IndicatorContainer
      className={`indicator-container ${transformedNameToCamelCase}`}
      sx={sx}
    >
      <Indicator className={transformedNameToCamelCase}></Indicator>
      <Typography component={'p'} sx={sx}>
        {name}
        {showColon ? ':' : ''}
      </Typography>
    </IndicatorContainer>
  );
};

export default IndicatorGoalLabel;
