import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  args: {
    color: 'primary',
    children: 'Lush Life',
    variant: 'contained',
    fullWidth: false,
    fullHeight: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    component: 'button',
  },
};

export const MonthPicker: Story = {
  args: {
    component: 'monthPicker',
  },
};
