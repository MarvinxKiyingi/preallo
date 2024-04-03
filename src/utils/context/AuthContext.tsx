import React, { useContext } from 'react';
import { IAuthContext } from '../../model/IAuthContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/clientApp';
import { IChildren } from '../../model/IChildren';
import { ISignUp } from '../../model/ISignUp';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { ISignIn } from '../../model/ISignIn';
import { IPasswordReset } from '../../model/IPasswordReset';
import { transformFullName } from '../functions/transformFullName';

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
      .then((data) => {
        updateProfile(data.user, {
          displayName: transformFullName(props.firstName, props?.lastName),
        });
      })
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
      .then(async (data) => {})
      .catch((error) => {
        console.log('error:', {
          errorMessage: error.message,
          errorCode: error.code,
        });
      });
  };

  // Reset password with firebase
  const passwordReset = (props: IPasswordReset) => {
    sendPasswordResetEmail(auth, props.email)
      .then((data) => {})
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
      .then((data) => {})
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
    passwordReset,
    googleSignIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
