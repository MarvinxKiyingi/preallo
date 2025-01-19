import { IGoalCardProps } from '@/model/IGoalCard';
import {
  styled,
  BoxProps,
  Stack,
  TextField,
  MenuItem,
  Typography,
} from '@mui/material';
import React from 'react';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IndicatorGoalLabel from '../IndicatorGoalLabel/IndicatorGoalLabel';
import { theme } from '@/styles/theme/muiTheme';
import { Button } from '../Button/Button';

type ICard = BoxProps;
const CardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.accent,
  borderRadius: theme.spacing(2),
  flex: 1,
  boxShadow:
    '0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)',
}));

const CardContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(3),
  gap: theme.spacing(2),
  flex: 1,

  '.goal-wrapper': {
    gap: theme.spacing(2),
  },
  '.goal-content': {
    gap: theme.spacing(),
  },

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6, 8),

    '.goal-title': {
      ...theme.typography.h6,
    },
    '.goal-wrapper': {
      gap: theme.spacing(4),
    },
    '.goal-content': {
      gap: theme.spacing(3),
    },
  },
}));

export const GoalCard = ({
  sx,
  title,
  onSubmit,
  goal,
  percentageList,
  errors,
  register,
  loading,
}: ICard & IGoalCardProps) => {
  const submitButtonText = loading ? 'Loading...' : 'Edit';
  return (
    <CardContainer sx={sx}>
      <CardContent>
        <form onSubmit={onSubmit}>
          <Stack className='goal-wrapper'>
            <Stack
              flexDirection='row'
              alignItems='center'
              gap={theme.spacing()}
            >
              <Typography variant='subtitle1' className='goal-title'>
                {title}
              </Typography>
              <InfoOutlinedIcon
                fontSize='small'
                sx={{ color: 'rgba(0, 0, 0, 0.60)' }}
              />
            </Stack>

            <Stack
              className='goal-content'
              flexDirection={'row'}
              padding={theme.spacing(1, 0, 0)}
            >
              <TextField
                select
                fullWidth
                error={!!errors?.needPercentage}
                helperText={
                  errors?.needPercentage ? errors.needPercentage?.message : ''
                }
                label={<IndicatorGoalLabel showColon={false} name={'Need'} />}
                defaultValue={goal.needPercentage}
                {...(register
                  ? register('needPercentage')
                  : { name: 'needPercentage' })}
              >
                {percentageList?.map((option) => (
                  <MenuItem key={option} value={option} defaultValue={0}>
                    {`${option}%`}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                error={!!errors?.wantPercentage}
                helperText={
                  errors?.wantPercentage ? errors.wantPercentage?.message : ''
                }
                label={<IndicatorGoalLabel showColon={false} name={'Want'} />}
                defaultValue={goal.wantPercentage}
                {...(register
                  ? register('wantPercentage')
                  : { name: 'wantPercentage' })}
              >
                {percentageList?.map((option) => (
                  <MenuItem key={option} value={option} defaultValue={0}>
                    {`${option}%`}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                error={!!errors?.savePercentage}
                helperText={
                  errors?.savePercentage ? errors.savePercentage?.message : ''
                }
                label={<IndicatorGoalLabel showColon={false} name={'Save'} />}
                defaultValue={goal?.savePercentage}
                {...(register
                  ? register('savePercentage')
                  : { name: 'savePercentage' })}
              >
                {percentageList?.map((option) => (
                  <MenuItem key={option} value={option} defaultValue={0}>
                    {`${option}%`}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <Button type='submit' variant='contained' color='primary'>
              {submitButtonText}
            </Button>
          </Stack>
        </form>
      </CardContent>
    </CardContainer>
  );
};
