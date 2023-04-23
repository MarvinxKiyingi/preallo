import { AppBar, IAppBar } from './AppBar';
import { IAvatar } from '../Avatar/Avatar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'components/AppBar',
  component: AppBar,
  args: {
    fontSizeMobile: '1.5rem',
    fontSizeDesktop: '2rem',
    hideDashBoard: false,
    hideProfile: false,
    title: 'Dashboard',
    url: 'https://assets.teenvogue.com/photos/60883d3762144bb77196700d/1:1/w_595,h_595,c_limit/unnamed%20(8).jpg',
  },
};

export const Primary = (args: IAppBar & IAvatar) => <AppBar {...args} />;
Primary.args = {};

export const HideDashBar = (args: IAppBar & IAvatar) => <AppBar {...args} />;
HideDashBar.args = {
  hideDashBoard: true,
};

export const HideProfile = (args: IAppBar & IAvatar) => <AppBar {...args} />;
HideProfile.args = {
  hideProfile: true,
};
