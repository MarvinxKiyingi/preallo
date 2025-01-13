import React from 'react';
import AppContainer from '../../../Container/AppContainer';
import { MobileNavigation } from '../../../Navigation/MobileNavigation/MobileNavigation';
import { styled } from '@mui/material';
import { useSession } from 'next-auth/react';
import { GoalCard } from '@/components/GoalCard/GoalCard';
import { IGoal } from '@/model/IGoal';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { db } from '@/utils/firebase/clientApp';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IGoalSettingsYupSchema } from '@/model/IYupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { percentageList } from '@/utils/functions/percentageList';
import { TabBar } from '@/components/TabBar/TabBar';
import { settingsTabBarList } from '@/utils/functions/settingsTabBarList';

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
}));

const Mobile = () => {
  const { data: session } = useSession();
  const userId = session?.userId;
  const [goalsSnapshot] = useDocument(doc(db, 'goal', `${session?.userId}`));
  const goal: IGoal = goalsSnapshot?.data() as IGoal;

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
      // eslint-disable-next-line no-unused-vars
      console.log('Goal-data:', data);
    }
    if (!data && !userId) {
      throw new Error('Something went wrong, when submitting Goal data to db');
    }
  };

  return (
    <AppContainer>
      <MobileNavigation hideProfile showSignOutButton title='Settings' />

      <TabBar tabList={settingsTabBarList} />

      <CardsContainer>
        {goal && (
          <GoalCard
            title='Goal'
            onSubmit={handleSubmit(submitFormContentHandler)}
            goal={goal}
            percentageList={percentageList}
            errors={errors}
            register={register}
          />
        )}
      </CardsContainer>
    </AppContainer>
  );
};

export default Mobile;
