import { User } from 'firebase/auth';

export type IAuthContex = {
  currentUser: User | null | undefined;
  currentUserLoading: boolean;
};
