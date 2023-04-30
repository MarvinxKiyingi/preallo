import type { Meta, StoryObj } from '@storybook/react';
import SubscriptionCard from './SubscriptionCard';

const meta: Meta<typeof SubscriptionCard> = {
  title: 'components/SubscriptionCard',
  component: SubscriptionCard,
};

export default meta;
type Story = StoryObj<typeof SubscriptionCard>;

export const Primary: Story = {
  args: {},
};
