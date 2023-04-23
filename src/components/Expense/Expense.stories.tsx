import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Expense, IExpenseProps } from './Expense';

export default {
  title: 'components/Expense',
  component: Expense,
  args: {
    title: 'Netflix',
    amount: '-120',
    date: '20 March 2022',
  },
};

export const Primary = (args: IExpenseProps) => <Expense {...args} />;
Primary.args = {};

export const Stripped = (args: IExpenseProps) => <Expense {...args} />;
Stripped.args = { stripped: true };
