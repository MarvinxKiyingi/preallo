import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'components/Button',
  component: Button,
  args: {
    color: 'primary',
    children: 'Lush Life',
    variant: 'contained',
    fullWidth: false,
    fullHeight: false,
  },
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  component: 'button',
};

export const MonthPicker = Template.bind({});

MonthPicker.args = {
  component: 'monthPicker',
};
