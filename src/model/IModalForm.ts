export type IModalForm = {
  amount: number;
  expense: string;
  selected: string;
  selectedTwo: string;
  needPercentage?: number;
  savePercentage?: number;
  wantPercentage?: number;
};

export type IAddMonthForm = {
  amount: number;
  selected: string;
  needPercentage?: number;
  savePercentage?: number;
  wantPercentage?: number;
};

export type IAddExpenseForm = {
  amount: number;
  expense: string;
  selected: string;
  selectedTwo: string;
};
