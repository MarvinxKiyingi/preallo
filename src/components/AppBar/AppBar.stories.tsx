import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from './AppBar';

const meta: Meta<typeof AppBar> = {
  title: 'components/AppBar',
  component: AppBar,
  args: {
    fontSizeMobile: '1.5rem',
    fontSizeDesktop: '2rem',
    hideDashBoard: false,
    hideProfile: false,
    title: 'Dashboard',
    url: 'https://assets.teenvogue.com/photos/60883d3762144bb77196700d/1:1/w_595,h_595,c_limit/unnamed%20(8).jpg',
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

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
