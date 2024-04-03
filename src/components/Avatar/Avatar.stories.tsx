import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'components/Avatar',
  component: Avatar,
  args: {
    src: 'https://assets.teenvogue.com/photos/60883d3762144bb77196700d/1:1/w_595,h_595,c_limit/unnamed%20(8).jpg',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {},
};
