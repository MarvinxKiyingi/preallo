import { FormContent, IModalContent } from './FormContent';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'components/Form/FormContent',
  component: FormContent,
  args: {
    variant: 'all',
    description:
      'I live my day as if it was the last Live my day as if there was no past Doin it all night, all summer Doin it the way I wanna',
    onDisagreeLabel: 'Cancel',
    categoryList: ['Category', 'Car', 'Transportation'],
    amountLabel: 'Amount',
    expenseLabel: 'Expense',
  },
};

export const Primary = (args: IModalContent) => <FormContent {...args} />;
Primary.args = {
  title: 'Add',
  add: true,
  onAgreeLabel: 'Add',
};

export const Amount = (args: IModalContent) => <FormContent {...args} />;
Amount.args = {
  title: 'Add',
  add: true,
  variant: 'amount',
  onAgreeLabel: 'Add',
};

export const Expense = (args: IModalContent) => <FormContent {...args} />;
Expense.args = {
  title: 'Add',
  add: true,
  variant: 'expense',
  onAgreeLabel: 'Add',
};

export const Edit = (args: IModalContent) => <FormContent {...args} />;
Edit.args = {
  title: 'Edit',
  variant: 'all',
  edit: true,
  onAgreeLabel: 'Edit',
};

export const Remove = (args: IModalContent) => <FormContent {...args} />;
Remove.args = {
  title: 'Remove',
  variant: 'all',
  remove: true,
  onAgreeLabel: 'Remove',
};
