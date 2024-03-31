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
    size: 230,
    thickness: 4,
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
