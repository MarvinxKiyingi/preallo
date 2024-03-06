import { BudgetDisplay } from './BudgetDisplay';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BudgetDisplay> = {
  title: 'components/BudgetDisplay',
  component: BudgetDisplay,
  args: {
    amount: 2.478,
  },
};

export default meta;
type Story = StoryObj<typeof BudgetDisplay>;

export const Primary: Story = {
  args: {},
};

export const WithProgress: Story = {
  args: {
    progressValue: 60,
    viewProgress: true,
    days: 25,
  },
};

export const Secondary: Story = {
  args: {
    title: 'Budget',
    version: 'secondary',
  },
};
