import type { Meta, StoryObj } from '@storybook/react';
import { SignOutButton } from './SignOutButton';

const meta: Meta<typeof SignOutButton> = {
  title: 'components/SignOutButton',
  component: SignOutButton,
  args: {},
};

export default meta;
type Story = StoryObj<typeof SignOutButton>;

export const Primary: Story = {
  args: {},
};
