import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TabBar } from './TabBar';

export default {
  title: 'components/TabBar',
  component: TabBar,
  args: {
    tabList: [
      { id: 'month', label: 'month', value: 'month' },
      { id: 'subscriptions', label: 'subscriptions', value: 'subscriptions' },
      { id: 'recurring', label: 'recurring', value: 'recurring' },
    ],
  },
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = (args) => <TabBar {...args} />;

export const Default = Template.bind({});
