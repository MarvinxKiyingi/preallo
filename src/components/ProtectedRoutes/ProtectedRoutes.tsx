import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../utils/context/AuthContext';

type IProtectedRoutes = {
  children: React.ReactNode;
};
const ProtectedRoutes = ({ children }: IProtectedRoutes) => {
  const { currentUser, currentUserLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/signin');
    }
  }, [router, currentUser]);

  return (
    <>
      {currentUser && children}
      {currentUserLoading && <div>Loading...</div>}
    </>
  );
};

export default ProtectedRoutes;
