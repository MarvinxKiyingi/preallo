import { Input } from './Input';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/Input',
  component: Input,
  args: {
    label: 'Name',
    type: 'text',
    fullWidth: true,
  },
} as ComponentMeta<typeof Input>;
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {};
