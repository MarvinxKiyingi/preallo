import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BudgetDisplay } from './BudgetDisplay';

export default {
  title: 'components/BudgetDisplay',
  component: BudgetDisplay,
  args: {
    days: 25,
    amount: 2.478,
    variant: 'determinate',
    progressValue: 60,
    color: 'secondary',
    centerWithTitle: false,
  },
} as ComponentMeta<typeof BudgetDisplay>;
const Template: ComponentStory<typeof BudgetDisplay> = (args) => <BudgetDisplay {...args} />;

export const Default = Template.bind({});

export const WithProgress = Template.bind({});
WithProgress.args = {
  viewProgress: true,
  progressValue: 60,
};
export const CenteredWithTitle = Template.bind({});
CenteredWithTitle.args = {
  viewProgress: false,
  centerWithTitle: true,
};
