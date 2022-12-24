import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddButton } from './AddButton';

export default {
  title: 'components/AddButton',
  component: AddButton,
  args: {
    color: 'primary',
  },
} as ComponentMeta<typeof AddButton>;
const Template: ComponentStory<typeof AddButton> = (args) => <AddButton {...args} />;

export const Default = Template.bind({});
