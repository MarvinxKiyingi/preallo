import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppBar } from './AppBar';

export default {
  title: 'components/AppBar',
  component: AppBar,
  args: {
    fontSizeMobile: '1.5rem',
    fontSizeDesktop: '2rem',
    dashBoardIsVisible: true,
    profileIsVisible: true,
    title: 'Dashboard',
    url: 'https://assets.teenvogue.com/photos/60883d3762144bb77196700d/1:1/w_595,h_595,c_limit/unnamed%20(8).jpg',
  },
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
