import { IMonthPage } from './IMonthPage';
import {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
  SubmitHandler,
  Control,
} from 'react-hook-form';
import { IEditMonthForm } from './IModalForm';

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
> & {
  /** Callback function when a chip is clicked for filtering */
  // eslint-disable-next-line no-unused-vars
  onChipClick?: (chipId: string) => void;
  /** Current active filter */
  activeFilter?: string;
  /** List of available status filters */
  statusFilters?: Array<{ id: string; label: string; activated: boolean }>;
};

export type IEditExpense = {
  open: boolean;
  handleClose: () => void;
  handleSubmit: UseFormHandleSubmit<IEditMonthForm>;
  register: UseFormRegister<IEditMonthForm>;
  errors: FieldErrors<IEditMonthForm>;
  submitFormContentHandler: SubmitHandler<IEditMonthForm>;
  categoryList: string[];
  purposeList: string[];
  statusList: string[];
  expenseUuid: string;
  defaultAmount?: number;
  defaultExpense?: string;
  defaultCategory?: string;
  defaultPurpose?: string;
  defaultStatus?: string;
  control?: Control<IEditMonthForm>;
};
