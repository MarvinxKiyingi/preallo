import type { Meta, StoryObj } from '@storybook/react';
import { ProfileButton } from './ProfileButton';

const meta: Meta<typeof ProfileButton> = {
  title: 'components/ProfileButton',
  component: ProfileButton,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ProfileButton>;

export const Primary: Story = {
  args: {},
};
