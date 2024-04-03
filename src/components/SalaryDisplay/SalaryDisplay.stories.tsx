import { SalaryDisplay } from './SalaryDisplay';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SalaryDisplay> = {
  title: 'components/SalaryDisplay',
  component: SalaryDisplay,
  args: {
    title: 'Salary',
    amount: 20.0,
  },
};

export default meta;
type Story = StoryObj<typeof SalaryDisplay>;

export const Primary: Story = {
  args: {},
};
