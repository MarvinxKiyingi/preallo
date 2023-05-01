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
    value: 75,
    size: 230,
    thickness: 4,
  },
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Primary: Story = {
  args: {},
};
