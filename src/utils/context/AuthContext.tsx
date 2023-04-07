import React, { useContext, useMemo } from 'react';
import { IAuthContext } from '../../model/IAuthContext';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/clientApp';
import { IChildren } from '../../model/IChildren';
import { ISignUp } from '../../model/ISignUp';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Initiating context
export const AuthContext = React.createContext({} as IAuthContext);

// Exporting the context, to be used wherever
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: IChildren) => {
  const [currentUser, currentUserLoading] = useAuthState(auth);

  // Signing up a user to firebase
  const signUpUser = (props: ISignUp) => {
    createUserWithEmailAndPassword(auth, props.email, props.password)
      .then((user) => {})
      .catch((error) => {
        console.log('error:', {
          errorMessage: error.message,
          errorCode: error.code,
        });
      });
  };

  // Auth provider values
  const values = useMemo(
    () => ({ currentUser, currentUserLoading, signUpUser }),
    [currentUser, currentUserLoading]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
