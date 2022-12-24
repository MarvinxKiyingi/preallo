import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from './Logo';

export default {
  title: 'components/Logo',
  component: Logo,
  args: {
    color: 'inherit',
  },
} as ComponentMeta<typeof Logo>;
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
