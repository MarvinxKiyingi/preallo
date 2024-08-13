import React, { useContext } from 'react';
import { IAuthContext } from '../../model/IAuthContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, storage } from '../firebase/clientApp';
import { IChildren } from '../../model/IChildren';
import { ISignUp } from '../../model/ISignUp';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { ISignIn } from '../../model/ISignIn';
import { IPasswordReset } from '../../model/IPasswordReset';
import { transformFullName } from '../functions/transformFullName';
import { IUser } from '@/model/IUser';
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { deleteObject, ref, uploadBytes } from 'firebase/storage';
import { useRouter } from 'next/navigation';

// Initiating context
export const AuthContext = React.createContext({} as IAuthContext);

// Exporting the context, to be used wherever
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: IChildren) => {
  const [currentUser, currentUserLoading] = useAuthState(auth);

  const router = useRouter();
  // firebase Storage ref
  const storageRef = ref(storage, `profileImages/${currentUser?.uid}`);

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

  const updateUserProfile = (props: IUser) => {
    const file = props?.profileImg?.[0];
    console.log('file', file);
    if (currentUser) {
      try {
        updateDoc(doc(db, 'users', currentUser.uid), {
          name: props.name,
        });
        // Update/upload profileImage
        if (props?.profileImg?.length === 1) {
          uploadBytes(storageRef, file);
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  const deleteUserAndProfile = async () => {
    if (currentUser) {
      try {
        await deleteDoc(doc(db, 'users', currentUser.uid));
        await deleteDoc(doc(db, 'months', currentUser.uid));
        await deleteDoc(doc(db, 'years', currentUser.uid));
        await deleteDoc(doc(db, 'expenses', currentUser.uid));
      } catch (error) {
        alert(error);
      }

      if (storageRef) {
        try {
          deleteObject(storageRef);
        } catch (error) {
          alert(error);
        }
      }

      try {
        await deleteUser(currentUser);
      } catch (error) {
        alert(error);
      }
      router.push('/signin');
    }
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
    updateUserProfile,
    deleteUserAndProfile,
    passwordReset,
    googleSignIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
