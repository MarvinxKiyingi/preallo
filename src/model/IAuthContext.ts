import { User } from 'firebase/auth';
import { ISignUp } from './ISignUp';
import { ISignIn } from './ISignIn';

export type IAuthContext = {
  currentUser: User | null | undefined;
  currentUserLoading: boolean;
  signUpUser: (props: ISignUp) => void;
  signInUser: (props: ISignIn) => void;
  signOutUser: () => void;
  googleSignIn: () => void;
};
