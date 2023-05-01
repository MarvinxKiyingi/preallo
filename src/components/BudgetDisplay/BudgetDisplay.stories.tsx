import { BudgetDisplay } from './BudgetDisplay';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BudgetDisplay> = {
  title: 'components/BudgetDisplay',
  component: BudgetDisplay,
  args: {
    days: 25,
    amount: 2.478,
    progressValue: 60,
    color: 'secondary',
  },
};

export default meta;
type Story = StoryObj<typeof BudgetDisplay>;

export const Primary: Story = {
  args: {},
};

export const WithProgress: Story = {
  args: {
    viewProgress: true,
  },
};

export const Secondary: Story = {
  args: {
    title: 'Budget',
    version: 'secondary',
  },
};
