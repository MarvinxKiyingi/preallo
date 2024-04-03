import { BudgetDisplay } from './BudgetDisplay';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BudgetDisplay> = {
  title: 'components/BudgetDisplay',
  component: BudgetDisplay,
  args: {
    budget: 2478.0,
    color: 'secondary',
    hideProgressBar: false,
    salary: 10000,
    progressValue: 20,
    daysUntilPayday: 25,
  },
};

export default meta;
type Story = StoryObj<typeof BudgetDisplay>;

export const Primary: Story = {
  args: {},
};
