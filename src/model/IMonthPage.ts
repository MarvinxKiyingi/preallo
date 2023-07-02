import { User } from '@firebase/auth';
import { IMonth } from './IMonth';

export type IMonthPage = IMonth & {
  currentUser: User | null | undefined;
};
