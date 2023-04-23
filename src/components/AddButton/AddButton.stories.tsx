import { AddButton, IIconButton } from './AddButton';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'components/AddButton',
  component: AddButton,
};

export const Primary = (args: IIconButton) => <AddButton {...args} />;
Primary.args = {
  color: 'primary',
  version: 'primary',
};

export const Secondary = (args: IIconButton) => <AddButton {...args} />;
Secondary.args = {
  version: 'secondary',
};
