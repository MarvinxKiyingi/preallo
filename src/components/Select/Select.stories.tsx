import { Select } from './Select';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/Select',
  component: Select,
  args: {
    list: ['2022', '2023', '2024'],
    defaultValue: '2022',
    hasBorder: true,
  },
} as ComponentMeta<typeof Select>;
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
export const Secondary = Template.bind({});
Default.args = {
  fullWidth: true,
};
Secondary.args = {
  fullWidth: true,
  textAlign: 'center',
  bgColor: 'white',
  boxShadow: true,
};
