import { IModalForm } from './IModalForm';

export type IAppContext = {
  createOrUpdateMonth: (data: IModalForm) => void;
};
