import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from './Icons';

const meta: Meta<typeof Icons> = {
  title: 'Components/Icons',
  component: Icons,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Primary: Story = {
  args: {},
};
