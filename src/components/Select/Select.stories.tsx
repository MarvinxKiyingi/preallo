import { Select } from './Select';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'components/Select',
  component: Select,
  args: {
    list: ['2022', '2023', '2024'],
    defaultValue: '2022',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    fullWidth: true,
    hasBorder: true,
  },
};
export const Secondary: Story = {
  args: {
    boxShadow: true,
    fullWidth: true,
    hasBorder: false,
    textAlign: 'center',
    bgColor: 'white',
  },
};
