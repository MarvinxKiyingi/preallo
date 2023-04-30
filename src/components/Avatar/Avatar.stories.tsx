import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'components/Avatar',
  component: Avatar,
  args: {
    url: 'https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2021/09/afd335d-billie-eilish-1024x819.jpg',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {},
};
