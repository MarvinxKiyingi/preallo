import { AddRow } from './AddRow';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/AddRow',
  component: AddRow,
  args: {
    title: 'Add',
    fontSizeMobile: '1.5rem',
    fontSizeDesktop: '2rem',
    size: 'small',
    color: 'primary',
    renewIsVisible: true,
    addIsVisible: true,
    filter: true,
    chipsList: [
      {
        id: 'Test 1',
        activated: true,
        chipLabel: 'Test First',
      },
      {
        id: 'Test 2',
        activated: false,
        chipLabel: 'Test Second',
      },
      {
        id: 'Test 3',
        activated: false,
        chipLabel: 'Test Third',
      },
    ],
  },
} as ComponentMeta<typeof AddRow>;
const Template: ComponentStory<typeof AddRow> = (args) => <AddRow {...args} />;

export const Default = Template.bind({});
