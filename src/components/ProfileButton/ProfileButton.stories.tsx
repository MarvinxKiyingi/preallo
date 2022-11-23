import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileButton } from './ProfileButton';

export default {
  title: 'components/ProfileButton',
  component: ProfileButton,
  args: {},
} as ComponentMeta<typeof ProfileButton>;
const Template: ComponentStory<typeof ProfileButton> = (args) => <ProfileButton {...args} />;

export const Default = Template.bind({});
