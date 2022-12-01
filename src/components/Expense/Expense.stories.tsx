import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Expense } from './Expense';

export default {
  title: 'components/Expense',
  component: Expense,
  args: {},
} as ComponentMeta<typeof Expense>;
const Template: ComponentStory<typeof Expense> = (args) => <Expense {...args} />;

export const Default = {};
