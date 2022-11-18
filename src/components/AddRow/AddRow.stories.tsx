import { AddRow } from './AddRow';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/AddRow',
  component: AddRow,
  args: { title: 'Add', fontSizeMobile: '2rem', fontSizeDesktop: '2.5rem', size: 'small', color: 'inherit' },
} as ComponentMeta<typeof AddRow>;
const Template: ComponentStory<typeof AddRow> = (args) => <AddRow {...args} />;

export const Default = Template.bind({});
