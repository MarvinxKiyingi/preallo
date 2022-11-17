import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'components/Avatar',
  component: Avatar,
  args: { url: 'https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2021/09/afd335d-billie-eilish-1024x819.jpg' },
} as ComponentMeta<typeof Avatar>;
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
