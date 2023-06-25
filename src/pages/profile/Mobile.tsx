import React from 'react';
import AppContainer from '../../components/Container/AppContainer';
import { MobileNavigation } from '../../components/Navigation/MobileNavigation/MobileNavigation';
import { useAuth } from '../../utils/context/AuthContext';

const Mobile = () => {
  const { currentUser } = useAuth();

  return (
    <AppContainer>
      <MobileNavigation
        hideProfile
        title='Profile'
        src={currentUser?.photoURL ? currentUser.photoURL : undefined}
      />
    </AppContainer>
  );
};

export default Mobile;
