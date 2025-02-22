import type { Meta, StoryObj } from '@storybook/react';
import { TotalDisplay } from './TotalDisplay';

const meta: Meta<typeof TotalDisplay> = {
  title: 'components/TotalDisplay',
  component: TotalDisplay,
  args: {
    total: '1000,00',
  },
};

export default meta;
type Story = StoryObj<typeof TotalDisplay>;

export const Primary: Story = {
  args: {},
};
