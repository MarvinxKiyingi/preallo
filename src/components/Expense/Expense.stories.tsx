import type { Meta, StoryObj } from '@storybook/react';
import { Expense } from './Expense';

const meta: Meta<typeof Expense> = {
  title: 'components/Expense',
  component: Expense,
  args: {
    title: 'Netflix',
    amount: '-120',
    date: '20 March 2022',
  },
};

export default meta;
type Story = StoryObj<typeof Expense>;

export const Primary: Story = {
  args: {},
};

export const Stripped: Story = {
  args: {
    stripped: true,
    version: 'detail',
    category: 'Food',
    fullWidth: true,
  },
};
