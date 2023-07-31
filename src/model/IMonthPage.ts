import { Session } from 'next-auth';
import { IMonth } from './IMonth';

export type IMonthPage = IMonth & {
  session: Session;
};
