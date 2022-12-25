import React, { useContext, useMemo } from 'react';
import { IAuthContex } from '../../model/IAuthContex';
import { IAuthContexProvider } from '../../model/IAuthContexProvider';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/clientApp';

// Initiating context
export const AuthContex = React.createContext({} as IAuthContex);

// Exporting the context, to be used wherever
export const useAuth = () => useContext(AuthContex);

export const AuthContexProvider = ({ children }: IAuthContexProvider) => {
  const [currentUser, currentUserLoading] = useAuthState(auth);

  // Auth provider values
  const values = useMemo(() => ({ currentUser, currentUserLoading }), [currentUser, currentUserLoading]);

  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};
