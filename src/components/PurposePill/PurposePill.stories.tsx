import type { Meta, StoryObj } from '@storybook/react';
import { PurposePill } from './PurposePill';

const meta: Meta<typeof PurposePill> = {
  title: 'components/PurposePill',
  component: PurposePill,
  args: {
    className: 'need',
    text: 'Need',
  },
};

export default meta;
type Story = StoryObj<typeof PurposePill>;

export const Primary: Story = {
  args: {},
};
