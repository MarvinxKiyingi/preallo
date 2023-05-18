import type { Meta, StoryObj } from '@storybook/react';
import { TabBar } from './TabBar';

const meta: Meta<typeof TabBar> = {
  title: 'components/TabBar',
  component: TabBar,
  args: {
    tabList: [
      { id: 'month', label: 'month', value: 'month' },
      { id: 'subscriptions', label: 'subscriptions', value: 'subscriptions' },
      { id: 'recurring', label: 'recurring', value: 'recurring' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof TabBar>;

export const Primary: Story = {
  args: {},
};
