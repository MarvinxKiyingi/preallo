/* eslint-disable no-unused-vars */
import { User } from 'firebase/auth';
import { ISignUp } from './ISignUp';
import { ISignIn } from './ISignIn';
import { IPasswordReset } from './IPasswordReset';

export type IAuthContext = {
  currentUser: User | null | undefined;
  currentUserLoading: boolean;
  signUpUser: (props: ISignUp) => void;
  signInUser: (props: ISignIn) => void;
  passwordReset: (props: IPasswordReset) => void;
  signOutUser: () => void;
  googleSignIn: () => void;
};
