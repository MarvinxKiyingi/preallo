import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DashboardButton } from './DashboardButton';

export default {
  title: 'components/DashboardButton',
  component: DashboardButton,
  args: {},
} as ComponentMeta<typeof DashboardButton>;

const Template: ComponentStory<typeof DashboardButton> = (args) => <DashboardButton {...args} />;

export const Default = Template.bind({});
