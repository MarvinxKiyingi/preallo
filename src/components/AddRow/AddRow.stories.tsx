import { AddRow } from './AddRow';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AddRow> = {
  title: 'components/AddRow',
  component: AddRow,
  args: {
    title: 'Add',
    addIsVisible: true,
    version: 'secondary',
    filter: true,
    chipsList: [
      {
        id: 'Test 1',
        activated: true,
        label: 'Test First',
      },
      {
        id: 'Test 2',
        activated: false,
        label: 'Test Second',
      },
      {
        id: 'Test 3',
        activated: false,
        label: 'Test Third',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof AddRow>;

export const Primary: Story = {
  args: {},
};
