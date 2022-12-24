import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RenewButton } from './RenewButton';

export default {
  title: 'components/RenewButton',
  component: RenewButton,
  args: {
    color: 'primary',
  },
} as ComponentMeta<typeof RenewButton>;
const Template: ComponentStory<typeof RenewButton> = (args) => <RenewButton {...args} />;

export const Default = Template.bind({});
