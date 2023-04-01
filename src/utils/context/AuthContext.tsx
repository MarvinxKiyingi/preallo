import React, { useContext, useMemo } from 'react';
import { IAuthContext } from '../../model/IAuthContext';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/clientApp';
import { IChildren } from '../../model/IChildren';

// Initiating context
export const AuthContext = React.createContext({} as IAuthContext);

// Exporting the context, to be used wherever
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: IChildren) => {
  const [currentUser, currentUserLoading] = useAuthState(auth);

  // Auth provider values
  const values = useMemo(() => ({ currentUser, currentUserLoading }), [currentUser, currentUserLoading]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
