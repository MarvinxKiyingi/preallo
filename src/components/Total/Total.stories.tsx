import type { Meta, StoryObj } from '@storybook/react';
import { Total } from './Total';

const meta: Meta<typeof Total> = {
  title: 'components/Total',
  component: Total,
  args: {
    total: 1000,
  },
};

export default meta;
type Story = StoryObj<typeof Total>;

export const Primary: Story = {
  args: {},
};
