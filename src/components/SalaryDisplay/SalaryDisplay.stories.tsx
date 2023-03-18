import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SalaryDisplay } from './SalaryDisplay';

export default {
  title: 'components/SalaryDisplay',
  component: SalaryDisplay,
  args: {
    title: 'Salary',
    amount: '20.000',
  },
} as ComponentMeta<typeof SalaryDisplay>;
const Template: ComponentStory<typeof SalaryDisplay> = (args) => <SalaryDisplay {...args} />;

export const Default = Template.bind({});
