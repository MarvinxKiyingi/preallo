import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ModalContent } from './ModalContent';

export default {
  title: 'components/Modal/ModalContent',
  component: ModalContent,
  args: {
    title: 'Add',
    description:
      'I live my day as if it was the last Live my day as if there was no past Doin it all night, all summer Doin it the way I wanna',
    onAgreeLabel: 'Action',
    onDisagreeLabel: 'Cancel',
    categoryList: ['Category', 'Car', 'Transportation'],
    amountLabel: 'Amount',
    expenseLabel: 'Expense',
  },
} as ComponentMeta<typeof ModalContent>;

const Template: ComponentStory<typeof ModalContent> = (args) => <ModalContent {...args} />;

export const Default = Template.bind({});
export const Remove = Template.bind({});
Remove.args = {
  remove: true,
};
