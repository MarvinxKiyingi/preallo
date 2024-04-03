import type { Meta, StoryObj } from '@storybook/react';
import { DashboardButton } from './DashboardButton';

const meta: Meta<typeof DashboardButton> = {
  title: 'components/DashboardButton',
  component: DashboardButton,
  args: {},
};

export default meta;
type Story = StoryObj<typeof DashboardButton>;

export const Primary: Story = {
  args: {},
};
