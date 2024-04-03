import { IAddMonthForm } from './IModalForm';

export type IAppContext = {
  createOrUpdateMonth: (data: IAddMonthForm) => void;
};
