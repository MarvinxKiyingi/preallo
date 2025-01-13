import React from 'react';
import AppContainer from '../../../Container/AppContainer';
import DesktopNavigation from '../../../Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../../../Container/ContentContainer';
import { useRouter } from 'next/router';
import { Grid, Typography, styled } from '@mui/material';
import RightGridContentContainer from '../../../Container/RightGridContentContainer';
import { useSession } from 'next-auth/react';
import { TabBar } from '@/components/TabBar/TabBar';
import { settingsTabBarList } from '@/utils/functions/settingsTabBarList';
import { GoalCard } from '@/components/GoalCard/GoalCard';
import { IGoalSettingsYupSchema } from '@/model/IYupSchema';
import { percentageList } from '@/utils/functions/percentageList';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IGoalSettingsForm } from './Mobile';
import { useDocument } from 'react-firebase-hooks/firestore';
import { IGoal } from '@/model/IGoal';
import { db } from '@/utils/firebase/clientApp';
import { doc } from 'firebase/firestore';

const RightContent = styled('div')(({ theme }) => ({
  gridColumn: '1/-1',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const TabBarWrapper = styled('div')(() => ({
  display: 'flex',
  height: '100%',
  maxHeight: '56px',
  alignItems: 'center',
}));

const Desktop = () => {
  const { data: session } = useSession();
  const userId = session?.userId;
  const [goalsSnapshot] = useDocument(doc(db, 'goal', `${session?.userId}`));
  const goal: IGoal = goalsSnapshot?.data() as IGoal;

  const router = useRouter();
  const currentPageSlugList = router.pathname.split('/').filter(Boolean);

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
      <>
        <DesktopNavigation highlightedValue={currentPageSlugList[0]} />
        <ContentContainer>
          <div className='titleContainer'>
            <Typography className='pageTitle'>Settings</Typography>
          </div>

          <RightGridContentContainer
            sx={{
              gridTemplateRows: 'unset !important',
            }}
          >
            <RightContent>
              <TabBarWrapper>
                <TabBar tabList={settingsTabBarList} />
              </TabBarWrapper>
              {goal && (
                <Grid gridRow={2}>
                  <GoalCard
                    title='Goal'
                    onSubmit={handleSubmit(submitFormContentHandler)}
                    goal={goal}
                    percentageList={percentageList}
                    errors={errors}
                    register={register}
                  />
                </Grid>
              )}
            </RightContent>
          </RightGridContentContainer>
        </ContentContainer>
      </>
    </AppContainer>
  );
};

export default Desktop;
