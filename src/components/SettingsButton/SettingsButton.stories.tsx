import type { Meta, StoryObj } from '@storybook/react';
import { SettingsButton } from './SettingsButton';

const meta: Meta<typeof SettingsButton> = {
  title: 'components/SettingsButton',
  component: SettingsButton,
  args: {},
};

export default meta;
type Story = StoryObj<typeof SettingsButton>;

export const Primary: Story = {
  args: {},
};
