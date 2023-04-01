import { User } from 'firebase/auth';

export type IAuthContext = {
  currentUser: User | null | undefined;
  currentUserLoading: boolean;
};
