import { BudgetDisplay } from './BudgetDisplay';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BudgetDisplay> = {
  title: 'components/BudgetDisplay',
  component: BudgetDisplay,
  args: {
    budget: 2478.0,
    color: 'secondary',
    hideProgressBar: false,
    salaryAsString: '15000',
    progressValue: 20,
    daysUntilPayday: 25,
    salary: 15000,
    needTotalValue: 7300,
    wantTotalValue: 3750,
    saveTotalValue: 3750,
  },
};

export default meta;
type Story = StoryObj<typeof BudgetDisplay>;

export const Primary: Story = {
  args: {},
};
