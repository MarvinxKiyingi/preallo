import type { Meta, StoryObj } from '@storybook/react';
import { MobileNavigation } from './MobileNavigation';

const meta: Meta<typeof MobileNavigation> = {
  title: 'components/Navigation/MobileNavigation',
  component: MobileNavigation,
  args: {
    title: 'Dashboard',
    src: 'https://assets.teenvogue.com/photos/60883d3762144bb77196700d/1:1/w_595,h_595,c_limit/unnamed%20(8).jpg',
  },
};

export default meta;
type Story = StoryObj<typeof MobileNavigation>;

export const Primary: Story = {
  args: {},
};
export const HideDashBar: Story = {
  args: {
    hideDashBoard: true,
  },
};
export const HideProfile: Story = {
  args: {
    hideProfile: true,
  },
};
