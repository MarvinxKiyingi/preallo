import { Select } from './Select';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'components/Select',
  component: Select,
  args: {
    list: ['2022', '2023', '2024'],
    defaultValue: '2022',
    hasBorder: true,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    fullWidth: true,
  },
};
export const Secondary: Story = {
  args: {
    fullWidth: true,
    textAlign: 'center',
    bgColor: 'white',
    boxShadow: true,
  },
};
