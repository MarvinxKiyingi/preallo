import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icons } from './Icons';

export default {
  title: 'Components/Icons',
  component: Icons,
  args: {},
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;

export const Default = Template.bind({});
