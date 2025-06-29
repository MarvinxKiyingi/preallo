import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'components/StatusBadge',
  component: StatusBadge,
  args: {
    status: 'Pending',
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Primary: Story = {
  args: {
    status: 'Pending',
  },
};
