import type { Meta, StoryObj } from '@storybook/react';
import DesktopNavigation from './DesktopNavigation';

const meta: Meta<typeof DesktopNavigation> = {
  title: 'components/Navigation/DesktopNavigation',
  component: DesktopNavigation,
  args: {},
};

export default meta;
type Story = StoryObj<typeof DesktopNavigation>;

export const Primary: Story = {
  args: {},
};
