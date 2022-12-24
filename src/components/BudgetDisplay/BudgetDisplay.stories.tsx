import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BudgetDisplay } from './BudgetDisplay';

export default {
  title: 'components/BudgetDisplay',
  component: BudgetDisplay,
  args: {
    variant: 'determinate',
  },
} as ComponentMeta<typeof BudgetDisplay>;
const Template: ComponentStory<typeof BudgetDisplay> = (args) => <BudgetDisplay {...args} />;

export const Default = Template.bind({});

export const WithProgress = Template.bind({});
WithProgress.args = {
  viewProgress: true,
  value: 60,
};
