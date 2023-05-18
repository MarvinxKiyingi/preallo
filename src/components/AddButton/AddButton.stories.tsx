import type { Meta, StoryObj } from '@storybook/react';
import { AddButton } from './AddButton';

const meta: Meta<typeof AddButton> = {
  title: 'components/AddButton',
  component: AddButton,
};

export default meta;
type Story = StoryObj<typeof AddButton>;

export const Primary: Story = {
  args: {
    color: 'primary',
    version: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    version: 'secondary',
  },
};
