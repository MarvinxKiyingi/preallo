import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'components/CircularProgress',
  component: CircularProgress,
  argTypes: {
    progressTextColor: {
      options: [
        'common.white',
        'common.black',
        'inherit',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      control: { type: 'select' },
    },
  },
  args: {
    percentageValue: 75,
    size: 250,
    thickness: 4.5,
    salary: 15000,
    needTotalValue: 7300,
    wantTotalValue: 3750,
    saveTotalValue: 3750,
  },
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Percentage: Story = {
  args: {},
};
export const Indicator: Story = {
  args: {
    innerContent: 'indicators',
    salaryAsString: '15499,49',
  },
};
