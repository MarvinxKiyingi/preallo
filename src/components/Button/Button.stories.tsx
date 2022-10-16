import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { Button as MuiButton } from '@mui/material';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <MuiButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  children: 'Lush Sign',
  variant: 'contained',
};
