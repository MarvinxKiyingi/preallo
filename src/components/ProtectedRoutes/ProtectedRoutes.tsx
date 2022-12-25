import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { IChildren } from '../../model/IChildren';
import { useAuth } from '../../utils/context/AuthContext';

const ProtectedRoutes = ({ children }: IChildren) => {
  const { currentUser, currentUserLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/auth/signin');
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
