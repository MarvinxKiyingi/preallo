import React from 'react';
import AppContainer from '../../../Container/AppContainer';
import { MobileNavigation } from '../../../Navigation/MobileNavigation/MobileNavigation';
import {
  MenuItem,
  Stack,
  styled,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Button } from '../../../Button/Button';
import { theme } from '../../../../styles/theme/muiTheme';
import { signOut, useSession } from 'next-auth/react';
import { GoalCard } from '@/components/GoalCard/GoalCard';
import { IGoal } from '@/model/IGoal';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { db } from '@/utils/firebase/clientApp';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IGoalSettingsYupSchema } from '@/model/IYupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { percentageList } from '@/utils/functions/percentageList';
import IndicatorGoalLabel from '@/components/IndicatorGoalLabel/IndicatorGoalLabel';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TabBar } from '@/components/TabBar/TabBar';

export type IGoalSettingsForm = {
  needPercentage: number;
  savePercentage: number;
  wantPercentage: number;
};

const CardsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  height: 'fit-content',

  [theme.breakpoints.up('sm')]: {
    marginTop: 'unset',
  },
}));

const ButtonGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(3),
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

const Mobile = () => {
  const { data: session } = useSession();
  const userId = session?.userId;
  const [goalsSnapshot] = useDocument(doc(db, 'goal', `${session?.userId}`));
  const goal: IGoal = goalsSnapshot?.data() as IGoal;

  const tabBarList = [
    { id: 'goal', label: 'Goal', value: '/settings/goal' },
    {
      id: 'subscriptions',
      label: 'subscriptions',
      value: '/settings/subscriptions',
    },
    { id: 'recurring', label: 'recurring', value: '/settings/recurring' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IGoalSettingsForm>({
    resolver: yupResolver(IGoalSettingsYupSchema),
  });

  const submitFormContentHandler: SubmitHandler<IGoalSettingsForm> = (
    data: IGoalSettingsForm
  ) => {
    if (data && userId) {
      console.log('Goal-data:', data);
    }
    if (!data && !userId) {
      throw new Error('Something went wrong, when submitting Goal data to db');
    }
  };

  const isIpad = useMediaQuery(
    `${theme.breakpoints.up('sm').replace('@media ', '')}`
  );

  return (
    <AppContainer>
      <MobileNavigation hideProfile showSignOutButton title='Settings' />

      <TabBar tabList={tabBarList} />

      <CardsContainer>
        {goal && (
          <GoalCard>
            <form onSubmit={handleSubmit(submitFormContentHandler)}>
              <Stack className='goal-wrapper'>
                <Stack
                  flexDirection='row'
                  alignItems='center'
                  gap={theme.spacing()}
                >
                  <Typography variant='subtitle1' className='goal-title'>
                    Goal
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
                      errors?.needPercentage
                        ? errors.needPercentage?.message
                        : ''
                    }
                    label={
                      <IndicatorGoalLabel className={'need'} name={'Need'} />
                    }
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
                      errors?.wantPercentage
                        ? errors.wantPercentage?.message
                        : ''
                    }
                    label={
                      <IndicatorGoalLabel className={'want'} name={'Want'} />
                    }
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
                      errors?.savePercentage
                        ? errors.savePercentage?.message
                        : ''
                    }
                    label={
                      <IndicatorGoalLabel className={'save'} name={'Save'} />
                    }
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
          </GoalCard>
        )}
      </CardsContainer>
    </AppContainer>
  );
};

export default Mobile;
