import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Expense } from './Expense';

export default {
  title: 'components/Expense',
  component: Expense,
  args: {
    title: 'Netflix',
    amount: '- 120',
    date: '20 March 2022',
  },
} as ComponentMeta<typeof Expense>;
const Template: ComponentStory<typeof Expense> = (args) => <Expense {...args} />;

export const Default = Template.bind({});
