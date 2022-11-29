import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IncomeDisplay } from './IncomeDisplay';

export default {
  title: 'components/IncomeDisplay',
  component: IncomeDisplay,
  args: {
    income: '3,578',
    cardType: 'visa',
    hasBgColor: true,
    color: 'error',
  },
} as ComponentMeta<typeof IncomeDisplay>;
const Template: ComponentStory<typeof IncomeDisplay> = (args) => <IncomeDisplay {...args} />;

export const Default = Template.bind({});
