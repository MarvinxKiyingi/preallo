import React from 'react';
import { NextShield } from 'next-shield';
import { useSession } from 'next-auth/react';
import { IChildren } from '../model/IChildren';
import { useRouter } from 'next/router';

const ProtectedRoutes = ({ children }: IChildren) => {
  const router = useRouter();
  const { status } = useSession();
  const authenticated = status === 'authenticated';
  const loading = status === 'loading';
  const isPrivate = !router.pathname.includes('/auth/');

  return (
    <NextShield
      isAuth={authenticated}
      isLoading={loading}
      router={router}
      privateRoutes={[`${isPrivate ? router.pathname : null}`]}
      publicRoutes={['/auth/signup', '/auth/signin', '/auth/resetpassword']}
      accessRoute='/'
      loginRoute='/auth/signin'
      LoadingComponent={<p>Loading...</p>}
    >
      {children}
    </NextShield>
  );
};

export default ProtectedRoutes;
