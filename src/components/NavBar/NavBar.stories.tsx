import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavBar } from './NavBar';

export default {
  title: 'components/Navbar',
  component: NavBar,
  args: {
    fontSizeMobile: '1.5rem',
    fontSizeDesktop: '2rem',
    dashBoardIsVisible: true,
    profileIsVisible: true,
    title: 'Dashboard',
    useName: '👋 Arrow Fox',
    url: 'https://assets.teenvogue.com/photos/60883d3762144bb77196700d/1:1/w_595,h_595,c_limit/unnamed%20(8).jpg',
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
