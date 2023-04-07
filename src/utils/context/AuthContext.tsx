import React, { useContext, useMemo } from 'react';
import { IAuthContext } from '../../model/IAuthContext';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/clientApp';
import { IChildren } from '../../model/IChildren';
import { ISignUp } from '../../model/ISignUp';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { ISignIn } from '../../model/ISignIn';

// Initiating context
export const AuthContext = React.createContext({} as IAuthContext);

// Exporting the context, to be used wherever
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: IChildren) => {
  const [currentUser, currentUserLoading] = useAuthState(auth);

  const googleProvider = new GoogleAuthProvider();
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

  // Signin in a user to firebase
  const signInUser = (props: ISignIn) => {
    signInWithEmailAndPassword(auth, props.email, props.password)
      .then(async (data) => {
        console.log('data:', data);
      })
      .catch((error) => {
        console.log('error:', {
          errorMessage: error.message,
          errorCode: error.code,
        });
      });
  };

  // Google sign in
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log('result:', result);
      })
      .catch((error) => {
        console.log('error:', {
          errorMessage: error.message,
          errorCode: error.code,
        });
      });
  };

  // Auth provider values
  const values = {
    currentUser,
    currentUserLoading,
    signUpUser,
    signInUser,
    googleSignIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
