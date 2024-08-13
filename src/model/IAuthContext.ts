/* eslint-disable no-unused-vars */
import { User } from 'firebase/auth';
import { ISignUp } from './ISignUp';
import { ISignIn } from './ISignIn';
import { IPasswordReset } from './IPasswordReset';
import { IUser } from './IUser';

export type IAuthContext = {
  currentUser: User | null | undefined;
  currentUserLoading: boolean;
  signUpUser: (props: ISignUp) => void;
  signInUser: (props: ISignIn) => void;
  updateUserProfile: (props: IUser) => void;
  deleteUserAndProfile: () => Promise<void>;
  passwordReset: (props: IPasswordReset) => void;
  googleSignIn: () => void;
};
