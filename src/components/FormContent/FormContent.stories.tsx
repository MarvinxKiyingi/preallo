import { FormContent } from './FormContent';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FormContent> = {
  title: 'components/Form/FormContent',
  component: FormContent,
  args: {
    variant: 'all',
    description:
      'I live my day as if it was the last Live my day as if there was no past Doin it all night, all summer Doin it the way I wanna',
    onDisagreeLabel: 'Cancel',
    selectLabel: 'Select',
    selectList: ['Home', 'Car', 'Transportation'],
    amountLabel: 'Amount',
    expenseLabel: 'Expense',
  },
};

export default meta;
type Story = StoryObj<typeof FormContent>;

export const Primary: Story = {
  args: {
    title: 'Add',
    add: true,
    onAgreeLabel: 'Add',
  },
};

export const AddExpense: Story = {
  args: {
    variant: 'addExpense',
    title: 'Add',
    selectLabel: 'Category',
    selectList: [
      'Housing & Utilities',
      'Transportation',
      'Food & Dining',
      'Healthcare',
      'Debt Payments',
      'Entertainment',
      'Savings & Investments',
      'Personal Care & Clothing',
      'Insurance',
      'Education & Learning',
      'Gifts/Donations',
      'Miscellaneous',
    ],
    selectLabelTwo: 'Priority',
    selectListTwo: ['Need', 'Want', 'Save'],
    add: true,
    onAgreeLabel: 'Add',
  },
};

export const Amount: Story = {
  args: {
    title: 'Add',
    add: true,
    variant: 'amount',
    onAgreeLabel: 'Add',
  },
};

export const Expense: Story = {
  args: {
    title: 'Add',
    add: true,
    variant: 'expense',
    onAgreeLabel: 'Add',
  },
};
export const Select: Story = {
  args: {
    title: 'Add',
    add: true,
    variant: 'select',
    onAgreeLabel: 'Add',
  },
};

export const Edit: Story = {
  args: {
    title: 'Edit',
    variant: 'all',
    edit: true,
    onAgreeLabel: 'Edit',
  },
};

export const Remove: Story = {
  args: {
    title: 'Remove',
    variant: 'all',
    remove: true,
    onAgreeLabel: 'Remove',
  },
};
