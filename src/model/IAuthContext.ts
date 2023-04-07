import { User } from 'firebase/auth';
import { ISignUp } from './ISignUp';

export type IAuthContext = {
  currentUser: User | null | undefined;
  currentUserLoading: boolean;
  signUpUser: (props: ISignUp) => void;
};
