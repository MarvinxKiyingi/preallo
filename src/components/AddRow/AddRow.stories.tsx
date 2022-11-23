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
    color: 'inherit',
    renewIsVisible: true,
    addIsVisible: true,
  },
} as ComponentMeta<typeof AddRow>;
const Template: ComponentStory<typeof AddRow> = (args) => <AddRow {...args} />;

export const Default = Template.bind({});
