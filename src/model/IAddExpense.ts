import { IMonthPage } from './IMonthPage';

export type IAddExpense = Pick<
  IMonthPage,
  | 'open'
  | 'handleOpen'
  | 'handleClose'
  | 'handleSubmit'
  | 'register'
  | 'errors'
  | 'submitFormContentHandler'
  | 'categoryList'
  | 'purposeList'
  | 'statusList'
>;
