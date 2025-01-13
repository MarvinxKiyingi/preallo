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

const Goal = styled(Stack)(({ theme }) => ({
  '.label-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(),

    ' .need, .want, .save': {
      display: 'flex',
      width: theme.spacing(),
      height: theme.spacing(),
      borderRadius: '50%',
    },
    '.need': {
      backgroundColor: theme.palette.warning.light,
    },
    '.want': {
      backgroundColor: theme.palette.error.light,
    },
    '.save': {
      backgroundColor: theme.palette.success.light,
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
}: ICard & IGoalCardProps) => {
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

            <Goal
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
                label={<IndicatorGoalLabel className={'need'} name={'Need'} />}
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
                label={<IndicatorGoalLabel className={'want'} name={'Want'} />}
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
                label={<IndicatorGoalLabel className={'save'} name={'Save'} />}
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
            </Goal>
            <Button type='submit' variant='contained' color='primary'>
              Edit
            </Button>
          </Stack>
        </form>
      </CardContent>
    </CardContainer>
  );
};
