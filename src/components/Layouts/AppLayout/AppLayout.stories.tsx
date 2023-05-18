import type { Meta, StoryObj } from '@storybook/react';
import AppLayout from './AppLayout';

const meta: Meta<typeof AppLayout> = {
  title: 'components/Layouts/AppLayout',
  component: AppLayout,
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Primary: Story = {
  args: {},
};
